"use client";
import React from "react";
import { IoMdArrowDropright } from "react-icons/io";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Paw from "/public/assets/images/pawLogo.png";

export default function Dashboard({ children }) {
  const pathname = usePathname();
  const dashLinks = [
    {
      name: "Home",
      link: "/dashboard",
    },
    {
      name: "Find Pet",
      link: "/dashboard/find-pet",
    },
    {
      name: "Veterinary Hospital",
      link: "/dashboard/vet-hospital",
    },
    {
      name: "Pets",
      link: "/dashboard/pets",
    },
    {
      name: "Geo-Fences",
      link: "/dashboard/geo-fences",
    },
    {
      name: "Setting",
      link: "/dashboard/setting",
    },
    {
      name: "Help and Support",
      link: "/dashboard/support",
    },
  ];
  return (
    <div className="drawer  lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-start justify-start">
        {/* Page content here */}
        <div className="mt-10 lg:mt-0 flex items-start w-full">{children}</div>

        {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
        <label
          htmlFor="my-drawer-2"
          className="rounded-r-lg bg-[#497FA2] text-white px-2 py-4 border-[1px] fixed top-20 left-0 drawer-button lg:hidden text-3xl"
        >
          <IoMdArrowDropright />
        </label>
      </div>
      <div className="drawer-side lg:bg-[#497FA2]">
        {/* <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className=" text-center ml-5  drawer-overlay  text-3xl font-extrabold text-[#ffff00]"
        >
          Trendy gliterz
  </label> */}
        <ul className="menu p-4 w-80 min-h-full lg:min-h-[90%] bg-[#497FA2] text-white flex flex-col justify-around items-stretch">
          <li>
            <Image
              src={Paw}
              alt="pawImage"
              className="w-[110px] h-auto my-10 mx-auto"
            ></Image>
          </li>
            <div>
          {dashLinks.map((link) => (
            <li key={link.name}>
              <Link
                className={`${
                  pathname === link.link ? "bg-white text-[#497FA2]" : ""
                } hover:bg-white hover:text-[#497FA2] font-semibold text-md my-3 py-2`}
                href={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
            </div>

          <li>
            <Link
              className="hover:bg-white hover:text-[#497FA2] font-semibold text-md  py-2"
              href="/"
            >
                Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
