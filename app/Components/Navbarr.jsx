import Link from 'next/link'
import React from 'react'
import { SiGithub, SiGmail, SiLinkedin } from 'react-icons/si'

const navLinks=[
    {href:"/",label:"Home"},
    {href:"About",label:"About"},
    {href:"Tech_Stack",label:"Tech Stack"},
    {href:"Contact",label:"Contact"},
]

const socialLinks=[
    {href:"",
     icon:<SiGithub size={20} />,
     hover:"hover:text-neutral-900 hover:drop-shadow-[0_0_8px_rgba(24,23,23,0.75)]"   
    },
    {href:"",
     icon:<SiLinkedin size={20} />,
     hover: "hover:text-sky-600 hover:drop-shadow-[0_0_8px_rgba(0,119,181,0.75)]",
    },
    {href:"",
     icon:<SiGmail size={20} />,
     hover: "hover:text-red-400 hover:drop-shadow-[0_0_8px_rgba(209,72,54,0.75)]",
    },
]
const hoverGradient =
"hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-500 hover:to-red-500 hover:bg-clip-text hover:text-transparent transition duration-300";


const Navbarr = () => {

  return (
    <nav className="flex justify-evenly items-center gap-96 py-2">
        <h1 className="text-3xl text-center p-2 font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
        Tayyab J.
      </h1>
      <ul  className="flex justify-center items-center gap-10">
        {navLinks.map(({href,label})=>(
            <li key={label}>
                <Link href={href} className={hoverGradient}>{label}</Link>
            </li>
        ))}
        <li>
        <ul  className="flex justify-center items-center gap-5">
        {socialLinks.map(({href,icon,hover},index)=>(
            <li key={index}>
                <Link href={href} className={`${hover} transition duration-300`}>{icon}</Link>
            </li>
        ))}
      </ul>
        </li>
      </ul>
    </nav>
  )
}

export default Navbarr