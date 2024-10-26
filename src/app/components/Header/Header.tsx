"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="flex  justify-between h-20 p-4 items-center sticky ">
      <button title="button" onClick={toggleMenu}>
        {!isOpen ? (
          <IoMdMenu size={20} className="md:hidden lg:hidden block " />
        ) : (
          <RxCross2 size={20} className="md:hidden lg:hidden block " />
        )}
      </button>
      <Link href="/">
      <img src="/images/logo pic.png" alt="Header Logo" className="rounded-full w-[50px] h-[50px]" />
      </Link>
     
      <nav className="hidden md:flex lg:flex flex-grow justify-end">
        <ul className="text-xl flex flex-row justify-end gap-14  italic  ">
          
      
          
          <li className="hover:underline ">
            <Link href="/skills" >Skills</Link>
          </li>
          <li className="hover:underline">
            <Link href="/about">About</Link>
  
          </li>
          <li className="hover:underline ">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="hover:underline">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      
     {/* Mobile Menu*/ }
      {isOpen && (
        <nav className="md:hidden lg:hidden absolute top-20 left-0 w-full">
          <ul className="flex flex-col font-semibold gap-4 p-4  bg-black   absolute  w-full  rounded-lg shadow-lg ">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/skills" >Skills</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
