"use client";
import Image from "next/image";
import {useState} from 'react'
import { Minus } from 'lucide-react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../components/ui/accordion";

export default function Page() {
const [current, setcurrent] = useState(0);
const prevSlide = () => {
  setcurrent((prev) => (prev === 0 ? slides.length -1 : prev - 1 ));
};

const nextSlide = () => {
  setcurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
};

 
  const [openItem, setOpenItem] = useState("");

 const items = [
  {
    title: "Pushing boundaries",
    desc: "We constantly challenge limits to deliver innovative solutions."
  },
  {
    title: "Rapid Advancement",
    desc: "We grow fast and adapt quickly to new technologies."
  },
  {
    title: "Worthy enthusiasm",
    desc: "Our passion drives us to achieve excellence."
  },
  {
    title: "Detail Inspection",
    desc: "We focus deeply on every small detail."
  },
  {
    title: "Appreciable Traits",
    desc: "We value honesty, respect, and teamwork."
  },
  {
    title: "Self driven",
    desc: "We take initiative and work independently."
  },
  {
    title: "Humble attitude",
    desc: "We stay grounded and open to learning."
  },
  {
    title: "Strong Commitments",
    desc: "We always deliver what we promise."
  }
];


  const slides = [
  {
    id: 1,
    number: "01.",
    title: "E-Commerce Website",
    mainImage: "/c.png",
    subImage: "/b1.png",
    buttonText: "View portfolio.",
    extraNumber: "04.",
  },
  {
    id: 2,
    number: "02.",
    title: "Portfolio Website",
    mainImage: "/c2.png",
    subImage: "/b5.png",
    buttonText: "View portfolio.",
    extraNumber: "05.",
  },
  {
    id: 3,
    number: "03.",
    title: "Landing Page Design",
    mainImage: "/c4.png",
    subImage: "/b4.png",
    buttonText: "View portfolio.",
    extraNumber: "06.",
  },
  {
    id: 4,
    number: "04.",
    title: "Dashboard UI",
    mainImage: "/c1.png",
    subImage: "/f2.png",
    buttonText: "View portfolio.",
    extraNumber: "07.",
  },
  {
    id: 5,
    number: "05.",
    title: "Dashboard UI",
    mainImage: "/c3.png",
    subImage: "/f1.png",
    buttonText: "View portfolio.",
    extraNumber: "07.",
  },
];

  return (
    <>
 <section className="relative w-full min-h-screen bg-black overflow-hidden text-white mt-10">

  {/* FIXED WIDTH CONTAINER */}
  <div className="relative max-w-[1440px] mx-auto w-full min-h-screen">

    {/* ================= LEFT BIG IMAGE ================= */}
    <div className="absolute -left-8 md:-left-10 top-20 md:top-1/2 md:-translate-y-1/2">
      <Image
        src="/header/img.png"
        alt="B"
        width={700}
        height={700}
        className="w-[70px] sm:w-[90px] md:w-[250px] lg:w-[350px] xl:w-[400px] h-auto"
      />
    </div>

    {/* ================= LEFT VERTICAL TEXT ================= */}
    <div className="hidden md:block absolute -left-28 lg:-left-32 top-[45%] -translate-y-1/2">
      <p className="rotate-[-90deg] text-[10px] sm:text-xs md:text-sm lg:text-base text-white whitespace-nowrap tracking-wide">
        We are glad to see you on our website!
      </p>
    </div>

    {/* ================= RIGHT SCROLL TEXT ================= */}
    <div className="hidden md:block absolute right-4 lg:right-6 top-1/2 -translate-y-1/2">
      <div
        onClick={() =>
          window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
          })
        }
        className="absolute text-white right-[-5px] top-[125px] rotate-90 text-[10px] sm:text-xs md:text-sm tracking-widest cursor-pointer flex items-center gap-2"
      >
        SCROLL
        <span className="w-8 md:w-12 h-[1px] bg-white block"></span>
      </div>
    </div>

    {/* ================= MAIN CONTENT ================= */}
    <div className="relative z-10 flex items-center min-h-screen px-4 sm:px-6">

      {/* CONTENT LOCKED */}
      <div className="w-full max-w-[900px] text-left ml-auto lg:mr-[120px] xl:mr-[150px]">

        <p className="text-base sm:text-lg md:text-2xl lg:text-3xl">
          HELLO!
        </p>

        <p className="text-sm sm:text-base md:text-2xl lg:text-3xl mb-2">
          BLANKSLATE IS HERE TO MAKE YOU FEEL
        </p>

        {/* HEADING */}
        <div className="max-w-[900px]">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[107px] leading-[1] md:leading-[0.9] font-medium">
            EMPOWERED BY <br />
            INNOVATION.
          </h1>
        </div>

        <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base max-w-lg">
          we help <span className="font-semibold">STARTUPS</span>, brands,
          products{" "}
          <span className="ml-10 sm:ml-14">
            and campaigns
          </span>{" "}
          which captivate in remarkable ways.
        </p>

        {/* BUTTON */}
        <div className="mt-4 flex flex-col items-start">
          <Image
            src="/circle.png"
            alt="Button Shape"
            width={30}
            height={30}
            className="mb-4 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
          />

          <button className="-mt-[35px] sm:-mt-[40px] ml-2 sm:ml-3 text-xs sm:text-sm md:text-base">
            Get to know us.
          </button>
        </div>

      </div>

    </div>

  </div>

