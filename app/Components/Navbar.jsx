import Link from "next/link";
import React from "react";
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiGmail } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="flex justify-evenly items-center gap-96 p-7">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
        Tayyab J.
      </h1>
      <ul className="flex justify-center items-center gap-10">
        <li>
          <Link
            className="hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-500 hover:to-red-500 hover:bg-clip-text hover:text-transparent transition duration-300"
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link href="About">About</Link>
        </li>
        <li>
          <Link href="Tech_Stack">Tech Stack</Link>
        </li>
        <li>
          <Link href="Contact">Contact</Link>
        </li>
        <ul className="flex justify-center items-center gap-5">
          <li>
            <Link href="">
              <SiGithub size={20} />
            </Link>
          </li>
          <li>
            <Link href="">
              <SiLinkedin size={20} />
            </Link>
          </li>
          <li>
            <Link href="">
              <SiGmail size={20} />
            </Link>
          </li>
        </ul>
      </ul>
    </nav>
  );
};

export default Navbar;
