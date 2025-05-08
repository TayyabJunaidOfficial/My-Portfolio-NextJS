import React from 'react'
import Windows from "@/src/assets/windows-os.png";
import VSCode from "@/src/assets/vs-code.png";
import Git from "@/src/assets/git.png";
import Github from "@/src/assets/github.png";
import Netlify from "@/src/assets/netlify-icon.png";
import Vercel from "@/src/assets/Vercel.png";
import Image from "next/image";


const tools = [
  {
    src: Windows,
        alt: "Windows",
    title:"Windows",
    width: 100,
    height: 100,
    shadow: "hover:drop-shadow-[0_0_5px_#00adef]",
  },
  {
    src: VSCode,
      alt: "VSCode",
      title:"VS Code",
    width: 100,
    height: 100,
    shadow: "hover:drop-shadow-[0_0_5px_#007acc]",
  },
  {
    src: Git,
      alt: "Git",
      title:"Git",
    width: 100,
    height: 100,
    shadow: "hover:drop-shadow-[0_0_5px_#f05032]",
  },
  {
    src: Github,
    alt: "Github",
    title:"Github",
    width: 100,
    height: 100,
    shadow: "hover:drop-shadow-[0_0_10px_#8e6fc3] dark:bg-white dark:rounded-full dark:hover:drop-shadow-[0_0_10px_#a991ff]"
},
  {
    src: Netlify,
    alt: "Netlify",
    title:"Netlify",
    width: 100,
    height: 100,
    shadow: "hover:drop-shadow-[0_0_10px_#00c7b7]",
  },
  {
    src: Vercel,
    alt: "Vercel",
    title:"Vercel",
    width: 100,
    height: 100,
    shadow: "hover:drop-shadow-[0_0_10px_#363232] dark:bg-white dark:p-2",
  },
];


const hover="hover:scale-130 transition-transform duration-800"


const Tools = () => {
  return (
      <>
      <div className="w-full max-w-xl flex flex-wrap gap-12 justify-center items-center">
        {tools.map(({ src, alt, title, shadow }) => (
          <Image key={alt} src={src} alt={alt} title={title} width={100} height={100} className={`${hover} ${shadow || ""}`} />
        ))}
      </div>
      </>
  )
}

export default Tools