</section>
     {/* What We Are */}
<section className="w-full flex flex-col md:flex-row justify-between overflow-visible min-h-[500px] pb-20">

  {/* Left Content */}
  <div className="w-full md:w-[65%] h-auto mt-24 md:pl-16 lg:pl-24">

    <h1 className="text-4xl md:text-7xl mt-10 font-normal">
      What we are?
    </h1>

    <p className="mt-30 w-full md:w-[870px] text-lg md:text-[22px] leading-relaxed">
      The interest of BlankSlat'e that require work through long-term
      strategic engagements with clients, typically over the course of
      multiple years. Through our team of people oriented, excellence
      focused staff, Blank Slate delivers to take technology from a
      concept to reality.
    </p>

    <div className="relative inline-block mt-16">
      <Image
        src="/cile.png"
        alt="Button Shape"
        width={30}
        height={30}
        className="absolute left-0"
      />

      <button className="ml-4 text-lg">
        Read more.
      </button>
    </div>

  </div>

  {/* Right Image */}
 <div className="w-full md:w-[35%] flex justify-end items-start">
  <Image
    src="/L.png"
    alt="L Shape"
    width={700}
    height={500}
    className="w-[250px] md:w-[300px] h-auto"
  />
</div>

</section>

      {/* our culture */}
