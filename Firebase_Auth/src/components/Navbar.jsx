import React from 'react'
import {Link} from "react-router-dom"
import Logo from '../assets/react.svg'

function Navbar() {

  return (
    <div className='flex justify-between items-center bg-gray-900 h-[60px] px-[30px]'>
      <div>
        <Link className='flex items-center gap-1 text-white text-2xl font-bold' to='/'><img src={Logo} alt="Logo" width={55} />FirebaseAuth</Link>
      </div>
      <div>
        <Link className='text-white text-lg font-bold mx-5 px-3 py-1.5 hover:bg-white hover:text-gray-900 hover:rounded-lg' to='/login'>Login</Link>
        <Link className='text-white text-lg font-bold mx-10 px-3 py-1.5 hover:bg-white hover:text-gray-900 hover:rounded-lg' to='/register'>Register</Link>
      </div>
    </div>
  )
}

export default Navbar