'use client';
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Circle } from 'rc-progress';
import Image from 'next/image';
import Pet from '../../../app/dashboard/pets/profile.png';
import Vet from '../../../app/dashboard/vet-hospital/vet.png';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { Button, TextField } from '@mui/material';
import Collar from '../../../app/dashboard/pets/collar.png';
import { FaBatteryThreeQuarters } from 'react-icons/fa6';

function page() {
  return (
    <div className='flex flex-row'>
      <div className='ml-16'>
        <div className='flex justify-center items-center p-4'>
          <div className='fixed top-4 right-4'>
            <div className='relative'>
              <input
                type='text'
                placeholder='Search'
                className='border border-[#1579B1] rounded-lg p-2 w-72 mr-80 bg-white text-gray-800 pl-8'
              />
              <div className='absolute top-0 right-40 mt-3 mr-44'>
                <FaSearch className='text-black' />
              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-rows-1 grid-cols-3 gap-4 rounded-xl mt-16 ml-8'>
          <div className='bg-[#EDFFEF] w-60 h-20 flex flex-row rounded-xl'>
            <Circle
              percent={80}
              strokeWidth={6}
              strokeColor='#55A55E'
              className='ml-4 w-10 h-10 mt-4'
            />
            <p className='mt-6 ml-2 text-[#55A55E] font-semibold'> Activity</p>
          </div>
          <div className='bg-[#F4F2FF] w-60 h-20 flex flex-row rounded-xl'>
            <Circle
              percent={85}
              strokeWidth={6}
              strokeColor='#5E5498'
              className='ml-4  w-10 h-10 mt-4'
            />
            <p className='mt-6 ml-2 text-[#5E5498] font-semibold'> Sleep</p>
          </div>

          <div>
            <div className='bg-[#FFF2EC] w-60 h-20 flex flex-row rounded-xl'>
              <Circle
                percent={68}
                strokeWidth={6}
                strokeColor='#9B715D'
                className='ml-4 w-10 h-10 mt-4'
              />
              <p className='mt-6 ml-2 text-[#9B715D] font-semibold'>
                {' '}
                Wellness
              </p>
            </div>
          </div>

          <div className='grid grid-rows-1 grid-cols-3 mt-8 '>
            <div className='bg-green-600 w-2 h-2 rounded-full '>
              <div className=''>
                <p className='text-xs text-green-600 ml-4 font-semibold '>
                  Activity
                </p>
              </div>
            </div>
            <div className='bg-blue-600 w-2 h-2 rounded-full '>
              <div className=''>
                <p className='text-xs text-blue-600 ml-4 font-semibold '>
                  Sleep
                </p>
              </div>
            </div>
            <div className='bg-orange-600 w-2 h-2 rounded-full '>
              <div className=''>
                <p className='text-xs text-orange-600 ml-4 font-semibold '>
                  Wellness
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-[#EBF5FC] h-40 mt-12 ml-8 rounded-xl flex flex-row'>
          <div className='w-120 h-120 ml-8'>
            <Image src={Vet} alt='pet image' className='object-cover '></Image>
          </div>
          <div>
            <div className='carousel w-full h-16 ml-8 mt-12'>
              <div id='item1' className='carousel-item w-full text-[#1579B1]'>
                <p>
                  “ According to the LAB 2001 and Section 20.2 of the LRR 2017,
                  your pet dog must be registered , identified , and vaccinated
                  against rabies and other diseases.”{' '}
                </p>
              </div>
              <div id='item2' className='carousel-item w-full text-[#1579B1]'>
                <p>pet owner </p>
              </div>
              <div id='item3' className='carousel-item w-full text-[#1579B1]'>
                <p>pet pet</p>
              </div>
              <div id='item4' className='carousel-item w-full text-[#1579B1]'>
                <p>pet not stable </p>
              </div>
            </div>
            <div className='flex justify-center py-2 gap-2'>
              <a
                href='#item1'
                className='w-2 h-2 bg-[#5A92B1] rounded-full'
              ></a>
              <a
                href='#item2'
                className='w-2 h-2 bg-[#5A92B1] rounded-full'
              ></a>
              <a
                href='#item3'
                className='w-2 h-2 bg-[#5A92B1] rounded-full'
              ></a>
              <a
                href='#item4'
                className='w-2 h-2 bg-[#5A92B1] rounded-full'
              ></a>
            </div>
          </div>
        </div>
        <div className='shadow shadow-gray-400 rounded-xl p-4 mt-8 ml-8 '>
          <div className='ml-8'>
            <h1 className='text-gray-700 font-semibold text-lg'>Pets</h1>
            <p>Never leave your furry friends behind!</p>
          </div>
          <div className='p-8 grid grid-rows-1 grid-cols-3 gap-4'>
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

              <div className='flex flex-col ml-6'>
                <p className='mt-2 text-md text-[#494949] font-semibold'>
                  Domchu
                </p>
                <p className='text-sm mt-1 text-[#7B81A6]'>Age: 11 years</p>
                <p className='text-sm text-[#7B81A6]'>Weight: 12 kg</p>
                <p className='text-sm text-[#7B81A6]'>
                  Color: Black and yellow
                </p>
              </div>
            </div>

            <div className='flex justify-center items-center bg-[#F4F2FF] w-60 h-30 rounded-2xl'>
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
                <p className='text-sm text-[#7B81A6]'>
                  Color: Black and yellow
                </p>
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

              <div className='flex flex-col ml-6'>
                <p className='mt-2 text-md text-[#494949] font-semibold'>
                  Domchu
                </p>
                <p className='text-sm mt-1 text-[#7B81A6]'>Age: 11 years</p>
                <p className='text-sm text-[#7B81A6]'>Weight: 12 kg</p>
                <p className='text-sm text-[#7B81A6]'>
                  Color: Black and yellow
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-row '>
        <div className='border border-shadow-400 ml-20 w-80 flex flex-row'>
          <IoMdNotificationsOutline className='w-6 h-6 flex ml-20 mt-5' />
          <div className='mt-2 '>
            <Image
              src={Pet}
              width={48}
              height={48}
              alt='Image'
              className='rounded-full mt-2'
            />
          </div>
          <div className='mt-6'>
            <p className='text-sm font-semibold text-gray-600'>Jigme Choden</p>
          </div>

          <div className='ml-4 mt-6 absolute'>
            <div className='w-60 h-72 rounded-xl shadow shadow-gray-300 bg-[#F7F9FD] mt-16 ml-6 '>
              <p className='ml-16 text-[#1579B1] p-2 '>Add Pet details</p>
              <div className='flex flex-col h-8'>
                <input
                  type='text'
                  placeholder='Name'
                  className='border border-white rounded-lg p-4 w-52 h-7 bg-white text-gray-800 pl-8 ml-4 mt-2'
                />
                <input
                  type='text'
                  placeholder='Age'
                  className='border border-white rounded-lg p-4 w-52 h-7 bg-white text-gray-800 pl-8 ml-4 mt-2'
                />
                <input
                  type='text'
                  placeholder='Breed'
                  className='border border-white rounded-lg p-4 w-52 h-7 bg-white text-gray-800 pl-8 ml-4 mt-2'
                />
                <input
                  type='text'
                  placeholder='Color'
                  className='border border-white rounded-lg p-4 w-52 h-7 bg-white text-gray-800 pl-8 ml-4 mt-2'
                />
                <div className='bg-[#1579B1] w-28 rounded-xl ml-16 mt-4'>
                  <Button className='ml-4 text-white font-bold'>
                    Add Pets
                  </Button>
                </div>
              </div>
            </div>

            <div className='w-72 mt-8 shadow shadow-gray-300 bg-[#F7F9FD] h-20 flex flex-row rounded-xl'>
              <div className='w-80 h-20 ml-8 mt-6'>
                <Image
                  src={Collar}
                  height={100}
                  width={100}
                  alt='Collar'
                ></Image>
              </div>
              <div className='absolute ml-40 mt-2 flex flex-col'>
                <p className='text-black font-semibold mr-0'>
                  Pet Tracker Collar
                </p>
                <div className='flex flex-row'>
                  <FaBatteryThreeQuarters className='w-8 h-5 text-[#494949]' />
                  <p className='text-[#494949] text-sm font-semibold '>80%</p>
                </div>
              </div>
            </div>

            <div className='mt-8 ml-20 text-black'>
              <p className='font-semibold '>Requirements</p>
            </div>
            <div className='grid grid-col-3'>
              <div className='ml-10 mt-4'>
                <div className='bg-[#EDFFEF] w-48 rounded-xl h-16 flex flex-row'>
                  <Circle
                    percent={70}
                    strokeWidth={6}
                    strokeColor='#02bf34 '
                    className='ml-4  w-10 h-10 mt-4'
                  />
                  <p className='mt-6 ml-2 text-green-500 font-semibold'>
                    {' '}
                    Activity
                  </p>
                </div>
              </div>
              <div className='ml-10 mt-4 '>
                <div className='bg-[#F4F2FF] w-48 rounded-xl h-16 flex flex-row'>
                  <Circle
                    percent={12}
                    strokeWidth={6}
                    strokeColor='blue '
                    className='ml-4 w-10 h-10 mt-4'
                  />
                  <p className='mt-6 ml-2 text-blue-500 font-semibold'>
                    {' '}
                    Sleep
                  </p>
                </div>
              </div>
              <div className='ml-10 mt-4 '>
                <div className='bg-[#FFF2EC] w-48 rounded-xl h-16 flex flex-row'>
                  <Circle
                    percent={45}
                    strokeWidth={6}
                    strokeColor='orange '
                    className='ml-4  w-10 h-10 mt-4'
                  />
                  <p className='mt-6 ml-2 text-orange-500 font-semibold'>
                    {' '}
                    Wellness
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
