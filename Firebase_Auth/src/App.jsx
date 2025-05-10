import { useState, useEffect } from 'react'
import { app } from './firebase'
import { getAuth, onAuthStateChanged  } from 'firebase/auth'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import RegistrationPage from './components/RegistrationPage'
import LoginPage from './components/LoginPage'
import UserNavbar from './components/UserNavbar'
import UserSignIn from './components/UserSignIn'

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user){
        setUser(user)
      }else{
        setUser(null)
      }
    })
  }, [])

  if(user === null){
    return(
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

  return (
    <BrowserRouter>
      <UserNavbar />
      <div className='flex items-center justify-center h-[200px]'>
        <Routes>
          <Route path='/' element={<UserSignIn user={user.email} />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
} 

export default App