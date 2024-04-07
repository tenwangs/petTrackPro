import backgrounds from '/public/im.webp'
import collar from '/public/collar.jpg'
import Image from 'next/image'
import BackI from '/public/backI.png'
import Tutoral from '/public/tutoral.png'
import { FaCheck } from "react-icons/fa";

const gps = () => {
    return ( 
        <main>
        <div className='flex flex-row bg-white bg-[#ffffff] '>
            <div className=' ml-40 mt-12 bg-gray-400 rounded-full mb-12'>
            <Image src={backgrounds} alt='pet' width={700} className='rounded-3xl'></Image>
        </div>
        <div className='mt-20 ml-28 ' >
            <p className='text-[#1579B1] font-semibold'>Tracker Size</p>
            <p className='text-xl text-[#081826] font-semibold mt-2'>One size fits All</p>
            <p className='text-l text-[#727272] mt-4'>Wether you have a cat, small dog or a large dog, pet-track pro caters to <br></br> pet of all sizes. It weights olny 60 grams and is 10cm * 6cm * 5cm in <br></br>size with high quality material designed and printed in-country</p>
            <div className='flex flex-row'>
            <Image src={collar} alt='collarImg' width={80} className='mt-4'></Image>

            <div className='flex flex-col'>
            <p className='mt-8 ml-4 text-[#000000] font-bold'>Try it Today!</p>
            <p className='mt-4 ml-4 font-semibold text-[#1579B1]'>Special intro offer - 50% off</p>
            </div>
            
            <button className='bg-[#1579B1]  w-24 text-[#FFFFFF] rounded-full h-10 ml-28 mt-8'>BuyNow</button>
            
            
            </div>
            <div className='flex flex-col mt-8 border border-shadow-[#808080] rounded-xl p-8 mb-20'>
            <p className=' text-[#000000] text-xl font-semibold'> Whats in the box?</p>
            <div className='flex flex-row mt-4'>
            <FaCheck className='fill-[#1579B1]'/>
            <p className=' text-[#808080] text-sm ml-2'>Price includes GPS tracker</p>
            </div>
            
            
          <div className='flex flex-row mt-2'>
            <FaCheck className='fill-[#1579B1]'/>
            <p className=' text-[#808080] text-sm ml-2'>Sim card</p>
            </div>
            
            <div className='flex flex-row mt-2'>
            <FaCheck className='fill-[#1579B1]'/>
            <p className=' text-[#808080] text-sm ml-2'>Charging cable</p>
            </div>
            
            <div className='flex flex-row mt-2'>
            <FaCheck className='fill-[#1579B1]'/>
            <p className=' text-[#808080] text-sm ml-2'>Silicon case </p>
            </div>

            </div>
            
            
        </div>
       
        </div>
        <div className='flex flex-row  bg-gray-100 '>
            <div className='bg-gray-100 '>
            <Image src={BackI} alt='pet' width={600} className='rounded-xl ml-40 mb-4'></Image>
        </div>
        <div className='flex flex-col'>
             <div className='ml-48 mt-4'>
            <p className='text-[#1579B1] ml-10 font-semibold'>About your Pet App</p>
            <p className='text-2xl text-[#081826] mt-2 ml-10 font-bold'>Premium Features</p>
            <p className='text-gray-500 ml-10 mt-2 text-sm'>Over hundreds dogs are lost or stolen every year.Pet-track pro <br></br> is dedicately working towards reducing the number by helping <br></br>you track your pet quickly no matter how far they are from you. </p>
        </div>
        <div className='flex flex-col ml-52 text-gray-500 rounded-xl p-8 bg-gray-100'>
         <div className='flex flex-row mt-2'>
            <FaCheck className='fill-[#1579B1]'/>
            <p className=' text-[#808080] text-sm ml-2'>GPS tracking ( 2-3 miniutes interval )</p>
            </div>

            <div className='flex flex-row mt-3'>
            <FaCheck className='fill-[#1579B1]'/>
            <p className=' text-[#808080] text-sm ml-2'>Real time tracking ( 5-10 seconds interval )</p>
            </div>
            
            <div className='flex flex-row mt-3'>
            <FaCheck className='fill-[#1579B1]'/>
            <p className=' text-[#808080] text-sm ml-2'>Virtual fence</p>
            </div>

           <div className='flex flex-row mt-3'>
            <FaCheck className='fill-[#1579B1]'/>
            <p className=' text-[#808080] text-sm ml-2'>Instant Notification</p>
            </div>

            <div className='flex flex-row mt-3'>
            <FaCheck className='fill-[#1579B1]'/>
            <p className=' text-[#808080] text-sm ml-2'>Route playback</p>
            </div>

            <div className='flex flex-row mt-3'>
            <FaCheck className='fill-[#1579B1]'/>
            <p className=' text-[#808080] text-sm ml-2'>Global coverage</p>
            </div>

            <div className='flex flex-row mt-3'>
            <FaCheck className='fill-[#1579B1]'/>
            <p className=' text-[#808080] text-sm ml-2'>Unlimited location history</p>
            </div>
           
            
            
           
            </div>
            <div className='flex flex-row ml-4'>
                <button className='border border-blue-400 w-28 h-10 rounded-full ml-52'>1</button>
            <button className='bg bg-[#1579B1] text-[#ffffff] w-28 rounded-full h-10 ml-8'>Buy Now</button>
            </div>
            
        </div>
        
       
        </div>
        <div className='w-full'>
            <Image src={Tutoral}  alt='Set-up' className='w-full'></Image>
        </div>   

        </main>
       
     );
}
 
export default gps;