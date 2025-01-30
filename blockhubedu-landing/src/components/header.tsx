import React from "react";
import BlockhubLogo from "./navbar/blockhub-logo";

export default function Header() {
  return (
    <header className="relative bg-orange-100 max-w-full bg-cover shadow-[0px_10px_30px_rgba(0,0,0,0.8)]">
          <div className="container sticky justify-between items-center mx-auto flex z-50">
          
            {/* Logo */} 
              <a href="/" className="flex items-center">
                  <BlockhubLogo /> 
              </a>
            {/* Navigation Links */}   
              <nav className="hidden md:flex space-x-6">
              <div className="p-2 hover:scale-110 font-shadowsLight2 font-bold hover:shadow-lg transition-transform duration-300 rounded-lg text-black sketchy sketchy-none">
               <a href="/" className="text-4xl">
                   Home
               </a>
               </div>
               <div className="p-2 hover:scale-110 font-shadowsLight2 font-bold hover:shadow-lg transition-transform duration-300 rounded-lg text-black sketchy sketchy-none">
               <a href="#projects" className="text-4xl">
                   Projects
               </a>
               </div>
               <div className="p-2 hover:scale-110 font-shadowsLight2 font-bold hover:shadow-lg transition-transform duration-300 rounded-lg text-black sketchy sketchy-none">
               <a href="#about" className="text-4xl">
                   About
               </a>
               </div>
              <div className="p-2 hover:scale-110 hover:shadow-lg font-shadowsLight2 font-bold transition-transform duration-300 rounded-lg text-black sketchy sketchy-none">
               <a href="#blog" className="text-4xl">
                   Blog
               </a>
               </div>
              </nav>
              {/* Actions */}
              <div className="flex space-x-6">
              <button className="bg-zinc-400 p-2  sketchy sketchy-none rounded-full hover:shadow-lg transition-transform duration-300 hover:scale-110">
                  🌓
              </button>
              <button className="bg-zinc-400 p-2  sketchy sketchy-none rounded-full hover:shadow-lg transition-transform duration-300 hover:scale-110">
                  🚀
              </button>
              <div className="relative group">
            <button className="rotate-180 flex w-10 h-10 bg-[url(/assets/Profile.png)] sketchy sketchy-none justify-center items-center bg-cover rounded-full hover:shadow-lg transition-transform duration-300 hover:scale-110 hover:rotate-0">
            </button>
            <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded shadow-md hidden group-hover:block">
              <a href="/profile" className="block px-4 py-2 hover:bg-gray-100">
                Profile
              </a>
              <a href="/settings" className="block px-4 py-2 hover:bg-gray-100">
                Settings
              </a>
              <a href="/logout" className="block px-4 py-2 hover:bg-gray-100">
                Logout
              </a>
            </div>
              </div>
              </div>
        </div> <div className="text-white border-2 border-black sketchy"></div>
    </header>
  );
}