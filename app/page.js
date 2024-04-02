import Image from "next/image"
import Pet from "/public/Pet.jpg"
import gpsArchitecture from "/public/gpss.png"
import Realtime from '/public/realtime.png'
import Global from '/public/global.png'
import VirtualFence from '/public/virtualFence.png'
import RoutePlayback from '/public/routePlayback.png'
export default function Home() {
  return (
    <main  className="bg-[#FFFFFF] border border-shadow-gray-100">
  <div className="w-full h-1/2">
  <div className="absolute mt-60 ml-40">
      <p className="text-white text-6xl">GPS Pet Tracking <br></br> For Pet Dogs</p>
      <p className="text-white mt-4">Track your pet animals in real-time, keep them safe.<br></br> use Pet-track-pro to track your furry friends <br></br> in real time </p>
      <button className="bg-[#1579B1] text-white p-2 pl-4 pr-4 rounded-full mt-8">Learn more</button>
      <button className="border border-white ml-8 text-white p-2 pl-4 pr-4 rounded-full mt-8">Contact-us</button>
    </div>
  
    <Image src={Pet}  alt="pet" className="w-full h-86" > 
    </Image>
    
  
    
  </div>
  <div>
    <p className="text-3xl font-semibold text-[#000000] text-center mt-8 mb-4">Key Features</p>
    
  </div>

    <div className="flex flex-row">
  <div className="bg-gray-100 rounded-xl  w-72 h-70 mt-6 ml-24 ">
  <Image src={Realtime}  alt='image' className="w-20 ml-24 mt-8 h-20"></Image>
<p className="ml-10 text-xl mt-2 text-[#081826] font-semibold">Real time tracking </p>
<p className="mt-4 ml-10 text-sm text-[#A2A2A2]">Choose live tracking to get your <br></br> pet location update every 10 <br></br>seconds</p>
  </div>
  <div className="bg-gray-100 rounded-xl  w-72 h-70 mt-6 ml-20">
<Image src={Global}  alt='image' className="w-20 ml-24 mt-8 h-20"></Image>
<p className="ml-10 text-xl mt-2 font-semibold text-[#081826] ">Global Coverage </p>
<p className="mt-4 ml-10 text-sm text-[#A2A2A2]">Travel free to different places and <br></br> liverage pet-track-pro to trak your<br></br>pets</p>
  </div>
  <div className="bg-gray-100  w-72 h-70 mt-6 ml-20">
<Image src={VirtualFence}  alt='image' className="w-20 ml-24 mt-8 h-20"></Image>
<p className="ml-10 text-xl mt-2 font-semibold text-[#081826] ">Virtual Fence </p>
<p className="mt-4 ml-10 text-sm text-[#A2A2A2]">Define safe area and get instant <br></br> alerts  when your pet leaves the <br></br> safe area</p>
  </div>
  <div className="bg-gray-100  w-72 h-60 mt-6 ml-20">
<Image src={RoutePlayback}  alt='image' className="w-20 ml-24 mt-8 h-20"></Image>
<p className="ml-10 text-xl mt-2 font-semibold text-[#081826] ">Route Playback </p>
<p className="mt-4 ml-10 text-sm text-[#A2A2A2]">Access unlimited travel history <br></br> and  Learn about your Pet's <br></br> favourite route via Playback route</p>
  </div>
    </div>

    <div className="flex flex-row ">
      <div className="w-2/6  ml-60 border-rounded-full mt-8  ">
      <Image src={gpsArchitecture}  alt='image' className="w-full border-gray-800 h-80 mt-2"></Image>
    </div>
    <div className="w-2/6 h-80 ml-20 mt-12 bg-[#1579B1] rounded-xl">
    <p className="ml-8 mt-2 text-white">Advanced technology</p>
    <p className="ml-8 mt-2 text-white text-xl font-semibold">How it works</p>
    </div>
    </div>
    
  
    </main>
  )
}
