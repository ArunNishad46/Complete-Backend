import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import {app} from '../firebase'

const auth = getAuth(app);

function LoginPage() {
  const [loginData, setLoginData] = useState({
    email:'',
    password:''
  })

  const handleChange = (e) => {
    const {name, value} = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]:value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, loginData.email, loginData.password)
    .then((user) => {
      return user
    })
    .catch(error => alert(error))
    setLoginData({
      email:'',
      password:''
    })
  }

  return (
    <div className='flex flex-col justify-center'>
      <form 
        className='flex flex-col items-center bg-gray-300 h-[250px] w-[400px] rounded-xl' 
        onSubmit={handleSubmit}
      >
        <h1 className='text-center text-xl font-bold text-gray-800 underline my-4'>Login</h1>
        <div className='flex flex-col gap-5'>
          <input 
            className='bg-white rounded-md p-1 w-[300px] focus:outline-none' 
            type="email" 
            name="email" 
            id="email" 
            value={loginData.email}
            onChange={handleChange}
            placeholder='enter your email' 
            required 
          />
          <input
            className='bg-white rounded-md p-1 w-[300px] focus:outline-none' 
            type="password" 
            name="password" 
            id="password"
            value={loginData.password}
            onChange={handleChange}
            placeholder='enter your password' 
            required 
          />
          <input 
            className='text-lg font-bold text-white bg-blue-800 w-[300px] rounded-lg py-1 cursor-pointer ' 
            type="submit" 
            value="Login" 
          />
        </div>
        <p className='mt-2'>
          Not registered yet? 
          <Link className='text-blue-800 underline' to='/register'> Register Here</Link>
        </p>
      </form>
    </div>
  )
}

export default LoginPage