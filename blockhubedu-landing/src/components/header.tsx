import React from "react";
import BlockhubLogo from "./navbar/blockhub-logo";

export default function Header() {
  return (
    <header className="border-2 border-white sketchy-border text-white bg-transparent bg-cover">
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