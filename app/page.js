import Image from "next/image";
import gpsArchitecture from "/public/assets/images/gps.png";
import { FaMapLocationDot } from "react-icons/fa6";
import { BsFillGeoFill } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";

const Card = ({ icon, title, text }) => {
  return (
    <div className="bg-gray-100 rounded-xl flex flex-col  space-y-4  items-center w-[90%] md:w-1/2 lg:w-1/4 h-[400px]  group hover:text-[#fff] hover:bg-[#5A92B1] transition-all ease-in-out delay-75 px-10">
      {icon} 

      <Image
        src="/assets/images/Union.png"
        alt="image"
        width={200}
        height={200}
        className="w-32 stroke-[#5A92B1] group-hover:stroke-white filter brightness-100 group-hover:brightness-[300] -mt-36"
      />
      <p className=" text-2xl  font-bold text-[#081826] group-hover:text-white ">
        {title}
      </p>
      <p className="text-md text-center text-[#A2A2A2] group-hover:text-white">
        {text}
      </p>
    </div>
  );
};

export default function Home() {
  return (
    <main className="bg-[#FFFFFF] border border-shadow-gray-100 ">
      <div className="w-full h-2/5 bg-[#5A92B1] flex justify-center p-5 lg:p-3">
        <div className=" w-[90%] lg:w-1/2 flex flex-col justify-center items-start pl-10">
          <p className="text-white text-6xl font-semibold">
            GPS Pet Tracking <br></br> For Pet Dogs
          </p>
          <p className="text-white mt-4">
            Track your pet animals in real-time, keep them safe.<br></br> use
            Pet-track-pro to track your furry friends <br></br> in real time{" "}
          </p>
          <div>
            <button className="border border-white text-white p-2 pl-4 pr-4 rounded-full mt-8">
              Learn more
            </button>
            <button className="border border-white ml-8 text-white p-2 pl-4 pr-4 rounded-full mt-8 transition-all ease-in-out delay-75 hover:bg-white hover:text-[#1579b1]">
              Contact-us
            </button>
          </div>
        </div>
        <div className="w-1/2 justify-center items-center hidden lg:flex p-3">
          <Image
            src="/assets/images/hero-section-dog.png"
            alt="image"
            width={675}
            height={400}
            className=" rotate-[0deg] lg:-mb-20 "
          />
        </div>
      </div>
      <div>
        <p className="text-5xl font-bold text-[#000000] text-center  mt-16 mb-8 ">
          Key Features
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-around items-center space-y-4 md:space-y-0 ">
        <Card
          title={"Real time tracking"}
          text={
            "Choose live tracking to get your pet location update every 10 seconds"
          }
          icon={
            <FaMapLocationDot className="relative top-[85px] left-50 z-20 text-5xl group-hover:text-[#5a92b1] text-[#fff]" />
          }
        />
        <Card
          title={"Nation Wide Coverage"}
          text={
            "Our device functions across the nation and cover every part of the country."
          }
          icon={
            <AiOutlineGlobal className="relative top-[85px] left-50 z-20 text-5xl group-hover:text-[#5a92b1] text-[#fff]" />
          }
        />
        <Card
          title={"Geo-Fence"}
          text={
            " Define safe area and get instant alerts when your pet leaves the safe area"
          }
          icon={
            <BsFillGeoFill className="relative top-[85px] left-50 z-20 text-5xl group-hover:text-[#5a92b1] text-[#fff]" />
          }
        />

      </div>

      <div className="flex flex-col lg:flex-row w-full justify-center items-center  p-4 ">
          <Image
            src={gpsArchitecture}
            alt="image"
            width={600}
            height={600}
            className="w-[90%] lg:w-1/2 h-full border-gray-800 mt-2 z-0"
          />
        
        <div className="w-[90%] lg:w-1/2  bg-[#497FA4] rounded-xl h-[400px]">
          <p className="ml-8 mt-5 text-white text-sm">Advanced technology</p>
          <p className="ml-8 mt-2 text-white text-2xl font-semibold">
            How it works
          </p>
          <div role="tablist" className="tabs tabs-bordered mt-4">
            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab ml-8 text-md text-[#ffffff] "
              aria-label="01 Subscription"
              defaultChecked
            />
            <div role="tabpanel" className="tab-content p-10 text-[#ffffff]">
              GPS pet trackers vary in price, typically ranging from around $80
              to $150. Cellular GPS trackers come with additional costs due to
              reliance on cellular networks. Service plans usually cost between
              $2 and $10 per month time.
            </div>

            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab text-[#ffffff]"
              aria-label="02 Charge"
            />
            <div role="tabpanel" className="tab-content p-10 text-[#ffffff]">
              After receiving Pet Track Pro GPS Tracking device, please Sign Up in the
              Pet Track Pro mobile app and choose a plan to subscribe. You may choose
              from monthly plan, 3 months plan or annual plan.You may upgrade
              between plans at any time.
            </div>

            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab text-[#ffffff]"
              aria-label="03 Understand"
            />
            <div role="tabpanel" className="tab-content p-10 text-[#ffffff]">
              A GPS pet tracker doesn’t guarantee finding a lost pet, but it
              increases the chances. The Pet Track Pro Explore is accurate, easy to
              use, and suitable for cats and dogs. However, its GPS accuracy can
              be finicky in spotty service areas time.
            </div>

            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab text-[#ffffff]"
              aria-label="04 Track"
            />
            <div role="tabpanel" className="tab-content p-10 text-[#ffffff]">
              Pet trackers use GPS technology to pinpoint your pet’s location.
              Real-time data is transmitted to your smartphone via an app. time.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
