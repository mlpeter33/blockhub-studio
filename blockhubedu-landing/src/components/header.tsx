import React from "react";
import BlockhubLogo from "./navbar/blockhub-logo";

export default function Header() {
  return (
    <header className="relative bg-[url(/assets/header.jpg)] max-w-full bg-cover ">
          <div className="container sticky justify-between items-center mx-auto flex z-50">
          
            {/* Logo */} 
              <a href="/" className="flex items-center">
                  <BlockhubLogo /> 
              </a>
            {/* Navigation Links */}   
              <nav className="hidden md:flex space-x-6">
              <div className="hover:bg-white hover:scale-150 hover:shadow-lg transition-transform duration-300 rounded-lg">
               <a href="/" className="text-white text-4xl font-cabinSketch sketchy sketchy-none hover:text-black">
                   Home
               </a>
               </div>
               <div className="hover:bg-white hover:scale-150 hover:shadow-lg transition-transform duration-300 rounded-lg">
               <a href="#projects" className="text-white text-4xl font-cabinSketch sketchy sketchy-none hover:text-black">
                   Projects
               </a>
               </div>
               <div className="hover:bg-white hover:scale-150 hover:shadow-lg transition-transform duration-300 rounded-lg">
               <a href="#about" className="text-white text-4xl font-cabinSketch sketchy sketchy-none hover:text-black">
                   About
               </a>
               </div>
              <div className="hover:bg-white hover:scale-150 hover:shadow-lg transition-transform duration-300 rounded-lg">
               <a href="#blog" className="text-white text-4xl font-cabinSketch sketchy sketchy-none hover:text-black">
                   Blog
               </a>
               </div>
              </nav>
        </div> <div className="text-white border-2 border-white sketchy"></div>
    </header>
  );
}