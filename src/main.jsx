import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './layouts/App.jsx'
import App from './layouts/App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    
  </StrictMode>,
)
