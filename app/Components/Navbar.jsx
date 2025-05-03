import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between  items-center p-7'>
        <div className='text-white text-2xl'>Tayyab J.</div>
        <ul className='flex justify-center items-center gap-8'>
            <li><Link href="/">Home</Link></li>
            <li><Link href="About">About</Link></li>
            <li><Link href="Tech_Stack">Tech Stack</Link></li>
            <li><Link href="Contact">Contact</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar