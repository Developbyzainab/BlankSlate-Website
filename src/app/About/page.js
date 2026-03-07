"use client"
import React from 'react'
import Image from 'next/image'

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
        Our Team Making <br/> the Most of <br/> Digital Era.
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
        we help STARTUPS, brands, products and campaigns <br/>
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



{/* what we are */}
<section className="w-full justify-center flex flex-col md:flex-row gap-8 px-4 md:px-0 overflow-hidden pb-12">

  {/* text content */}
  <div className="w-full md:w-[800px] h-auto mt-22 md:pl-32">

    <h1 className="text-5xl md:text-7xl">What we are?</h1>

    <p className="mt-8 md:mt-12 w-full md:w-[530px]">
      The interest of BlankSlat'e that require work through long-term strategic engagements with clients , typically over the course of multiple years. Through our team of people oriented, excellence focused staff, Blank Slate delivers to take technology from a concept to reality.
    </p>

    <p className="mt-6 md:mt-8 w-full md:w-[530px]">
      We provide world-class technology capabilities such as custom software development, app development, complex integrated solutions, modernizing legacy systems, user experience consultancy and cloud computing solutions.
    </p>

    <p className="mt-6 md:mt-8 w-full md:w-[530px]">
      We deliver end-to-end services, from strategic design through to full-stack development to a diverse range of projects in Pakistan and Freelance Sites like Upwork, Guru, Fiverr and People Per Hour.
    </p>

  </div>

  {/* image */}
  <div className="w-full md:w-[400px] h-auto flex justify-center mr-4 mt-15">

    <Image
      src="/about.png"
      alt="about"
      width={800}
      height={600}
      className="w-[340px] md:w-[420px] lg:w-[460px] h-auto"
    />

  </div>

</section>


{/* we make the business */}
<section className='w-full h-[550px] text-white bg-[#E0246B] pl-30 pt-20 '>
  <h1 className='text-[90px] leading-none'>We make the business  <br/>
go BOOM! with topnotch <br/>
solutions.</h1>
<div className="relative inline-block mt-8 md:mt-10">
            <Image
              src="/circle.png"
              alt="Button Shape"
              width={35}
              height={35}
              className="absolute -mt-1"
            />
            <button className="ml-3">
              View Portfolio.
            </button>
          </div>
  </section>  



  {/* our culture */}
      <section className="w-full justify-center flex flex-col md:flex-row gap-5 px-4 md:px-0 overflow-hidden">
        <div className="w-full md:w-[520px] h-auto">
          <h1 className="text-3xl md:text-5xl w-full md:w-[360px] pt-10">OUR CULTURE, VALUES, AND Beliefs.</h1>
        </div>
        <div className="w-full md:w-[320px] h-auto pt-8">
          
            </div>
           
        
      </section>
    </>
  )
}

export default page