import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthProvider from './context/AuthContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';  
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  
  return (
    <div>
      <AuthProvider>
        <Router>
          <Navbar />
          <div className='flex flex-col items-center justify-center h-120'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </div>
  )
}

export default App
            