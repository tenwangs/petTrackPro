"use client";
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { usePathname } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  const path=usePathname();
  return (
    <html lang="en">
      <body className={inter.className + " bg-white"}>

        {(path).includes('/dashboard') ? (
          <>

         {children}
         </>
        ) : (
          <Navbar>{children}
          <Footer/>
          </Navbar>
        )}
     

      </body>
    </html>
  )
}
