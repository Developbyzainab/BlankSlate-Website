"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {

  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "home.", path: "/" },
    { name: "About.", path: "/About" },
    { name: "services.", path: "/Services" },
    { name: "portfolio.", path: "/Portfolio" },
    { name: "insights.", path: "/Insights" },
    { name: "contact.", path: "/Contact" },
  ];

  const socials = [
    "BEHANCE.",
    "DRIBBLE.",
    "FACEBOOK.",
    "INSTAGRAM.",
    "LINKEDIN.",
    "YOUTUBE."
  ];

  return (
    <>

{/* ================= NAVBAR ================= */}

{!open && (

<nav className="w-full bg-black">

<div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6">

<Image src="/logo.png" alt="logo" width={110} height={55} />

<div className="flex items-center gap-10">

<button className="cursor-pointer text-white text-lg hover:text-gray-300">
Let's Talk
</button>

<button onClick={() => setOpen(true)} className="text-white cursor-pointer">
<Menu size={30}/>
</button>

</div>

</div>

</nav>

)}


{/* ================= MENU ================= */}

<div
className={`w-full bg-white overflow-y-auto transition-all duration-500 ease-in-out
${open ? "translate-x-0 opacity-100 min-h-screen" : "-translate-x-full opacity-0 h-0"}
`}
>

{/* Top Bar */}

<div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-6">

<Image src="/nav.png" alt="logo" width={110} height={55} />

<button onClick={() => setOpen(false)}>
<X size={30} className="cursor-pointer"/>
</button>

</div>


{/* Menu Content */}

<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-6">

{/* Links */}

<div className="flex flex-col gap-6 items-center text-center">

{navLinks.map((link, i) => {

const active = pathname === link.path;

return (

<a
key={i}
href={link.path}
onClick={()=>setOpen(false)}
className={`text-2xl transition
${active ? "text-black font-semibold" : "text-gray-400"}
hover:text-black`}
>

<span className="text-sm mr-4 text-gray-400">
{String(i + 1).padStart(2, "0")}.
</span>

{link.name}

</a>

);

})}

</div>


{/* Social */}

<div className="flex flex-col gap-4 text-gray-500 items-center">

{socials.map((item, i) => (
<p key={i}>{item}</p>
))}

</div>

</div>


{/* Vertical Text */}

<div className="hidden md:block absolute -left-16 top-60 -translate-y-1/2 -rotate-90 text-sm">
We are glad to see you on our website!
</div>

</div>

    </>
  );
}










// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { Menu, X } from "lucide-react";
// import { usePathname } from "next/navigation";
// import Link from "next/link";

// export default function Navbar() {

//   const [open, setOpen] = useState(false);
//   const pathname = usePathname();

//   // Lock background scroll when menu open
//   useEffect(() => {
//     document.body.style.overflow = open ? "hidden" : "auto";
//   }, [open]);

//   const navLinks = [
//     { name: "home.", path: "/" },
//     { name: "about.", path: "/About" },
//     { name: "services.", path: "/Services" },
//     { name: "portfolio.", path: "/Portfolio" },
//     { name: "insights.", path: "/Insights" },
//     { name: "contact.", path: "/Contact" },
//   ];

//   const socials = [
//     "BEHANCE.",
//     "DRIBBLE.",
//     "FACEBOOK.",
//     "INSTAGRAM.",
//     "LINKEDIN.",
//     "YOUTUBE."
//   ];

//   return (
//     <>
    
// {/* ================= NAVBAR ================= */}

// <nav className="w-full bg-black">

// <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6">

// <Image src="/logo.png" alt="logo" width={110} height={55} />

// <div className="flex items-center gap-10">

// <button className="text-white text-lg hover:text-gray-300">
// Let's Talk
// </button>

// <button onClick={() => setOpen(true)} className="text-white">
// <Menu size={30}/>
// </button>

// </div>

// </div>

// </nav>


// {/* ================= SLIDE MENU ================= */}

// <div
// className={`fixed inset-0 bg-white h-screen z-50 transform transition-transform duration-500 ease-in-out overflow-y-auto
// ${open ? "translate-x-0" : "-translate-x-full"}
// `}
// >

// {/* Top Bar */}

// <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-6">

// <Image src="/nav.png" alt="logo" width={110} height={55} />

// <button onClick={() => setOpen(false)}>
// <X size={30} className="cursor-pointer"/>
// </button>

// </div>


// {/* Menu Content */}

// <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-6">

// {/* Links */}

// <div className="flex flex-col gap-6 items-center text-center">

// {navLinks.map((link, i) => {

// const active = pathname === link.path;

// return (

// <Link
// key={i}
// href={link.path}
// onClick={()=>setOpen(false)}
// className={`text-2xl transition ${
// active ? "text-black font-semibold" : "text-gray-400"
// } hover:text-black`}
// >

// <span className="text-sm mr-4 text-gray-400">
// {String(i + 1).padStart(2, "0")}.
// </span>

// {link.name}

// </Link>

// );

// })}

// </div>


// {/* Social Links */}

// <div className="flex flex-col gap-4 text-gray-500 items-center">

// {socials.map((item, i) => (
// <p key={i}>{item}</p>
// ))}

// </div>

// </div>


// {/* Vertical Text */}

// <div className="hidden md:block absolute -left-16 top-1/2 -translate-y-1/2 -rotate-90 text-sm">

// We are glad to see you on our website!

// </div>

// </div>

//     </>
//   );
// }