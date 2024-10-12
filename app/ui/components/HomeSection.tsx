import React from 'react'
import TextGradient from '../@core/TextGradient'

const HomeSection = () => {
  return (
    <section className='  min-h-screen 2xl:min-h-[450px]  dark:text-white w-full max-w-[1536px] flex justify-center flex-col items-center 2xl:justify-start  2xl:mt-48'>
       <div className='w-11/12 h-full flex flex-col lg:mt-8 items-center align-middle'>
        <TextGradient textValue='Financial Management Made' className='lg:text-6xl text-2xl text-center md:text-4xl font-extrabold z-20 pb-3'/>
         <TextGradient textValue='Simple for everyone' className='lg:text-6xl text-2xl md:text-4xl text-center font-extrabold mt-1 z-10 pb-3'/>
         <p className='text-center text-[#918F90] text-[8px] md:text-md lg:text-lg'>Experience seamless financial management with our all-in-one platform. From <br />budgeting and expense tracking to detailed financial insights. </p>
       </div>
    </section>
  )
}

export default HomeSection