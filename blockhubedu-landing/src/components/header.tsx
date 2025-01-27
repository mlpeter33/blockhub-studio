import React from "react";
import BlockhubLogo from "./navbar/blockhub-logo";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
        {/* Logo */}
      <div className="container">
      <a href="/" className="flex items-center">
            <BlockhubLogo />
          </a>
        {/* Navigation Links */}
        
        </div>
    </header>
  );
}