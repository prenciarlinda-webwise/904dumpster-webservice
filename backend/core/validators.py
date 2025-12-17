"""
Input validators for form data sanitization and validation.
"""

import re
import html
from typing import Any


class BaseValidator:
    """Base validator class with common functionality."""

    def __init__(self, data: dict):
        self.data = data
        self.errors = {}
        self.cleaned_data = {}

    def is_valid(self) -> bool:
        """Run validation and return True if valid."""
        self.validate()
        return len(self.errors) == 0

    def validate(self):
        """Override in subclasses to implement validation logic."""
        raise NotImplementedError

    @staticmethod
    def sanitize_string(value: Any, max_length: int = 1000) -> str:
        """
        Sanitize a string value to prevent XSS and injection attacks.

        Args:
            value: The value to sanitize
            max_length: Maximum allowed length

        Returns:
            Sanitized string
        """
        if value is None:
            return ''

        # Convert to string
        value = str(value)

        # HTML escape to prevent XSS
        value = html.escape(value)

        # Remove null bytes
        value = value.replace('\x00', '')

        # Truncate to max length
        value = value[:max_length]

        # Strip leading/trailing whitespace
        value = value.strip()

        return value

    @staticmethod
    def validate_email(email: str) -> bool:
        """Validate email format."""
        pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
        return bool(re.match(pattern, email))

    @staticmethod
    def validate_phone(phone: str) -> bool:
        """Validate phone number format (US format)."""
        # Remove common separators
        cleaned = re.sub(r'[\s\-\.\(\)]', '', phone)
        # Check if it's a valid US phone number (10-11 digits)
        return bool(re.match(r'^1?\d{10}$', cleaned))

    @staticmethod
    def format_phone(phone: str) -> str:
        """Format phone number to standard format."""
        # Remove non-digits
        digits = re.sub(r'\D', '', phone)

        # Remove leading 1 if present
        if len(digits) == 11 and digits.startswith('1'):
            digits = digits[1:]

        # Format as (XXX) XXX-XXXX
        if len(digits) == 10:
            return f"({digits[:3]}) {digits[3:6]}-{digits[6:]}"

        return phone


class ContactFormValidator(BaseValidator):
    """Validator for contact and quote form submissions."""

    def __init__(self, data: dict, require_address: bool = False):
        super().__init__(data)
        self.require_address = require_address

    def validate(self):
        """Validate contact form data."""
        # Name validation
        name = self.sanitize_string(self.data.get('name'), max_length=100)
        if not name:
            self.errors['name'] = 'Name is required'
        elif len(name) < 2:
            self.errors['name'] = 'Name must be at least 2 characters'
        else:
            self.cleaned_data['name'] = name

        # Email validation
        email = self.sanitize_string(self.data.get('email'), max_length=254)
        if not email:
            self.errors['email'] = 'Email is required'
        elif not self.validate_email(email):
            self.errors['email'] = 'Invalid email format'
        else:
            self.cleaned_data['email'] = email.lower()

        # Phone validation
        phone = self.sanitize_string(self.data.get('phone'), max_length=20)
        if not phone:
            self.errors['phone'] = 'Phone number is required'
        elif not self.validate_phone(phone):
            self.errors['phone'] = 'Invalid phone number format'
        else:
            self.cleaned_data['phone'] = self.format_phone(phone)

        # Message validation
        message = self.sanitize_string(self.data.get('message'), max_length=5000)
        if not message:
            self.errors['message'] = 'Message is required'
        elif len(message) < 10:
            self.errors['message'] = 'Message must be at least 10 characters'
        else:
            self.cleaned_data['message'] = message

        # Address validation (for quote forms)
        if self.require_address:
            address = self.sanitize_string(self.data.get('address'), max_length=500)
            if not address:
                self.errors['address'] = 'Address is required'
            elif len(address) < 10:
                self.errors['address'] = 'Please provide a complete address'
            else:
                self.cleaned_data['address'] = address


class MarketingEventValidator(BaseValidator):
    """Validator for marketing event tracking."""

    VALID_EVENT_TYPES = [
        'page_view',
        'click',
        'click_cta',
        'click_phone',
        'click_email',
        'form_start',
        'form_submit',
        'scroll_depth',
    ]

    def validate(self):
        """Validate marketing event data."""
        # Event type validation
        event_type = self.sanitize_string(self.data.get('event_type'), max_length=50)
        if not event_type:
            self.errors['event_type'] = 'Event type is required'
        elif event_type not in self.VALID_EVENT_TYPES:
            self.errors['event_type'] = f'Invalid event type: {event_type}'
        else:
            self.cleaned_data['event_type'] = event_type

        # Page validation (optional)
        page = self.sanitize_string(self.data.get('page'), max_length=200)
        self.cleaned_data['page'] = page

        # Element validation (optional)
        element = self.sanitize_string(self.data.get('element'), max_length=100)
        self.cleaned_data['element'] = element

        # Metadata validation (optional)
        metadata = self.data.get('metadata', {})
        if isinstance(metadata, dict):
            # Sanitize all metadata values
            cleaned_metadata = {}
            for key, value in metadata.items():
                sanitized_key = self.sanitize_string(key, max_length=50)
                sanitized_value = self.sanitize_string(str(value), max_length=200)
                if sanitized_key:
                    cleaned_metadata[sanitized_key] = sanitized_value
            self.cleaned_data['metadata'] = cleaned_metadata
        else:
            self.cleaned_data['metadata'] = {}