"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
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

  // Custom Menu Icon (upper chhoti line, neeche badi line)
  const CustomMenuIcon = () => (
    <div className="flex flex-col gap-1.5 cursor-pointer">
      <span className="w-5 h-[2px] bg-white block"></span>
      <span className="w-7 h-[2px] bg-white block"></span>
    </div>
  );

  return (
    <>

      {/* ================= NAVBAR - 100% WIDTH ================= */}
      {!open && (
        <nav className="w-full bg-black fixed top-0 left-0 z-50">
          <div className="w-full flex items-center justify-between h-20 px-6">
            
            <Image src="/logo.png" alt="logo" width={100} height={55} />
            
            <div className="flex items-center gap-10">
              <button className="cursor-pointer text-white text-lg hover:text-gray-300">
                Let's Talk
              </button>
              
              {/* Custom Menu Button */}
              <button onClick={() => setOpen(true)} className="text-white cursor-pointer">
                <CustomMenuIcon />
              </button>
            </div>
            
          </div>
        </nav>
      )}

      {/* ================= MENU - LEFT SE AAYEGA, 100% WIDTH ================= */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white overflow-y-auto transition-all duration-500 ease-in-out z-50
        ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Top Bar */}
        <div className="w-full flex justify-between items-center px-6 py-6">
          <Image src="/nav.png" alt="logo" width={110} height={55} />
          <button onClick={() => setOpen(false)}>
            <X size={30} className="cursor-pointer" />
          </button>
        </div>

        {/* Menu Content */}
        <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 items-start md:items-center gap-10 px-6 py-10">
          
          {/* Links - Left Side */}
          <div className="flex flex-col gap-6 text-left">
            {navLinks.map((link, i) => {
              const active = pathname === link.path;
              return (
                <a
                  key={i}
                  href={link.path}
                  onClick={() => setOpen(false)}
                  className={`text-2xl md:text-3xl transition
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

          {/* Social - Right Side */}
          <div className="flex flex-col gap-4 text-gray-500 text-left md:text-right">
            {socials.map((item, i) => (
              <p key={i} className="hover:text-black cursor-pointer transition">
                {item}
              </p>
            ))}
          </div>
        </div>

        {/* Vertical Text - Left Side */}
        <div className="hidden md:block absolute -left-20 top-70 -translate-y-1/2 -rotate-90 text-sm">
We are glad to see you on our website!
</div>
      </div>

    </>
  );
}