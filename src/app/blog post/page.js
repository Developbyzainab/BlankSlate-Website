"use client"
import React from "react"
import Image from "next/image"

export default function Page() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="w-full h-screen relative overflow-hidden">
        <Image
          src="/big4.png"
          alt="Header Image"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute text-white left-6 md:left-10 top-1/2 -translate-y-1/2">
          <h1 className="text-[40px] md:text-[90px] leading-none">
            Digital design <br /> trends 2021.
          </h1>
          <p className="text-sm mt-4 md:text-lg opacity-80">
            WEB & Digital Design
          </p>
        </div>

        {/* SHARE */}
        <div className="absolute right-6 md:right-16 bottom-8 flex items-center gap-6 text-white text-sm tracking-widest">
          <span className="opacity-60">SHARE</span>
          <span className="cursor-pointer hover:opacity-70">FACEBOOK.</span>
          <span className="cursor-pointer hover:opacity-70">INSTAGRAM.</span>
          <span className="cursor-pointer hover:opacity-70">LINKEDIN.</span>
        </div>

        {/* SCROLL */}
        <div className="hidden md:block absolute right-6 top-1/2 -translate-y-1/2">
          <span
            onClick={() =>
              window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth",
              })
            }
            className="text-white rotate-90 text-sm tracking-widest cursor-pointer flex items-center gap-2"
          >
            SCROLL
            <span className="w-12 h-[1px] bg-white block"></span>
          </span>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="w-full bg-white py-20">

  {/* TOP HEADING */}
  <div className="max-w-2xl ml-6 md:ml-30 mb-16">
    <h1 className="text-[28px] md:text-[42px] font-light text-gray-700 leading-snug">
      Digital design trends let’s see what is coming next in 2021 to blow our mind.
    </h1>
  </div>

  {/* MAIN CONTENT */}
  <div className="max-w-4xl ml-10 md:ml-50 text-[17px]">

  <p className="  leading-7 mb-6">
    Every year a new crop of design trends emerges from the previous year’s labor. 
    Some trends delight, some inspire, and some make our eyes ache. New grows old, 
    and old is new again. Change is one of the most challenging and satisfying 
    aspects of a career in design. The evolution of taste and technology keeps 
    us on our toes, ensuring we stay connected to the people we create for.
  </p>

  <p className=" leading-7 mb-6">
    We’ve identified 20 emerging design trends for 2020, but we’re not just listing 
    fonts and colors. We’re showcasing game-changers and industry shakers that will 
    define our experiential landscape for the year to come.
  </p>

  {/* POINT 1 */}
  <h3 className="font-semibold  mt-8 mb-2">
    • UX Design Clients Will Be Intentional About Ethical Design:
  </h3>
  <p className=" leading-7 mb-6">
    In 2020, UX designers and teams will encounter a greater number of clients 
    desiring to make ethical design a top priority. In turn, more designers will 
    become familiar with ethical standards while learning how to examine design 
    decisions through the lens of ethical frameworks.
  </p>

  {/* POINT 2 */}
  <h3 className="font-semibold  mt-8 mb-2">
    • Website Overlays Will Go Away:
  </h3>
  <p className=" leading-7 mb-6">
    Thankfully, more designers are coming to grips with the truth: Overlays are bad CX. 
    In 2020, businesses will forgo the quick-hit metrics boost of overlays in favor of 
    more holistic conversion practices.
  </p>

  {/* POINT 3 */}
  <h3 className="font-semibold mt-8 mb-2">
    • Lite Mode Sites and Apps Will Proliferate:
  </h3>
  <p className="leading-7 mb-6">
    The functionality of Lite mode is somewhat clunky, and there are times when it 
    blocks key website features or fails to display important information. Rather than 
    allowing Google to interpret what users see in Lite mode, UI designers will begin 
    creating customized lite screens that can be toggled on or off from a site’s 
    navigation bar. Doing so will keep lite design in the hands of designers while 
    allowing users to reap the benefits of lite browsing.
  </p>

  {/* POINT 4 */}
  <h3 className="font-semibold  mt-8 mb-2">
    • Blue Will Be Overthrown:
  </h3>
  <p className=" leading-7 mb-6">
    Blue is certainly classic. It’s calm, comfortable, and reassuring—just like a pair 
    of Wranglers. But good ol’ blue isn’t the color that will dominate 2020.
  </p>

  {/* POINT 5 */}
  <h3 className="font-semibold  mt-8 mb-2">
    • Gaudy Buttons Will Cry for Attention:
  </h3>
  <p className=" leading-7 mb-6">
    Across the web, buttons have evolved from overlooked design components to sleek 
    and stylish conversion drivers. That said, button styles have become somewhat 
    predictable, the differentiator being color in most cases. 2020 will usher in an 
    era of strategically gaudy buttons. Such buttons will be unmissable, unmistakably 
    clickable, and used in conjunction with crucial calls-to-action.
  </p>

  <p className="  mt-6">Source</p>

</div>

{/* BOTTOM SOCIAL */}
<div className="mt-16 pr-6 md:pr-20 flex justify-end gap-8 text-sm tracking-widest text-gray-700">
  <span className="opacity-60">SHARE</span>
  <span className="cursor-pointer hover:opacity-70">FACEBOOK.</span>
  <span className="cursor-pointer hover:opacity-70">INSTAGRAM.</span>
  <span className="cursor-pointer hover:opacity-70">LINKEDIN.</span>
</div>

</section>

      {/* IMAGE SECTION */}
      <section className="min-h-screen flex items-center justify-center  pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 max-w-5xl mx-auto px-4">
          
          {/* CARD 1 */}
          <div>
            <Image
              src="/big5.png"
              alt="img1"
              width={700}
              height={600}
              className="w-full h-[250px] md:h-[380px] object-cover"
            />
            <div className="pt-5">
              <h2 className="text-sm mb-2">WEB & Digital Design</h2>
              <p className="text-lg">
                Modern graphic design is an incredibly broad sphere for the
                application of artistic talents.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div>
            <Image
              src="/big6.png"
              alt="img2"
              width={700}
              height={600}
              className="w-full h-[250px] md:h-[380px] object-cover"
            />
            <div className="pt-5">
              <h2 className="text-sm mb-2">Journey of Success</h2>
              <p className="text-lg">
                Monis Rahman, a Pakistani entrepreneur and co-founder of
                rozee.pk.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* BOTTOM NAVIGATION */}
      <div className="w-full pb-6 px-6 md:px-20 flex justify-between items-center text-sm text-gray-700 tracking-wide">
        <span className="cursor-pointer hover:opacity-70 underline">
          Prev
        </span>

        <span className="cursor-pointer hover:opacity-70 underline">
          View ALL
        </span>

        <span className="cursor-pointer hover:opacity-70 underline">
          NEXT
        </span>
      </div>
    </>
  )
}
