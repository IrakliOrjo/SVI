import React from 'react'
import img1 from '../app/gallery/1.jpg'
import img2 from '../app/gallery/2.jpg'
import img3 from '../app/gallery/3.jpg'
import img4 from '../app/gallery/4.jpg'
import img5 from '../app/gallery/5.jpg'
import Image from 'next/image'
import sviLogo from '../app/svi.png'

const Gallery = () => {
  return (
    <div className='2xl:h-[400px] flex justify-center items-center mb-11 px-2'>
         
        <ul className='flex flex-col flex-wrap justify-center items-center 2xl:flex-nowrap md:flex-row gap-3'>
            <li className='hover:cursor-pointer group hover:bg-black hover:brightness-75 transition-all duration-200'>
                <div className='relative'>

                <Image src={img1} alt='wine' className='w-[370px] h-[400px] md:h-[380px]  xl:h-[500px] object-cover'/>
                </div>
                <Image src={sviLogo} alt='logo'
                    className='absolute hidden group-hover:flex top-[20%] left-[20%] w-[200px] h-[200px]' />
            </li>
            <li className='hover:cursor-pointer group hover:bg-black hover:brightness-75 transition-all duration-200'>
                <div className='relative'>
                <Image src={img2} alt='wine' className='w-[370px]  h-[400px] md:h-[380px] xl:h-[500px] object-cover'/>
                </div>
                <Image src={sviLogo} alt='logo'
                    className='absolute hidden group-hover:flex top-[20%] left-[20%] w-[200px] h-[200px]' />
            </li>
            <li className='hover:cursor-pointer group hover:bg-black hover:brightness-75 transition-all duration-200'>
                <div className='relative'>
                <Image src={img3} alt='wine' className='w-[370px] h-[400px] md:h-[380px] xl:h-[500px] object-cover'/>
                </div>
                <Image src={sviLogo} alt='logo'
                    className='absolute hidden group-hover:flex top-[20%] left-[20%] w-[200px] h-[200px]' />
            </li>
            <li className='hover:cursor-pointer group hover:bg-black hover:brightness-75 transition-all duration-200'>
                <div className='relative'>

                <Image src={img4} alt='wine' className='w-[370px]  h-[400px] md:h-[380px] xl:h-[500px] object-cover'/>
                </div>
                <Image src={sviLogo} alt='logo'
                    className='absolute hidden group-hover:flex top-[20%] left-[20%] w-[200px] h-[200px]' />
            </li>
            <li className='hover:cursor-pointer group hover:bg-black hover:brightness-75 transition-all duration-200'>
                <div className='relative'>

                <Image src={img5} alt='wine' className='w-[370px]  h-[400px] md:h-[380px] xl:h-[500px] object-cover'/>
                </div>
                <Image src={sviLogo} alt='logo'
                    className='absolute hidden group-hover:flex top-[20%] left-[20%] w-[200px] h-[200px]' />
            </li>
        </ul>
    </div>
  )
}

export default Gallery