# Harshita Rajesh Solanki Portfolio

Single-page full-stack portfolio with a Django REST contact API and a React + Vite frontend that follows the Pencil.dev design tokens in [design-specs.md](./design-specs.md).

## Stack

- Backend: Django, Django REST Framework, django-cors-headers, python-decouple, SQLite
- Frontend: React 18, Vite 5, Tailwind CSS v3, Axios, AOS, Lucide React
- UX: dark/light theme persistence, typewriter hero subtitle, parallax-like scroll motion, scroll-triggered reveal animations

## Project Structure

```text
portfolio-backend/
portfolio-frontend/
SKILLS_MANIFEST.md
SETUP_CHECKLIST.md
BEGINNER_GUIDE.md
design-specs.md
wireframe.pen
components.pen
```

## Quick Start

Backend:

```powershell
cd portfolio-backend
python -m venv .venv
.venv\Scripts\activate
python -m pip install -r requirements.txt
python manage.py migrate
python manage.py runserver 8000
```

Frontend:

```powershell
cd portfolio-frontend
npm.cmd install
npm.cmd run dev
```

## Environment Notes

// AUTO-IMPROVED: the current machine reports Python 3.14.2, while Django 4.2 is safest on Python 3.11/3.12. Use a Python 3.11/3.12 virtual environment for local installs if Django 4.2 wheels are unavailable.

- Backend dev URL: `http://localhost:8000`
- Frontend dev URL: `http://localhost:5173`
- Contact form proxy target: `/api/contact/`

## Design Fidelity

The frontend uses the existing `design-specs.md` file as the source of truth for:

- color tokens
- typography scale
- spacing rhythm
- hover states
- animation timing

## Verification

- Backend Python files can be checked with `python -m compileall portfolio-backend`
- Frontend can be verified after installing dependencies with `npm.cmd run build`

## Deploying the Frontend to Vercel

- Import the GitHub repository into Vercel
- Set the Vercel project Root Directory to `portfolio-frontend`
- Keep the framework preset as `Vite`
- Add `VITE_API_BASE_URL` in Vercel Project Settings so the contact form can reach your deployed Django API
- Deploy after the backend has a public HTTPS URL

## Backend Hosting Note

The current Django backend stores contact messages in SQLite and sends SMTP email, so the safest production setup is:

- frontend on Vercel
- backend on Render, Railway, or another Python-friendly host

Once the backend is live, set `VITE_API_BASE_URL` in Vercel to that backend domain, for example:

```text
https://your-backend.example.com
```

On the backend host, also update:

```text
ALLOWED_HOSTS=your-backend.example.com
CORS_ALLOWED_ORIGINS=https://your-frontend-domain.vercel.app
```
