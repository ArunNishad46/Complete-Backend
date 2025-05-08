import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function RegistrationPage() {
  const [registrationData, setRegistrationData] = useState({
    username:"",
    email:"",
    password:""
  })

  const handleRegistrationChange = (e) => {
    const {name, value} = e.target;
    setRegistrationData((prevData) => ({
      ...prevData,
      [name]:value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const response = await axios.post('http://127.0.0.1:3000/register', registrationData)
      console.log(response.data)
      alert(response.data.message)
    }catch(error){
      alert(error.response.data.message)
    }
    setRegistrationData({
      username:'',
      email:'',
      password:''
    })
  }

  return (
    <div className='flex flex-col justify-center'>
      <h1 className='text-gray-800 text-3xl font-bold text-center mb-6'>Welcome to Registration Page</h1>
      <form 
        className='flex flex-col items-center bg-gray-300 h-[330px] w-[400px] rounded-xl'
        onSubmit={handleSubmit}
      >
        <h1 className='text-center text-xl font-bold text-gray-800 my-4'>Registration Form</h1>
        <div className='flex flex-col'>
          <label className='text-gray-800 text-lg' htmlFor="username">Username</label>
          <input 
            className='bg-white rounded-md p-1 w-[300px] focus:outline-none' 
            type="text" 
            name="username" 
            id="username" 
            value={registrationData.username}
            onChange={handleRegistrationChange}
            placeholder='enter your username' 
            required 
          />
          <label className='text-gray-800 text-lg' htmlFor="email">Email</label>
          <input 
            className='bg-white rounded-md p-1 w-[300px] focus:outline-none' 
            type="email" 
            name="email" 
            id="email" 
            value={registrationData.email}
            onChange={handleRegistrationChange}
            placeholder='enter your email' 
            required 
          />
          <label className='text-gray-800 text-lg' htmlFor="password">Password</label>
          <input 
            className='bg-white rounded-md p-1 w-[300px] mb-2 focus:outline-none' 
            type="password" 
            name="password" 
            id="password" 
            value={registrationData.password}
            onChange={handleRegistrationChange}
            placeholder='enter your password' 
            required 
          />
          <input 
            className='text-lg font-bold text-white bg-blue-800 rounded-lg py-1 w-[300px] cursor-pointer mt-2'
            type="submit" 
            value="Register" 
          />
        </div>
        <p className='mt-2'>
          Already registered? 
          <Link className='text-blue-800 underline' to='/login'> Login Here</Link>
        </p>
      </form>
    </div>
  )
}

export default RegistrationPage