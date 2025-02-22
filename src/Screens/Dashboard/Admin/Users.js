import React from 'react'
import SideBar from '../SideBar'
import Table from '../../../Components/Table'
import { UsersData } from '../../../Data/MoviesData'
import Table2 from '../../../Components/Table2'

const Users = () => {
  return (
    <SideBar>
      <div className='flex flex-col gap-6'>
        <h2 className='text-xl font-bold'>Users</h2>
      <Table2 data={UsersData} users={true}/>
    </div>
    </SideBar>
    
  )
}

export default Users
