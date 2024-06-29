"use client"
import React, { useEffect, useRef } from 'react'
import Header from './Header'
import { motion,  useAnimation, useInView } from 'framer-motion'

const Hero = () => {

  const heroRef = useRef(null)
  const isInView = useInView(heroRef, { once: true })
  const mainControls = useAnimation()

  useEffect(() => {
    if(isInView){
      mainControls.start("visible")
    }
  }, [isInView])

  return (
    <div className='min-h-screen relative flex flex-col overflow-y-auto  bg-emerald-900/15 
    bg-blend-darken items-center   bg-hero-pattern  text-center bg-cover'>
        <Header />
        <div   
        ref={heroRef}
        className="flex flex-col  my-auto items-center">
        <motion.div
          variants={{
            hidden: { opacity:0, y:75},
            visible: { opacity:1, y:0}
          }}
          initial='hidden'
          animate={mainControls}
          transition={{duration: 0.5, delay: 0.25}}
        >

        <h1 className='text-white text-[3.8rem]'>S.VI Wine Cellar</h1>
        <p className='text-white text-[1.2rem] flex items-center justify-center gap-2 italic'>
          <span className='border inline-block border-white h-0 w-7'></span>Since 2020
        <span className='border inline-block border-white h-0 w-7'></span></p>
        </motion.div>
         </div>
    </div>
  )
}

export default Hero