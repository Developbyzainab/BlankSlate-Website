import React from 'react'
import Image from "next/image";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
function Footer() {
  return (
    <>
         {/* footer */}
      <footer className="bg-black text-white px-4 sm:px-6 lg:px-20 pt-10 lg:pt-20 pb-5 lg:pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
          <div className="text-center lg:text-left">
            <div className="flex justify-center lg:justify-start">
              <Image
                src="/foot.png"
                alt="Blankslate Logo"
                width={220}
                height={60}
                className="mb-6"
              />
            </div>
            <p className="text-sm text-gray-300 leading-6 mb-6 max-w-xs mx-auto lg:mx-0">
              We are HERE TO MAKE YOU FEEL EMPOWERED BY INNOVATION BY HELPING STARTUPS, brands,
              products and campaigns WHICH captivate in
            </p>
            <div className="flex gap-4 text-gray-300 justify-center lg:justify-start">
              <Facebook size={18} />
              <Instagram size={18} />
              <Twitter size={18} />
              <Youtube size={18} />
            </div>
          </div>
          <div className="text-center lg:text-left">
            <h3 className="mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>HOME</li>
              <li>ABOUT</li>
              <li>SERVICES</li>
              <li>PORTFOLIO</li>
              <li>CONTACT</li>
            </ul>
          </div>
          <div className="text-center lg:text-left">
            <h3 className="mb-6 text-lg">Additional Links</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>NEW & UPDATES</li>
              <li>Terms of Services</li>
              <li>PRIVACY POLICIES</li>
              <li>SiteMap</li>
            </ul>
          </div>
          <div className="text-center lg:text-left">
            <h3 className="mb-6 text-lg">Contact</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>042-35948827</li>
              <li>0092-323-23212332</li>
              <li>
                Office #5, National Homes <br />
                Main Canal Road Muslim Town, <br />
                Lahore, Pakistan
              </li>
              <li>info@blankslatetechnology.com</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 lg:mt-16 pt-4 lg:pt-6 text-center text-xs lg:text-sm text-gray-400">
          COPYRIGHTS. © 2020. BLANK SLATE TECHNOLOGIES PVT. LTD. ALL RIGHTS RESERVED
        </div>
      </footer>
    </>
  )
}

export default Footer
