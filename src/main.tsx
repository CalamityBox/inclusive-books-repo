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

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoo8oAAEs6rswUoT8YEi-3sHYwsRkIkBo",
  authDomain: "inclusive-books.firebaseapp.com",
  projectId: "inclusive-books",
  storageBucket: "inclusive-books.appspot.com",
  messagingSenderId: "431033050380",
  appId: "1:431033050380:web:24597e1aac6ff5a0ced529",
  measurementId: "G-YNXEFTM5Z2"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const auth = getAuth(app)
const db = getFirestore(app)


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
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)
