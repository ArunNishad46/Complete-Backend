import React from 'react'

function Home() {

  return (
    <div className='flex flex-col items-center justify-center h-96'>
      <h1 className='text-4xl font-bold text-cyan-500'>Welcome to the Home Page</h1>
      <p className='text-lg font-semibold text-gray-500'>This is the home page of the JWT Authentication MERN application.</p>
      <p className='text-lg font-semibold text-gray-500'>Use the navigation links to go to Login or Register pages.</p>
      <p className='text-lg font-semibold text-gray-500'>Once logged in, you can access your profile.</p>
      <p className='text-lg font-semibold text-gray-500'>Enjoy exploring the application!</p>
    </div>
  )
}

export default Home