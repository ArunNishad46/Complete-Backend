import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/react.svg'

function Navbar() {

  return (
    <div className='flex justify-between items-center px-4 py-2 bg-gray-800 text-white'>
      <div className='flex items-center'>
        <Link className='flex items-center text-3xl font-bold gap-1' to="/"><img src={Logo} width={60} alt="Logo" />MERN-JWT-AUTH</Link>
      </div>
      <div className='flex items-center gap-6'>
        <Link className='bg-cyan-500 px-4 py-2 rounded' to="/login">Login</Link>
        <Link className='bg-cyan-500 px-4 py-2 rounded' to="/register">Register</Link>
      </div>
    </div>
  )
}

export default Navbar