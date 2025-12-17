"""
Email and reCAPTCHA services for the 904 Dumpster website.
"""

import logging
import requests
from django.conf import settings
from django.core.mail import send_mail, EmailMultiAlternatives
from django.template.loader import render_to_string
from django.utils.html import strip_tags

logger = logging.getLogger(__name__)


class RecaptchaService:
    """Service for verifying Google reCAPTCHA v3 tokens."""

    VERIFY_URL = 'https://www.google.com/recaptcha/api/siteverify'

    @classmethod
    def verify(cls, token: str, expected_action: str = None) -> tuple[bool, float]:
        """
        Verify a reCAPTCHA token.

        Args:
            token: The reCAPTCHA token from the frontend
            expected_action: The expected action name (optional)

        Returns:
            Tuple of (is_valid, score)
        """
        if not token:
            logger.warning("reCAPTCHA token is empty")
            return False, 0.0

        if not settings.RECAPTCHA_SECRET_KEY:
            logger.warning("reCAPTCHA secret key not configured")
            # In development, allow requests without reCAPTCHA
            if settings.DEBUG:
                return True, 1.0
            return False, 0.0

        try:
            response = requests.post(
                cls.VERIFY_URL,
                data={
                    'secret': settings.RECAPTCHA_SECRET_KEY,
                    'response': token,
                },
                timeout=10
            )
            result = response.json()

            success = result.get('success', False)
            score = result.get('score', 0.0)

            if not success:
                error_codes = result.get('error-codes', [])
                logger.warning(f"reCAPTCHA verification failed: {error_codes}")
                return False, 0.0

            # Check action if specified
            if expected_action and result.get('action') != expected_action:
                logger.warning(
                    f"reCAPTCHA action mismatch: expected {expected_action}, "
                    f"got {result.get('action')}"
                )
                return False, score

            # Check score threshold
            if score < settings.RECAPTCHA_SCORE_THRESHOLD:
                logger.warning(
                    f"reCAPTCHA score {score} below threshold "
                    f"{settings.RECAPTCHA_SCORE_THRESHOLD}"
                )
                return False, score

            return True, score

        except requests.RequestException as e:
            logger.error(f"reCAPTCHA verification request failed: {e}")
            return False, 0.0
        except (ValueError, KeyError) as e:
            logger.error(f"reCAPTCHA response parsing failed: {e}")
            return False, 0.0


