import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './components/Profile/profile.css'
import App from './App.jsx'
import './App.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
