"use client";
import Image from 'next/image'
import React from 'react'
import { Minus } from 'lucide-react';

export default function page() {
  return (
    <>
      
   <section className='w-full lg:min-h-screen relative'>

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
   
    lg:h-[560px]

    border-2 
    lg:my-9 
    my-4
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

      mt-6
      md:mt-10
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
      lg:ml-70

      mt-4
      md:mt-6
      lg:mt-15
      '>
        we are proud of the fact that we are ahead of the curve in an ever-evolving industry. <br/>
        
      </p>

      <span
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
        className="
        absolute 
        right-2
        lg:right-[-5px]

        
        top-[75%]
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


   {/* what we do */}
         <section className="w-full justify-center flex flex-col md:flex-row gap-8 px-4 md:px-0 overflow-hidden pb-12">
   
           {/* text content */}
           <div className="w-full md:w-[800px] h-auto mt-22 md:pl-32">
   
             <h1 className="text-5xl md:text-7xl">What we do?</h1>
   
             <p className="mt-8 md:mt-12 w-full md:w-[530px]">
               We are here to solve problems and help your business grow. Many things can hold a business back such as repetitive tasks, disconnected systems, and inefficient manual processes. This waste can cost your business valuable resources and prevent you from reaching new customers or worse: risk losing existing ones. Our goal is to give you a solution to these problems and do it on time and on budget.
             </p>
   
             <p className="mt-6 md:mt-8 w-full md:w-[530px]">
              Unlike other developers, we employ the “agile philosophy” of optimizing software throughout development so that our solution fits your specific needs. For us, “agile” means that we listen to your needs and keep you involved every step of the way from business analysis through to software development and all the way to ongoing support. We want to give you the best possible solution to your problem.

             </p>
   
             <p className="mt-6 md:mt-8 w-full md:w-[530px]">
               We like to stay flexible so that you don’t spend months (or even years) on clunky software that will waste your time. We specialize in doing our jobs quickly and doing them well.     </p>
   
           </div>
   
           {/* image */}
           <div className="w-full md:w-[400px] h-auto flex justify-center mr-4 mt-15">
   
             <Image
               src="/service.png"
               alt="about"
               width={800}
               height={600}
               className="w-[340px] md:w-[420px] lg:w-[360px] h-auto"
             />
   
           </div>
   
         </section>




          {/* what we do */}
               <section className="w-full bg-black text-white py-16 px-4 md:px-20 overflow-hidden">
                 {/* Top Content */}
                 <div className="max-w-5xl mx-auto">
                   <h1 className="text-3xl md:text-6xl">Elevating your brand <br/>
at every touchpoint.</h1>
                   <div className="w-full flex flex-col md:flex-row justify-center gap-8 mt-25">
                   <div className="w-full md:w-73 px-4 md:px-0">
                     {["CustomIZE Development", "Website Development", "Content Management", "mACHINE lEARNING", "bUSINESS intelligence"].map((text, i) => (
                       <div key={i} className="flex items-center gap-2 mb-2.5">
                         <Minus size={16} />
                         <h1 className="text-[14px] md:text-[16px] font-semibold">{text}</h1>
                       </div>
                     ))}
                   </div>
                   <div className="w-full md:w-73 px-4 md:px-0">
                     {["sEO sERVICES", "Research & DEVELOPMENT", "Marketing Material", "Corporate identity", "NATIVE aPP DEVELOPMENT"].map((text, i) => (
                       <div key={i} className="flex items-center gap-2 mb-2.5">
                         <Minus size={16} />
                         <h1 className="text-[14px] md:text-[16px] font-semibold">{text}</h1>
                       </div>
                     ))}
                   </div>
                   <div className="w-full md:w-73 px-4 md:px-0">
                     {["UI/UX Design", "gRAPHIC dESIGN", "Motion Graphics", "Cloud Solutions", "iNTERNET oF tHINGS"].map((text, i) => (
                       <div key={i} className="flex items-center gap-2 mb-2.5">
                         <Minus size={16} />
                         <h1 className="text-[14px] md:text-[16px] font-semibold">{text}</h1>
                       </div>
                     ))}
                   </div>
                 </div>
                  
                 </div>
               </section>


                {/* software development*/}
                   <section className="w-full text-white bg-[#C8DE15] py-16 px-6 md:px-20 lg:pl-30">

  <Image
    src="/mas2.png"
    alt="l"
    width={700}
    height={500}
    className="w-[50px] sm:w-[60px] md:w-[80px] h-[50px] sm:h-[60px] md:h-[70px]"
  />

  <h1 className="
  text-3xl
  sm:text-4xl
  md:text-6xl
  lg:text-[80px]
  leading-tight
  mt-6
  md:px-10
  lg:px-25
  ">
    Software development <br/>
    should solve problems, <br/>
    not create them.
  </h1>

</section>



{/* drastic strategy */}

                    <section className="w-full   py-24 px-6 md:px-16">

  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight max-w-3xl md:ml-10 lg:ml-20">
      Drastic strategy With <br /> Creative Production.
    </h1>

    {/* Steps */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-24 gap-x-32 mt-24 md:ml-10 lg:ml-20">

      {/* 01 */}
      <div>
        <p className="mb-2 text-2xl">01.</p>
        <h2 className="text-5xl md:text-5xl font-medium">Discovering</h2>
        <p className="text-sm mt-3 max-w-sm">
          We know when to step in, lead, suggest and leverage our experience for the benefit of the project. Otherwise, what are we doing here?
        </p>
      </div>

      <div></div>

      {/* 02 */}
      <div></div>

      <div>
        <p className="text-2xl mb-2">02.</p>
        <h2 className="text-5xl md:text-5xl font-medium">Strategizing</h2>
        <p className="text-sm mt-3 max-w-sm">
          Nothing beats a perfect plan. We craft the right strategy and give you a roadmap to reach your destination.
        </p>
      </div>

      {/* 03 */}
      <div>
        <p className="text-2xl mb-2">03.</p>
        <h2 className="text-5xl md:text-5xl font-medium">Execution</h2>
        <p className="text-sm mt-3 max-w-sm">
          We are turning all your dreams into reality using creative technology and smart execution.
        </p>
      </div>

      <div></div>

      {/* 04 */}
      <div></div>

      <div>
        <p className="text-2xl mb-2">04.</p>
        <h2 className="text-5xl md:text-5xl font-medium">Launching</h2>
        <p className="text-sm mt-3 max-w-sm">
          We engage customers and employees to help them experience the product through a powerful launch.
        </p>
      </div>

      {/* 05 */}
      <div>
        <p className="text-2xl mb-2">05.</p>
        <h2 className="text-5xl md:text-5xl font-medium">Evolving</h2>
        <p className="text-sm mt-3 max-w-sm">
          In the end it's never finished. Data helps us understand and evolve the product continuously.
        </p>
      </div>

    </div>

  </div>

</section>

{/* check out how */}


              <section className="w-full bg-[#e9e9e9] py-24 px-6 md:px-20">

  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight max-w-3xl mb-20 md:ml-10 lg:ml-17">
      cHECK oUT how <br/>
      we can partner <br/>
      togetheR.
    </h1>

    {/* Content */}
    <div className="flex flex-col md:flex-row items-start gap-20 md:ml-10 lg:ml-20">

      {/* Image */}
      <div className="w-full md:w-[420px]">
        <Image
          src="/ser2.png"   // apni image ka naam yahan dalna
          alt="office"
          width={500}
          height={600}
          className="w-full lg:h-150 md:h-[500px] object-cover"
        />
      </div>

      {/* Right Text */}
      <div className="flex flex-col gap-16 max-w-md md:mt-10 lg:mt-30">

        {/* Block 1 */}
        <div>
          <h2 className="text-3xl md:text-4xl font-medium mb-4">
            Project-based
          </h2>

          <p className="text-sm max-w-sm leading-relaxed">
            We work on project base — to meet the one time need
            which required more flexible development approach
            and team collaboration with clear project scope,
            budget and timeframe.
          </p>
        </div>

        {/* Block 2 */}
        <div>
          <h2 className="text-3xl md:text-4xl font-medium mb-4">
            Outsourcing
          </h2>

          <p className="text-sm max-w-sm leading-relaxed">
            An ideal fit for companies which outsource projects —
            we work with you to build out the deliverables needed
            to drive your marketing efforts.
          </p>
        </div>

      </div>

    </div>

  </div>

</section>



 {/* we got your back */}
      <section className='w-full  text-white bg-[#0EACDB] py-16 px-6 md:px-20 lg:pl-30 '>
        <h1 className='text-4xl md:text-6xl lg:text-[80px] leading-none'>We’ve got your back, <br/>
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


