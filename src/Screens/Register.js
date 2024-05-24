import React from 'react'
import Layout from '../Layout/Layout'
import { Input } from '../Components/UserdInput'
import { Link } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'

const Register = () => {
  return (
    <Layout>
      <div className='container mx-auto   my-24 px-2 flex-colo'>
        <div className='w-full gap-5 py-2 px-10   2xl:w-2/5  flex-colo sm:p-14 md:w-2/5  bg-dry rounded-lg border border-border'>
          <img
            src='/images/logo.png'
            alt='logo'
            className='w-40 h-20 object-contain'
            bg={true}
          />
          <Input
            label="Full Name"
            type="text"
            placeholder="Enter your full name" />
          <Input
            label="Email"
            type="email"
            placeholder="Enter your email" />
          <Input
            label="Password"
            type="password"
            placeholder="*****"
            bg={true}
          />
          <Link to="/dashboard" className='bg-subMain transitions hover:bg-main flex-rows gap-4 text-white p-4 rounded-lg w-full'>
            <FiLogIn /> Sign Un
          </Link>
          <p className='text-center  text-border'>
            Already have an account?{' '}
            <Link to="/login" className='text-dryGray font-semibold ml-2'>
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </Layout>

  )
}

export default Register;
