import React from 'react'
import ReactDOM from 'react-dom/client'

// Components
import App from './App'

// Routing
import { BrowserRouter } from 'react-router-dom'

// CSS
import './index.css'

// Theme
// Theme
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react'

let theme = createTheme();
theme = responsiveFontSizes(theme);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)
