import { Dialog, Transition } from '@headlessui/react'
import React, { useRef } from 'react'
import { IoClose } from 'react-icons/io5'
import { Fragment } from 'react'

function MainModal({ modalOpen, setModalOpen, children }) {
    const cancelButtonRef = useRef();
    return (
        <>
            <Transition show={modalOpen} as={Fragment} appear>
                <Dialog as="div"
                    className="relative z-30 inset-0 overflow-y-auto text-center bg-white  bg-opacity-100"
                    initialFocus={cancelButtonRef}
                    onClose={() => setModalOpen(false)}>
                    <div className=" fixed min-h-screen px-4">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 sclae-95">
                            <Dialog.Overlay className="fixed inset-0 bg-main opacity-60" />
                        </Transition.Child>
                        <span className="inline-block h-screen align-middle" aria-hidden="true">
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            {children}
                        </Transition.Child>
                        <div className="absolute right-0 top-10">
                            <button onClick={() => setModalOpen(false)} type='button'
                                className='transitions  w-12 h-12 flex-colo text-base font-bold text-white bg-subMain  rounded-full hover:bg-white hover:text-subMain '>
                                <IoClose />
                            </button>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default MainModal