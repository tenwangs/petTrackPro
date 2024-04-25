'use client';
import { useState } from 'react';
import Image from 'next/image';
import Profile from '/public/assets/images/profile.png';
import Pet from '/public/assets/images/pet.png';

const Page = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    gender: '',
    address: '',
    age: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(profile);
    // You can send the profile data to your backend or perform any other actions here
  };
  const handlePhotoChange = (e) => {
    // Handle photo change here
    // You can use e.target.files to access the uploaded file
    console.log('Photo changed:', e.target.files[0]);
  };

  return (
    <div className='container mx-auto p-4'>
      <h2 className='text-[#5A92B1] text-lg font-bold mb-4'>User Profile</h2>
      <div className='flex flex-row'>
        <div className='bg-[#EBF5FC] shadow-lg rounded-md p-16 w-64 h-72 flex items-center justify-center mr-4'>
          <Image
            src={Profile}
            alt='login'
            className='h-44 w-44 object-cover rounded-full'
          />
        </div>

        <div className='bg-[#EBF5FC] shadow-lg rounded-md p-4 flex-1'>
          <form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label
                htmlFor='name'
                className='block text-sm font-medium text-gray-700'
              >
                Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                value={profile.name}
                onChange={handleChange}
                className='shadow-sm block sm:text-sm border-[#1579B1] rounded-md py-2'
                placeholder='Jigme Choden'
              />
            </div>
          </form>
        </div>
      </div>

      <h2 className='text-[#5A92B1] text-lg font-bold mb-4'>Pet Profile</h2>
      <div className='flex flex-row'>
        <div className='bg-[#EBF5FC] shadow-lg rounded-md p-16 w-64 h-72 flex items-center justify-center mr-4'>
          <Image
            src={Pet}
            alt='pet'
            className='h-32 w-32 object-cover rounded-full'
          />
        </div>

        <div className='bg-[#EBF5FC] shadow-lg rounded-md p-4 flex-1'>
          <form onSubmit={handleSubmit}></form>
        </div>
      </div>
    </div>
  );
};

export default Page;
