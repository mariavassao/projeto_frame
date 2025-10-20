import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Router, BrowserRouter, Route } from 'react-router-dom'
import { Login } from './pages/Login'

function App() {

  return (
    <div id='container'>
       <Login/>
    </div>
   
  )
}

export default App
