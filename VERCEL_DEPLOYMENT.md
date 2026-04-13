# Vercel Deployment Guide

This repository is a small monorepo:

- `portfolio-frontend` is the Vite app you should deploy to Vercel
- `portfolio-backend` is the Django API and should be hosted on a Python-friendly platform

## Recommended Production Split

- Frontend: Vercel
- Backend: Render, Railway, or another Django-capable host

## Why the Backend Should Not Stay on Vercel in Its Current Form

The current backend writes contact submissions to SQLite and relies on standard Django process behavior. That is a better fit for a persistent Python host than a serverless setup.

## Frontend Deployment Steps

1. Open Vercel and import `harshitasolanki13/harshita`
2. Set the **Root Directory** to `portfolio-frontend`
3. Confirm these defaults:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Add this environment variable in Vercel:

```text
VITE_API_BASE_URL=https://your-backend-domain.com
```

5. Deploy

## Backend Requirement

Before the contact form works in production, deploy the Django backend and make sure:

- it serves HTTPS
- `ALLOWED_HOSTS` includes the backend domain
- CORS allows your Vercel frontend domain
- the SMTP environment variables are set

## Frontend Files Added for Vercel

- `portfolio-frontend/vercel.json`
- `portfolio-frontend/.env.example`

## Example Production Flow

1. Deploy backend on Render or Railway
2. Copy the backend base URL, for example `https://harshita-api.onrender.com`
3. In Vercel, set:

```text
VITE_API_BASE_URL=https://harshita-api.onrender.com
```

4. Redeploy the frontend
