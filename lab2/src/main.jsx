import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { CounterApp } from './components/CounterApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterApp/>
  </StrictMode>,
)
