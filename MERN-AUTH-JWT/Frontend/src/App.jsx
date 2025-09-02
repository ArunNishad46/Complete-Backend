import {useEffect, useState} from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import {refresh} from './api/authServices'

function App() {
  const [accessToken, setAccessToken] = useState(localStorage.getItem("accessToken") || "")

  useEffect(() => {
    const tokenRefresh = async () => {
      try{
        const response = await refresh();
        localStorage.setItem('accessToken', response.data.accessToken);
        setAccessToken(response.data.accessToken);
      }catch(error){
        console.log(error.response.data.message || "Failed to refresh token")
        setAccessToken(null)
      }
    }

    if(!accessToken) tokenRefresh();
  }, []);
  
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className='flex flex-col items-center justify-center h-120'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login setAccessToken={setAccessToken} />} />
            <Route path="/register" element={<Register setAccessToken={setAccessToken} />} />
            <Route path="/profile" element={<ProtectedRoute accessToken={accessToken}><Profile accessToken={accessToken} setAccessToken={setAccessToken} /></ProtectedRoute>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App