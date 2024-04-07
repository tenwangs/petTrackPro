import { IoIosArrowForward } from "react-icons/io";
export default function Footer () {
    return ( 
        <main>
             <div className="bg-gray-200 w-full h-58 ">
           <footer className="footer p-10 bg-[#5A92B1] text-base-content">
           <div className="mt-8 ml-20">
            <a className="text-[#FFFFFF] font-semibold">Your Pet Track is a GPS<br></br>
Pet Tracking solution that <br></br>
can be used globally</a>
           </div>
  <nav>
    <h6 className="font-semibold text-xl text-[#FFFFFF] mb-4">About Us</h6>
    <div className="flex flex-row">
    <IoIosArrowForward className=""/> 
      <a className="link link-hover text-[#FFFFFF] ml-2"> 
      Our Story</a>
    </div> 
    
    <div className="flex flex-row">
    <IoIosArrowForward className=""/> 
      <a className="link link-hover text-[#FFFFFF] ml-2"> 
      contacts </a>
    </div> 

    <div className="flex flex-row">
    <IoIosArrowForward className=""/> 
      <a className="link link-hover text-[#FFFFFF] ml-2"> 
      Review </a>
    </div> 
    
  </nav> 
  <nav>
    <h6 className="font-semibold text-xl text-[#FFFFFF] mb-4">Information</h6> 
    <div className="flex flex-row">
    <IoIosArrowForward className=""/> 
      <a className="link link-hover text-[#FFFFFF] ml-2"> 
      Blog</a>
    </div> 

   <div className="flex flex-row">
    <IoIosArrowForward className=""/> 
      <a className="link link-hover text-[#FFFFFF] ml-2"> 
      Products</a>
    </div> 

   
   <div className="flex flex-row">
    <IoIosArrowForward className=""/> 
      <a className="link link-hover text-[#FFFFFF] ml-2"> 
      how it works </a>
    </div> 
    
  </nav> 
  <nav>
    <h6 className="font-semibold text-xl text-[#FFFFFF] mb-4">Community</h6> 
   <div className="flex flex-row">
    <IoIosArrowForward className=""/> 
      <a className="link link-hover text-[#FFFFFF] ml-2"> 
      Refer a friend </a>
    </div> 

    <div className="flex flex-row">
    <IoIosArrowForward className=""/> 
      <a className="link link-hover text-[#FFFFFF] ml-2"> 
      Partner with us </a>
    </div> 

   <div className="flex flex-row">
    <IoIosArrowForward className=""/> 
      <a className="link link-hover text-[#FFFFFF] ml-2"> 
      Our Customer</a>
    </div> 

  </nav> 
  <form>
    <h6 className="font-semibold text-xl text-[#FFFFFF] mb-2">Newsletter</h6> 
    <a className="text-[#FFFFFF] font-semibold mt-3">Subscribe to our e-newsletter to<br></br>
learn about new features and<br></br>
get discounts.</a>
    <fieldset className="form-control w-80">
      <label className="label mt-2">
        <span className="label-text font-semibold text-[#FFFFFF]">Enter your email address</span>
      </label> 
      <div className="join">
        <input type="text" placeholder="username@site.com" className="input input-bordered text-[#FFFFFF] join-item bg-blue-600  " /> 
        <button className="btn bg-blue-800 border-gray-500 join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
  
</footer>
        </div>
        
        </main>
       
     );
}
 
