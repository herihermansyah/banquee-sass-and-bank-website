"use client";
import React from "react";
import Logo from "../logo";
import AuthAction from "../auth-action";
import ToggleMenu from "../toggle-menu";
import MenuHeader from "../menu-header";

function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <div className="container mx-auto 2xl:w-wide">
        <div className="hidden lg:flex items-center justify-between">
          <Logo textName="banquee." />
          <MenuHeader />
          <AuthAction />
        </div>
      </div>
      <div className="relative px-4 flex items-center justify-between lg:hidden">
        <Logo textName="banquee." />
        <ToggleMenu onClick={() => setIsOpen(!isOpen)} click={isOpen} />
        <div
          className={`absolute flex flex-col gap-4 left-0  py-5 bg-inverse -z-10 w-full
          ${isOpen ? "translate-y-50" : "-translate-y-90"}
          transition-all duration-500 ease-in-out
          `}
        >
          <MenuHeader />
          <AuthAction className="flex flex-col items-center gap-4" />
        </div>
      </div>
    </>
  );
}

export default Header;
