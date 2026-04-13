import axios from 'axios'

// AUTO-ADDED: Vercel production builds can point the form to an external Django API without touching component code.
const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL ?? '').trim().replace(/\/$/, '')

const api = axios.create({
  baseURL: apiBaseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
})

export async function sendContactMessage(payload) {
  const response = await api.post('/api/contact/', payload)
  return response.data
}
