"use client"
import React from 'react'
import Image from 'next/image'

export default function page() {
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
            Our Team Making <br /> the Most of <br /> Digital Era.
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
            we help STARTUPS, brands, products and campaigns <br />
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
      <section className='w-full h-[480px] text-white bg-[#E0246B] pl-30 pt-20 '>
        <h1 className='text-[80px] leading-none'>We make the business  <br />
          go BOOM! with topnotch <br />
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
      <section className="w-full justify-center  flex flex-col md:flex-row gap-5 px-4 md:px-0 overflow-hidden">
        <div className="w-full md:w-[590px] h-70  lg:-ml-20">
          <h1 className="text-4xl md:text-7xl w-full md:w-[540px] pt-10 ">OUR CULTURE, VALUES, AND Beliefs.</h1>
        </div>
        <div className="w-full md:w-[390px] h-415 pt-8  space-y-4 lg:ml-20">
          <div className='w-full h-50 '>
            <h1 className='text-2xl'>- pushing boundaries</h1>
            <p className='text-[17px] mt-5 pl-5'>Blank slate needs to be different. As Thomas Edison once said, “There’s a way to do it better—find it.”  We think your product or service must be innovative in some way if you are to achieve longevity and success.</p>

          </div>

          <div className='w-full h-45 '>
            <h1 className='text-2xl'>- Rapid Advancement</h1>
            <p className='text-[17px] mt-5 pl-5'>Blank slate do not simply wait for success to come to them. We plan and prepare for success down to the smallest details, taking brands to the next level.</p>

          </div>


           <div className='w-full h-45'>
            <h1 className='text-2xl'>- Worthy enthusiasm</h1>
            <p className='text-[17px] mt-5 pl-5'>Blank slate always takes passion over skill because you can teach skills but you cannot teach passion. Our team is passionate about doing significant work in brands we believe in.</p>

          </div>


           <div className='w-full h-50'>
            <h1 className='text-2xl'>- Detail Inspection</h1>
            <p className='text-[17px] mt-5 pl-5'>Our team exercises extreme attention to details. We’re thorough, accurate, organized, and productive. We believe in paying extra close attention to the smallest details which will make the final product extraordinary. </p>

          </div>


           <div className='w-full h-40 '>
            <h1 className='text-2xl'>- appreciable Traits</h1>
            <p className='text-[17px] mt-5 pl-5'>Black slate put a lot of emphasis on people with integrity, ethics, and values. We think investing in value oriented person is essential to our growth.</p>

          </div>


           <div className='w-full h-45'>
            <h1 className='text-2xl'>- self driven </h1>
            <p className='text-[17px] mt-5 pl-5'>Having an entrepreneurial mindset ensures that our employees takes responsibility and accountability for all or most aspects of producing a product or delivering a service.</p>

          </div>



           <div className='w-full h-45 '>
            <h1 className='text-2xl'>- Humble attitude</h1>
            <p className='text-[17px] mt-5 pl-5'>We want to build a thriving business, for that we are always in a state of constant improvement. We never let ego get in the way, we embrace feedback from team members and clients. </p>

          </div>


           <div className='w-full h-55'>
            <h1 className='text-2xl'>- Strong Commitments</h1>
            <p className='text-[17px] mt-5 pl-5'>Dedication includes a strong sense of support and loyalty to a business or career role. Our team is goal-orientated and is more likely to strengthen any qualities they may need to improve. We value hard work and celebrate accordingly.</p>

          </div>
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

