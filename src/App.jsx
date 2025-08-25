import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'

function App() {
  

  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        
      </Routes>
    <Footer/>  
    </>
  )
}

export default App
