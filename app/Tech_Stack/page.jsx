import React from 'react'
import Image from 'next/image'
import HTML5 from "@/src/assets/html-5.png"
import CSS from "@/src/assets/css.png"
import JS from "@/src/assets/js.png"
import Bootstrap from "@/src/assets/bootstrap.png"
import TailwindCSS from "@/src/assets/tailwindcss.png"
import ReactJS from "@/src/assets/react-js.png"
import NextJS from "@/src/assets/nextjs.png"
import ShadcnUI from "@/src/assets/shadcn-ui.png"
import ChakraUI from "@/src/assets/chakra-ui.png"
import Windows from "@/src/assets/windows-os.png"
import VSCode from "@/src/assets/vs-code.png"
import Git from "@/src/assets/git.png"
import Github from "@/src/assets/github.png"
import Netlify from "@/src/assets/netlify-icon.png"
import Vercel from "@/src/assets/Vercel.png"



const Tech_Stack = () => {
  return (
    <main>
      <h1>My Tech Stack</h1>
      <p>Technologies I’ve been working with recently</p>
      <h1>Professional <b className='gradient-text'>Skillset</b></h1>
      <Image src={HTML5} alt='HTML5 Logo' width={100} height={100}/>
      <Image src={CSS} alt='HTML5 Logo' width={100} height={100}/>
      <Image src={JS} alt='HTML5 Logo' width={100} height={100}/>
      <Image src={Bootstrap} alt='HTML5 Logo'width={100} height={100} />
      <Image src={TailwindCSS} alt='HTML5 Logo' width={100} height={100}/>
      <Image src={ReactJS} alt='HTML5 Logo' width={100} height={100}/>
      <Image src={NextJS} alt='HTML5 Logo' width={100} height={100}/>
      <Image src={ShadcnUI} alt='HTML5 Logo' width={100} height={100}/>
      <Image src={ChakraUI} alt='HTML5 Logo' width={100} height={100} />
      <h1><b className='gradient-text'>Tools</b> I Use</h1>
      <Image src={Windows} alt='HTML5 Logo'width={100} height={100} />
      <Image src={VSCode} alt='HTML5 Logo' width={100} height={100}/>
      <Image src={Git} alt='HTML5 Logo' width={100} height={100}/>
      <Image src={Github} alt='HTML5 Logo' width={100} height={100}/>
      <Image src={Netlify} alt='HTML5 Logo' width={100} height={100}/>
      <Image src={Vercel} alt='HTML5 Logo' width={100} height={100}/>
    </main>
  )
}

export default Tech_Stack