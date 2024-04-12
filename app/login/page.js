"use client"

import React, { useState } from 'react';
import Login from "/public/assets/images/login.png";
import Image from "next/image";
import { HiOutlineUser, HiOutlineLockClosed } from "react-icons/hi";

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
 

  const handleLogin = () => {

    // Implement your login logic here
    console.log('Logging in with username:', username, 'and password:', password);

    setUsername('');
    setPassword('');
  };

  return (
    <main className="flex justify-center items-center h-screen">
      <div className={`p-8 border border-[#5A92B1] rounded-xl shadow flex flex-col lg:flex-row items-center mb-40`}> 
        <div className="w-full lg:w-96">
          <h2 className="text-center text-xl font-bold mb-4 text-[#5A92B1]">Welcome! Login</h2>
          <div className="flex flex-col items-center mb-8 w-full ">
            <div className="relative">
              <HiOutlineUser className="absolute left-3 top-3 text-gray-500" />
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-42 pl-10 pr-3 py-2 bg-[#C2DEED] focus:outline-none rounded-xl mb-4"
              />
            </div>
            <div className="relative">
              <HiOutlineLockClosed className="absolute left-3 top-3 text-gray-500" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-42 pl-10 pr-3 py-2 bg-[#C2DEED] focus:outline-none rounded-xl"
              />
            </div>
          </div>
          
          <div className="flex justify-center w-full"> 
            <button
              onClick={handleLogin}
              className="w-48 lg:w-48 px-2 py-2 bg-[#5A92B1] text-white font-semibold rounded-3xl hover:bg-[#1579B1]"
            >
              Login
            </button>
            
          </div>
          <h2 className="text-center text-sm font-medium mb-4 py-4 text-[#5A92B1]">New User? Register</h2>
        </div>
          <div className="hidden lg:flex justify-start items-start lg:ml-2">
            <Image
              src={Login}
              alt="login"
              className="w-[100%] h-[100%]" 
            />
          </div>
       
      </div>
    </main>
  );
};

export default LoginPage;
