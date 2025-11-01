import Button from '@/components/(ui)/Button'
import Image from 'next/image';
import React from 'react'




function Navbar() {
  return (
    <>
        <div className='flex items-center justify-between p-5 h-[64px] w-full bg-gradient-to-r from-[#00B5FD] to-[#00BDC4]'>

        <img 
        src="/images/logo-white.png" 
        alt="Logo" 
        width={100}
        height={50}
        />

        <ul className='flex gap-10 text-white font-bold'>
            <li>Beranda</li>
            <li>Tentang Kami</li>
            <li>Event/Webinar</li>
        </ul>
        <div className='flex gap-5'>
            <Button className='bg-white text-[#00BDC4]'>Masuk</Button>
            <Button className='bg-transparent border border-2 border-white text-white'>Daftar</Button>
        </div>
            
        </div>
    </>
  )
}

export default Navbar
