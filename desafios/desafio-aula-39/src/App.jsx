
//import MyChildren from './components/Context/Children'
//import { MyProvider } from './components/Context/Context'
import { useState } from 'react'
import './App.css'
import PreferencesProvider from './components/App/PreferencesProvider'
import Toolbar from './components/App/Toolbar'

function App() {

  return (
      <PreferencesProvider>
        <div>
          <Toolbar />
          <button onClick={() => {}}>Trocar o tema</button>
          <button onClick={() => {}}>PT-BR</button>
          <button onClick={() => {}}>EN</button>
        </div>
      </PreferencesProvider>
  )
}

export default App
