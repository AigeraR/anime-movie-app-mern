import React from 'react'
import { useDropzone } from 'react-dropzone';
import { FiUpload } from 'react-icons/fi';

function Uploder() {
    const { getRootProps, getInputProps } = useDropzone({
        multiple: false,
        maxSize: 1000000,
        onDrop: (acceptedFiles) => {
            alert(acceptedFiles[0].name);
        },
    });
    return (
        <div className='w-full text-center'>
            <div
                {...getRootProps()}
                className="px-6 pt-5 pb-6 border-2 border-border border-dashed rounded-md bg-main cursor-pointer ">
                <input {...getInputProps()} />
                <span className='mx-auto flex-colo text-subMain text-3xl'>
                    <FiUpload />
                </span>
                <p className='text-sm mt-2'>Drag your image here</p>
                <em className='text-xs text-border'>
                    {'Only *.jpeg and *.png images will be accepted'}
                </em>
            </div>

        </div>
    )
}

export default Uploder;