import React, { useState } from 'react';
import Titles from '../Titles';
import { BsBookmarkStarFill } from 'react-icons/bs';
import { Message, Select } from '../UserdInput';
import Rating from '../Home/Starts';
import { UsersData } from '../../Data/MoviesData';

function MovieRates({ movie }) {
  const Ratings = [
    { title: "0-Poor", value: 0 },
    { title: "1-Bad", value: 1 },
    { title: "2-Good", value: 2 },
    { title: "3-Very Good", value: 3 },
    { title: "4-Excellent", value: 4 }
  ];

  const [rating, setRating] = useState(0); // Set a default value for rating

  return (
    <div className='my-12'>
      <Titles title="Rating" Icon={BsBookmarkStarFill} />
      <div className='mt-10 xl:grid flex-colo grid-cols-5 gap-12 bg-dry xs:p-10 py-10 px-2 sm:p-20'>
        <div className='xl:col-span-2 w-full flex flex-col gap-8'>
          <h3 className='text-xl text-text font-semibold'>
            Reviews "{movie?.name}"
          </h3>
          <p className='text-sm leading-7 font-medium text-border'>
            Write a review for this movie.
            It will lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className='text-sm w-full'>
            <Select label="Select Rating"
              option={Ratings}
              onChange={(e) => setRating(parseInt(e.target.value))} // Parse value to integer
            />
            <div className='flex mt-4 text-lg gap-2 text-star'>
              <Rating value={rating} />
            </div>
          </div>
          <Message label="Message" placeholder="Write a review" />
          <button  className='bg-subMain text-white w-full py-3 flex-colo rounded '>
            Submit
          </button>
        </div>
        <div className='col-span-3 flex flex-col gap-6'>
          <h3 className='text-xl text-text font-semibold'>Rewiews (54)</h3>
          <div className='w-full flex flex-col bg-main gap-6 rounded-lg md:p-12 p-6 h-header overflow-y-scroll'>
            {
              UsersData.map((user, index) => (
                <div key={index} className='md:grid flex flex-col w-full grid-cols-12 gap-6 bg-dry  p-4 border-gray-800 rounded-lg'>
                  <div className='col-span-2 bg-main hidden md:block'>
                    <img src={`/images/casts/${user ? user.image : "user.jpg"}`}
                      alt={user.fullName}
                      className='w-full h-24  object-cover rounded-lg'
                    />
                  </div>
                  <div className='col-span-7 flex flex-col gap-2'>
                    <h2>{user.fullName}</h2>
                    <p className='text-xs leading-6 font-medium text-text'>
                      {user.comment}
                    </p>
                  </div>
                  <div className='col-span-3 flex-rows border-l border-border text-xs gap-1 text-star'>
                    <Rating value={user.rate} />
                  </div>
               </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>

  );
}

export default MovieRates;
