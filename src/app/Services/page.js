"use client";

import React from 'react'


function page() {
  return (
    <>
      
   <section className='w-full min-h-screen relative'>

    <div className='
    w-[95%] 
    sm:w-[90%] 
    md:w-[600px] 
    lg:w-[800px]

    ml-4
    sm:ml-10
    md:ml-20
    lg:ml-80

    h-auto
    md:h-[420px]
    lg:h-[560px]

    border-2 
    my-9 
    bg-white 
    p-6 
    sm:p-8 
    md:p-10 
    lg:p-16
    '>

      <h1 className='
      text-[32px]
      sm:text-[45px]
      md:text-[60px]
      lg:text-[90px]

      font-light
      inline-block
      px-2
      leading-none

      ml-0
      sm:-ml-10
      md:-ml-20
      lg:-ml-70

      mt-10
      md:mt-16
      lg:mt-20

      bg-white
      pb-3
      '>
        Get Ready To <br/> Plan, Launch <br/> And Grow.
      </h1>

      <p className='
      text-xs
      sm:text-sm
      md:text-base

      ml-0
      sm:ml-10
      md:ml-30
      lg:ml-60

      mt-6
      md:mt-10
      lg:mt-15
      '>
        we are proud of the fact that we are ahead of the curve in an ever-evolving industry. <br/>
        WHICH captivate in remarkable ways.
      </p>

      <span
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
        className="
        absolute 
        right-2
        lg:right-[-5px]

        
        md:bottom-auto
        md:top-[350px]
        lg:top-[400px]

        rotate-90 
        text-xs
        md:text-sm
        tracking-widest 
        cursor-pointer 
        flex 
        items-center 
        gap-2
        "
      >
        SCROLL
        <span className="w-8 md:w-12 h-[1px] bg-black block"></span>
      </span>

    </div>
  
   </section>
    </>
  )
}

export default page
