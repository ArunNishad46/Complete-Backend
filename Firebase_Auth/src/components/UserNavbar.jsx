import React from 'react'
import { app } from '../firebase'
import { getAuth, signOut } from 'firebase/auth'
import {Link} from "react-router-dom"
import Logo from '../assets/react.svg'

const auth = getAuth(app);

function UserNavbar() {

  return (
    <div className='flex justify-between items-center bg-gray-900 h-[60px] px-[30px]'>
      <div>
        <Link className='flex items-center gap-1 text-white text-2xl font-bold' to='/'><img src={Logo} alt="Logo" width={55} />FirebaseAuth</Link>
      </div>
      <div>
        <button onClick={() => signOut(auth)} className='text-white text-lg font-bold cursor-pointer hover:bg-white hover:text-gray-900 rounded-md px-2 py-1'>Logout</button>
      </div>
    </div>
  )
}

export default UserNavbar