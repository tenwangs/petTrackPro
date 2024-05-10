"use client";
import { useState } from "react";
import Image from "next/image"
function Page() {
  const [active, setActive] = useState(true);
  return (
    <div className="h-screen w-full">
    <div className="w-[95%] h-[90%] mx-auto my-10 rounded-xl border-2  bg-[##E0F1F6] flex flex-col justify-start items-start relative">
      <div className="avatar  absolute top-12 left-10">
        <div className="w-48 rounded-full ring ring-white ring-offset-[#5A92B1] ring-offset-4">
          <Image src={require("/public/assets/images/profile.png")} />
        </div>
      </div>
      <div className="bg-[#5A92B1] w-full h-[150px] flex justify-start items-end ">
        <h1 className="text-white text-3xl font-semibold ml-[275px]">
          Dorji Penjor
        </h1>
      </div>
      <div
        role="tablist"
        className="tabs   #text-[#5A92B1] ml-[275px] mt-2"
      >
        <a
          role="tab"
          className={`tab text-lg font-semibold ${
            active ? " text-[#5A92B1] border-[#5a92b1] border-b-2" : ""
          }`}
          onClick={() => {
            setActive(true);
          }}
        >
          Personal{" "}
        </a>
        <a
          role="tab"
          className={`tab text-lg font-semibold ${
            !active ? "text-[#5A92B1] border-[#5a92b1] border-b-2" : ""
          }`}
          onClick={() => {
            setActive(false);
          }}
        >
          Password Settings
        </a>
      </div>
      <div className="w-[95%] h-[60%] mx-auto pt-[100px]">
        {active?
        <div className="personal grid grid-cols-2 gap-5 justify-items-center">
       

        <label className="form-control w-full max-w-xl">
          <div className="label">
            <span className="label-text text-lg font-medium">Name: </span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
          />
          
        </label>
        <label className="form-control w-full max-w-xl">
          <div className="label">
            <span className="label-text text-lg font-medium">Gender: </span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
          />
          
        </label>
        <label className="form-control w-full max-w-xl">
          <div className="label">
            <span className="label-text text-lg font-medium">Email: </span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
          />
          
        </label>
        <label className="form-control w-full max-w-xl">
          <div className="label">
            <span className="label-text text-lg font-medium">Address: </span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
          />
          
        </label>
        <label className="form-control w-full max-w-xl">
          <div className="label">
            <span className="label-text text-lg font-medium">Contact Number: </span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
          />
          
        </label>
        <label className="form-control w-full max-w-xl">
          <div className="label">
            <span className="label-text text-lg font-medium">Date of Birth: </span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
          />
          
        </label>
        <button className="mt-4 max-w-xl bg-[#5A92B1] shadow-md border-none hover:bg-[#5A92B1]/80 text-white btn text-xl w-full"> Edit</button>
        </div>:
        <div className="gap-5 space-y-5 pl-14">
            <label className="form-control w-full max-w-xl">
          <div className="label">
            <span className="label-text text-lg font-medium">Current Password * </span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
          />
          
        </label>
        <label className="form-control w-full max-w-xl">
          <div className="label">
            <span className="label-text text-lg font-medium">New Password * </span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
          />
          
        </label>
        <label className="form-control w-full max-w-xl mb-10">
          <div className="label">
            <span className="label-text text-lg font-medium">Confirm Password * </span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
          />
          
        </label>
        <button className=" max-w-xl bg-[#5A92B1] shadow-md border-none hover:bg-[#5A92B1]/80 text-white btn text-xl w-full"> Update Password</button>
        </div>
        }

        
      </div>
    </div>
    </div>
  );
}
export default Page;
