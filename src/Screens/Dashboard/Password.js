import React from 'react';
import SideBar from './SideBar';
import Uploder from '../../Components/Uploder';
import {Input} from '../../Components/UserdInput';

const Password = () => {
  return (
    <SideBar>
      <div className='flex flex-col gap-5'>
        <h2 className='text-sm font-bold'>
          Change Password
        </h2>
        <Input
        label="New Password"
        placeholder="********"
        type="password"
        bg={true}
        />
        <Input
          label="Confirm Password"
          placeholder="********"
          type="password"
          bg={true}
        />
        <div className='flex-btn gap-2 flex-wrap flex-col-reverse sm:flex-row justify-between items-center my-4'>
         <button className='bg-main transitions text-sm hover:bg-subMain border  border-subMain flex-rows gap-4 text-white py-2 px-4 w-full rounded sm:w-auto'>
          Update Password
         </button>
        </div>

      </div>
    </SideBar>

  )
}

export default Password
