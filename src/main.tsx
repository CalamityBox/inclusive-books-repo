import React from 'react'
import ReactDOM from 'react-dom/client'

// Components
import App from './App'

// Routing
import { BrowserRouter } from 'react-router-dom'

// CSS
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
