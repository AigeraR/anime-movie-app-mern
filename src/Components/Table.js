import React from 'react';
import { BiEdit } from 'react-icons/bi';
import { FaCloudDownloadAlt, FaEdit } from 'react-icons/fa';
import { GoEye } from 'react-icons/go';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Head = 'text-xs text-main font-semibold px-6 py-2 text-left';
const Text = 'text-sm text-left leading-4 whitespace-nowrap px-3 py-4';
 const Rows = (movie, i, admin) => {
        return (
            <tr key={i}>
                <td className={`${Text}`}>
                    <div className='w-16 p-1 bg-dry border border-border h-12 rounded overflow-hidden'>
                        <img
                            src={`/images/movies/${movie.titleImage}`}
                            alt={movie.name}
                            className=' w-16 h-12 rounded object-cover'
                        />
                    </div>
                </td>
                <td className={`${Text} truncate`}>{movie.name}</td>
                <td className={`${Text}`}>{movie.category}</td>
                <td className={`${Text}`}>{movie.language}</td>
                <td className={`${Text}`}>{movie.year}</td>
                <td className={`${Text}`}>{movie.time}</td>
                <td className={`${Text} float-right flex-rows gap-2`}>
                    {
                        admin==true ?(
                            <>
                                <button className=' flex-rows bg-main border-border border-2 text-dryGray gap-2  rounded  p-1'>
                                    Edit <FaEdit className='text-green-500' />
                                </button>
                                <button className=' flex-rows bg-subMain text-white rounded  w-10 h-8'>
                                    <MdDelete />
                                </button>
                            </>
                        ) : (
                            <>
                                <button className='flex flex-rows bg-dry border-border gap-2 border-2 text-border rounded  p-1'>
                                    Dowload <FaCloudDownloadAlt className='text-green-500' />
                                </button>
                                <Link to={`/movie/${movie?.name}`} className='flex flex-rows bg-subMain text-white rounded  w-10 h-8'>
                                    <GoEye />
                                </Link>
                            </>
                        )
                    }
                </td>
            </tr>
        )
    }

function Table({ data, admin }) {
   
    return (
        <div className='overflow-x-scroll overflow-hidden relative w-full'>
            <table className='w-full table-auto border border-border devide-y divide-border devide-border'>
                <thead>
                    <tr className='bg-dryGray'>
                        <th scole="col" className={`${Head}`}>Image</th>
                        <th scole="col" className={`${Head}`}>Name</th>
                        <th scole="col" className={`${Head}`}>Category</th>
                        <th scole="col" className={`${Head}`}>Language</th>
                        <th scole="col" className={`${Head}`}>Year</th>
                        <th scole="col" className={`${Head}`}>Hours</th>
                        <th scole="col" className={`${Head} text-end`}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((movie, i) => Rows(movie, i, admin))}
                </tbody>
            </table>
        </div>
    )
}

export default Table