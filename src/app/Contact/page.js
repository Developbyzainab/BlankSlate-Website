"use client";
import Image from "next/image";
import React from "react";

export default function ContactPage() {
  return (
    <>

{/* HERO */}

<section className="w-full h-auto relative px-4">

<div
className="
w-[95%]
sm:w-[90%]
md:w-[600px]
lg:w-[750px]

mx-auto
lg:ml-80

h-auto
md:h-[320px]
lg:h-[350px]

border-2
mt-9
bg-white
p-6
sm:p-8
md:p-10
lg:p-16
"
>

<h1
className="
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

md:mt-16
lg:mt-20

bg-white
pb-3
"
>
Let’s work together.
</h1>

<p
className="
text-xs
sm:text-sm
md:text-base

ml-0
sm:ml-10
md:ml-30
lg:ml-80

mt-6
md:mt-10
lg:mt-15
"
>
Please complete the form below.
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
lg:top-[290px]

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



{/* FORM SECTION */}

<section className="w-full min-h-screen px-6 md:px-20 py-20">

{/* Top Form */}

<div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-20 md:mb-32">

{/* Left text */}

<div className="text-gray-700 max-w-[280px]">
<p className="text-sm leading-6">
Like what you see? Have a project you'd like to talk about?
Want to ask us a personal question?
</p>
</div>


{/* Form */}

<form className="flex flex-col gap-6">

<input
type="text"
placeholder="Your Name"
className="bg-transparent border-b border-gray-400 py-2 outline-none"
/>

<input
type="email"
placeholder="E-mail Address"
className="bg-transparent border-b border-gray-400 py-2 outline-none"
/>

<input
type="text"
placeholder="Phone Number"
className="bg-transparent border-b border-gray-400 py-2 outline-none"
/>

<input
type="text"
placeholder="Subject"
className="bg-transparent border-b border-gray-400 py-2 outline-none"
/>

<textarea
placeholder="Message"
rows="3"
className="bg-transparent border-b border-gray-400 py-2 outline-none resize-none"
/>

<button className="mt-10 text-left font-medium hover:underline">
Send now
</button>

</form>

</div>



{/* BOTTOM SECTION */}

<div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-70 items-start">

{/* Left Info */}

<div className="space-y-10 md:ml-10">

<div>
<h2 className="text-3xl md:text-5xl font-light">Just Say.</h2>
<p className="mt-2 text-sm">HELLO@BLANKSLATE.COM</p>
</div>

<div>
<h2 className="text-3xl md:text-5xl font-light">oR cALL.</h2>
<p className="mt-2 text-sm">
042-35948827 <br />
0092-323-4285958
</p>
</div>

<div>
<h2 className="text-3xl md:text-5xl font-light">oUR oFFICE.</h2>
<p className="mt-2 text-sm">
Office #5, National Homes <br />
Main Canal Road Muslim Town, <br />
Lahore
</p>
</div>

<div>
<h2 className="text-3xl md:text-5xl font-light">fOLLOW uS.</h2>
<p className="mt-2 text-sm flex flex-wrap gap-2">
  <span>BEHANCE.</span>
  <span>DRIBBLE.</span>
  <span>FACEBOOK.</span>
  <span>INSTAGRAM.</span>
  <span>LINKEDIN.</span>
  <span>YOUTUBE.</span>
</p>
</div>

</div>


{/* Right Image */}

<div className="w-full md:w-[400px]">

<Image
src="/contact.png"
alt="contact"
width={420}
height={500}
className="w-full h-auto md:h-[560px] object-cover block"
/>

</div>

</div>

</section>

</>
  );
}