import React from 'react'
import Titles from '../Titles'
import { FaUserFriends } from 'react-icons/fa';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { UsersData } from '../../Data/MoviesData';
function MovieCasts() {
  return (
    <div className='my-12'>
      <Titles title="Casts" Icon={FaUserFriends} />
      <div className='mt-10'>
        <Swiper
          autoplay={{
            delay: 100,
            disableOnInteraction: false
          }}
          loop={true} speed={2000} modules={[Autoplay]}
          spaceBetween={10}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5, spaceBetween: 30 },

          }}

        >
          {
            UsersData.map((user, index) => (
              <SwiperSlide key={index}>
                <div className='w-100 p-3 italic text-text rounded flex-colo bg-dry border-border-800'>
                  <img
                    src={`/images/casts/${user.image}`}
                    alt={user.fullName}
                    style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                    className='rounded mb-2'
                  />
                  <p>{user?.fullName}</p>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}

export default MovieCasts