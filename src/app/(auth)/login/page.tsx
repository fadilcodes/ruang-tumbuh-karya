'use client'
import React from 'react'
import Link from 'next/link';
import Button from '@/components/(ui)/Button';
import Image from 'next/image';


export default function page() {
  return (
    <div className='flex min-h-screen'>

        <div className='w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12'>
            <div className='items-start'>
            <h1 className='text-[#00BDC4] text-[35pt] font-bold'>Masuk</h1>
            <p className='pb-7'>Selamat datang di ruang tumbuh karya</p>
            
                <form action="" className='space-y-4'>
                <input 
                type="email" 
                placeholder='Masukan Email'  
                className='py-2 pl-4 w-full bg-[#F6F6F6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00BDC4]'
                />
                <input 
                type="password" 
                placeholder='Masukan Password'  
                className='py-2 pl-4 w-full bg-[#F6F6F6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00BDC4]'
                />
                <div className='text-right'>
                <Link href="#" className='text-[#00BDC4] text-[10pt]'>Lupa Password?</Link>
                </div>
                <Button type="submit" className='bg-[#00BDC4] rounded-xl py-3 w-full text-center text-white font-bold'>Masuk</Button>
                <p>Kamu belum memiliki akun? <Link href='#' className='text-[#00BDC4] font-bold'>Registrasi</Link></p>
                </form>
            
            </div>
        </div>


        <div className='hidden md:flex  bg-[#00BDC4] w-full md:w-1/2 items-center justify-center mt-30 mb-30 mr-30 rounded-xl'>
                <img 
                src="/images/logo-white.png" 
                alt="Logo" 
                width={300}
                height={100}
                />
        </div>
      
    </div>
  )
}
