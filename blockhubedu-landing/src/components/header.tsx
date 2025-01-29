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
              <div className="p-2 hover:bg-white hover:scale-110 hover:shadow-lg transition-transform duration-300 rounded-lg text-white hover:text-black sketchy sketchy-none">
               <a href="/" className="text-4xl font-shadowsLight2">
                   Home
               </a>
               </div>
               <div className="p-2 hover:bg-white hover:scale-110 hover:shadow-lg transition-transform duration-300 rounded-lg text-white hover:text-black sketchy sketchy-none">
               <a href="#projects" className="text-4xl font-shadowsLight2">
                   Projects
               </a>
               </div>
               <div className="p-2 hover:bg-white hover:scale-110 hover:shadow-lg transition-transform duration-300 rounded-lg text-white hover:text-black sketchy sketchy-none">
               <a href="#about" className="text-4xl font-shadowsLight2">
                   About
               </a>
               </div>
              <div className="p-2 hover:bg-white hover:scale-110 hover:shadow-lg transition-transform duration-300 rounded-lg text-white hover:text-black sketchy sketchy-none">
               <a href="#blog" className="text-4xl font-shadowsLight2">
                   Blog
               </a>
               </div>
              </nav>
        </div> <div className="text-white border-2 border-white sketchy"></div>
    </header>
  );
}