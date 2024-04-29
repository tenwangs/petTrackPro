import React from 'react';
import { FaSearch } from 'react-icons/fa';
import Image from 'next/image';
import Pet from '/app/dashboard/find-pet/domchu.png';

function Page() {
  return (
    <div>
      <div className='fixed top-4 right-4'>
        <div className='relative'>
          <input
            type='text'
            placeholder='Search'
            className='border border-[#1579B1] rounded-lg p-2 w-72 mr-44 bg-white text-gray-800 pl-8'
          />
          <div className='absolute top-0 right-0 mt-3 mr-48'>
            <FaSearch className='text-black' />
          </div>
        </div>
      </div>

      <div className='shadow shadow-gray-300 rounded-3xl p-4 ml-72 mt-28'>
        <div className='ml-8'>
          <h1 className='text-gray-700 font-semibold text-lg'>Pets</h1>
          <p>Never leave your furry friends behind!</p>
        </div>
        <div className='p-4 grid grid-rows-1 grid-cols-3 gap-4'>
          <div className='bg-[#EDFFEF] w-60 h-30 rounded-2xl'>
            <div className='rounded-full ml-6 mt-8'>
              <Image
                src={Pet}
                alt='pet image'
                width={50}
                height={50}
                className='rounded-full'
              />
            </div>

            <div className='flex flex-col ml-6'>
              <p className='mt-2 text-md text-[#494949] font-semibold'>
                Domchu
              </p>
              <p className='text-sm mt-1 text-[#7B81A6]'>Age: 11 years</p>
              <p className='text-sm text-[#7B81A6]'>Weight: 12 kg</p>
              <p className='text-sm text-[#7B81A6]'>Color: Black and yellow</p>
            </div>
          </div>
          <div className='bg-[#F4F2FF] w-60 h-30 rounded-2xl'>
            <div className='rounded-full ml-6 mt-8 '>
              <Image
                src={Pet}
                alt='pet image'
                width={50}
                height={50}
                className='rounded-full'
              />
            </div>

            <div className='flex flex-col ml-6'>
              <p className='mt-2 text-md text-[#494949] font-semibold'>
                Domchu
              </p>
              <p className='text-sm mt-1 text-[#7B81A6]'>Age: 11 years</p>
              <p className='text-sm text-[#7B81A6]'>Weight: 12 kg</p>
              <p className='text-sm text-[#7B81A6]'>Color: Black and yellow</p>
            </div>
          </div>

          <div className='bg-[#FFF2EC] w-60 h-30 rounded-2xl'>
            <div className='rounded-full ml-6 mt-8 '>
              <Image
                src={Pet}
                alt='pet image'
                width={50}
                height={50}
                className='rounded-full'
              />
            </div>

            <div className='flex flex-col ml-6'>
              <p className='mt-2 text-md text-[#494949] font-semibold'>
                Domchu
              </p>
              <p className='text-sm mt-1 text-[#7B81A6]'>Age: 11 years</p>
              <p className='text-sm text-[#7B81A6]'>Weight: 12 kg</p>
              <p className='text-sm text-[#7B81A6]'>Color: Black and yellow</p>
            </div>
          </div>
        </div>
      </div>

      <div className='w-100 h-80 bg-gray-400 ml-72 mt-10'>
        <p>Google Map</p>
      </div>
    </div>
  );
}

export default Page;
