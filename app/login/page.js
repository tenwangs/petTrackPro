'use client';

import React, { useState } from 'react';
import Login from '/public/assets/images/login.png';
import Image from 'next/image';
import { HiOutlineUser, HiOutlineLockClosed } from 'react-icons/hi';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
    console.log(
      'Logging in with username:',
      username,
      'and password:',
      password
    );

    setUsername('');
    setPassword('');
  };

  return (
    <main className='flex justify-center items-center h-screen'>
      <div
        className={`p-8 border border-[#5A92B1] rounded-xl shadow flex flex-col lg:flex-row items-center mb-40`}
      >
        <div className='w-full lg:w-96'>
          <h2 className='text-center text-xl font-bold mb-4 text-[#5A92B1]'>
            Welcome! Login
          </h2>
          <div className='flex flex-col items-center mb-8 w-full '>
            <div className='relative'>
              <HiOutlineUser className='absolute left-3 top-3 text-gray-500' />
              <input
                type='text'
                placeholder='Username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className='w-42 pl-10 pr-3 py-2 border-[1px] border-[#1579B1] rounded-3xl focus:outline-none  mb-4'
              />
            </div>
            <div className='relative'>
              <HiOutlineLockClosed className='absolute left-3 top-3 text-gray-500' />
              <input
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='w-42 pl-10 pr-3 py-2  focus:outline-none border-[1px] border-[#1579B1] rounded-3xl'
              />
            </div>
          </div>

          <div className='flex flex-col items-center justify-center w-full mt-2'>
            <button
              onClick={handleLogin}
              className='w-[60%] px-2 py-2 bg-[#5A92B1] text-white font-semibold rounded-3xl hover:bg-[#1579B1]'
            >
              Login
            </button>

                        <div class="w-[50%] h-px bg-[#5A92B1] m-2"></div>
           
    <button type="button" class="text-[#5A92B1] text-lg hover:text-white w-[60%] bg-white hover:bg-[#1579B1] focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-3xl text-sm px-5 py-2.5 text-center inline-flex items-center justify-between  mb-2 border-[1px] border-[#5A92B1]"><svg class="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>Sign up with Google<div></div></button>
            
          </div>
          <h2 className='text-center text-sm font-medium mb-4 py-4 text-[#5A92B1]'>
            New User? Register
          </h2>
        </div>
        <div className='hidden lg:flex justify-start items-start lg:ml-2'>
          <Image src={Login} alt='login' className='w-[300px] h-[300px]' />
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
