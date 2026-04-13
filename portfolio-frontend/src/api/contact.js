import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ?? '',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
})

export async function sendContactMessage(payload) {
  const response = await api.post('/api/contact/', payload)
  return response.data
}
