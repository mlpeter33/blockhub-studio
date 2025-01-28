import React from "react";
import BlockhubLogo from "./navbar/blockhub-logo";

export default function Header() {
  return (
    <header className="relative bg-transparent bg-cover ">
      <div className="absolute border-4 top-0 left-0 w-full h-full border-white sketchy z-40"></div>
          <div className="container sticky top-0 max-w-full z-50">
          
            {/* Logo */} 
           <a href="/" className="flex">
             <BlockhubLogo /> 
           </a>
        {/* Navigation Links */}   

        </div>  
    </header>
  );
}