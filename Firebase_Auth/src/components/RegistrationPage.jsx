import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { app } from '../firebase'

const auth = getAuth(app)

function RegistrationPage() {
  const [registerData, setRegisterData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const {name, value} = e.target;
    setRegisterData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, registerData.email, registerData.password)
    .then(user => {
      alert('Registration Successful!')
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(`${errorCode}:${errorMessage}`)
    })
    setRegisterData({
      email:"",
      password:""
    })
  }
  
  return (
    <div className='flex flex-col justify-center'>
      <form 
        className='flex flex-col items-center bg-gray-300 h-[250px] w-[400px] rounded-xl'
        onSubmit={handleSubmit}
      >
        <h1 className='text-center text-xl font-bold text-gray-800 underline my-4'>Registration</h1>
        <div className='flex flex-col gap-5'>
          <input 
            className='bg-white rounded-md p-1 w-[300px] focus:outline-none' 
            type="email" 
            name="email" 
            id="email"
            value={registerData.email}
            onChange={handleChange}
            placeholder='enter your email' 
            required 
          />
          <input 
            className='bg-white rounded-md p-1 w-[300px] focus:outline-none' 
            type="password" 
            name="password" 
            id="password"
            value={registerData.password}
            onChange={handleChange}
            placeholder='enter your password' 
            required 
          />
          <input 
            className='text-lg font-bold text-white bg-blue-800 rounded-lg py-1 w-[300px] cursor-pointer'
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