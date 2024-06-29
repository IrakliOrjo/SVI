"use client"
import Image from 'next/image'
import b1 from '../app/gallery/b1.png'
import bottle2 from '../app/gallery/sa2.png'
import { useEffect, useRef } from 'react'
import { motion,useAnimation, useInView } from 'framer-motion'
const Wines = () => {

  const wineRef = useRef(null)
  const isInView = useInView(wineRef, { once: true })
  const mainControls = useAnimation()
  const slideControls = useAnimation()

  useEffect(() => {
    if(isInView){
      mainControls.start("visible")
      slideControls.start("visible")
    }
  }, [isInView])

  return (
    <div
    id='wine' 
    ref={wineRef}
    className=" mt-32 flex flex-col justify-center items-center">
      <motion.div
      variants={{
            hidden: { opacity:0, y:-75},
            visible: { opacity:1, y:0}
          }}
          initial='hidden'
          animate={mainControls}
          transition={{duration: 0.5, delay: 0.25}}
      className='flex flex-col justify-center items-center'
      >

        <p className="font-bold text-[2rem] ml-5">SVI Collection</p>
        <p className="italic flex items-center">
            <span className="h-0 w-9 border-black mr-2
         border-b-[1px] inline-block">
            </span>Since 2020<span className="h-0 ml-2 w-9 border-black
         border-b-[1px] inline-block">
            </span></p>
      </motion.div>
      <motion.div
      variants={{
            hidden: { opacity:0, y:75},
            visible: { opacity:1, y:0}
          }}
          initial='hidden'
          animate={slideControls}
          transition={{duration: 0.5, delay: 0.25}}
      >

            <div className='flex flex-col md:flex-row gap-40 my-20'>
                <div className='flex cursor-pointer flex-col items-center justify-center gap-3 hover:scale-105 transition-all duration-300'>
                    <Image 
                    className='h-[360px] object-contain'
                    src={b1} alt='bottle' />
                    <p className='font-bold text-[1.1rem] tracking-widest'>"Kakhuri Mtsvane"</p>
                    <p>White Wine</p>
                </div>
                <div className='flex cursor-pointer flex-col items-center justify-center gap-3 hover:scale-105 transition-all duration-300'>
                    <Image 
                    className='h-[360px] object-contain'
                    src={bottle2} alt='bottle' />
                    <p className='font-bold text-[1.1rem] tracking-widest'>"Saperavi"</p>
                    <p>Red Wine</p>
                </div>
            </div>
      </motion.div>
    </div>
  )
}

export default Wines