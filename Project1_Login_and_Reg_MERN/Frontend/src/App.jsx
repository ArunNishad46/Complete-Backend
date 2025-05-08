import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import RegistrationPage from './Components/RegistrationPage'
import LoginPage from './Components/LoginPage'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='flex items-center justify-center h-[450px]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegistrationPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
} 

export default App