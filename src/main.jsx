import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Routes, BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/cronograma' element={<Cronograma/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
