import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './Components/LoginPage'
import RegistrationPage from './Components/RegistrationPage'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import { useFirebase } from './Context/firebase'

function App() {
  const firebase = useFirebase();

  if(firebase.user === null){
    return (
      <BrowserRouter>
        <Navbar />
        <div className='flex items-center justify-center h-[400px]'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegistrationPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    )
  }

  return(
    <div className='flex flex-col items-center justify-center gap-6 h-[200px]'>
      <h1 className='text-3xl font-bold text-gray-900'>Hello, {firebase.user.email}</h1>
      <button onClick={firebase.userSignOut} className='text-lg font-bold text-gray-200 bg-red-600 px-2 py-1 cursor-pointer rounded-lg'>Logout</button>
    </div>
  )
}


export default App