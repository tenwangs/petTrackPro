"use client"
import Link from "next/link";
import Paw from "/public/assets/images/pawLogo.png";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from 'next/navigation'

export default function Navbar({ children }) {
  const open = usePathname();
  const links = [
    { name: "Home", href: "/" },
    { name: "GPS pet Tracker", href: "/gps" },
    { name: "Support", href: "/support" },
    { name: "FAQ", href: "/FAQ" },
    { name: "About Us", href: "/aboutUs" },
    

  ];


  return (
    <div className="drawer flex flex-col">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col justify-between min-h-screen">
        {/* Navbar */}
        <div className="w-full flex justify-between items-center navbar bg-[#fafafa] ">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          {/* <div className="flex-1 px-2 mx-2"> */}
          <Image src={Paw} alt="pawImage" className="w-20 h-20 p-2" />
          {/* </div> */}
          <div className="flex-none hidden lg:flex justify-center items-center">
            <ul className=" menu-horizontal text-md h-full justify-center space-x-3 items-center">
              {/* Navbar menu content here */}

              {links.map((link,index) => (
                <li key={index}>
                  <Link
                  key={link.name}
                    href={link.href}
                    className={` font-light p-2 hover:border-[#5a92b1] hover:border-b-2 delay-75  ${link.href === open ? "text-[#5A92B1] font-semibold border-b-2 border-[#5a92b1]" : "text-[#3D3D3D]"}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
           
            </ul>
          </div>
              <div className="hidden lg:flex justify-center items-center space-x-5 mr-5">
                <Link href="/signup">
                <button className="bg-[#5A92B1]  rounded-full text-[#ffffff] w-28 h-10  hover:bg-white hover:text-[#5a92b1] hover:border hover:border-[#5a92b1] transition-all ease-in-out delay-75">
                  Sign Up
                </button>
                </Link>

                <Link href="/login">
                <button className="border border-[#5A92B1]  rounded-full w-28 h-10 text-[#3D3D3D]  hover:bg-white hover:text-[#5a92b1] transition-all ease-in-out delay-75">
                  Log In
                </button>
                </Link>
              </div>
        </div>
        {/* Page content here */}
        {children}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-[#fafafa] flex flex-col justify-between ">
          <div >
          <Image src={Paw} alt="pawImage" className=" w-28 h-28 space-y-5 mx-auto mb-10"/>
          {links.map((link,index) => (
                <li key={index}>
                  <Link
                  key={link.name}
                    href={link.href}
                    className={` font-light p-2  ${link.href === open ? "text-[#5A92B1] font-semibold" : "text-[#3D3D3D]"}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
          </div>
           
              <div className="flex flex-col justify-end items-center space-y-2">
              <Link href="/signup">

                <button className="bg-[#5A92B1]  rounded-full text-[#ffffff] w-[80%] h-10 pl-6 pr-6 hover:bg-white hover:text-[#5a92b1] hover:border-[#5a92b1] border transition-all ease-in-out delay-75">
                  Sign Up
                </button>
                </Link>
                <Link href="/login">

                <button className="border border-[#5A92B1] rounded-full w-[80%] h-10 text-[#3D3D3D]  hover:bg-white hover:text-[#5a92b1] transition-all ease-in-out delay-75">
                  Log In
                </button>
                </Link>
              </div>
        </ul>
      </div>
    </div>
  );
}
