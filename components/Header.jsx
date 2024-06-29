"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import sviLogo from '../app/black.png'
 

const Header = () => {
    const [navMobile, setNavMobile] = useState(false)
 
      const [header,setHeader] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false)
    })
  })
  return (
     <div className={`flex   justify-center fixed w-full  md:px-6 
    ${header ? 'bg-slate-50 border-b-[1px] z-50 py-7 md:bg-slate-50 transition-colors duration-500 ease-in-out md:py-0'  : 
    ' '}`}>
        <div onClick={() => setNavMobile(!navMobile)} className='md:hidden '>
      {!navMobile && <AiOutlineMenu className='text-slate-900 fixed top-4 right-4 hover:scale-105 w-12 h-8 cursor-pointer' />}
      
      {navMobile && <AiOutlineClose className='text-slate-900 fixed top-4 right-4 z-10 hover:scale-105 w-12 h-8 cursor-pointer' />}
      </div>
      <div className={`${
        navMobile ? 'top-0 max-h-[188px]' : '-top-full max-h-[188px] '
        } fixed w-full bg-slate-400 md:hidden left-0 h-full overflow-hidden transition-all duration-500 ease-in-out`}
        >
            <nav className='flex flex-col  gap-2  pt-9 text-white font-500 tracking-widest
             '
            >
                <Link href='/'
                    className='hover:border-b mx-auto border-[#636464]'
                >Home</Link>
                <Link href='#journal'
                    className='hover:border-b mx-auto border-[#636464]'
                >History</Link>
                 
                <Link href='#wine'
                    className='hover:border-b mx-auto border-[#636464]'
                >Wine</Link>
                <Link href='#contact'
                    className='hover:border-b mx-auto border-[#636464]'
                >Contact</Link>
            </nav>
              
      </div>
      <nav className='hidden md:flex  gap-11  text-black font-500 tracking-widest
              justify-center items-center'
            >
                <Link href='/'
                    className='hover:border-b   mx-auto border-slate-200'
                >Home</Link>
                <Link href='#journal'
                    className='hover:border-b   mx-auto border-slate-200'
                >History</Link>
                <Link href='/'
                    className='  '
                >
                    <Image src={sviLogo} width={110} height={90} alt='logo'
                    className='' />
                </Link>
                <Link href='#wine'
                    className='hover:border-b mx-auto border-slate-200'
                >Wine</Link>
                <Link href='#contact'
                    className='hover:border-b mx-auto border-slate-200'
                >Contact</Link>
                 
            </nav>
    </div>
  )
}

export default Header