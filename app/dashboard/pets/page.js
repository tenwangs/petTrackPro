"use client";
import React from 'react'
import { FaSearch } from 'react-icons/fa';
import { Circle } from 'rc-progress';
import Image from 'next/image';
import Pet from "../../../app/dashboard/pets/pet.jpg"
import Vet from '../../../app/dashboard/pets/vet.jpg'
import { IoMdNotificationsOutline } from "react-icons/io";
import { Button, TextField } from '@mui/material';
import Collar from '../../../app/dashboard/pets/blue.jpg'
import { FaBatteryThreeQuarters } from "react-icons/fa6";

function page() {
  return (
    <div className='flex flex-row'>
    <div className='ml-16'>
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
      <div className='grid grid-rows-1 grid-cols-3 gap-4 rounded-xl mt-8 ml-8'>
        <div className='bg-green-100 w-60 h-20 flex flex-row'>
          <Circle percent={70} strokeWidth={6} strokeColor="#02bf34 " className='ml-4  w-10 h-10 mt-4'  />
          <p className='mt-6 ml-2 text-green-500 font-semibold'> Activity</p>
        </div>
         <div className='bg-blue-100 w-60 h-20 flex flex-row rounded-xl'>
          <Circle percent={70} strokeWidth={6} strokeColor="blue " className='ml-4  w-10 h-10 mt-4'  />
          <p className='mt-6 ml-2 text-blue-500 font-semibold'> sleep</p>
        </div>

        <div>
           <div className='bg-orange-100 w-60 h-20 flex flex-row rounded-xl'>
          <Circle percent={70} strokeWidth={6} strokeColor="orange " className='ml-4  w-10 h-10 mt-4'  />
          <p className='mt-6 ml-2 text-orange-500 font-semibold'> Wellness</p>
        </div>
        </div>

          <div className='grid grid-rows-1 grid-cols-3 mt-8 '>
            <div className='bg-green-600 w-3 h-3 rounded-full '>
            <div className=''>
              <p className='text-xs text-green-600 ml-4 font-semibold '>Activity</p>
            </div>
          
        </div>
        <div className='bg-blue-600 w-3 h-3 rounded-full '>
            <div className=''>
              <p className='text-xs text-blue-600 ml-4 font-semibold '>Sleep</p>
            </div>
          
        </div>
        <div className='bg-orange-600 w-3 h-3 rounded-full '>
            <div className=''>
              <p className='text-xs text-orange-600 ml-4 font-semibold '>Wellness</p>
            </div>
          
        </div>
          </div>
        
      </div>
       <div className='bg-blue-200 h-40 mt-12 ml-8 rounded-xl flex flex-row'>
       <div className='w-40 h-40 bg-gray-100 ml-8'>
        <Image
        src={Vet}
        width={100}
        height={100}
        alt='pet image'
        className='object-cover w-full h-40 '
        ></Image>
       </div>
       <div>
        <div className="carousel w-full  h-28 ml-20 mt-2">
  <div id="item1" className="carousel-item w-full text-gray-600">
    <p>Lorem Ipsum</p>
  </div> 
  <div id="item2" className="carousel-item w-full text-gray-600">
    <p>pet owner </p>
  </div> 
  <div id="item3" className="carousel-item w-full text-gray-600">
   <p>pet pet</p>
  </div> 
  <div id="item4" className="carousel-item w-full text-gray-600">
   <p>pet not stable </p>
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2 mt-2 ml-20">
  <a href="#item1" className="w-2 h-2 bg-blue-800 rounded-full">.</a> 
  <a href="#item2" className="w-2 h-2 bg-blue-800 rounded-full">.</a> 
  <a href="#item3" className="w-2 h-2 bg-blue-800 rounded-full">.</a> 
  <a href="#item4" className="w-2 h-2 bg-blue-800 rounded-full">.</a>
</div>
       </div>
      
      </div>
       <div className='shadow shadow-gray-400 rounded-xl p-4 mt-8 ml-8 '>
        <div className='ml-8'>
          <h1 className='text-gray-700 font-semibold text-lg'>Pets</h1>
          <p>Never leave your furry friends behind!</p>
        </div>
        <div className='p-8 grid grid-rows-1 grid-cols-3 gap-4'>
        <div className='bg-gray-100 w-68 h-40 '>
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
        
        
         <div className='bg-gray-100 w-68 h-40  overflow-hidden'>
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
        
     
        
         <div className='bg-gray-100 w-68 h-40  overflow-hidden'>
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
    
   <div className='flex flex-row'>
  <div className='border border-shadow-400 rounded-xl ml-20 w-80 flex flex-row'>
    <IoMdNotificationsOutline className='w-6 h-6 flex ml-20 mt-5' />
    <div className='ml-4 mt-4 '>
      <Image src={Pet} width={28} height={28} alt='Image' className='rounded-full mt-2' />
    </div>
    <div className='mt-6 ml-4'><p className='text-xs  font-semibold text-gray-600'>Name</p></div>
    
    
    <div className='ml-4 mt-6 absolute'>
      
      <div className='w-60 h-64 rounded-xl shadow shadow-gray-300  mt-16 ml-6 '>
        <p className='ml-16 text-gray-500 p-2 '>Add Pet details</p>     
        <div className='flex flex-col h-8'>
        
        <input
            type='text'
            placeholder='Name'
            className='border border-gray-300 rounded-lg p-2 w-52 h-7 bg-gray-200 text-gray-800 pl-8 ml-4 mt-2'
            
          />
           <input
            type='text'
            placeholder='Age'
            className='border border-gray-300 rounded-lg p-2 w-52 h-7 bg-gray-200 text-gray-800 pl-8 ml-4 mt-2'
            
          />
           <input
            type='text'
            placeholder='Breed'
            className='border border-gray-300 rounded-lg p-2 w-52 h-7 bg-gray-200 text-gray-800 pl-8 ml-4 mt-2'
            
          />
           <input
            type='text'
            placeholder='Color'
            className='border border-gray-300 rounded-lg p-2 w-52 h-7 bg-gray-200 text-gray-800 pl-8 ml-4 mt-2'
            
          />
          <div className='bg-blue-500 w-28 rounded-xl ml-16 mt-4'>
            <Button className='ml-4 text-gray-800 font-bold' >Add Pets</Button>
          </div>
          
        </div>

        
      </div>

      <div className='w-72 mt-8 shadow shadow-gray-300 h-20 flex flex-row'>
        <div className='w-80 h-20 ml-8 mt-2'>
          <Image src={Collar}
          height={100 }
          width={100}
          alt='Collar'
          ></Image>
        </div>
        <div className='absolute ml-40 mt-4 flex flex-col'>
        
          <p className='text-gray-600 font-semibold'>Fi smart collar</p>
          <div className='flex flex-row mt-2'>
            <FaBatteryThreeQuarters  className='w-8 h-5 text-gray-800'/>
            <p className='text-gray-800 text-sm ml-1 font-semibold '>80%</p>
          </div>
          
        </div>
      </div>

      <div className='mt-10 ml-20 text-gray-800'>
        <p className='font-semibold '>Requirements</p>
      </div>
      <div className='grid grid-col-3'>
         <div className='ml-10 mt-4'>
        <div className='bg-green-100 w-48 rounded rounded-xl h-16 flex flex-row'>
          <Circle percent={70} strokeWidth={6} strokeColor="#02bf34 " className='ml-4  w-10 h-10 mt-4'  />
          <p className='mt-6 ml-2 text-green-500 font-semibold'> Activity</p>
        </div>
      </div>
      <div className='ml-10 mt-4 '>
        <div className='bg-blue-100 w-48 rounded rounded-xl h-16 flex flex-row'>
          <Circle percent={70} strokeWidth={6} strokeColor="blue " className='ml-10  w-10 h-10 mt-4'  />
          <p className='mt-6 ml-2 text-blue-500 font-semibold'> Sleep</p>
        </div>
      </div>
       <div className='ml-10 mt-4 '>
        <div className='bg-orange-100 w-48 rounded rounded-xl h-16 flex flex-row'>
          <Circle percent={70} strokeWidth={6} strokeColor="orange " className='ml-4  w-10 h-10 mt-4'  />
          <p className='mt-6 ml-2 text-orange-500 font-semibold'> Wellness</p>
        </div>
      </div>
      </div>
     
    </div>
  </div>
</div>




    

      
    </div>
  )
}

export default page