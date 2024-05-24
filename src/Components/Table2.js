import React from 'react';
import { BiEdit } from 'react-icons/bi';
import { BsDatabaseDown } from 'react-icons/bs';
import { FaCloudDownloadAlt, FaEdit } from 'react-icons/fa';
import { GoEye } from 'react-icons/go';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';


const Head = 'text-xs text-main font-semibold px-6 py-2 text-left';
const Text = 'text-sm text-left leading-4 whitespace-nowrap px-3 py-4';

const Rows = (data, i, users) => {
    return (
        <tr key={i}>
            {
                users ? (
                    <>
                        <td className={`${Text}`}>
                            <div className='w-16 p-1 bg-dry border border-border h-12 rounded overflow-hidden'>
                                <img
                                    src={`/images/casts/${data.image ? data.image : 'user.png'}`}
                                    alt={data?.name}
                                    className=' w-16 h-12 rounded object-cover'
                                />
                            </div>
                        </td>
                        <td className={`${Text} truncate`}>{data?._id ? data?._id : '2t4dh7'}</td>
                        <td className={`${Text}`}>{data.createAlt ? data.createAlt : '12, Feb 2021'}</td>
                        <td className={`${Text}`}>{data.fullName}</td>
                        <td className={`${Text}`}>{data.email}</td>
                        <td className={`${Text} float-right flex-rows gap-2`}>
                            <button className=' flex-rows bg-subMain text-white rounded  w-10 h-8'>
                                <MdDelete />
                            </button>
                        </td>
                    </>
                ) : (
                    <>
                        <td className={`${Text} font-bold`}>{data?._id ? data?._id : '2t4dh7'}</td>
                        <td className={`${Text}`}>{data.createAlt ? data.createAlt : '12, Feb 2021'}</td>
                        <td className={`${Text}`}>{data.title}</td>
                        <td className={`${Text} float-right flex-rows gap-2`}>
                            <button className=' flex-rows bg-main border-border border-2 text-dryGray gap-2  rounded  p-1'>
                                Edit <FaEdit className='text-green-500' />
                            </button>
                            <button className=' flex-rows bg-subMain text-white rounded  w-10 h-8'>
                                <MdDelete />
                            </button>
                        </td>
                    </>
                )
            }
        </tr>

    )
}
function Table2({ data, users }) {
    return (
        <div className='overflow-x-scroll overflow-hidden relative w-full'>
            <table className='w-full table-auto border border-border devide-y divide-border devide-border'>
                <thead>
                    <tr className='bg-dryGray'>
                        {users ?
                            (
                                <>
                                    <th scole="col" className={`${Head}`}>Image</th>
                                    <th scole="col" className={`${Head}`}>ID</th>
                                    <th scole="col" className={`${Head}`}>Date</th>
                                    <th scole="col" className={`${Head}`}>Full Name</th>
                                    <th scole="col" className={`${Head}`}>Email</th>
                                </>

                            ) : (
                                <>
                                    <th scole="col" className={`${Head}`}>ID</th>
                                    <th scole="col" className={`${Head}`}>Date</th>
                                    <th scole="col" className={`${Head}`}>Title</th>
                                </>
                            )
                        }
                        <th scole="col" className={`${Head} text-end`}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((data, i) => Rows(data, i, users))}
                </tbody>
            </table>
        </div>
    )
}

export default Table2