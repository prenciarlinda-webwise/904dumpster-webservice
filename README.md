# 904 Dumpster Web Service

Dumpster rental service website for Jacksonville, FL area.

## Project Structure

```
904dumpster-webservice/
├── backend/           # Django API backend
│   ├── backend/       # Django project settings
│   ├── core/          # Main app (forms, emails, API)
│   └── manage.py
├── frontend/          # Next.js frontend (coming soon)
└── .venv/             # Python virtual environment
```

## Backend Setup

### Prerequisites
- Python 3.13+

### Installation

```bash
# Activate virtual environment
# Windows:
.venv\Scripts\activate
# macOS/Linux:
source .venv/bin/activate

# Install dependencies
pip install django django-cors-headers python-dotenv requests django-ratelimit
```

### Configuration

1. Copy the example environment file:
```bash
cp backend/.env.example backend/.env
```

2. Update `backend/.env` with your credentials:
- `SECRET_KEY`: Generate a new Django secret key
- `EMAIL_HOST_PASSWORD`: Your email password
- `RECAPTCHA_SECRET_KEY`: Your reCAPTCHA secret key

### Running the Server

```bash
cd backend
python manage.py migrate
python manage.py runserver
```

The API will be available at `http://localhost:8000`

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/contact/` | POST | Contact form submission |
| `/api/quote/` | POST | Quote request submission |
| `/api/marketing/event/` | POST | Marketing event tracking |
| `/api/health/` | GET | Health check |

## Security Features

- reCAPTCHA v3 verification
- Rate limiting (5 requests/minute for forms)
- Input sanitization and validation
- CORS protection
- HTTPS enforcement in production
- XSS and injection prevention

## Environment Variables

See `backend/.env.example` for all available configuration options.
 