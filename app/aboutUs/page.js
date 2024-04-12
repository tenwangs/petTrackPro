import Logo from '/public/assets/images/pawLogo.png';
import Image from 'next/image';
import Img1 from '/public/assets/images/img1.png';
import Img2 from '/public/assets/images/img2.png';
import Img3 from '/public/assets/images/img3.png';
import Img4 from '/public/assets/images/manoj.png';
import Img5 from '/public/assets/images/tenzin.jpg';
import Img6 from '/public/assets/images/kunzang.jpg';
import Img7 from '/public/assets/images/pravaat.jpg';
import Img8 from '/public/assets/images/dorji.jpg';
import { FaFacebook } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa6';
import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa6';
import Link from 'next/link';

const aboutUs = () => {
  return (
    <main className='bg-[#ffffff] mt-4'>
      <div className='flex flex-row'>
        <div className='lg:block hidden'>
          <Image src={Logo} alt='Logo' className='w-2/3 rounded-full ml-40' />
          <p className='text-5xl ml-32 mt-8 text-[#1579B1] font-semibold'>
            Your pet-track pro
          </p>
        </div>
        <div className='bg-[#fafafa] border border-gray-200 w-[90%] lg:w-1/2 mx-auto lg:ml-20 rounded-xl mt-8 '>
          <div className='bg-[#5A92B1] rounded-l w-full'>
            <p className='text-center font-semibold py-2 text-2xl text-[#ffffff]'>
              All about Pet Track pro
            </p>
          </div>
          <div className='mt-4'>
            <p className='mt-5 text-center text-4xl text-[#014550] font-light'>
              First Step
            </p>
            <p className='px-4 text-sm text-[#014550] text-center'>
              With our devices and mobile app, you can easily monitor your
              pet&apos;s location in real time, set safe zone and receive
              instant alerts if they are too far.
            </p>
            <p className='px-4 text-sm text-[#014550] mt-5 text-center'>
              At Pet-track pro we are passionate about connecting pet&apos;s
              with the owner through innovative tracking solutions. Our journey
              begins With a simple mission to provide peace of mind to pet
              owners everywhere. No matter of your pets of any kind we
              understand the importance of ensuring their safety and well-being.
            </p>
          </div>
          <div className=' mt-10 flex flex-row w-full justify-evenly items-end'>
            <Image src={Img1} alt='Logo' width={200} className='w/1-4'></Image>
            <Image src={Img2} alt='Logo' width={300} className=''></Image>
            <Image src={Img3} alt='Logo' width={300} className=' '></Image>
          </div>
          <div className='flex flex-row mt-8'>
            <p className='text-right mt-4 text-[#014550] text-sm w-full '>
              Thank you for choosing Pet-track pro -where every paw print
              matters
            </p>
            <Image
              src={Logo}
              alt='logo'
              className='mx-4 w-10 h-10 rounded-full'
            ></Image>
          </div>
        </div>
      </div>

      <p className='text-center mt-20 text-4xl font-semibold text-[#1579B1]'>
        Meet Our Team
      </p>

      <div className='mb-10'>
        <div className='flex justify-center items-center mt-8'>
          <ProfileCard
            img={Img4}
            name={'Manoj Chhetri'}
            facebook={'https://www.facebook.com'}
            instagram={'https://www.instagram.com'}
            twitter={'https://www.twitter.com'}
            linkedin={'https://www/linkedin.com'}
          />
        </div>

        <div className='flex flex-col justify-around items-center lg:flex-row pt-10'>
          <ProfileCard
            img={Img5}
            name={'Tenzin Wangchuk'}
            facebook={'https://www.facebook.com'}
            instagram={'https://www.instagram.com'}
            twitter={'https://www.twitter.com'}
            linkedin={'https://www/linkedin.com'}
          />
          <ProfileCard
            img={Img6}
            name={'Kuenzang Dema'}
            facebook={'https://www.facebook.com'}
            instagram={'https://www.instagram.com'}
            twitter={'https://www.twitter.com'}
            linkedin={'https://www/linkedin.com'}
          />
          <ProfileCard
            img={Img7}
            name={'Pravaat Chhetri'}
            facebook={'https://www.facebook.com'}
            instagram={'https://www.instagram.com'}
            twitter={'https://www.twitter.com'}
            linkedin={'https://www/linkedin.com'}
          />
          <ProfileCard
            img={Img8}
            name={'Dorji Dhendup'}
            facebook={'https://www.facebook.com'}
            instagram={'https://www.instagram.com'}
            twitter={'https://www.twitter.com'}
            linkedin={'https://www/linkedin.com'}
          />
        </div>
      </div>
    </main>
  );
};

const ProfileCard = ({ img, facebook, instagram, twitter, linkedin, name }) => {
  return (
    <div className='w-[300px] min-h-[400px] border border-[#5A92B1] rounded-3xl flex flex-col justify-between items-center my-5 lg:my-0'>
      <div className='bg-[#5A92B1] h-[60px] w-full  rounded-t-3xl flex flex-row justify-evenly items-center font-xl'>
        <p className='text-2xl p-3 font-medium text-white'>{name}</p>
      </div>
      <Image
        src={img}
        alt='Team'
        className='mx-auto mt-4 p-4 rounded-full w-60 '
      ></Image>
      <div className='bg-[#5A92B1] h-[60px] w-full rounded-3xl flex flex-row justify-evenly items-center font-xl'>
        <Link href={facebook}>
          <FaFacebook className='w-10 h-10 text-white' />
        </Link>
        <Link href={instagram}>
          <FaInstagram className='w-10 h-10 text-white' />
        </Link>
        <Link href={twitter}>
          <FaXTwitter className='w-10 h-10 text-white' />
        </Link>
        <Link href={linkedin}>
          <FaLinkedin className='w-10 h-10 text-white' />
        </Link>
      </div>
    </div>
  );
};

export default aboutUs;
