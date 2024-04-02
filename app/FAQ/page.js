import Image from "next/image";
import Pets from "/public/collarpet.jpg";
const FAQ = () => {
    return ( 
      <main className="min-h-screen">
        <div className="flex flex-row">
       <div className='mt-20 ml-20'>
            <Image src={Pets} alt='pet' width={600} className='rounded-3xl'></Image>
        </div>

        
           <div className="mt-32 w-2/5 ml-20">

       <div className="collapse collapse-arrow border bord ">
  <input type="radio" name="my-accordion-2" defaultChecked /> 
  <div className="collapse-title text-l text-[#282835] text-l font-bold ">
    Will it work if I am far away from my Pets?
  </div>
  <div className="collapse-content "> 
    <p className="text-sm text-gray-600">yes, Yourpet track provides unlimited coverage</p>
  </div>
</div>

<div className="collapse collapse-arrow border bord mt-4">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-l  text-[#282835] text-l font-bold">
    How much does it weigh?
  </div>
  <div className="collapse-content "> 
    <p className="text-sm text-gray-600">It weighs 300g</p>
  </div>
</div>

<div className="collapse collapse-arrow border bord mt-4 mb-4">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-l  text-[#282835] text-l font-bold">
    Do I need subscription?
  </div>
  <div className="collapse-content "> 
    <p className="text-sm text-gray-600">You can avail the subscription service for better performance</p>
  </div>
</div>

<div className="collapse collapse-arrow border bord mt-4 mb-4">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-l text-[#282835] text-l font-bold">
    What is the battery life?
  </div>
  <div className="collapse-content "> 
    <p className="text-sm text-gray-600">Battery can last up to 2 days </p>
  </div>
</div>

<div className="collapse collapse-arrow border bord mt-4 mb-4">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-l text-[#282835] text-l font-bold">
    Is there a discount for multiple purchases?
  </div>
  <div className="collapse-content"> 
    <p className="text-sm text-gray-600">Yeah, you can get upto 70% off for more than two products </p>
  </div>
</div>

       </div> 
        </div>
            </main>
        
     );
}
 
export default FAQ;