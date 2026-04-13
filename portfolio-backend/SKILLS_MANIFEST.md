# Skills Manifest

## One-line Install Commands

Backend:

```powershell
cd portfolio-backend
python -m venv .venv
.venv\Scripts\activate
python -m pip install -r requirements.txt
```

Frontend:

```powershell
cd portfolio-frontend
npm.cmd install
```

## Required Skills and Tools

| Category | Skill/Tool | Version | Why Needed | Install Command | Difficulty |
| --- | --- | --- | --- | --- | --- |
| Backend | Python | 3.11+ recommended | Runtime for Django API | Preinstalled / python.org | Intermediate |
| Backend | Django | 4.2.x | Core backend framework and admin | `python -m pip install Django==4.2.16` | Intermediate |
| Backend | djangorestframework | 3.14.x | REST API endpoint for contact submissions | `python -m pip install djangorestframework==3.14.0` | Intermediate |
| Backend | django-cors-headers | 4.4.x | Local frontend/backend cross-origin requests | `python -m pip install django-cors-headers==4.4.0` | Intermediate |
| Backend | python-decouple | 3.8.x | `.env` based configuration | `python -m pip install python-decouple==3.8` | Beginner |
| Backend | SQLite | Built-in | Local development database | Built into Python | Beginner |
| Backend | SMTP email | Built-in | Sends contact notifications | Built into Django/Python | Intermediate |
| Frontend | React | 18.3.x | UI component system | `npm.cmd install react react-dom` | Intermediate |
| Frontend | Vite | 5.4.x | Frontend dev/build tooling | `npm.cmd install -D vite @vitejs/plugin-react` | Intermediate |
| Frontend | Tailwind CSS | 3.4.x | Utility-first styling mapped to design tokens | `npm.cmd install -D tailwindcss postcss autoprefixer` | Intermediate |
| Frontend | Axios | 1.7.x | Contact form HTTP requests | `npm.cmd install axios` | Beginner |
| Frontend | AOS | 2.3.x | Scroll-triggered entrance animations | `npm.cmd install aos` | Beginner |
| Frontend | Lucide React | 0.453.x | Theme, nav, social, and project icons | `npm.cmd install lucide-react` | Beginner |
| Frontend | React Context API | Built-in | Theme state management | Built into React | Intermediate |
| Frontend | localStorage | Built-in | Persist theme preference | Built into browser | Beginner |
| Frontend | prefers-color-scheme | Built-in | Detect initial user/system theme | Built into browser | Beginner |
| Tooling | Git | Current | Version control and collaboration | git-scm.com | Beginner |
| Tooling | Virtual environments | Built-in | Backend dependency isolation | `python -m venv .venv` | Beginner |
| Tooling | `.env` files | Built-in | Secret/config separation | Text file | Beginner |
| Tooling | Vite proxy | Built-in | Smooth dev API calls without hardcoded CORS workarounds | Config only | Intermediate |
| Tooling | Gmail App Password | N/A | SMTP login for Gmail account | Google account setting | Beginner |

## Auto-detected Additions

| Category | Skill/Tool | Version | Why Needed | Install Command | Difficulty |
| --- | --- | --- | --- | --- | --- |
| Frontend | `@vitejs/plugin-react` | 4.3.x | // AUTO-ADDED: needed for React JSX support in Vite 5 | `npm.cmd install -D @vitejs/plugin-react` | Beginner |
| Frontend | CSS custom motion layer | Built-in | // AUTO-ADDED: implements subtle parallax-like hero depth without adding another animation dependency | No install required | Intermediate |
| Backend | `django.core.mail` integration | Built-in | // AUTO-ADDED: uses Django's mail layer instead of extra SMTP packages | No install required | Beginner |

## Environment Caveats

// AUTO-IMPROVED: the active machine has Python 3.14.2, so the safest local path is to create a Python 3.11 or 3.12 virtual environment for the requested Django 4.2 stack.

- Active machine Python: `3.14.2`
- Active machine Node: `22.17.0`
- Active machine Git: `2.53.0`
- PowerShell blocks `npm.ps1`; use `npm.cmd` in the commands above on this machine.
