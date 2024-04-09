import { MdOutlineEmail, MdLocationOn } from "react-icons/md";
import { FiHelpCircle  } from "react-icons/fi";
const support = () => {
    return ( 
        <main className="bg-[#ffffff]">
        <div className="flex flex-row mt-8 ">
             <div className="w-60 h-60 bg-white mt-6 ml-60 border border-gray-200 rounded-xl text-4xl">
            <div>
              <FiHelpCircle className="ml-20 w-20 h-20 mt-8 mb-2 text-gray-800" />
            </div>
            <p className="font-bold ml-10 text-l text-xl text-[#282835]"> Help & Self Guide</p>
            <p className="text-sm text-gray-600 mt-6 ml-6">Find answers to all your <br></br> questions about Pet-track pro</p>
        </div>

         <div className="w-60 h-60 bg-white mt-6 ml-60 rounded-xl border border-gray-200">
         <div>
          <MdOutlineEmail className="ml-20 w-20 h-20 mt-8 mb-2 text-gray-800"/>
         </div>
            <p className="font-bold text-l ml-24 text-xl text-[#282835]">Email</p>
            <p className="text-sm text-gray-600 mt-6 ml-12">Pettrack@app.com</p>
            <p className="text-sm text-gray-600  ml-8">Reach us 24/7 via Email</p>

        </div>

         <div className="w-60 h-60 bg-white mt-6 ml-60 text-xl rounded-xl border border-gray-200">
            <div>
              <MdLocationOn  className="ml-20 w-20 h-20 mt-8 mb-2 text-gray-800"/>
            </div>
            <p className="font-bold text-l ml-20 text-[#282835]">Location</p>
            <p className="text-sm text-gray-600 mt-6 ml-8">Cst -Rinchending, p/ling</p>
        </div>
      </div>

  
    </main>
  );
};

export default support;
