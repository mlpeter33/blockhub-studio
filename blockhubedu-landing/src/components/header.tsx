import React from "react";
import BlockhubLogo from "./navbar/blockhub-logo";

export default function Header() {
  return (
    <header className="text-white bg-gray-900 shadow-lg">
          <div className="container sticky top-0 z-50">
            {/* Logo */}
           <a href="/" className="flex">
             <BlockhubLogo />
           </a>
        {/* Navigation Links */}
        </div>
    </header>
  );
}