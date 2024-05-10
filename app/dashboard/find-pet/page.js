import React from 'react';
import { FaSearch } from 'react-icons/fa';
import Image from 'next/image';
import Pet from '/app/dashboard/find-pet/domchu.png';
import Iframe from "react-iframe"

function Page() {
  return (
    <div>
      <div>
        <p className="text-3xl font-bold text-[#5A92B1] mt-16 ml-8">Find your Pet</p>
      </div>
   
      <div className='flex flex-col shadow shadow-gray-300 rounded-3xl p-4 ml-72 mt-28'>
        <div className='ml-8'>
          <h1 className='text-gray-700 font-semibold text-lg'>Pets</h1>
          <p>Never leave your furry friends behind!</p>
        </div>
        <div className='p-4 grid grid-rows-1 grid-cols-3 gap-3'>

          <div className='flex justify-center items-center bg-[#EDFFEF] w-60 h-30 rounded-2xl'>
            <div className='rounded-full ml-6 mt-8'>
              <Image
                src={Pet}
                alt='pet image'
                width={50}
                height={50}
                className='rounded-full'
              />
            </div>

            <div className='flex flex-col ml-6 '>
              <p className='mt-2 text-md text-[#494949] font-semibold'>
                Domchu
              </p>
              <p className='text-sm mt-1 text-[#7B81A6]'>Age: 11 years</p>
              <p className='text-sm text-[#7B81A6]'>Weight: 12 kg</p>
              <p className='text-sm text-[#7B81A6]'>Color: Black and yellow</p>
            </div>
          </div>
          <div className=' flex justify-center items-center bg-[#F4F2FF] w-60 h-30 rounded-2xl'>
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

          <div className='flex justify-center items-center bg-[#FFF2EC] w-60 h-30 rounded-2xl'>
            <div className='rounded-full ml-6 mt-8 '>
              <Image
                src={Pet}
                alt='pet image'
                width={50}
                height={50}
                className='rounded-full'
              />
            </div>

            <div className='flex flex-col ml-6 mb-5'>
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

      <div className='w-100 h-80 bg-gray-400 ml-72 mt-10 shadow shadow-gray-300 rounded-2xl '>
        {/* <p>Google Map</p> */}
        <Iframe className='w-full h-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.6775697577946!2d89.39141747624615!3d26.850205776684437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e3cb2c210e611d%3A0x44c5cb2cd32b18d4!2sCollege%20of%20Science%20and%20Technology!5e0!3m2!1sen!2sbt!4v1715359559727!5m2!1sen!2sbt" width="900" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></Iframe>
      </div>
    </div>
  );
}

export default Page;
