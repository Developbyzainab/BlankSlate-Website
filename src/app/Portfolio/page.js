"use client"
import React from 'react'
import Image from 'next/image'

export default function PortfolioPage() {
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
       Let’s make It vibrant <br/>
with Cutting Edge <br/>
technologies.
      </h1>

      <p className='
      text-xs
      sm:text-sm
      md:text-base

      ml-0
      sm:ml-10
      md:ml-30
      lg:ml-70

      mt-6
      md:mt-10
      lg:mt-15
      '>
        We are proud of the fact that we are ahead of 
the curve in an ever-evolving industry.
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


{/* menus */}

<section className='w-full h-auto pb-10'>
  <div className='w-full h-30 flex  pt-17 pl-30 gap-4'>
    <div className='w-40 h-7 '>
      <h1>ALL</h1>
    </div>
    <div className='w-45 h-7 '>
      <h1>dESIGN SOLUTIONS.</h1>
    </div>
    <div className='w-45 h-7 '>
      <h1>wEB sOLUTIONS.</h1>
    </div>
    <div className='w-45 h-7'>
      <h1>mOBILE sOLUTIONS.</h1>
    </div>
  </div>

  <div className="min-h-screen flex items-center justify-center mt-10">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 max-w-5xl mx-auto px-4">
             <div className="overflow-hidden">
               <Image
                 src="/ga1.png"
                 alt="image1"
                 width={700}
                 height={600}
                 className="w-full h-[250px] md:h-[380px] lg:w-320 object-cover"
               />
               
             </div>
             <div className="overflow-hidden">
               <Image
                 src="/ga2.png"
                 alt="image2"
                 width={700}
                 height={600}
                 className="w-full h-[250px] md:h-[380px] object-cover"
               />
               
             </div>
             <div className="overflow-hidden">
               <Image
                 src="/ga3.png"
                 alt="image3"
                 width={700}
                 height={600}
                 className="w-full h-[250px] md:h-[380px] object-cover"
               />
              
             </div>
             <div className="overflow-hidden">
               <Image
                 src="/ga4.png"
                 alt="image4"
                 width={700}
                 height={600}
                 className="w-full h-[250px] md:h-[380px] object-cover"
               />
              
             </div>

             <div className="overflow-hidden">
               <Image
                 src="/ga5.png"
                 alt="image4"
                 width={700}
                 height={600}
                 className="w-full h-[250px] md:h-[380px] object-cover"
               />
              
             </div>


             <div className="overflow-hidden">
               <Image
                 src="/ga6.png"
                 alt="image4"
                 width={700}
                 height={600}
                 className="w-full h-[250px] md:h-[380px] object-cover"
               />
              
             </div>


             <div className="overflow-hidden">
               <Image
                 src="/ga7.png"
                 alt="image4"
                 width={700}
                 height={600}
                 className="w-full h-[250px] md:h-[380px] object-cover"
               />
              
             </div>


             <div className="overflow-hidden">
               <Image
                 src="/ga8.png"
                 alt="image4"
                 width={700}
                 height={600}
                 className="w-full h-[250px] md:h-[380px] object-cover"
               />
              
             </div>


             <div className="overflow-hidden">
               <Image
                 src="/ga9.png"
                 alt="image4"
                 width={700}
                 height={600}
                 className="w-full h-[250px] md:h-[380px] object-cover"
               />
              
             </div>


             <div className="overflow-hidden">
               <Image
                 src="/ga10.png"
                 alt="image4"
                 width={700}
                 height={600}
                 className="w-full h-[250px] md:h-[380px] object-cover"
               />
              
             </div>
           </div>
         </div>
 
       <div className="flex justify-center items-center gap-4 text-center mt-20">
  <span className="cursor-pointer">1</span>
  <span className="cursor-pointer">2</span>
  <span className="cursor-pointer">3</span>
  <span className="cursor-pointer">4</span>
  <span className="cursor-pointer font-semibold">Next</span>
</div>
      
</section>




 {/* we got your back */}
      <section className='w-full h-[500px] text-white bg-[#0EACDB] pl-30 pt-20 '>
        <h1 className='text-[80px] leading-none'>We’ve got your back, <br/>
let’s start today to make <br/>
something Great!</h1>
        <div className="relative inline-block mt-8 md:mt-10">
          <Image
            src="/circle.png"
            alt="Button Shape"
            width={35}
            height={35}
            className="absolute -mt-1"
          />
          <button className="ml-3">
            SAY HELLO.
          </button>
        </div>
      </section>


    </>
  )
}

