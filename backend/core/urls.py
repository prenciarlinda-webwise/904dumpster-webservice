"""
URL configuration for the core app.
"""

from django.urls import path
from .views import (
    ContactFormView,
    QuoteFormView,
    MarketingEventView,
    HealthCheckView
)

app_name = 'core'

urlpatterns = [
    path('contact/', ContactFormView.as_view(), name='contact'),
    path('quote/', QuoteFormView.as_view(), name='quote'),
    path('marketing/event/', MarketingEventView.as_view(), name='marketing_event'),
    path('health/', HealthCheckView.as_view(), name='health'),
]