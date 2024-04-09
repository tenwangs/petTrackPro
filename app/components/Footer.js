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

      <div className="bg-[#497FA4] w-full min-h-52  flex justify-center items-center p-5  ">
        <footer className=" flex flex-col  lg:flex-row justify-evenly items-center w-full">
         <div>
          <nav className="p-5">
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
         <div>
          <Image src="/assets/images/pawLogo.png" alt="pawLogo" width={75} height={75}/>
         </div>
         <div className="text-[#fafafa] text-sm">
          <p> &#169;2024 Pet TrackPro. All Rights are preserved </p>
         </div>
        </footer>
      </div>

  );
}
