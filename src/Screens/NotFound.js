import React from 'react'
import { BiHomeAlt } from 'react-icons/bi'
import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='flex-colo gap-5 w-full min-h-screen text-white bg-main lg:py-30 py-10 px-1 '>
      <img
        className='w-100 h-200 object-cover'
        src='/images/404.jpg'
        alt='404'
      />
      <h1 className='text-2xl lg:text-h1 text-white text-center font-bold'>Page Not Found</h1>
      <p className='px-12 font-medium text-border italic leading-6'>
        The page you are looking for might have been removed had its name changed or is temporarily unavailable.
      </p>
      <Link  to="/" className='bg-subMain text-white flex-rows gap-4  rounded-md px-4 py-3 '>
       <BiHomeAlt/>Home
      </Link>
      

    </div>
  )
}

export default NotFound
