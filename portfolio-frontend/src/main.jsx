import React from 'react'
import ReactDOM from 'react-dom/client'
import AOS from 'aos'
import 'aos/dist/aos.css'
import App from './App'
import './index.css'
import { ThemeProvider } from './context/ThemeContext'

AOS.init({
  duration: 700,
  once: true,
  offset: 80,
  easing: 'ease-out-cubic',
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