class EmailService:
    """Service for sending email notifications."""

    @classmethod
    def send_contact_notification(
        cls,
        name: str,
        email: str,
        phone: str,
        message: str,
        form_type: str = 'contact'
    ) -> bool:
        """
        Send contact form notification to the team.

        Args:
            name: Customer name
            email: Customer email
            phone: Customer phone
            message: Customer message
            form_type: Type of form ('contact' or 'quote')

        Returns:
            True if email sent successfully, False otherwise
        """
        subject = f"New {form_type.title()} Request from {name} - 904 Dumpster"

        html_content = f"""
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body {{ font-family: Arial, sans-serif; line-height: 1.6; color: #333; }}
                .container {{ max-width: 600px; margin: 0 auto; padding: 20px; }}
                .header {{ background-color: #2563eb; color: white; padding: 20px; text-align: center; }}
                .content {{ padding: 20px; background-color: #f9fafb; }}
                .field {{ margin-bottom: 15px; }}
                .label {{ font-weight: bold; color: #4b5563; }}
                .value {{ margin-top: 5px; padding: 10px; background-color: white; border-radius: 4px; }}
                .footer {{ padding: 20px; text-align: center; font-size: 12px; color: #6b7280; }}
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>New {form_type.title()} Request</h1>
                </div>
                <div class="content">
                    <div class="field">
                        <div class="label">Name:</div>
                        <div class="value">{name}</div>
                    </div>
                    <div class="field">
                        <div class="label">Email:</div>
                        <div class="value"><a href="mailto:{email}">{email}</a></div>
                    </div>
                    <div class="field">
                        <div class="label">Phone:</div>
                        <div class="value"><a href="tel:{phone}">{phone}</a></div>
                    </div>
                    <div class="field">
                        <div class="label">Message:</div>
                        <div class="value">{message}</div>
                    </div>
                </div>
                <div class="footer">
                    <p>This email was sent from the 904 Dumpster website contact form.</p>
                </div>
            </div>
        </body>
        </html>
        """

        plain_content = f"""
New {form_type.title()} Request - 904 Dumpster

Name: {name}
Email: {email}
Phone: {phone}
Message: {message}

---
This email was sent from the 904 Dumpster website contact form.
        """

        try:
            recipients = settings.NOTIFICATION_EMAILS
            if not recipients:
                logger.error("No notification email recipients configured")
                return False

            email_message = EmailMultiAlternatives(
                subject=subject,
                body=plain_content,
                from_email=settings.DEFAULT_FROM_EMAIL,
                to=recipients,
                reply_to=[email]  # Allow replying directly to customer
            )
            email_message.attach_alternative(html_content, "text/html")
            email_message.send(fail_silently=False)

            logger.info(f"Contact notification sent for {email}")
            return True

        except Exception as e:
            logger.error(f"Failed to send contact notification: {e}")
            return False

    @classmethod
    def send_marketing_notification(
        cls,
        event_type: str,
        data: dict
    ) -> bool:
        """
        Send marketing metrics notification.

        Args:
            event_type: Type of event ('lead', 'page_view', 'click', etc.)
            data: Event data

        Returns:
            True if email sent successfully, False otherwise
        """
        if not settings.MARKETING_EMAIL:
            logger.warning("Marketing email not configured")
            return False

        subject = f"Marketing Event: {event_type.title()} - 904 Dumpster"

        # Format data for email
        data_lines = '\n'.join([f"  {k}: {v}" for k, v in data.items()])

        plain_content = f"""
Marketing Event Notification - 904 Dumpster

Event Type: {event_type}
Data:
{data_lines}

---
Automated marketing notification.
        """

        try:
            send_mail(
                subject=subject,
                message=plain_content,
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[settings.MARKETING_EMAIL],
                fail_silently=False
            )

            logger.info(f"Marketing notification sent for event: {event_type}")
            return True

        except Exception as e:
            logger.error(f"Failed to send marketing notification: {e}")
            return False

    @classmethod
    def send_customer_confirmation(
        cls,
        customer_email: str,
        customer_name: str
    ) -> bool:
        """
        Send confirmation email to customer after form submission.

        Args:
            customer_email: Customer's email address
            customer_name: Customer's name

        Returns:
            True if email sent successfully, False otherwise
        """
        subject = "Thank You for Contacting 904 Dumpster!"

        html_content = f"""
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body {{ font-family: Arial, sans-serif; line-height: 1.6; color: #333; }}
                .container {{ max-width: 600px; margin: 0 auto; padding: 20px; }}
                .header {{ background-color: #2563eb; color: white; padding: 20px; text-align: center; }}
                .content {{ padding: 20px; }}
                .footer {{ padding: 20px; text-align: center; font-size: 12px; color: #6b7280; }}
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>Thank You!</h1>
                </div>
                <div class="content">
                    <p>Hi {customer_name},</p>
                    <p>Thank you for reaching out to 904 Dumpster! We've received your message and will get back to you as soon as possible.</p>
                    <p>If you have an urgent request, feel free to call us directly.</p>
                    <p>Best regards,<br>The 904 Dumpster Team</p>
                </div>
                <div class="footer">
                    <p>904 Dumpster - Jacksonville, FL</p>
                </div>
            </div>
        </body>
        </html>
        """

        plain_content = f"""
Hi {customer_name},

Thank you for reaching out to 904 Dumpster! We've received your message and will get back to you as soon as possible.

If you have an urgent request, feel free to call us directly.

Best regards,
The 904 Dumpster Team

---
904 Dumpster - Jacksonville, FL
        """

        try:
            email_message = EmailMultiAlternatives(
                subject=subject,
                body=plain_content,
                from_email=settings.DEFAULT_FROM_EMAIL,
                to=[customer_email]
            )
            email_message.attach_alternative(html_content, "text/html")
            email_message.send(fail_silently=False)

            logger.info(f"Confirmation email sent to {customer_email}")
            return True

        except Exception as e:
            logger.error(f"Failed to send confirmation email: {e}")
            return False