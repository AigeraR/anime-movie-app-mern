import React, { useState } from 'react'
import Titles from '../Titles'
import { BsBookmarkStarFill, BsCaretLeftFill,BsCaretRightFill } from 'react-icons/bs';
import { Swiper, SwiperSlide,Breakpoints } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Movies } from '../../Data/MoviesData';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Rating from './Starts';


function TopRated() {
  const [nextEl, setNextEl] = useState(null);
  const [prevEl, setPrevEl] = useState(null);
  const className='hover:bg-dry transitions text-sm rounded w-8 h-8 flex-colo bg-subMain text-white'
  
  return (
    <div className='my-16'>
      <Titles title="Top Rated" Icon={BsBookmarkStarFill} />
      <div className='mt-10'>
        <Swiper
          navigation={{ nextEl,prevEl }}
          // slidesPerView={4}
          spaceBetween={20}
          autoplay={true}
          speed={1000}
          loop={true}
          modules={[Autoplay, Navigation]}
          breakpoints={
            {
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
          
            }
          }
        >
          {
            Movies.map((movie, index) => (
              <SwiperSlide key={index}>
                <div className='p-4 h-rate hovered border border-border bg-dry rounded-lg overflow-hidden '>
                  <img
                    src={`/images/movies/${movie.titleImage}`}
                    alt={movie.name}
                    className='w-full h-full object-cover rounded-lg'

                  />
                  <div className='px-4 hoveres gap-6 text-center absolute bg-black bg-opacity-70 top-0 left-0 right-0 bottom-0'>
                    <button className='w-12 h-12  flex-colo transitions hover:bg-subMain rounded-full bg-white bg-opacity-30 text-white'>
                      <FaHeart />
                    </button>
                    <Link to={`/movie/${movie.name}`} className='font-semibold text-xl trancuted line-clamp-2'>{movie.name}
                    </Link>
                    <div className='flex gap-2 text-star'>
                    <Rating value={movie.rate}/>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
       <div className='w-full px-1 flex-rows gap-6 pt-12'>
         <buttom className={className} ref={(node) => setPrevEl(node)}>
          <BsCaretLeftFill />
         </buttom>
         <buttom className={className} ref={(node) => setNextEl(node)}>
          <BsCaretRightFill />
         </buttom>
       </div>
      </div>
    </div>
  );
}

export default TopRated