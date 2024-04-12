"use client"

import React, { useState } from 'react';
import SignUp from "/public/assets/images/signuppage.png";
import Image from "next/image";
import 
{ HiOutlineUser, 
  HiMail, 
  HiPhone, 
  HiOutlineLockClosed 
} from "react-icons/hi";
import { IoLocation } from "react-icons/io5";

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [emailid, setEmailid] = useState('');
  const [phoneno, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  
  

  const handleLogin = () => {
    
    // Implement your login logic here
    console.log('Logging in with username:', username, 'and emailid:', emailid);

    // Clear the input fields after signing up
  setUsername('');
  setEmailid('');
  setPhoneNumber('');
  setAddress('');
  setPassword('');
  };

  return (
    <main className="flex justify-center items-center h-screen">
      <div className={`p-6 border border-[#5A92B1] rounded-xl shadow flex flex-col lg:flex-row items-center mb-40`}> 
      <div className="hidden lg:flex justify-start items-start lg:ml-2">
            <Image
              src={SignUp}
              alt="signup"
              className="w-72" 
            />
          </div>
       
        <div className="w-full lg:w-96">
          <h2 className="text-center text-xl font-bold mb-4 text-[#5A92B1]">Register</h2>
          <div className="flex flex-col items-center mb-8 w-full ">
            <div className="relative">
              <HiOutlineUser className="absolute left-3 top-3 text-gray-500" />
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-42 pl-10 pr-3 py-2 bg-[#C2DEED] focus:outline-none rounded-xl mb-2"
              />
            </div>
            <div className="relative">
              <HiMail className="absolute left-3 top-3 text-gray-500" />
              <input
                type="text"
                placeholder="Email ID"
                value={emailid}
                onChange={(e) => setEmailid(e.target.value)}
                className="w-42 pl-10 pr-3 py-2 bg-[#C2DEED] focus:outline-none rounded-xl mb-2"
              />
            </div>
            <div className="relative">
              <HiPhone className="absolute left-3 top-3 text-gray-500" />
              <input
                type="text"
                placeholder="Phone Number"
                value={phoneno}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-42 pl-10 pr-3 py-2 bg-[#C2DEED] focus:outline-none rounded-xl mb-2"
              />
            </div>
            <div className="relative">
              <IoLocation className="absolute left-3 top-3 text-gray-500" />
              <input
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-42 pl-10 pr-3 py-2 bg-[#C2DEED] focus:outline-none rounded-xl mb-2"
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
          
          <div className="flex justify-center w-full mb-2"> 
            <button
              onClick={handleLogin}
              className="w-48 lg:w-48 px-2 py-2 bg-[#5A92B1] text-white font-semibold rounded-3xl hover:bg-[#1579B1] mb-2"
            >
              Sign Up
            </button>
            
          </div> 
        </div>  
      </div>
    </main>
  );
};

export default SignUpPage;
