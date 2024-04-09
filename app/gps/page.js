import backgrounds from "/public/assets/images/im.webp";
import collar from "/public/assets/images/collar.jpg";
import Image from "next/image";
import BackI from "/public/assets/images/backI.png";
import Tutoral from "/public/assets/images/tutoral.png";

const gps = () => {
  return (
    <main>
      <div className="flex flex-col lg:flex-row bg-white ">
        <div className=" ml-40 mt-12 bg-gray-400 rounded-full mb-12">
          <Image
            src={backgrounds}
            alt="pet"
            width={700}
            className="rounded-3xl"
          ></Image>
        </div>
        <div className="mt-20 ml-28 ">
          <p className="text-[#1579B1] font-semibold">Tracker Size</p>
          <p className="text-xl text-[#081826] font-semibold mt-2">
            One size fits All
          </p>
          <p className="text-l text-[#727272] mt-4">
            Wether you have a cat, small dog or a large dog, pet-track pro
            caters to <br></br> pet of all sizes. It weights olny 60 grams and
            is 10cm * 6cm * 5cm in <br></br>size with high quality material
            designed and printed in-country
          </p>
          <div className="flex flex-row">
            <Image
              src={collar}
              alt="collarImg"
              width={80}
              className="mt-4"
            ></Image>

            <div className="flex flex-col">
              <p className="mt-8 ml-4 text-[#000000] font-bold">
                Try it Today!
              </p>
              <p className="mt-4 ml-4 font-semibold text-[#1579B1]">
                Special intro offer - 50% off
              </p>
            </div>

            <button className="bg-[#1579B1]  w-24 text-[#FFFFFF] rounded-full h-10 ml-28 mt-8">
              BuyNow
            </button>
          </div>
          <div className="flex flex-col mt-8 border border-shadow-[#808080] rounded-xl p-8 mb-20">
            <p className=" text-[#000000] text-xl font-semibold">
              {" "}
              Whats in the box?
            </p>
            <p className="mt-2 text-[#808080] text-sm">
              Price includes GPS tracker
            </p>
            <p className="mt-2 text-[#808080] text-sm">SIM Card</p>
            <p className="mt-2 text-[#808080] text-sm">Charging cable </p>
            <p className="mt-2 text-[#808080] text-sm">Silicone case</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-evenly items-center  bg-gray-100 ">
        <div className="bg-gray-100 p-5 w-full lg:w-1/2">
      <Image src={require("/public/assets/images/backI.png")} alt="backI" className="w-[90%]"></Image>
        </div>
        <div className="flex flex-col justify-center items-center w-full lg:w-1/2 p-3">
          <div className="mt-4 w-2/3">
            <p className="text-[#1579B1] text-start font-bold text-4xl">
              About your Pet App
            </p>
            <p className="text-2xl text-[#081826] mt-2 font-bold">
              Premium Features
            </p>
            <p className="text-gray-500 text-start mt-2 text-sm">
              Over hundreds dogs are lost or stolen every year.Pet-track pro{" "}
              is dedicately working towards reducing the number by
              helping you track your pet quickly no matter how far they
              are from you.
            </p>
          </div>
          <div className="flex flex-col items-start justify-start text-gray-500 rounded-xl p-8 bg-gray-100">
            <p className="text-sm"> GPS tracking ( 2-3 miniutes interval )</p>
            <p className="mt-2 text-sm">
              Real time tracking ( 5-10 seconds interval )
            </p>
            <p className="mt-2 text-sm">Geo fence</p>
            <p className="mt-2 text-sm">Instant Notification </p>
            <p className="mt-2 text-sm">Nation Wide coverage </p>
            <p className="mt-2 text-sm"> 24/7 Support </p>


          </div>
         
        </div>
      </div>
      <div className="w-full">
        <Image src={Tutoral} alt="Set-up" className="w-full"></Image>
      </div>
    </main>
  );
};

export default gps;
