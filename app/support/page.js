import { MdOutlineEmail, MdLocationOn } from "react-icons/md";
import { FiHelpCircle } from "react-icons/fi";
const support = () => {
  return (
    <main className="bg-[#ffffff]">
      <div className="flex flex-col gap-3 mb-4 lg:flex-row justify-evenly items-center mt-8 w-full lg:w-2/3 mx-auto">
      <div className=" flex flex-col justify-center items-center w-60 h-60 bg-white border border-b-8 border-[#5A92B1] rounded-xl text-4xl group hover:border-black hover:bg-[#5A92B1] transition-all ease-in-out delay-75">
          <div>
            <FiHelpCircle className=" w-20 h-20 mt-8 mb-2 text-gray-800 group-hover:text-white" />
          </div>
          <p className="font-bold text-xl text-[#282835] group-hover:text-white "> Help & Self Guide</p>
          <p className="text-sm text-gray-600 mt-6 group-hover:text-white px-4">
            Find answers to all your questions about Pet-track pro
          </p>
        </div>

        <div className=" flex flex-col justify-center items-center w-60 h-60 bg-white border border-b-8 border-[#5A92B1] rounded-xl text-4xl group hover:border-black hover:bg-[#5A92B1] transition-all ease-in-out delay-75">
          <div>
            <MdOutlineEmail className=" w-20 h-20 mt-8 mb-2 text-gray-800 group-hover:text-white" />
          </div>
          <p className="font-bold text-xl text-[#282835] group-hover:text-white ">Email</p>
          <p className="text-sm text-gray-600 mt-6 group-hover:text-white">Pettrack@app.com</p>
          <p className="text-sm text-gray-600 mt-2 group-hover:text-white">Reach us 24/7 via Email</p>
        </div>

        <div className=" flex flex-col justify-center items-center w-60 h-60 bg-white border border-b-8 border-[#5A92B1] rounded-xl text-4xl group hover:border-black hover:bg-[#5A92B1] transition-all ease-in-out delay-75">
          <div>
            <MdLocationOn className=" w-20 h-20 mt-8 mb-2 text-gray-800 group-hover:text-white" />
          </div>
          <p className="font-bold text-xl text-[#282835] group-hover:text-white ">Location</p>
          <p className="text-sm text-gray-600 mt-6 group-hover:text-white">Cst -Rinchending, p/ling</p>
        </div>
      </div>
    </main>
  );
};

export default support;
