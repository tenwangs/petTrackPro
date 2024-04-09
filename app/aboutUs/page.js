import Logo from "/public/assets/images/pawLogo.png";
import Image from "next/image";
import Img1 from "/public/assets/images/img1.png";
import Img2 from "/public/assets/images/img2.png";
import Img3 from "/public/assets/images/img3.png";
const aboutUs = () => {
  return (
    <main className="bg-[#ffffff] mt-4">
      <div className="flex flex-row">
        <div className="lg:block hidden">
          <Image
            src={Logo}
            alt="Logo"
            className="w-2/3 rounded-full ml-40"
          />
          <p className="text-5xl ml-32 mt-8 text-[#1579B1] font-semibold">
            Your pet-track
            pro
          </p>
        </div>
        <div className="bg-[#fafafa] border border-gray-200 w-[90%] lg:w-1/2 mx-auto lg:ml-20 rounded-xl mt-8 ">
          <div className="bg-[#5A92B1] rounded-l w-full">
            <p className="text-center font-semibold py-2 text-2xl text-[#ffffff]">
              All about Pet Track pro
            </p>
          </div>
          <div className="mt-4">
            <p className="mt-5 text-center text-4xl text-[#014550] font-light">
              First Step
            </p>
            <p className="px-4 text-sm text-[#014550] text-center">
              With our devices and mobile app, you can easily monitor your pet&apos;s
              location in real time, set safe zone and receive instant alerts if
              they are too far.</p> 
              <p className="px-4 text-sm text-[#014550] mt-5 text-center">
              At Pet-track pro we are passionate about
              connecting pet&apos;s with the owner through innovative tracking
              solutions. Our journey begins With a simple mission to provide
              peace of mind to pet owners everywhere. No matter of your pets of
              any kind we understand the importance of ensuring their safety and
              well-being.
            </p>
          </div>
          <div className=" mt-10 flex flex-row w-full justify-evenly items-end">
            <Image src={Img1} alt="Logo" width={200} className="w/1-4"></Image>
            <Image src={Img2} alt="Logo" width={300} className=""></Image>
            <Image src={Img3} alt="Logo" width={300} className=" "></Image>
          </div>
          <div className="flex flex-row mt-8">
            <p className="text-right mt-4 text-[#014550] text-sm w-full ">
              Thank you for choosing Pet-track pro -where every paw print
              matters
            </p>
            <Image
              src={Logo}
              alt="logo"
              className="mx-4 w-10 h-10 rounded-full"
            ></Image>
          </div>
        </div>
      </div>

      <p className="text-center mt-20 text-4xl font-semibold text-[#1579B1]">
        Meet Team
      </p>

      <div className="mb-10">
        <div className="flex flex-col mt-8">
          <Image
            src={Img1}
            alt="Team"
            className="mx-auto mt-4 p-4 rounded-full w-60 "
          ></Image>
          <p className="text-gray-800 text-center font-bold text-l">
            Mr. Manoj Chhetri{" "}
          </p>
          <p className="text-gray-800 text-center font-bold text-l">
            ( coordinator ){" "}
          </p>
        </div>
        <div className="flex flex-col justify-around items-center lg:flex-row">
          <div className="flex flex-col justify-center items-center">
            <Image
              src={Img1}
              alt="Team"
              className=" mt-4 p-4 rounded-full w-60"
            ></Image>
            <p className="text-gray-800 text-center font-bold text-lg">
              Mr. Tenzin wangchuk
            </p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <Image
              src={Img1}
              alt="Team"
              className=" mt-4 p-4 rounded-full w-60"
            ></Image>
            <p className="text-gray-800 text-center font-bold text-lg">
              {" "}
              Pravaat Chhetri
            </p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <Image
              src={Img1}
              alt="Team"
              className=" mt-4 p-4 rounded-full w-60 "
            ></Image>
            <p className="text-gray-800 text-center font-bold text-lg">
              Mr. Dorji Dhendup{" "}
            </p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <Image
              src={Img1}
              alt="Team"
              className=" mt-4 p-4 rounded-full w-60 "
            ></Image>
            <p className="text-gray-800 text-center font-bold text-lg">
              Mrs. Kuenzang Dema{" "}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default aboutUs;