<section className="w-full flex flex-col md:flex-row justify-between px-4 md:px-0 pb-20">

  {/* Left Heading */}
  <div className="w-full md:w-[65%] md:pl-16 lg:pl-24">
    <h1 className="text-4xl md:text-[90px] leading-[0.95] font-normal max-w-[800px]">
      OUR CULTURE,
      <br />
      VALUES, AND
      <br />
      Beliefs.
    </h1>
  </div>

  {/* Right Accordion */}
  <div className="w-full md:w-[35%] pt-8 md:pt-0 md:pr-20">

    <Accordion className="w-full">
      {items.map((item, index) => {
        const value = `item-${index}`;
        const isOpen = openItem === value;

        return (
          <AccordionItem key={index}>
            <AccordionTrigger
              onClick={() =>
                setOpenItem(isOpen ? "" : value)
              }
            >
              <span>- {item.title}</span>

              <span className="text-xl font-semibold">
                {isOpen ? "−" : "+"}
              </span>
            </AccordionTrigger>

            <AccordionContent isOpen={isOpen}>
              {item.desc}
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>

  </div>

</section>

     {/* what we do */}
<section className="w-full bg-black text-white py-16 px-4 md:px-0 overflow-hidden">

  {/* aligned container */}
  <div className="w-full md:w-[65%] md:pl-16 lg:pl-24">

    <h1 className="text-4xl md:text-7xl font-normal">
      What we DO?
    </h1>

    <p className="mt-10 w-full md:w-[990px] text-lg md:text-[22px] leading-relaxed">
      We are here to solve problems and help your business grow. Many things can
      hold a business back such as repetitive tasks, disconnected systems, and
      inefficient manual processes. This waste can cost your business valuable
      resources and prevent you from reaching new customers or worse: risk losing
      existing ones. Our goal is to give you a solution to these problems and do
      it on time and on budget.
    </p>

    <div className="relative inline-block mt-12">
      <Image
        src="/circle.png"
        alt="Button Shape"
        width={30}
        height={30}
        className="absolute left-0"
      />

      <button className="ml-4 text-lg">
        Read more.
      </button>
    </div>

  </div>

  {/* Bottom Part stays same */}
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
      <h1 className="text-3xl md:text-6xl leading-tight md:ml-70">
        <span className="block">WE USE</span>
        <span className="block">EMERGING</span>
        <span className="block">TECHNOLOGIES</span>
      </h1>
    </div>

  </div>

  {/* services section unchanged */}
  <div className="w-full flex flex-col md:flex-row justify-center gap-8 mt-15">

    <div className="w-full md:w-73 px-4 md:px-0">
      {["CustomIZE Development", "Website Development", "Content Management", "mACHINE lEARNING", "bUSINESS intelligence"].map((text, i) => (
        <div key={i} className="flex items-center gap-2 mb-2.5">
          <Minus size={16} />
          <h1 className="text-[14px] md:text-[16px] font-semibold cursor-pointer">{text}</h1>
        </div>
      ))}
    </div>

    <div className="w-full md:w-73 px-4 md:px-0">
      {["sEO sERVICES", "Research & DEVELOPMENT", "Marketing Material", "Corporate identity", "NATIVE aPP DEVELOPMENT"].map((text, i) => (
        <div key={i} className="flex items-center gap-2 mb-2.5">
          <Minus size={16} />
          <h1 className="text-[14px] md:text-[16px] font-semibold cursor-pointer">{text}</h1>
        </div>
      ))}
    </div>

    <div className="w-full md:w-73 px-4 md:px-0">
      {["UI/UX Design", "gRAPHIC dESIGN", "Motion Graphics", "Cloud Solutions", "iNTERNET oF tHINGS"].map((text, i) => (
        <div key={i} className="flex items-center gap-2 mb-2.5">
          <Minus size={16} />
          <h1 className="text-[14px] md:text-[16px] font-semibold cursor-pointer">{text}</h1>
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
      <section className="w-full relative overflow-hidden px-4 md:px-0">
      {/* Slider Wrapper */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="w-full flex-shrink-0 flex flex-col md:flex-row justify-center"
          >
            {/* Left Image */}
            <div className="w-full md:w-[720px] h-auto pl-0 md:pl-5">
              <Image
                src={slide.mainImage}
                alt={slide.title}
                width={850}
                height={500}
                className="w-full md:w-[720px] h-auto"
              />
            </div>

            {/* Right Content */}
            <div className="w-full md:w-[560px] h-auto relative mt-5 md:mt-0">
              <span className="absolute top-0 md:top-70 text-xl md:text-2xl right-8 md:right-10 md:ml-120">
                {slide.number}
              </span>
              <Image
                src={slide.subImage}
                alt={slide.title}
                width={850}
                height={500}
                className="w-full md:w-[590px] h-auto md:-ml-43 mt-5 md:mt-35"
              />
              <h1 className="md:ml-10">{slide.title}</h1>
              <div className="relative inline-block mt-8 md:ml-10">
                <Image
                  src="/cile.png"
                  alt="Button Shape"
                  width={30}
                  height={30}
                  className="absolute left-0 top-1/2 -translate-y-1/2"
                />
                <button className="ml-3">{slide.buttonText}</button>
                <span className="absolute top-15 text-xl md:text-2xl md:ml-80">
                  {slide.extraNumber}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2  text-[30px]  text-gray-400 p-3  hover:text-black transition cursor-pointer"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute  right-1 top-1/2 -translate-y-1/2 text-[30px]  text-gray-400 p-3  hover:text-black transition cursor-pointer"
      >
        ❯
      </button>
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