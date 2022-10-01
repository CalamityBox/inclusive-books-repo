import React from 'react'

// Routing
import MainRouting from './utils/MainRouting'

// CSS
import './App.css'

// Components
import Nav from './components/Nav'

// Utils
import { menuPaths } from './utils/menuPaths'
import Container from '@mui/material/Container'

function App() {

  return (
    <div className="App">

      <Nav menuPaths={menuPaths} />
      
      <Container
        sx={{
          mt: 10
        }}
      >
      </Container>

      <MainRouting />

    </div>
  )
}

export default App
