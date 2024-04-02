import Logo from '/public/pawLogo.png';
import Image from 'next/image';
import Img1 from '/public/img1.png';
import Img2 from '/public/img2.png';
import Img3 from '/public/img3.png';
const aboutUs = () => {
    return ( 
        <main className='bg-[#ffffff] mt-4'>
            <div className='flex flex-row'>
            <div className=''>
                <Image src={Logo} alt='Logo' className='w-2/3 h-2/3 rounded-full ml-20' ></Image>
                <p className='text-5xl ml-32 mt-8 text-[#1579B1] font-semibold'>Your pet-track  </p>
                <p className='text-5xl ml-60 mt-8 text-[#1579B1] font-semibold'>pro</p>
            </div>
            <div className='bg-white border border-gray-200 w-2/4 ml-48 rounded-xl mt-8 '>
            <div className='bg-[#1579B1] rounded-l w-full'>
                <p className='ml-48 font-semibold ml-60 text-[#1579B1] text-2xl text-[#ffffff]'>All about Pet Track pro</p>
            </div>
            <div className='mt-4'>
                <p className='ml-72 mt-5 pl-2 text-xl text-[#014550]'>First Step</p>
                <p className='ml-20 mt-4 text-[#014550] text-sm'>With our devices and mobile app, you can easily moniter your pet's <br></br> location in real time, set dafe zone and recieve instant alerts <br></br>if they are too far </p>
                <p className='ml-8 mt-8 text-[#014550] text-sm'>At Pet-track pro we are passionate about connecting pet's with the owner through innovative tracking solutions. Our journey begins  <br></br> With a simple mission to provide peace of mind to pet owners everywher. No matter of your pets of <br></br>any kind we understand the importance of ensuring their safety and well-being</p>
            </div>
            <div className='w-32 h-32 mt-10 flex flex-row'>
                <Image src={Img1} alt='Logo' width={200} className='ml-40'></Image>
                <Image src={Img2} alt='Logo' width={200} className='ml-20'></Image>
                <Image src={Img3} alt='Logo' width={200} className='ml-20 '></Image>
            </div>
            <div className='flex flex-row mt-8'>
                <p className='ml-64 mt-4 text-[#014550] text-sm'>Thank you for choosing Pet-track pro -where every paw print matters </p>
            <Image src={Logo} alt='logo'  className='ml-4 w-10 h-10 rounded-full'></Image>
            </div>
            
                
            </div>
            
        </div>
        <p className='text-center mt-20 text-4xl font-semibold text-[#1579B1]'>Meet Team </p>

        <div>
            <div className='flex flex-col mt-8'>
                <Image src={Img1} alt='Team' className='mx-auto mt-4 p-4 rounded-full w-60 h-60'></Image>
                <p className='text-gray-800 text-center font-bold text-l'>Mr. Manoh </p>
                 <p className='text-gray-800 text-center font-bold text-l'>( coordinator ) </p>
            </div>
            <div className='flex flex-row'>
                <div className='flex flex-col'>
                <Image src={Img1} alt='Team' className='ml-20 mt-4 p-4 rounded-full w-60 h-60'></Image>
                <p className='text-gray-800 text-center ml-10 font-bold text-l'>Mr. Tenzin wangchuk </p>
            </div>

             <div className='flex flex-col'>
                <Image src={Img1} alt='Team' className='ml-40 mt-4 p-4 rounded-full w-60 h-60'></Image>
                <p className='text-gray-800 text-center ml-32 font-bold text-l'> Pravat Chhetri</p>
            </div>

             <div className='flex flex-col'>
                <Image src={Img1} alt='Team' className='ml-40 mt-4 p-4 rounded-full w-60 h-60'></Image>
                <p className='text-gray-800 text-center ml-44 font-bold text-l'>Mr. Dorji Dhendup </p>
            </div>

             <div className='flex flex-col'>
                <Image src={Img1} alt='Team' className='ml-40 mt-4 p-4 rounded-full w-60 h-60'></Image>
                <p className='text-gray-800 text-center ml-44 font-bold text-l'>Mrs. Kuenzang Dema  </p>
            </div>
            </div>
        </div>
        </main>
        
     );
}
 
export default aboutUs;