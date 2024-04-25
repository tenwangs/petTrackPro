import React from 'react';
import { FaSearch } from 'react-icons/fa';
import Image from 'next/image';
import Pet from '/app/dashboard/find-pet/is.jpeg';

function Page() {
  return (
    <div>
      <div className='flex justify-center items-center p-4'>
        <div className='relative'>
          <input
            type='text'
            placeholder='Search'
            className='border border-gray-300 rounded-lg p-2 w-96 bg-gray-200 text-gray-800 pl-8'
          />
          <FaSearch className='text-gray-500 absolute top-1/2 left-3 transform -translate-y-1/2' />
        </div>
      </div>

      <div className='shadow shadow-gray-300 rounded-xl p-4 ml-72'>
        <div className='ml-8'>
          <h1 className='text-gray-700 font-semibold text-lg'>Pets</h1>
          <p>Never leave your furry friends behind!</p>
        </div>
        <div className='p-8 grid grid-rows-1 grid-cols-3 gap-4'>
        <div className='bg-gray-100 w-40 h-40 '>
          <div className='rounded-full ml-6 mt-8'>
       <Image
              src={Pet}
              alt="pet image"
              width={40} 
              height={40}
              className='rounded-full'
            />
            
    </div>
     
            <div className='flex flex-col ml-6'>
            <p className='mt-2 text-sm text-gray-600 font-semibold'>Name</p>
            <p className='text-sm mt-2'>Age</p>
            <p className='text-sm'>weight</p>
            <p className='text-sm'>Color</p>
            </div>
        </div>
        <div className='bg-gray-100 w-40 h-40'>
        
         <div className='bg-gray-100 w-40 h-40  overflow-hidden'>
          <div className='rounded-full ml-6 mt-8 '>
       <Image
              src={Pet}
              alt="pet image"
              width={40} 
              height={40}
              className='rounded-full'
            />
            
    </div>
     
            <div className='flex flex-col ml-6'>
            <p className='mt-2 text-sm text-gray-600 font-semibold'>Name</p>
            <p className='text-sm mt-2'>Age</p>
            <p className='text-sm'>weight</p>
            <p className='text-sm'>Color</p>
            </div>
        </div>
        </div>
        <div className='bg-gray-100 w-40 h-40'>
        <div className='bg-gray-100 w-40 h-40'>
        
         <div className='bg-gray-100 w-40 h-40  overflow-hidden'>
          <div className='rounded-full ml-6 mt-8 '>
       <Image
              src={Pet}
              alt="pet image"
              width={40} 
              height={40}
              className='rounded-full'
            />
            
    </div>
     
            <div className='flex flex-col ml-6'>
            <p className='mt-2 text-sm text-gray-600 font-semibold'>Name</p>
            <p className='text-sm mt-2'>Age</p>
            <p className='text-sm'>weight</p>
            <p className='text-sm'>Color</p>
            </div>
        </div>
        </div>
        </div>

        </div>
      </div>
      <div className='w-100 h-80 bg-gray-400 ml-72 mt-10'>
        <p>google map</p>
      </div>
    </div>
  );
}

export default Page;
