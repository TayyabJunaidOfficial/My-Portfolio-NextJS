"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { SiGithub, SiGmail, SiLinkedin } from 'react-icons/si'
import ThemeToggle from '../ThemeToggle/ThemeToggle'

const navLinks = [
  { href: "/", label: "Home" },
  { href: "About", label: "About" },
  { href: "Tech_Stack", label: "Tech Stack" },
  { href: "Contact", label: "Contact" },
]

const socialLinks = [
  {
    href: "",
    icon: <SiGithub size={20} />,
    hover: "hover:text-neutral-900 hover:drop-shadow-[0_0_8px_rgba(24,23,23,0.75)]",
  },
  {
    href: "",
    icon: <SiLinkedin size={20} />,
    hover: "hover:text-sky-600 hover:drop-shadow-[0_0_8px_rgba(0,119,181,0.75)]",
  },
  {
    href: "",
    icon: <SiGmail size={20} />,
    hover: "hover:text-red-400 hover:drop-shadow-[0_0_8px_rgba(209,72,54,0.75)]",
  },
]

const hoverGradient =
  "hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-500 hover:to-red-500 hover:bg-clip-text hover:text-transparent transition duration-300";
  const hoverGlow = "hover:drop-shadow-[0_0_20px_rgba(236,72,153,1)] transition duration-300";

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
    <nav className="md:flex flex-row md:justify-evenly m-auto items-center border-b-2 xl:gap-96 py-2 bg-white text-black dark:bg-black dark:text-white">
      <h1 className={`${hoverGlow} text-3xl text-center p-2 cursor-pointer font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent`}>
        <Link href="/">Tayyab J.</Link>
      </h1>
      {/* Hamburger Button */}
      <div className="sm:hidden absolute top-6 right-4 z-50">
        <button onClick={() => setOpen((!open))}>
          {open?<HiX size={25}/>:<HiMenu size={25}/>}
        </button>
      </div>
      <div className="hidden sm:flex justify-center items-center gap-10">
        {/* Navigation Links */}
        <ul className="flex justify-center items-center gap-10">
          {navLinks.map(({ href, label }) => (
            <li key={label}>
              <Link href={href} className={hoverGradient}>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Social Links */}
        <ul className="flex justify-center items-center gap-5">
          {socialLinks.map(({ href, icon, hover }, index) => (
            <li key={index}>
              <Link href={href} className={`${hover} transition duration-300`}>
                {icon}
              </Link>
            </li>
          ))}
        </ul>

        {/* Theme Toggle */}
        <ThemeToggle />
        </div>
        
    </nav>

    {/* Hamburger Working */}
    {open && (<div className="md:hidden flex flex-col items-center bg-white dark:bg-black py-4 gap-4 shadow-md">
      {/* Navigation Links */}
        {navLinks.map(({ href, label }) => (
            <Link
            key={label}
            href={href}
            onClick={() => setOpen(false)}
            className="text-lg font-semibold hover:text-pink-500"
          >
            {label}
          </Link>
        ))}

      {/* Social Links */}
        <div className='flex gap-4'>
        {socialLinks.map(({ href, icon, hover }, index) => (
             <Link key={index} href={href} className={`${hover}`}>
             {icon}
           </Link>
        ))}
        </div>

      {/* Theme Toggle */}
      <ThemeToggle />
    </div>
)} </>
  )
}

export default Navbar
