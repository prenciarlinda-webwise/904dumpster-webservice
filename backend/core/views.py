"""
API views for handling contact forms and marketing metrics.
"""

import json
import logging
from django.http import JsonResponse
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django_ratelimit.decorators import ratelimit

from .services import EmailService, RecaptchaService
from .validators import ContactFormValidator, MarketingEventValidator

logger = logging.getLogger(__name__)


def get_client_ip(request):
    """Extract client IP from request, handling proxies."""
    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
    if x_forwarded_for:
        return x_forwarded_for.split(',')[0].strip()
    return request.META.get('REMOTE_ADDR', '')


@method_decorator(csrf_exempt, name='dispatch')
class ContactFormView(View):
    """
    API endpoint for contact form submissions.

    POST /api/contact/
    {
        "name": "John Doe",
        "email": "john@example.com",
        "phone": "904-555-1234",
        "message": "I need a dumpster rental...",
        "recaptcha_token": "..."
    }
    """

    @method_decorator(ratelimit(key='ip', rate='5/m', method='POST', block=True))
    def post(self, request):
        try:
            # Parse JSON body
            try:
                data = json.loads(request.body)
            except json.JSONDecodeError:
                return JsonResponse(
                    {'success': False, 'error': 'Invalid JSON'},
                    status=400
                )

            # Verify reCAPTCHA
            recaptcha_token = data.get('recaptcha_token', '')
            is_valid, score = RecaptchaService.verify(recaptcha_token, 'contact')

            if not is_valid:
                logger.warning(
                    f"reCAPTCHA failed for contact form from IP: {get_client_ip(request)}"
                )
                return JsonResponse(
                    {'success': False, 'error': 'Security verification failed'},
                    status=403
                )

            # Validate form data
            validator = ContactFormValidator(data)
            if not validator.is_valid():
                return JsonResponse(
                    {'success': False, 'errors': validator.errors},
                    status=400
                )

            cleaned_data = validator.cleaned_data

            # Send notification email to team
            email_sent = EmailService.send_contact_notification(
                name=cleaned_data['name'],
                email=cleaned_data['email'],
                phone=cleaned_data['phone'],
                message=cleaned_data['message'],
                form_type='contact'
            )

            if not email_sent:
                logger.error("Failed to send contact notification email")
                return JsonResponse(
                    {'success': False, 'error': 'Failed to process your request'},
                    status=500
                )

            # Send confirmation to customer
            EmailService.send_customer_confirmation(
                customer_email=cleaned_data['email'],
                customer_name=cleaned_data['name']
            )

            # Send marketing notification
            EmailService.send_marketing_notification(
                event_type='lead',
                data={
                    'source': 'contact_form',
                    'name': cleaned_data['name'],
                    'email': cleaned_data['email'],
                    'recaptcha_score': score
                }
            )

            return JsonResponse({
                'success': True,
                'message': 'Thank you! We will contact you soon.'
            })

        except Exception as e:
            logger.exception(f"Contact form error: {e}")
            return JsonResponse(
                {'success': False, 'error': 'An unexpected error occurred'},
                status=500
            )

    def options(self, request):
        """Handle CORS preflight requests."""
        return JsonResponse({})


