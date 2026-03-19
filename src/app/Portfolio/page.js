"use client"
import { useState } from 'react'
import Image from 'next/image'

const allImages = [
  "/ga1.png",
  "/ga2.png",
  "/ga3.png",
  "/ga4.png",
  "/ga5.png",
  "/ga6.png",
  "/ga7.png",
  "/ga8.png",
  "/ga9.png",
  "/ga10.png"
]

const designImages = [
  "/d1.png",
  "/d2.png",
  "/d3.png",
  "/d4.png",
  "/d5.png",
  "/d6.png",
  "/d7.png",
  "/d8.png"
]

const webImages = [
  "/w1.png",
  "/w2.png",
  "/w3.png",
  "/w4.png",
  "/w5.png",
  "/w6.png"
]

const mobileImages = [
  "/m1.png",
  "/m2.png",
  "/m3.png",
  "/m4.png",
  "/m5.png",
  "/m6.png"
]

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState("all")

  let images = []
  if (activeTab === "all") images = allImages
  if (activeTab === "design") images = designImages
  if (activeTab === "web") images = webImages
  if (activeTab === "mobile") images = mobileImages

  const tabs = ["all", "design", "web", "mobile"] // for pagination

  return (
    <>
      <section className='w-full relative px-4'>
        <div className='
          w-full 
          sm:w-[90%] 
          md:w-[600px] 
          lg:w-[800px]
          mx-auto
          lg:ml-80
          h-auto
          md:h-[420px]
          lg:h-[560px]
          border-2 
          border-black
          mt-9
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
              bottom-5
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
      <section className='w-full h-auto pb-10 px-4 md:px-0'>
        <div className='w-full flex flex-wrap pt-10 md:pt-17 md:pl-30 gap-4 text-sm md:text-base'>
          <div className='w-40 h-7 cursor-pointer' onClick={() => setActiveTab("all")}>
            <h1 className={`${activeTab === "all" ? "font-semibold" : ""}`}>ALL</h1>
          </div>
          <div className='w-45 h-7 cursor-pointer' onClick={() => setActiveTab("design")}>
            <h1 className={`${activeTab === "design" ? "font-semibold" : ""}`}>dESIGN SOLUTIONS.</h1>
          </div>
          <div className='w-45 h-7 cursor-pointer' onClick={() => setActiveTab("web")}>
            <h1 className={`${activeTab === "web" ? "font-semibold" : ""}`}>wEB sOLUTIONS.</h1>
          </div>
          <div className='w-45 h-7 cursor-pointer' onClick={() => setActiveTab("mobile")}>
            <h1 className={`${activeTab === "mobile" ? "font-semibold" : ""}`}>mOBILE sOLUTIONS.</h1>
          </div>
        </div>

        <div className="min-h-screen flex items-center justify-center mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 max-w-5xl mx-auto px-4">
            {images.map((img, index) => (
              <div key={index} className='overflow-hidden'>
                <Image
                  src={img}
                  alt='gallery'
                  width={700}
                  height={600}
                  className='w-full h-[250px] md:h-[380px] object-cover'
                />
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-4 text-center mt-20">
          {tabs.map((tab, idx) => (
            <span
              key={idx}
              className={`cursor-pointer ${activeTab === tab ? "font-semibold" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {idx + 1}
            </span>
          ))}

          <span
            className="cursor-pointer font-semibold"
            onClick={() => {
              const currentIndex = tabs.indexOf(activeTab);
              const nextIndex = (currentIndex + 1) % tabs.length;
              setActiveTab(tabs[nextIndex]);
            }}
          >
            Next
          </span>
        </div>
      </section>

      {/* we got your back */}
      <section className='w-full text-white bg-[#0EACDB] py-16 px-6 md:px-20 lg:pl-30 '>
        <h1 className='text-3xl sm:text-4xl md:text-6xl lg:text-[80px] leading-none'>
          We’ve got your back, <br/>
          let’s start today to make <br/>
          something Great!
        </h1>
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