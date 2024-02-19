import './App.css'
import { AuthProvider } from "./context/AuthContext"
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import FormsFirebase from './page/FormsFirebase'

function App() {
  return (
      <div>
        <AuthProvider>
          <h1>Becas amlo real100%</h1>
          <FormsFirebase />
        </AuthProvider>
      </div>
  );
}

export default App
