
"use client";

import React from 'react'
import Image from 'next/image';

function page() {
  return (
    <>
      
   <section className='w-full  relative'>

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
   
    border-2 
    border-black
  
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
        Latest Insights <br/> You might be <br/> interested in.
      </h1>

      <p className='
      text-xs
      sm:text-sm
      md:text-base
<
      ml-0
      sm:ml-10
      md:ml-30
      lg:ml-80

      mt-6
      md:mt-10
      lg:mt-15
      '>
        our throughs on information technology industry that might blow your head with excitement.
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


{/* big images  */}
    <section className="min-h-screen flex items-center justify-center mt-20 pb-10 ">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 max-w-5xl mx-auto px-4">
               <div className="overflow-hidden">
                 <Image
                   src="/big1.png"
                   alt="image1"
                   width={700}
                   height={600}
                   className="w-full h-[250px] md:h-[380px] object-cover"
                 />
                 <div className="pt-5">
                   <h2 className="text-sm md:text-md mb-2">ID INDUSTRY</h2>
                   <p className="text-base md:text-xl">Unleashing Pakistan's IT Potential Globally.</p>
                 </div>
               </div>
               <div className="overflow-hidden">
                 <Image
                   src="/big2.png"
                   alt="image2"
                   width={700}
                   height={600}
                   className="w-full h-[250px] md:h-[380px] object-cover"
                 />
                 <div className="pt-5">
                   <h2 className="text-sm md:text-md mb-2">jOURNEY OF Success</h2>
                   <p className="text-base md:text-xl">Mr. Salim Ghauri the founder of Netsol Tech.</p>
                 </div>
               </div>
               <div className="overflow-hidden">
                 <Image
                   src="/big3.png"
                   alt="image3"
                   width={700}
                   height={600}
                   className="w-full h-[250px] md:h-[380px] object-cover"
                 />
                 <div className="pt-5">
                   <h2 className="text-sm md:text-md mb-2">jOURNEY OF Success</h2>
                   <p className="text-base md:text-xl">Hosain Rahman the cofounder of the wearable technology company Aliph.</p>
                 </div>
               </div>
               <div className="overflow-hidden">
                 <Image
                   src="/big4.png"
                   alt="image4"
                   width={700}
                   height={600}
                   className="w-full h-[250px] md:h-[380px] object-cover"
                 />
                 <div className="pt-5">
                   <h2 className="text-sm md:text-md mb-2">WEB & Digital Design</h2>
                   <p className="text-base md:text-xl">Digital design trends let's see what is coming next in 2021 to blow our mind.</p>
                 </div>
               </div>


                <div className="overflow-hidden">
                 <Image
                   src="/big5.png"
                   alt="image4"
                   width={700}
                   height={600}
                   className="w-full h-[250px] md:h-[380px] object-cover"
                 />
                 <div className="pt-5">
                   <h2 className="text-sm md:text-md mb-2">WEB & Digital Design</h2>
                   <p className="text-base md:text-xl">Modern graphic design is an 
incredibly broad sphere
for the application of artistic 
talents. </p>
                 </div>
               </div>


                <div className="overflow-hidden">
                 <Image
                   src="/big6.png"
                   alt="image4"
                   width={700}
                   height={600}
                   className="w-full h-[250px] md:h-[380px] object-cover"
                 />
                 <div className="pt-5">
                   <h2 className="text-sm md:text-md mb-2">jOURNEY OF Success</h2>
                   <p className="text-base md:text-xl">Monis Rahman a Pakistani  
entrepreneur, venture capitalist, 
businessman and cO-fOUNDER Of 
rozee.pk.</p>
                 </div>
               </div>
               <div className="col-span-1 md:col-span-2 flex justify-center items-center gap-4 text-center mt-5">
  <span className="cursor-pointer">1</span>
  <span className="cursor-pointer">2</span>
  <span className="cursor-pointer">3</span>
  <span className="cursor-pointer">4</span>
  <span className="cursor-pointer font-semibold">Next</span>
</div>
             </div>
           </section>
   


         {/* we got your back */}
                
               
                     <section className="w-full bg-[#0EACDB] text-white py-20 px-4 sm:px-8 lg:px-16">
               
                       <div className="max-w-6xl mx-auto">
               
                         <h1 className="
                         text-4xl
                         sm:text-5xl
                         md:text-6xl
                         lg:text-[80px]
                         leading-none
                         ">
                           We’ve got your back, <br/>
                           let’s start today to make <br/>
                           something Great!
                         </h1>
               
                         <div className="relative inline-block mt-10">
               
                           <Image
                             src="/circle.png"
                             alt="circle"
                             width={35}
                             height={35}
                             className="absolute -mt-1"
                           />
               
                           <button className="ml-3 text-sm tracking-wide">
                             SAY HELLO.
                           </button>
               
                         </div>
               
                       </div>
               
                     </section>



               

          
   
    </>
  )
}

export default page
