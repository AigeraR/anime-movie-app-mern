import React,{useState}from 'react'
import SideBar from '../SideBar';
import { Movies } from '../../../Data/MoviesData';
import { HiPlus, HiPlusCircle } from 'react-icons/hi';
import Table2 from '../../../Components/Table2';
import { CategoriesDate } from '../../../Data/CategoriesData';
import CategoryModal from '../../../Components/Modals/CategoryModal';


const Categories = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <SideBar>
      <CategoryModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <div className='flex flex-col gap-5'>
        <div className='flex-btn gap-2'>
          <h2 className='text-xl font-bold'>Categories</h2>
          <button 
          onClick={() => setModalOpen(true)}
          className='bg-subMain flex-rows  transitions text-sm hover:bg-main border  border-subMain flex-rows gap-4 text-white py-2 px-4 w-full rounded sm:w-auto'>
           <HiPlusCircle /> Create
          </button>

        </div>
        <Table2 data={CategoriesDate} users={false} />
      </div>
    </SideBar>
  )
}

export default Categories;
