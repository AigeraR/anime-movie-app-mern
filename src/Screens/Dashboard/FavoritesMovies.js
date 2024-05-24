import React from 'react'
import SideBar from './SideBar';
import Table from '../../Components/Table';
import { Movies } from '../../Data/MoviesData';

const FavoritesMovies = () => {
  return (
    <SideBar>
      <div className='flex flex-col gap-6'>
        <div className='flex-btn gap-2'>
          <h2 className='text-xl font-bold'>Favorite Movies</h2>
          <button className='bg-main transitions text-sm hover:bg-subMain border  border-subMain flex-rows gap-4 text-white py-2 px-4 w-full rounded sm:w-auto'>
            Delete All
          </button>

        </div>
        <Table  data={Movies} admin={false}/>
      </div>
    </SideBar>
  )
}

export default FavoritesMovies;
