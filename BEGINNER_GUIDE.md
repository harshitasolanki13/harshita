# Beginner Guide

This guide assumes you are starting from zero and want exact commands.

## 1. Open the Project Folder

```powershell
cd d:\Portfolio\second
```

## 2. Start the Backend

```powershell
cd portfolio-backend
python -m venv .venv
.venv\Scripts\activate
python -m pip install --upgrade pip
python -m pip install -r requirements.txt
python manage.py migrate
python manage.py runserver 8000
```

Keep that terminal open.

## 3. Start the Frontend

Open a second terminal:

```powershell
cd d:\Portfolio\second\portfolio-frontend
npm.cmd install
npm.cmd run dev
```

## 4. Open the Website

- Frontend URL: `http://localhost:5173`
- Backend API URL: `http://localhost:8000/api/contact/`

## 5. Fill in the Backend `.env`

Open `portfolio-backend/.env` and replace:

- `EMAIL_HOST_USER`
- `EMAIL_HOST_PASSWORD`
- `DEFAULT_FROM_EMAIL`
- `CONTACT_RECEIVER_EMAIL`

If you use Gmail:

1. Turn on 2-factor authentication
2. Create a Gmail App Password
3. Paste that 16-character password into `EMAIL_HOST_PASSWORD`

## 6. Test the Contact Form

1. Start both backend and frontend
2. Open the portfolio
3. Scroll to Contact
4. Enter your name, email, and message
5. Press Submit

Expected result:

- the frontend shows success
- Django saves the message in SQLite
- Django tries to send the email notification

## 7. Common Fixes

- If `npm` fails in PowerShell, use `npm.cmd`
- If Django install fails on Python 3.14, use Python 3.11 or 3.12 for the virtual environment
- If email fails, double-check your Gmail App Password and sender email

## 8. Put the Frontend on Vercel

1. Push this project to GitHub
2. Open Vercel and import the GitHub repository
3. When Vercel asks for the project folder, choose `portfolio-frontend`
4. Add this environment variable in Vercel:

```text
VITE_API_BASE_URL=https://your-backend-domain.com
```

5. Click Deploy

Important:

- Vercel is for the frontend here
- your Django backend should be deployed to a Python host first
- after that, paste the backend URL into `VITE_API_BASE_URL`

If `VITE_API_BASE_URL` is missing, the contact form will not be able to reach the deployed backend.
