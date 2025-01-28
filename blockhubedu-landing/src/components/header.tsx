import React from "react";
import BlockhubLogo from "./navbar/blockhub-logo";

export default function Header() {
  return (
    <div className="container">
      {/* Logo */}
      <a href="/" className="flex items-center">
            <BlockhubLogo />
          </a>
    <header className="bg-transparent text-white sticky top-0 z-50">
        {/* Navigation Links */}
    </header>
    </div>
  );
}