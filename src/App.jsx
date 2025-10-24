import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login'

function App() {

  return (
   <BrowserRouter>
    <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/cronograma' element={<Cronograma/>}/>
    </Routes>
   </BrowserRouter>
   
  );
}

export default App
