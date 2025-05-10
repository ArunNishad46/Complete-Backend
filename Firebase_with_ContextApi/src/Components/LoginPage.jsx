import React, { useState } from 'react'
import googleLogo from '../assets/google.png'
import {Link} from 'react-router-dom'
import { useFirebase } from '../Context/firebase'

function LoginPage() {
  const firebase = useFirebase();

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

    firebase.signinUserWithEmailAndPassword(loginData.email, loginData.password)
    setLoginData({
      email:'',
      password:''
    })
  }

  return (
    <div className='flex flex-col justify-center'>
      <form 
        className='flex flex-col items-center bg-gray-300 h-[335px] w-[400px] rounded-xl' 
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
        <p className='text-gray-600 my-4'>--------------- other options ---------------</p>
        <div className='flex items-center justify-center'>
          <button onClick={firebase.signupWithGoogle} className='flex text-lg bg-white rounded-lg px-2 py-1 cursor-pointer'>
            <img className='w-[30px] mix-blend-multiply mr-1' src={googleLogo} alt="logo" />SignIn with Google
          </button>
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