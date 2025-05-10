import React, {useState} from 'react'
import googleLogo from '../assets/google.png'
import { Link } from 'react-router-dom'
import { useFirebase } from '../Context/firebase'

function RegistrationPage() {
  const firebase = useFirebase();

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

    firebase.signupUserWithEmailAndPassword(registerData.email, registerData.password);
    setRegisterData({
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
        <p className='text-gray-600 my-4'>--------------- other options ---------------</p>
        <div className='flex items-center justify-center'>
          <button onClick={firebase.signupWithGoogle} className='flex text-lg bg-white rounded-lg px-2 py-1 cursor-pointer'>
            <img className='w-[30px] mix-blend-multiply mr-1' src={googleLogo} alt="logo" />SignUp with Google
          </button>
        </div>
        <p className='mt-4'>
          Already registered? 
          <Link className='text-blue-800 underline' to='/login'> Login Here</Link>
        </p>
      </form>
    </div>
  )
}

export default RegistrationPage