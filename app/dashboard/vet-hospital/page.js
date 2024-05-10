'use client';
import React, { useState } from 'react';
import {
  IoLocationOutline,
  IoTimerOutline,
  IoEarthSharp,
} from 'react-icons/io5';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import Iframe from 'react-iframe';

function Page() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    // Your list of items here
    // For demonstration, I'm using placeholder elements
    {
      location: 'Phuntsholing Thromde Veterinary Hospital',
      openingTime: '9:00 AM - 5:00 PM',
      website: 'http://www.ncah.gov.bt/',
    },
    {
      location: 'National Center of Animal Health',
      openingTime: '10:00 AM - 6:00 PM',
      website: 'http://www.ncah.gov.bt/',
    },
    {
      location: 'National Veterinary Hospital',
      openingTime: '10:00 AM - 6:00 PM',
      website: 'http://www.ncah.gov.bt/',
    },
    {
      location: 'Location 4',
      openingTime: '10:00 AM - 6:00 PM',
      website: 'example.com/location2',
    },
    {
      location: 'Location 5',
      openingTime: '10:00 AM - 6:00 PM',
      website: 'example.com/location2',
    },
    {
      location: 'Location 6',
      openingTime: '9:00 AM - 5:00 PM',
      website: 'example.com/location1',
    },
    {
      location: 'Location 7',
      openingTime: '10:00 AM - 6:00 PM',
      website: 'example.com/location2',
    },
    {
      location: 'Location 8',
      openingTime: '10:00 AM - 6:00 PM',
      website: 'example.com/location2',
    },
    {
      location: 'Location 9',
      openingTime: '10:00 AM - 6:00 PM',
      website: 'example.com/location2',
    },
    {
      location: 'Location 10',
      openingTime: '10:00 AM - 6:00 PM',
      website: 'example.com/location2',
    },
    // Add more items as needed
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className=''>
        <div>
        <p className="text-3xl font-bold text-[#5A92B1] mt-16 ml-8">Nearby Veterinary Hospital</p>
      </div>
      <div className='flex justify-center items-center p-4'>
        <div className='fixed top-4 right-4'>
      
        </div>
      </div>
      <div className='shadow shadow-gray-300 rounded-3xl w-full bg-gray-400 p-80 h-40 ml-12 '>
        {/* <p>Googlemap </p> */}
        <Iframe className="w-full h-full" src="https://www.google.com/maps/search/veterinary+hospitals+and+animal+husbandry+in+Bhutan+/@27.4122549,89.7853179,9z?entry=ttu" style="border:0px #ffffff none;" name="myiFrame" ></Iframe>
        
      </div>
      <div className='relative flex flex-row ml-2 p-4 gap-4 ml-32 mt-4'>
        {items.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col bg-[#EBF5FC] p-8 w-80 rounded-xl ${
              index === currentIndex ||
              index === currentIndex + 1 ||
              index === currentIndex + 2
                ? ''
                : 'hidden'
            }`}
          >
            <div className='flex flex-row justify-start items-center'>
              <IoLocationOutline />
              <p className='ml-2'>{item.location}</p>
            </div>
            <div className='flex flex-row justify-start items-center'>
              <IoTimerOutline />
              <p className='ml-2'>{item.openingTime}</p>
            </div>
            <div className='flex flex-row justify-start items-center'>
              <IoEarthSharp />
              <p className='ml-2'>{item.website}</p>
            </div>
          </div>
        ))}
        <div className=''>
          <FaChevronLeft
            className='w-10 h-10  absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full'
            onClick={prevSlide}
          ></FaChevronLeft>
          <FaChevronRight
            className='w-10 h-10 absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full'
            onClick={nextSlide}
          >
            Next
          </FaChevronRight>
        </div>
      </div>
    </div>
  );
}

export default Page;
