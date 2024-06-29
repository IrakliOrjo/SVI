import React from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { CiMapPin } from "react-icons/ci";
import { FaMobileScreenButton } from "react-icons/fa6";

const Form = () => {
  return (
    <div 
    id='contact'
    className='flex bg-zinc-200 flex-col lg:flex-row justify-center gap-20 px-8 py-11'>
        <div className='flex flex-col '>
            <p className='text-[2rem] font-bold
            max-w-[36rem]'>IF YOU HAVE ANY QUESTIONS FILL OUT THIS FORM.</p>
            <div className='flex mt-5 ml-5'>
                <CiMapPin />
                <p className='ml-3'>Abashidze Street</p>
            </div>
            <div className='flex mt-5 ml-5'>
                <FaMobileScreenButton />
                <p className='ml-3'>+995 551009551</p>
            </div>
        </div>
        <form className='flex flex-col gap-4  max-w-[35rem] lg:w-[35rem]'>
        <Input className=' focus-visible:ring-0' type='text' placeholder='Your Name' />
        <Input className=' focus-visible:ring-0' type='email' placeholder='Email' />
        <Textarea placeholder='Your Message ' className='focus-visible:ring-0 ' />
        <Button
         className='w-[8rem] self-end'
        variant="outline">Send Message</Button>

        </form>
    </div>
  )
}

export default Form