@method_decorator(csrf_exempt, name='dispatch')
class QuoteFormView(View):
    """
    API endpoint for quote request form submissions.

    POST /api/quote/
    {
        "name": "John Doe",
        "email": "john@example.com",
        "phone": "904-555-1234",
        "address": "123 Main St, Jacksonville, FL",
        "dumpster_size": "20 yard",
        "rental_duration": "7 days",
        "project_type": "home renovation",
        "message": "Additional details...",
        "recaptcha_token": "..."
    }
    """

    @method_decorator(ratelimit(key='ip', rate='5/m', method='POST', block=True))
    def post(self, request):
        try:
            # Parse JSON body
            try:
                data = json.loads(request.body)
            except json.JSONDecodeError:
                return JsonResponse(
                    {'success': False, 'error': 'Invalid JSON'},
                    status=400
                )

            # Verify reCAPTCHA
            recaptcha_token = data.get('recaptcha_token', '')
            is_valid, score = RecaptchaService.verify(recaptcha_token, 'quote')

            if not is_valid:
                logger.warning(
                    f"reCAPTCHA failed for quote form from IP: {get_client_ip(request)}"
                )
                return JsonResponse(
                    {'success': False, 'error': 'Security verification failed'},
                    status=403
                )

            # Validate form data
            validator = ContactFormValidator(data, require_address=True)
            if not validator.is_valid():
                return JsonResponse(
                    {'success': False, 'errors': validator.errors},
                    status=400
                )

            cleaned_data = validator.cleaned_data

            # Build message with quote details
            quote_details = f"""
Address: {cleaned_data.get('address', 'Not provided')}
Dumpster Size: {data.get('dumpster_size', 'Not specified')}
Rental Duration: {data.get('rental_duration', 'Not specified')}
Project Type: {data.get('project_type', 'Not specified')}

Additional Message:
{cleaned_data['message']}
            """.strip()

            # Send notification email to team
            email_sent = EmailService.send_contact_notification(
                name=cleaned_data['name'],
                email=cleaned_data['email'],
                phone=cleaned_data['phone'],
                message=quote_details,
                form_type='quote'
            )

            if not email_sent:
                logger.error("Failed to send quote notification email")
                return JsonResponse(
                    {'success': False, 'error': 'Failed to process your request'},
                    status=500
                )

            # Send confirmation to customer
            EmailService.send_customer_confirmation(
                customer_email=cleaned_data['email'],
                customer_name=cleaned_data['name']
            )

            # Send marketing notification
            EmailService.send_marketing_notification(
                event_type='lead',
                data={
                    'source': 'quote_form',
                    'name': cleaned_data['name'],
                    'email': cleaned_data['email'],
                    'dumpster_size': data.get('dumpster_size', ''),
                    'recaptcha_score': score
                }
            )

            return JsonResponse({
                'success': True,
                'message': 'Thank you! We will send you a quote soon.'
            })

        except Exception as e:
            logger.exception(f"Quote form error: {e}")
            return JsonResponse(
                {'success': False, 'error': 'An unexpected error occurred'},
                status=500
            )

    def options(self, request):
        """Handle CORS preflight requests."""
        return JsonResponse({})


@method_decorator(csrf_exempt, name='dispatch')
class MarketingEventView(View):
    """
    API endpoint for tracking marketing events.

    POST /api/marketing/event/
    {
        "event_type": "page_view|click|form_start",
        "page": "/services",
        "element": "cta_button",
        "metadata": {...}
    }
    """

    @method_decorator(ratelimit(key='ip', rate='30/m', method='POST', block=True))
    def post(self, request):
        try:
            # Parse JSON body
            try:
                data = json.loads(request.body)
            except json.JSONDecodeError:
                return JsonResponse(
                    {'success': False, 'error': 'Invalid JSON'},
                    status=400
                )

            # Validate event data
            validator = MarketingEventValidator(data)
            if not validator.is_valid():
                return JsonResponse(
                    {'success': False, 'errors': validator.errors},
                    status=400
                )

            cleaned_data = validator.cleaned_data

            # Send marketing notification for significant events
            significant_events = ['form_start', 'click_cta', 'click_phone']
            if cleaned_data['event_type'] in significant_events:
                EmailService.send_marketing_notification(
                    event_type=cleaned_data['event_type'],
                    data={
                        'page': cleaned_data.get('page', ''),
                        'element': cleaned_data.get('element', ''),
                        'ip': get_client_ip(request),
                        **cleaned_data.get('metadata', {})
                    }
                )

            return JsonResponse({'success': True})

        except Exception as e:
            logger.exception(f"Marketing event error: {e}")
            return JsonResponse(
                {'success': False, 'error': 'An unexpected error occurred'},
                status=500
            )

    def options(self, request):
        """Handle CORS preflight requests."""
        return JsonResponse({})


class HealthCheckView(View):
    """Health check endpoint for monitoring."""

    def get(self, request):
        return JsonResponse({
            'status': 'healthy',
            'service': '904 Dumpster API'
        })
