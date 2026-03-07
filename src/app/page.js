"use client";
import Image from "next/image";
import React from 'react'
import { Minus } from 'lucide-react';


export default function Page() {

  const items = [
    "Pushing boundaries",
    "Rapid Advancement",
    "Worthy enthusiasm",
    "Detail Inspection",
    "Appreciable Traits",
    "Self driven",
    "Humble attitude",
    "Strong Commitments",
  ]

  return (
    <>
      <section className="relative w-full min-h-screen bg-black overflow-hidden text-white">
        {/* ================= LEFT BIG IMAGE ================= */}
        <div className="absolute left-0 mt-15">
          <Image
            src="/img.png"
            alt="B"
            width={700}
            height={700}
           className="w-[100px] sm:w-[150px] md:w-[350px] lg:w-[400px] h-auto"
          />
        </div>

        {/* LEFT VERTICAL TEXT */}
        <div className="hidden md:block absolute -left-12 mt-60">
          <p className="rotate-[-90deg] text-xs  text-white/60 whitespace-nowrap">
            We are glad to see you on our website!
          </p>
        </div>

        {/* RIGHT SCROLL TEXT */}
        <div className="hidden md:block absolute right-6 top-1/2 -translate-y-1/2">
          <span
  onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
  className="absolute text-white right-[-5px] top-[125px] rotate-90 text-sm tracking-widest cursor-pointer flex items-center gap-2"
>
  SCROLL
  <span className="w-12 h-[1px] bg-white block"></span>
</span>
        </div>


        {/* ================= MAIN CONTENT ================= */}
        <div className="relative z-10 flex items-center justify-center md:justify-end min-h-[80vh] px-6 md:pr-60">

          <div className="max-w-2xl text-left mt-25">

            <p className="text-lg md:text-lg ">HELLO!</p>

            <p className="text-base md:text-xl mb-2">
              BLANKSLATE IS HERE TO MAKE YOU FEEL
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-light ">
              EMPOWERED BY <br /> INNOVATION.
            </h1>

            <p className="mt-2 text-sm md:text-base max-w-lg">
              we help <span className="font-semibold">STARTUPS</span>, brands,
              products <span className="ml-15">and campaigns</span> which captivate in remarkable ways.
            </p>

            {/* Image + Button */}
            <div className="mt-2 flex flex-col items-start">

              <Image
                src="/circle.png"
                alt="Button Shape"
                width={30}
                height={30}
                className="mb-4"
              />

              <button className="-mt-[40px] ml-3 ">
                Get to know us.
              </button>
            </div>

          </div>
        </div>
      </section>

      {/*  what we are  */}
      <section className="w-full justify-center flex flex-col md:flex-row gap-5 px-4 md:px-0 overflow-hidden">
        <div className="w-full md:w-[800px] h-auto mt-22 md:pl-40">
           <h1 className="text-3xl md:text-5xl">What we are?</h1>
          <p className="mt-8 md:mt-15 w-full md:w-[600px]">The interest of BlankSlat'e that require work through long-term strategic engagements with clients , typically over the course of multiple years. Through our team of people oriented, excellence focused staff, Blank Slate delivers to take technology from a concept to reality.</p>
          <div className="relative inline-block mt-8 md:mt-10">
            <Image
              src="/cile.png"
              alt="Button Shape"
              width={30}
              height={30}
              className="absolute "
            />
            <button className="ml-3">
              Read more.
            </button>
          </div>
        </div>
        <div className="w-full md:w-80 h-auto">
            <Image
            src="/l.png"
            alt="l"
            width={700}
            height={500}
            className="w-[200px] md:w-[280px] h-auto"
          />
        </div>
      </section>

      {/* our culture */}
      <section className="w-full justify-center flex flex-col md:flex-row gap-5 px-4 md:px-0 overflow-hidden">
        <div className="w-full md:w-[520px] h-auto">
          <h1 className="text-3xl md:text-5xl w-full md:w-[360px] pt-10">OUR CULTURE, VALUES, AND Beliefs.</h1>
        </div>
        <div className="w-full md:w-[320px] h-auto pt-8">
           {items.map((item, index) => (
            <div key={index} className="flex justify-between items-center py-2">
              <p className="text-gray-800">- {item}</p>
              <span className="text-xl font-semibold cursor-pointer">+</span>
            </div>
           ))}
        </div>
      </section>

      {/* what we do */}
      <section className="w-full bg-black text-white py-16 px-4 md:px-20 overflow-hidden">
        {/* Top Content */}
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl md:text-5xl">What we Do?</h1>
          <p className="mt-8 max-w-xl text-sm md:text-base leading-relaxed">
            We are here to solve problems and help your business grow. Many things can hold a business back such as repetitive tasks, disconnected systems, and inefficient manual processes. This waste can cost your business valuable resources and prevent you from reaching new customers or worse: risk losing existing ones. Our goal is to give you a solution to these problems and do it on time and on budget.
          </p>
          <div className="relative inline-block mt-8">
            <Image
              src="/circle.png"
              alt="Button Shape"
              width={30}
              height={30}
              className="absolute left-0 top-1/2 -translate-y-1/2"
            />
            <button className="ml-3">Read more.</button>
          </div>
        </div>

        {/* Bottom Part */}
        <div className="max-w-6xl mx-auto mt-16 flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2 flex justify-center md:-ml-50 mt-10">
            <Image
              src="/A.png"
              alt="Technology"
              width={700}
              height={500}
              className="w-[200px] md:w-[300px] h-auto"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl leading-tight md:ml-77">
              <span className="block">WE USE</span>
              <span className="block">EMERGING</span>
              <span className="block">TECHNOLOGIES</span>
            </h1>
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-center gap-8 mt-15">
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
      </section>

      {/* HAVE A LOOK AT OUR WORK */}
      <section className="w-full justify-center flex flex-col md:flex-row gap-10 md:gap-30 h-auto md:h-100 px-4 md:px-0 overflow-hidden">
        <div className="w-full md:w-[560px] h-auto mt-22">
           <h1 className="text-4xl md:text-6xl">HAVE A LOOK AT OUR WORK.</h1>
        </div>
        <div className="w-full md:w-80 h-auto">
            <Image
            src="/N.png"
            alt="l"
            width={700}
            height={500}
            className="w-[200px] md:w-[280px] h-auto md:ml-20"
          />
        </div>
      </section>

      {/* HAVE A LOOK AT OUR WORK - second section */}
      <section className="w-full flex flex-col md:flex-row justify-center px-4 md:px-0 overflow-hidden">
        <div className="w-full md:w-[720px] h-auto pl-0 md:pl-5">
          <Image
            src="/c.png"
            alt="l"
            width={850}
            height={500}
            className="w-full md:w-[720px] h-auto"
          />
        </div>
        <div className="w-full md:w-[560px] h-auto relative mt-5 md:mt-0">
          <span className="absolute top-0 md:top-70 text-xl md:text-2xl right-5 md:right-0 md:ml-120">01.</span>
          <Image
            src="/b1.png"
            alt="l"
            width={850}
            height={500}
            className="w-full md:w-[590px] h-auto md:-ml-43 mt-5 md:mt-35"
          />
          <h1 className="md:ml-10">E-Commerce Website</h1>
          <div className="relative inline-block mt-8 md:ml-10">
            <Image
              src="/cile.png"
              alt="Button Shape"
              width={30}
              height={30}
              className="absolute left-0 top-1/2 -translate-y-1/2"
            />
            <button className="ml-3">View portfolio.</button>
            <span className="absolute top-15 text-xl md:text-2xl md:ml-80">02.</span>
          </div>
        </div>
      </section>

      {/* retention offers */}
      <section className="w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-5 pb-20 relative overflow-hidden">
        <div className="w-full md:w-1/2 flex flex-col gap-6 px-4 md:px-0">
          <h1 className="text-4xl md:text-6xl leading-tight md:pl-30">Our Business <br /> Retention Offers.</h1>
          <div className="flex flex-col md:flex-row items-start mt-6 gap-4">
            <h2 className="text-5xl md:text-6xl md:-mt-5 md:ml-20">01.</h2>
            <ul className="flex flex-col gap-2 text-md md:mt-15">
              <li>- Customize E-Commerce Website.</li>
              <li>- Designs to Select From.</li>
              <li>- Search Engine Optimization.</li>
              <li>- Customer Tracker</li>
              <li>- Business Stationery.</li>
              <li>- Free Domain & Hosting For 1 Year.</li>
              <li>- Animated Advertisement.</li>
            </ul>
          </div>
          <h1 className="mt-4 text-xl md:text-2xl md:ml-45">Just in $100/- only</h1>
          <div className="relative inline-block md:ml-45">
            <Image
              src="/cile.png"
              alt="Button Shape"
              width={30}
              height={30}
              className="absolute"
            />
            <button className="ml-3 text-sm">ORDER NOW.</button>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-center md:items-end justify-center mt-30 md:mt-75">
          <div className="relative w-full h-64 md:w-160 md:h-90">
            <Image
              src="/m.png"
              alt="E-commerce"
              className="object-cover"
              fill
            />
            <p className="absolute bottom-4 left-4 text-white text-2xl font-bold">E-commerce</p>
          </div>
          <div className="flex flex-col items-end mt-10 md:pr-40">
            <img
              src="/r2.png"
              alt="Up Arrow"
              className="w-35 h-10 cursor-pointer hover:scale-110 transition md:translate-x-8"
            />
            <img
              src="/r.png"
              alt="Down Arrow"
              className="w-35 h-10 cursor-pointer hover:scale-110 transition md:-translate-x-10"
            />
          </div>
        </div>

        <div className="absolute top-0 left-0 w-40 md:w-64 h-64 md:h-84 -z-10 mt-20">
          <Image 
            src="/K.png"
            alt="Decorative Image" 
            className="object-cover" 
            fill 
          />
        </div>
      </section>

      {/* lets see what */}
      <section className="w-full justify-center flex flex-col md:flex-row gap-10 md:gap-30 pb-10 px-4 md:px-0 overflow-hidden">
        <div className="w-full md:w-[560px] h-auto mt-5">
           <h1 className="text-4xl md:text-7xl">Let's SEE WHAT EXPERTS SAY.</h1>
            <Image
            src="/mas.png"
            alt="l"
            width={700}
            height={500}
            className="w-[50px] md:w-[70px] h-[50px] md:h-[70px] mt-10"
          />
          <p className="md:ml-25">Being the richest man in the cemetery doesn't matter to me. Going to bed at night saying we've done something wonderful... that's what matters to me.</p>
          <h1 className="md:ml-25 mt-5 font-semibold">- By Steve Jobs</h1>
          <p className="md:ml-27 text-[12px]">C.E.O & Co-Founder of Apple inc.</p>
          <div className="flex items-center gap-2 md:ml-23 mt-10">
            <div className="h-1.5 w-16 md:w-25 bg-black rounded-full"></div>
            <div className="h-1.5 w-6 md:w-10 bg-gray-300 rounded-full"></div>
            <div className="h-1.5 w-6 md:w-10 bg-gray-300 rounded-full"></div>
            <div className="h-1.5 w-6 md:w-10 bg-gray-300 rounded-full"></div>
            <div className="h-1.5 w-6 md:w-10 bg-gray-300 rounded-full"></div>
          </div>
        </div>
        <div className="w-full md:w-80 h-auto mt-30">
            <Image
            src="/S.png"
            alt="l"
            width={700}
            height={500}
            className="w-[200px] md:w-[280px] h-auto md:ml-43"
          />
        </div>
      </section>

      {/* together we are */}
      <section className="w-full text-white bg-black h-auto md:h-200 overflow-hidden">
       <div className="flex flex-col md:flex-row justify-center items-center">
         <Image
            src="/l1.png"
            alt="l"
            width={700}
            height={500}
            className="w-[150px] md:w-[250px] h-auto"
          />
          <h1 className="text-4xl md:text-[74px] tracking-wider md:mt-40 md:-ml-30">TOGETHER wE ARE aN oCEA</h1>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 mt-15 px-4">
          <div className="w-full md:w-70 h-auto text-left">
            <Image
              src="/Team 1.png"
              alt="l"
              width={700}
              height={500}
              className="w-[200px] md:w-[300px] h-auto mx-auto"
            />
            <h1 className="mt-2 text-[17px]">rAMZY. T jACK</h1>
            <p className="text-[10px] font-bold">CO FOUNDER</p>
          </div>
          <div className="w-full md:w-70 h-auto text-left">
            <Image
              src="/Team 2.png"
              alt="l"
              width={700}
              height={500}
              className="w-[200px] md:w-[300px] h-auto mx-auto"
            />
            <h1 className="mt-2">kIM jACOBS</h1>
            <p className="text-[10px] font-bold">c.e.o</p>
          </div>
          <div className="w-full md:w-70 h-auto text-left">
            <Image
              src="/Team 3.png"
              alt="l"
              width={700}
              height={500}
              className="w-[200px] md:w-[300px] h-auto mx-auto"
            />
            <h1 className="mt-2">Salman javaid</h1>
            <p className="text-[10px] font-bold">C.T.O</p>
          </div>
        </div>
      </section>

      {/* latest insights */}
      <section className="w-full h-auto pb-5 px-4 md:px-0 overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="w-full md:w-[440px] h-auto pt-30 md:ml-33">
            <h1 className="text-4xl md:text-6xl">Latest Insights.</h1>
          </div>
          <div className="w-full md:w-80 h-auto">
            <Image
              src="/a1.png"
              alt="l"
              width={700}
              height={500}
              className="w-[200px] md:w-[280px] h-auto"
            />
          </div>
        </div>

        <div className="min-h-screen flex items-center justify-center -mt-20">
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
          </div>
        </div>

        <div className="relative inline-block md:ml-135 mt-20">
          <Image
            src="/cile.png"
            alt="Button Shape"
            width={30}
            height={30}
            className="absolute"
          />
          <button className="ml-3 text-sm">View more insights.</button>
        </div>
      </section>

      {/* capable of giving */}
      <section className="w-full text-white bg-black min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="relative w-full max-w-6xl px-4 md:px-6">
          <div className="absolute -top-20 md:-top-28 -left-5 md:-left-10 z-0 opacity-80">
            <Image
              src="/T.png"
              alt="T"
              width={700}
              height={500}
              className="w-[100px] md:w-[300px] h-auto"
            />
          </div>
          <div className="relative z-10 flex flex-col items-start md:-mt-15 md:ml-10">
            <Image
              src="/1.png"
              alt="icon"
              width={700}
              height={500}
              className="w-[50px] md:w-[100px] h-auto"
            />
            <h1 className="text-2xl md:text-[60px] tracking-wide leading-snug max-w-[990px]">
              WE are capable Of giving you solutions in emerging technologies!
            </h1>
          </div>
        </div>
      </section>

      {/* get in touch */}
      <section className="relative w-full h-[400px] md:h-[650px]  flex items-start px-4 md:px-20 overflow-hidden">
        <Image
          src="/E.png"
          alt="Background B"
          width={600}
          height={600}
          className="absolute -right-6 md:-right-12 top-20 md:top-40 w-[80px] md:w-[300px] h-[250px] md:h-[450px]"
        />
        <div className="relative z-10">
          <h1 className="text-4xl md:text-7xl font-light md:ml-20 relative top-10 md:top-20">Get in Touch.</h1>
          <div className="flex flex-col md:flex-row items-center gap-5 md:gap-10 md:ml-90 pt-16 md:pt-60">
            <img
              src="/r2.png"
              alt="Up Arrow"
              className="w-[60px] md:w-[100px] h-8 md:h-10 cursor-pointer hover:scale-110 transition md:translate-x-8"
            />
            <div>
              <p className="uppercase tracking-widest text-xs md:text-md mb-2">Business Inquiries</p>
              <p className="text-lg md:text-4xl font-light">info@blankslatetechnology.com</p>
              <p className="text-xs md:text-md mt-2 tracking-wider">AVAILABLE FROM AUGUST 2019</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}