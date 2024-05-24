import React from 'react'
import SideBar from './SideBar'
import Uploder from '../../Components/Uploder';
import { Input } from '../../Components/UserdInput';
const Profile = () => {
  return (
    <SideBar>
      <div className='flex flex-col gap-6'>
        <h2 className='text-xl font-bold'>
          Profile
        </h2>
        <Uploder />
        <Input
        label="Full Name"
        placeholder="Enter your full name"
        type="text"
        bg={true}
        />
        <Input
          label="Email"
          placeholder="Enter your email"
          type="email"
          bg={true}
        />
        <div className='flex-btn gap-2 flex-wrap flex-col-reverse sm:flex-row justify-between items-center my-4'>
         <button className='bg-subMain transitions font-medium hover:bg-main border  border-subMain flex-rows gap-4 text-white py-3 px-6 w-full rounded sm:w-auto'>
          Delete Account
         </button>
         <button className='bg-main transitions font-medium hover:bg-subMain border  border-subMain flex-rows gap-4 text-white py-3 px-6 w-full rounded sm:w-auto'>
          Update Account
         </button>
        </div>

      </div>
    </SideBar>

  )
}

export default Profile;
