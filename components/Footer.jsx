import React from 'react'

const Footer = () => {
  return (
    <footer className='flex flex-col'>

    <div className='border-gray-400 border-t-[1px] border-b-[1px] px-11 xl:px-20 2xl:justify-center
    flex flex-col md:flex-row md:gap-[5rem] 2xl:gap-[14rem] items-start lg:items-center py-12 '>
        <p className='text-gray-500 max-w-[26rem]'>"Discover the art of Georgian wine with 'SVI'"</p>
        <div className='flex flex-col'>
            <p className='text-gray-500'>Georgia, Tbilisi,<br /> </p>
            <p className='text-gray-500'>+995 551009551</p>
        </div>
        <div className='flex flex-col'>
            <p className='text-gray-500'>Contact Mail:<br /> sviwine@gmail.com</p>
             
        </div>
    </div>
    <p className='italic self-center text-gray-600'>© 2024 SVI Wine Cellar, All Rights Reserved</p>
    </footer>
  )
}

export default Footer