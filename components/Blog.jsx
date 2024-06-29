"use client"
import React, { useEffect, useRef } from 'react'
import grapes from '../app/grap.jpg'
import Image from 'next/image'
import { motion,useAnimation, useInView } from 'framer-motion'

const Blog = () => {
    const heroRef = useRef(null)
  const isInView = useInView(heroRef, { once: true })
  const leftSection = useAnimation()
  const rightSection = useAnimation()
  const grapesSection = useAnimation()

  useEffect(() => {
    if(isInView){
      leftSection.start("visible")
      rightSection.start("visible")
      grapesSection.start("visible")
    }
  }, [isInView])
  return (
    <div
     id='journal'
     className='flex flex-col  justify-center items-center py-14 md:py-32 mb-6'>
        <p 
        ref={heroRef}
        className='text-[1.5rem]  mb-4 font-bold text-[#161616] '>Wine Events In Georgia Chronologicaly</p>
        <div 
        className='flex flex-col md:flex-row gap-12 md:gap-20 mt-12 md:mt-20'>
            <motion.div
            variants={{
            hidden: { opacity:0, marginRight: 150},
            visible: { opacity:[0,10,20,30,40,50,60,70,80,100], marginRight: 0}
          }}
          initial='hidden'
          animate={leftSection}
          transition={{duration: 1, delay: 0.25}}
            >
                <ul className='flex flex-col justify-around gap-6  min-h-[30rem]'>
                <li className='text-left md:text-right flex flex-col gap-1'>
                    <p className='font-bold text-[1.3rem]'>6000-5000 BC:</p>
                    <p className='italic'>Wine Production</p>
                    <p className='max-w-[18rem] text-[.9rem]'>Evidence of wine production in Georgia, making it one of the oldest wine-producing regions in the world.</p>
                </li>
                <li className='text-left md:text-right flex flex-col gap-1'>
                    <p className='font-bold text-[1.3rem]'>1-4 Centuries:</p>
                    <p className='italic'>Wine Popularity</p>
                    <p className='max-w-[18rem] text-[.9rem]'>Georgian wine gains popularity in the Roman Empire</p>
                </li>
                <li className='text-left md:text-right flex flex-col gap-1'>
                    <p className='font-bold text-[1.3rem]'>4-th Century</p>
                    <p className='italic'>Christianity and wine</p>
                    <p className='max-w-[18rem] text-[.9rem]'>Saint Nino introduces Christianity to Georgia, using a cross made of grapevines.</p>
                </li>
                </ul>
            </motion.div>
            <motion.div
            variants={{
            hidden: { opacity:0},
            visible: { opacity:[25,50,75,100]}
                }}
            initial='hidden'
            animate={grapesSection}
            transition={{duration: 2, delay: 0.25}}
            className='self-center'
            >

            <Image 
            src={grapes} 
            className='object-contain  hidden md:flex md:w-[200px] md:h-[200px] lg:w-[350px] lg:h-[350px]
            ' alt='grapes' />
            </motion.div>
            <motion.div
            variants={{
            hidden: { opacity:0, marginLeft: 150},
            visible: { opacity:[0,10,20,30,40,50,60,70,80,100], marginLeft: 0}
          }}
          initial='hidden'
          animate={rightSection}
          transition={{duration: 1, delay: 0.25}}
            >
            <ul className='flex flex-col gap-6 justify-around  min-h-[30rem]'>
                <li className='text-left flex flex-col gap-1'>
                    <p className='font-bold text-[1.3rem]'>11-13 Centuries</p>
                    <p className='italic'>Golden Age</p>
                    <p className='max-w-[18rem] text-[.9rem]'>Golden age of Georgian wine production during the reign of King David the Builder and Queen Tamar.</p>
                </li>
                <li className='text-left flex flex-col gap-1'>
                    <p className='font-bold text-[1.3rem]'>2013</p>
                    <p className='italic'>Wine Heritage</p>
                    <p className='max-w-[18rem] text-[.9rem]'> UNESCO adds the traditional Georgian winemaking method using qvevri to its Intangible Cultural Heritage List.</p>
                </li>
                <li className='text-left flex flex-col gap-1'>
                    <p className='font-bold text-[1.3rem]'>2021</p>
                    <p className='italic'>The History</p>
                    <p className='max-w-[18rem] text-[.9rem]'>Archaeological evidence suggests wine was produced in Georgia as far back as 8,000 years ago, potentially making it the world's oldest wine region.</p>
                </li>
            </ul>

            </motion.div>
        </div>
    </div>
  )
}

export default Blog