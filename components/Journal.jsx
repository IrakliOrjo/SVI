"use client"
import React, { useEffect, useRef } from 'react'
import { motion,  useAnimation, useInView } from 'framer-motion'


const Journal = () => {
  const journalRef = useRef(null)
  const isInView = useInView(journalRef, { once: true })
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
     
     className='flex bg-slate-50 flex-col items-center py-14 md:py-32 px-[5rem] justify-center scroll-auto snap-mandatory'>
       <motion.div
       variants={{
         hidden: { opacity: 0, y:-50 },
         visible: { opacity: [0,10,20,30,40,50,60,70,80,100], y:0 },
       }}
       initial='hidden'
       animate={slideControls}
       transition={{ duration: 0.70, ease: 'easeIn'}}
       >
        <div 
        ref={journalRef}
        className='flex relative flex-col md:flex-row gap-[5rem] justify-center items-center'>
            <div>
            <p 
            className='uppercase text-[#2c2c2c] font-bold text-[2rem] md:text-[1.8rem] max-w-[25rem] md:w-[19rem] lg:w-[25rem]'
            >"The first glass is for health, the second for joy, the third for wisdom."</p>
            <p className='italic flex items-center'><span className='inline-block h-0 w-11   border-b-[1px] mr-6 border-black'
            ></span>Georgian Proverb</p>
            </div>
            <p className='max-w-[40rem] text-left'>
              Nestled in the cradle of winemaking, Kakheti's wines embody millennia of tradition. Sun-kissed Georgian slopes yield 
              robust reds and crisp whites, their flavors whispering tales of ancient vines and time-honored methods. 
              <br />
              <br />
              Each sip offers a journey through Georgia's rich viticultural heritage, where modern techniques blend seamlessly with 8,000 
              years of wisdom
            
            </p>
        </div>
            </motion.div>
    </div>
  )
}

export default Journal