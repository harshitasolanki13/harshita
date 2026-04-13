# Setup Checklist

Use this before trying to run the portfolio.

## Prerequisite Checks

- Python installed: Yes
  Detected version: `3.14.2`
- Node installed: Yes
  Detected version: `22.17.0`
- npm available: Yes, but use `npm.cmd`
  Reason: PowerShell script execution blocks `npm.ps1` on this machine
- Git installed: Yes
  Detected version: `2.53.0`

## Backend Checklist

- [ ] Install Python 3.11 or 3.12 if you want the smoothest Django 4.2 setup
- [ ] Create backend virtual environment in `portfolio-backend`
- [ ] Activate the virtual environment
- [ ] Install `requirements.txt`
- [ ] Copy `.env` values and replace Gmail/email placeholders
- [ ] Run `python manage.py migrate`
- [ ] Run `python manage.py createsuperuser` if you want admin access
- [ ] Start backend with `python manage.py runserver 8000`

## Frontend Checklist

- [ ] Open `portfolio-frontend`
- [ ] Run `npm.cmd install`
- [ ] Run `npm.cmd run dev`
- [ ] Confirm the app opens at `http://localhost:5173`
- [ ] Submit the contact form and confirm the Django API receives it

## Integration Checklist

- [ ] Backend runs on port `8000`
- [ ] Frontend runs on port `5173`
- [ ] Vite proxy forwards `/api/*` requests to Django
- [ ] Contact form POST succeeds at `/api/contact/`
- [ ] Theme toggle persists across refreshes
- [ ] Dark mode respects system preference on first load
- [ ] Scroll reveal and parallax-like hero motion work on desktop and mobile
