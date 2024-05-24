import React from 'react';
import Layout from '../Layout/Layout';
import Filters from '../Components/Home/Filters';
import Movie from '../Components/Movie';
import { Movies } from '../Data/MoviesData';
import { CgSpinner } from 'react-icons/cg';

function MoviesPage() {
  const maxPage = 3;
  const [page, setPage] = React.useState(maxPage);
  const [isLoading, setIsLoading] = React.useState(false); // Состояние для отслеживания загрузки данных

  const HandleLoadingMore = () => {
    setIsLoading(true); // Устанавливаем isLoading в true перед началом загрузки
    setTimeout(() => {
      setPage(page + maxPage);
      setIsLoading(false); // Устанавливаем isLoading в false после загрузки данных
    }, 1000); // Моковая задержка для имитации загрузки данных
  };

  return (
    <Layout>
      <div className='min-height-screen px-2 container mx-auto my-6'>
        <Filters />
        <p className='text-lg font-medium my-6'>
          Total <span className='font-bold text-subMain'>{Movies?.length}</span>{' Movies Found'}
        </p>
        <div className='grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6'>
          {Movies.slice(0, page)?.map((movie, index) => (
            <Movie key={index} movie={movie} />
          ))}
        </div>
        <div className='w-full flex-colo md:my-20 my-10'>
          <button onClick={HandleLoadingMore} className='flex-rows rounded font-semibold gap-3 px-8 py-3 border-subMain border-2 text-white'>
          {isLoading && <CgSpinner className='animate-spin' />}
          {isLoading ? 'Loading' : 'Loading More'}
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default MoviesPage;
