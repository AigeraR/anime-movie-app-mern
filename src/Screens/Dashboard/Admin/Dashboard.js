import React from 'react'
import SideBar from '../SideBar'
import { FaRegListAlt, FaUser } from 'react-icons/fa'
import { HiViewGridAdd } from 'react-icons/hi'
import Table from '../../../Components/Table'
import { Movies } from '../../../Data/MoviesData'

const Dashboard = () => {
  const Dashboard = [
    {
      bg: "bg-orange-600",
      icon: FaRegListAlt,
      title: "Total Movies",
      total: 90
    },
    {
      bg: "bg-blue-700",
      icon: HiViewGridAdd,
      title: "Total Category",
      total:24
    }, {
      bg: "bg-green-600",
      icon: FaUser,
      title: "Total User",
      total: 100
    }
  ]
  return (
    <SideBar>
      <h2 className='text-xl font-bold'>
        Dashboard
      </h2>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4'>
        {
          Dashboard.map((data, index) => (
            <div key={index} className={`p-4 rounded bg-main border-border grid grid-cols-4 gap-2 text-white`}>
              <div className={`col-span-1 w-12 h-12 flex-colo rounded-full p-2 ${data.bg}`}>
                <data.icon calcMode="text-2xl text-white" />
              </div>
              <div className='col-span-3'>
                <h2>{data.title}</h2>
                <p className='text-sm mt-2 font-bold'>{data.total}</p>
              </div>
            </div>
          ))
        }
      </div>
     <h2 className='mt-4 font-sans text-border p-4'>Recent Movies</h2>
     <Table  data={Movies.slice(0,5)} admin={false}/>
    </SideBar>

  )
}

export default Dashboard
