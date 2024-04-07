import { MdOutlineEmail, MdLocationOn } from "react-icons/md";
import { FiHelpCircle  } from "react-icons/fi";
const support = () => {
    return ( 
        <main className="bg-[#ffffff]">
        <div className="flex flex-row mt-8 ">
             <div className="w-60 h-60 bg-white mt-6 ml-60 border border-gray-200 rounded-xl text-4xl">
            <div>
              <FiHelpCircle className="ml-20 w-20 h-20 mt-8 mb-2" />
            </div>
            <p className="font-bold ml-10 text-l text-xl text-[#282835]"> Help & Self Guide</p>
            <p className="text-sm text-gray-600 mt-6 ml-6">Find answers to all your <br></br> questions about Pet-track pro</p>
        </div>

         <div className="w-60 h-60 bg-white mt-6 ml-60 rounded-xl border border-gray-200">
         <div>
          <MdOutlineEmail className="ml-20 w-20 h-20 mt-8 mb-2"/>
         </div>
            <p className="font-bold text-l ml-24 text-xl text-[#282835]">Email</p>
            <p className="text-sm text-gray-600 mt-6 ml-12">Pettrack@app.com</p>
            <p className="text-sm text-gray-600  ml-8">Reach us 24/7 via Email</p>

        </div>

         <div className="w-60 h-60 bg-white mt-6 ml-60 text-xl rounded-xl border border-gray-200">
            <div>
              <MdLocationOn  className="ml-20 w-20 h-20 mt-8 mb-2 "/>
            </div>
            <p className="font-bold text-l ml-20 text-[#282835]">Location</p>
            <p className="text-sm text-gray-600 mt-6 ml-8">Cst -Rinchending, p/ling</p>
        </div>

        

        

       
        </div>
       
       <div className="mt-20 mb-8 ">

       <div className="collapse collapse-arrow border border-gray-200 w-5/6 ml-28 ">
  <input type="radio" name="my-accordion-2" defaultChecked /> 
  <div className="collapse-title text-[#000000] text-l font-bold">
    Will it work if I am far away from my Pets?
  </div>
  <div className="collapse-content "> 
    <p className="text-[#333333]">yes, Yourpet track provides unlimited coverage</p>
  </div>
</div>

<div className="collapse collapse-arrow border border-gray-200 w-5/6 ml-28 mt-4">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-l text-[#000000]  text-l font-bold">
    How much does it weigh?
  </div>
  <div className="collapse-content"> 
    <p className="text-[#333333]">It weighs 300g</p>
  </div>
</div>

<div className="collapse collapse-arrow border border-gray-200 w-5/6 ml-28 mt-4 mb-4">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-l font-bold text-[#000000] ">
    Do I need subscription?
  </div>
  <div className="collapse-content"> 
    <p className="text-[#333333]">You can avail the subscription service for better performance</p>
  </div>
</div>

<div className="collapse collapse-arrow border border-gray-200 w-5/6 ml-28 mt-4 mb-4">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title  text-l font-bold text-[#000000] ">
    What is the battery life?
  </div>
  <div className="collapse-content"> 
    <p className="text-[#333333]">Battery can last up to 2 days </p>
  </div>
</div>

<div className="collapse collapse-arrow border border-gray-200 w-5/6 ml-28 mt-4 ">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-l text-l font-bold text-[#000000] ">
    Is there a discount for multiple purchases?
  </div>
  <div className="collapse-content"> 
    <p className="text-[#333333]">Yeah, you can get upto 70% off for more than two products </p>
  </div>
</div>

       </div>
            
        </main>
       
     );
}
 
export default support;