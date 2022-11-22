import React from 'react'
import ReactDOM from 'react-dom/client'

// Components
import App from './App'

// Routing
import { BrowserRouter } from 'react-router-dom'

// CSS
import './index.css'

// Theme
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { AuthContextProvider, UserAuth } from './contexts/AuthContext'

let theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#fbfbfb'
    },
    primary: {
      main: '#6c5ce7'
    },
    secondary: {
      main: '#00b894'
    }
  },
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: '#6c5ce7'
        },
        arrow: {
          color: '#6c5ce7'
        }
      }
    }
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthContextProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </AuthContextProvider>
  </React.StrictMode>
)
