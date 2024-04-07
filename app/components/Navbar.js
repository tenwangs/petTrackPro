import Link from 'next/link'
import Paw from '/public/pawLogo.png'
import Image from 'next/image'

export default function Navbar(){
    return(
        <main className='border border-gray-200'>
             <div className="flex flex-row pb-4  ml-52">
         <Image src={Paw} alt='pawImage' className='w-20 h-20'></Image>
         <div className='mt-10 font-bold'>
            <Link href={'/'} className='ml-60 text-[#3D3D3D] text-l'>Home</Link>
        <Link href={'./gps'} className="ml-12 text-[#3D3D3D] text-l">GPS pet Tracker</Link>
        <Link href={'./support'} className="ml-12 text-[#3D3D3D] text-l">Support</Link>
        <Link href={'./FAQ'} className="ml-12 text-[#3D3D3D] text-l">FAQ</Link>
        <Link href={'./aboutUs'} className="ml-12 text-[#3D3D3D] text-l">About_US  </Link>
         </div>
        
        <div className='mt-8'>
            <button className="ml-60 bg-[#5A92B1]  rounded-full text-[#3D3D3D] text-[#ffffff] w-28 h-10 pl-6 pr-6">Sign Up</button>
        <button className="ml-4 border border-[#5A92B1]  rounded-full w-28 h-10 text-[#3D3D3D] pl-6 pr-6">Log In</button>
        </div>
        
    </div>
        </main>
        
    )
   

}