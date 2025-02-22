import React, { useState } from 'react'
import Layout from '../../Layout/Layout';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { useParams } from 'react-router-dom';
import { Movies } from '../../Data/MoviesData';
import { FaHeart, FaPlaneSlash, FaPlay } from 'react-icons/fa';
import { BsDownload } from 'react-icons/bs';


function WatchPage() {
    let { id } = useParams();
    const movie = Movies.find((movie) => movie.name === id);
    const [play, setPlay] = useState(false);
    return (
        <Layout>
            <div className='container mx-auto bg-dry p-6 mb-12 '>
                <div className='flex-btn flex-wrap mb-6 gap-2 bg-main rounded border border-gray-800 p-4'>
                    <Link to={`/movie/${movie.name}`}
                        className='md:text-xl text-sm flex gap-3 items-center font-bold text-dryGray'>
                        <BiArrowBack />{movie?.name}
                    </Link>
                    <div className='flex-btn sm:w-auto   w-full gap-5'>
                        <button className='bg-white hover:text-subMain transitions bg-opacity-50  text-white rounded px-4 py-3 text-sm '>
                            <FaHeart />
                        </button>
                        <button className='bg-subMain flex-rows gap-2 hover:text-main transitions text-white rounded font-medium text-sm px-8 py-3'>
                            <BsDownload />Download
                        </button>
                    </div>
                </div>
                {
                    play ? (
                        <video controls
                            autoPlay={play}
                            className='w-full h-full rounded'>
                            <source
                                src="/images/movies/4.mp4" type='video/mp4'
                                title={movie?.name}
                            />

                        </video>
                    ) : (
                        <div className='w-full h-full overflow-hidden relative rounded-lg '>
                            <div className='absolute top-0 left-0 bottom-0 right-0 bg-main bg-opacity-30 flex-colo'>
                                <button onClick={() => setPlay(true)} className='bg-white  text-subMain  border border-subMain rounded-full flex-colo px-8 w-20 h-20 font-medium text-xl'>
                                  <FaPlay/>
                                </button>
                            </div>
                            <img 
                                src={`/images/movies/${movie?.image}`}
                                alt={movie?.name}
                                className='w-full h-full object-cover' />
                        </div>
                    )
                }
            </div>
        </Layout>

    )
}

export default WatchPage