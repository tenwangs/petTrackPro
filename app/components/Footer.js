import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const links = [
    { name: "Home", href: "/" },
    { name: "GPS-pet-Tracker", href: "/gps" },
    { name: "Support", href: "/support" },
    { name: "FAQ", href: "/FAQ" },
    { name: "About Us", href: "/aboutUs" },
  ];
  return (

      <div className="bg-[#497FA4] w-full min-h-52  flex justify-center items-center p-5 z-0 bottom-0 ">
        <footer className="  w-full grid lg:grid-cols-3 grid-cols-1 lg:grid-flow-row gap-5 p-5 lg:p-0">
         <div className="flex justify-center items-center">
          <nav className="">
            <ul className="flex justify-evenly items-center space-x-5 text-md text-[#fafafa]">
              {links.map((link) => (
                <li key={link.name} className="uppercase">
                  <Link href={link.href}>

                  {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
         </div>
         <div className="flex justify-center items-center">
          <Image src="/assets/images/pawLogo.png" alt="pawLogo" width={75} height={75}/>
         </div>
         <div className="text-[#fafafa] text-sm flex justify-center items-center">
          <p> &#169;2024 Pet TrackPro. All Rights are preserved </p>
         </div>
        </footer>
      </div>

  );
}
