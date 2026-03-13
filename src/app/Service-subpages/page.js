"use client"

import Image from "next/image"

export default function ServicesPage() {

  const scrollNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    })
  }

  return (
    <main className="w-full">

      {/* SERVICE SECTION */}

      <section className="w-full min-h-screen relative flex justify-center px-4 sm:px-8 lg:px-16 py-16">

        <div className="w-full max-w-6xl bg-white border-2 p-6 sm:p-10 lg:p-16 relative">

          <h1 className="
          text-4xl
          sm:text-5xl
          md:text-6xl
          lg:text-[90px]
          font-light
          leading-none
          mb-6
          ">
            <span className="text-3xl sm:text-4xl">Service</span> <br/>
            Customize <br/> Development.
          </h1>

          <p className="text-sm sm:text-base max-w-md mb-10">
            We are proud of the fact that we are ahead of the curve in an ever-evolving industry.
          </p>

          {/* Image */}

          <div className="
          w-full
          md:w-[380px]
          lg:w-[420px]
          md:absolute
          md:right-0
          md:bottom-0
          mt-10
          md:mt-0
          ">
            <Image
              src="/sub.png"
              alt="service"
              width={420}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Scroll Button */}

          <span
            onClick={scrollNext}
            className="
            absolute
            right-2
            bottom-6
            rotate-90
            text-xs
            tracking-widest
            cursor-pointer
            flex
            items-center
            gap-2
            "
          >
            SCROLL
            <span className="w-10 h-[1px] bg-black block"></span>
          </span>

        </div>

      </section>


      {/* INDUSTRIAL SOLUTIONS */}

      <section className="w-full py-20 px-4 sm:px-8 lg:px-16">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20">

          {/* Left Paragraph */}

          <div className="text-[15px] leading-7">

            <p className="mb-6">
              Our software experts develop your custom software, tailored to your specific needs.
              All rights (Intellectual Property) are handed over to you. No license fees occur
              as it is YOUR very own propriety software.
            </p>

            <p className="mb-6">
              Similar to a tailor who is sought when there is no garment available off the shelf,
              we develop a custom software product that suits your individual requirements.
              It’ll fit smoothly, tailored to your business processes.
            </p>

            <p>
              Many businesses are stuck with off-the-shelf software solutions that are too slow
              and bloated with functions that they will never use. These systems are not really
              solutions at all.
            </p>

          </div>


          {/* Right Content */}

          <div>

            <h1 className="text-3xl md:text-4xl font-semibold mb-6">
              INDUSTRIAL <br/> SOLUTIONS
            </h1>

            <p className="mb-10 leading-7">
              Industrial-strength software gives you a strong foundation to build your business.
              Custom software keeps things simple by taking complex tasks and making them easy
              to perform while also ensuring reliability and security.
            </p>

            <h2 className="text-xl md:text-2xl font-semibold mb-2">
              Robust
            </h2>

            <p className="mb-8 leading-7">
              Blank Slate software is designed to fit in with how you work, not how we work.
              We cut out unnecessary jargon and provide a solution your employees can easily understand.
            </p>

            <h2 className="text-xl md:text-2xl font-semibold mb-2">
              Reliable
            </h2>

            <p className="mb-8 leading-7">
              The most important part of industrial-strength software is that it works and keeps working.
              Our team has almost 30 years of bespoke software development experience.
            </p>

            <h2 className="text-xl md:text-2xl font-semibold mb-2">
              Secure
            </h2>

            <p className="leading-7">
              Security is at the forefront of many of our clients’ needs.
              Our team ensures that every solution is built with strong security in mind.
            </p>

          </div>

        </div>

      </section>


      {/* CTA SECTION */}

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

    </main>
  )
}