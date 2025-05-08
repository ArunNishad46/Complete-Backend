import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

function LoginPage() {
  const [loginData, setLoginData] = useState({
    username:"",
    password:""
  })

  const handleLoginChange = (e) => {
    const {name, value} = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]:value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const response = await axios.post('http://127.0.0.1:3000/login', loginData)
      alert(response.data.message)
    }catch(error){
      alert(error.response.data.message)
    }
    setLoginData({
      username:'',
      password:''
    })
  }

  return (
    <div className='flex flex-col justify-center'>
      <h1 className='text-gray-800 text-3xl font-bold text-center mb-6'>Welcome to Login Page</h1>
      <form 
        className='flex flex-col items-center bg-gray-300 h-[270px] w-[400px] rounded-xl' 
        onSubmit={handleSubmit} 
      >
        <h1 className='text-center text-xl font-bold text-gray-800 my-4'>Login Form</h1>
        <div className='flex flex-col'>
          <label className='text-gray-800 text-lg' htmlFor="username">Username</label>
          <input 
            className='bg-white rounded-md p-1 w-[300px] focus:outline-none' 
            type="text" 
            name="username" 
            id="username" 
            value={loginData.username}
            onChange={handleLoginChange}
            placeholder='enter your username' 
            required 
          />
          <label className='text-gray-800 text-lg' htmlFor="password">Password</label>
          <input
            className='bg-white rounded-md p-1 w-[300px] mb-2 focus:outline-none' 
            type="password" 
            name="password" 
            id="password" 
            value={loginData.password}
            onChange={handleLoginChange}
            placeholder='enter your password' 
            required 
          />
          <input 
            className='text-lg font-bold text-white bg-blue-800 w-[300px] rounded-lg py-1 cursor-pointer mt-2' 
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