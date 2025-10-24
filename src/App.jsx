import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login'
import { Home } from './pages/Home'

function App() {

  return (
  <BrowserRouter>
      <Routes>
        <Route path='/pages' element={<Login/>}/>
        <Route path='/pages' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
