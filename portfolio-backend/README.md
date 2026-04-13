# Portfolio Backend

Django REST Framework backend for the Harshita Rajesh Solanki portfolio contact form.

## Features

- `/api/contact/` POST endpoint
- admin management for submitted messages
- `.env` driven SMTP configuration
- local SQLite database

## Run

```powershell
python -m venv .venv
.venv\Scripts\activate
python -m pip install -r requirements.txt
python manage.py migrate
python manage.py runserver 8000
```
