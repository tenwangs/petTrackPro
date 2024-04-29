'use client';
import { useState } from 'react';
import Image from 'next/image';
import Profile from '/public/assets/images/profile.png';
import Pet from '/public/assets/images/pet.png';
import {
  faUser,
  faEnvelope,
  faPhone,
  faGenderless,
  faMapMarkerAlt,
  faCalendar,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDog,
  faVenusMars,
  faCalendarAlt,
  faPaw,
  faWeightHanging,
  faArrowsAltV,
} from '@fortawesome/free-solid-svg-icons';

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

    console.log(profile);
  };

  const handlePhotoChange = (e) => {
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
            <div className='grid grid-cols-2 gap-6 mt-6'>
              <div className='relative ml-32 '>
                <input
                  type='text'
                  name='name'
                  placeholder='Jigme Choden'
                  className='border border-[#1579B1] rounded-lg p-4 w-80 h-7 bg-white text-[#014550] pl-10 mt-2 relative text-center'
                  onChange={handleChange}
                />
                <div className='absolute left-3 top-3 text-[#1579B1]'>
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <div className='absolute left-8 top-2 h-7 bg-[#1579B1] w-0.5'></div>
              </div>

              <div className='relative'>
                <input
                  type='text'
                  placeholder='Female'
                  className='border border-[#1579B1] rounded-lg p-4 w-80 h-7 bg-white text-[#014550] pl-8 mt-2 text-center '
                />
                <div className='absolute left-3 top-3 text-[#1579B1]'>
                  <FontAwesomeIcon icon={faGenderless} />
                </div>
                <div className='absolute left-8 top-2 h-7 bg-[#1579B1] w-0.5'></div>
              </div>

              <div className='relative ml-32'>
                <input
                  type='text'
                  placeholder='Jigme@gmail.com'
                  className='border border-[#1579B1] rounded-lg p-4 w-80 h-7 bg-white text-[#014550] pl-8 mt-2 relative text-center'
                />
                <div className='absolute left-3 top-3 text-[#1579B1]'>
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div className='absolute left-8 top-2 h-7 bg-[#1579B1] w-0.5'></div>
              </div>

              <div className='relative'>
                <input
                  type='text'
                  placeholder='Changzamtog,Thimphu'
                  className='border border-[#1579B1] rounded-lg p-4 w-80 h-7 bg-white text-[#014550] pl-8 mt-2 relative text-center'
                />
                <div className='absolute left-3 top-3 text-[#1579B1]'>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </div>
                <div className='absolute left-8 top-2 h-7 bg-[#1579B1] w-0.5'></div>
              </div>

              <div className='relative ml-32'>
                <input
                  type='text'
                  placeholder='17355266'
                  className='border border-[#1579B1] rounded-lg p-4 w-80 h-7 bg-white text-[#014550] pl-8 mt-2 relative text-center'
                />
                <div className='absolute left-3 top-3 text-[#1579B1]'>
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <div className='absolute left-8 top-2 h-7 bg-[#1579B1] w-0.5'></div>
              </div>

              <div className='relative'>
                <input
                  type='text'
                  placeholder='24 year'
                  className='border border-[#1579B1] rounded-lg p-4 w-80 h-7 bg-white text-[#014550] pl-8 mt-2 relative text-center'
                />
                <div className='absolute left-3 top-3 text-[#1579B1]'>
                  <FontAwesomeIcon icon={faCalendar} />
                </div>
                <div className='absolute left-8 top-2 h-7 bg-[#1579B1] w-0.5'></div>
              </div>
            </div>

            <div className='rounded-lx p-4 flex-1 relative'>
              <button
                type='submit'
                className='border border-[#1579B1] text-[#1579B1] px-4 py-2 rounded-lg absolute top-4 right-4'
              >
                Edit
              </button>
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
          <form onSubmit={handleSubmit}>
            <div className='grid grid-cols-2 gap-6 mt-6'>
              <div className='relative ml-32 '>
                <input
                  type='text'
                  name='name'
                  placeholder='Domchu'
                  className='border border-[#1579B1] rounded-lg p-4 w-80 h-7 bg-white text-[#014550] pl-10 mt-2 relative text-center'
                  onChange={handleChange}
                />
                <div className='absolute left-3 top-3 text-[#1579B1]'>
                  <FontAwesomeIcon icon={faDog} />
                </div>
                <div className='absolute left-8 top-2 h-7 bg-[#1579B1] w-0.5'></div>
              </div>

              <div className='relative'>
                <input
                  type='text'
                  name='breed'
                  placeholder='Golden Retriever'
                  className='border border-[#1579B1] rounded-lg p-4 w-80 h-7 bg-white text-[#014550] pl-8 mt-2 text-center '
                />
                <div className='absolute left-3 top-3 text-[#1579B1]'>
                  <FontAwesomeIcon icon={faPaw} />
                </div>
                <div className='absolute left-8 top-2 h-7 bg-[#1579B1] w-0.5'></div>
              </div>

              <div className='relative ml-32'>
                <input
                  type='text'
                  name='gender'
                  placeholder='Female'
                  className='border border-[#1579B1] rounded-lg p-4 w-80 h-7 bg-white text-[#014550] pl-8 mt-2 relative text-center'
                />
                <div className='absolute left-3 top-3 text-[#1579B1]'>
                  <FontAwesomeIcon icon={faVenusMars} />
                </div>
                <div className='absolute left-8 top-2 h-7 bg-[#1579B1] w-0.5'></div>
              </div>

              <div className='relative'>
                <input
                  type='text'
                  name='weight'
                  placeholder='20 kg'
                  className='border border-[#1579B1] rounded-lg p-4 w-80 h-7 bg-white text-[#014550] pl-8 mt-2 relative text-center'
                />
                <div className='absolute left-3 top-3 text-[#1579B1]'>
                  <FontAwesomeIcon icon={faWeightHanging} />
                </div>
                <div className='absolute left-8 top-2 h-7 bg-[#1579B1] w-0.5'></div>
              </div>

              <div className='relative ml-32'>
                <input
                  type='text'
                  name='age'
                  placeholder='2 months'
                  className='border border-[#1579B1] rounded-lg p-4 w-80 h-7 bg-white text-[#014550] pl-8 mt-2 relative text-center'
                />
                <div className='absolute left-3 top-3 text-[#1579B1]'>
                  <FontAwesomeIcon icon={faCalendarAlt} />
                </div>
                <div className='absolute left-8 top-2 h-7 bg-[#1579B1] w-0.5'></div>
              </div>

              <div className='relative'>
                <input
                  type='text'
                  name='height'
                  placeholder='30 cm'
                  className='border border-[#1579B1] rounded-lg p-4 w-80 h-7 bg-white text-[#014550] pl-8 mt-2 relative text-center'
                />
                <div className='absolute left-3 top-3 text-[#1579B1]'>
                  <FontAwesomeIcon icon={faArrowsAltV} />
                </div>
                <div className='absolute left-8 top-2 h-7 bg-[#1579B1] w-0.5'></div>
              </div>
            </div>

            <div className='rounded-lx p-4 flex-1 relative'>
              <button
                type='submit'
                className='border border-[#1579B1] text-[#1579B1] px-4 py-2 rounded-lg absolute top-4 right-4'
              >
                Edit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
