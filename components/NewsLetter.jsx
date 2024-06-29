"use client"
import React, { useEffect, useRef } from 'react'
import { motion,  useAnimation, useInView } from 'framer-motion'

const NewsLetter = () => {
  const newsLetterRef = useRef(null)
  const isInView = useInView(newsLetterRef, { once: true })
  const mainControls = useAnimation()

  useEffect(() => {
    if(isInView){
      mainControls.start("visible")
    }
  }, [isInView])
  return (
    <div 
    ref={newsLetterRef}
    className='h-[390px] bg-hero-rtveli bg-center md:object-cover md:bg-cover md:bg-no-repeat md:bg-fixed 
    bg-blend-darken bg-black/40   w-full border flex flex-col justify-center items-center'>
      <motion.div
      variants={{
            hidden: {  y:75, opacity:0},
            visible: { y:0,opacity: [0,10,20,30, 70,80,100], }
          }}
          initial='hidden'
          animate={mainControls}
          transition={{duration: 0.5, delay: 0.25}}
          className='px-20 mt-20 self-end'
          >      
        <p className='text-white font-semibold text-[1.3rem]'>"Sip, soak, and savor the moment"</p>
      </motion.div>
    </div>
  )
}

export default NewsLetter