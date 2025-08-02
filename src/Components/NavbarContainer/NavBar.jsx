import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-16 backdrop-blur-lg bg-[#0D1B2A]/60 border-b border-white/10 shadow-md z-50">
      <div className="h-full max-w-7xl mx-auto px-6 flex justify-between items-center text-white text-2xl font-semibold">
        <Logo />
        <Menu />
      </div>
    </nav>
  );
};

export default NavBar;
