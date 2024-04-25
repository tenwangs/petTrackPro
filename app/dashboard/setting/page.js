import React from 'react'
import Image from 'next/image'
import Owner from '../../../app/dashboard/setting/owner.jpg'

function page() {
  return (
    <div className='flex justify-center items-center flex flex-col'>
      <div>
        <p className='text-blue-600 font-bold text-xl ml-8 mt-8'>User Profile</p>
      </div>
      <div className='flex flex-row '>
        <div className='bg-blue-100 w-48 h-60 ml-8 mt-8 rounded-xl'>
        <div className='p-8 mt-8 rounded-full'>
          <Image src={Owner} width={120} height={120} alt={'owner profile'} className='rounded-full'></Image>
        </div>
      </div>
      <div className='bg-blue-100 w-80 h-60 ml-8 mt-8 rounded-xl'>
        <div ></div>
      </div>
      </div>
      
    </div>
  )
}

export default page