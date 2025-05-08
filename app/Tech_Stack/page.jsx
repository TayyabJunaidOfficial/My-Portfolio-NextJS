import React from "react";
import Image from "next/image";
import HTML5 from "@/src/assets/html-5.png";
import CSS from "@/src/assets/css.png";
import JS from "@/src/assets/js.png";
import Bootstrap from "@/src/assets/bootstrap.png";
import TailwindCSS from "@/src/assets/tailwindcss.png";
import ReactJS from "@/src/assets/react-js.png";
import NextJS from "@/src/assets/nextjs.png";
import ShadcnUI from "@/src/assets/shadcn-ui.png";
import ChakraUI from "@/src/assets/chakra-ui.png";
import Windows from "@/src/assets/windows-os.png";
import VSCode from "@/src/assets/vs-code.png";
import Git from "@/src/assets/git.png";
import Github from "@/src/assets/github.png";
import Netlify from "@/src/assets/netlify-icon.png";
import Vercel from "@/src/assets/Vercel.png";


const skillSet = [
  { src: HTML5, alt: "HTML5", width: 100, height: 100, title:"HTML5", shadow: "hover:drop-shadow-[0_0_10px_#e34c26]" },
  { src: CSS, alt: "CSS", width: 100, height: 100, title:"CSS", shadow: "hover:drop-shadow-[0_0_10px_#264de4]" },
  { src: JS, alt: "JS", width: 100, height: 100, title:"JS", shadow: "hover:drop-shadow-[0_0_10px_#f0db4f]" },
  { src: Bootstrap, alt: "Bootstrap", width: 100, height: 100, title:"Bootstrap", shadow: "hover:drop-shadow-[0_0_10px_#61dafb]" },
  { src: TailwindCSS, alt: "TailwindCSS", width: 100, height: 100, title:"TailwindCSS", shadow: "hover:drop-shadow-[0_0_10px_#38bdf8]" },
  { src: ReactJS, alt: "ReactJS", width: 100, height: 100, title:"ReactJS", shadow: "hover:drop-shadow-[0_0_10px_#61dafb]"  },
  { src: NextJS, alt: "NextJS", width: 100, height: 100, title:"NextJS", shadow: "hover:drop-shadow-[0_0_10px_#363232]"  },
  { src: ShadcnUI, alt: "ShadcnUI", width: 100, height: 100, title:"ShadcnUI", shadow: "hover:drop-shadow-[0_0_10px_#6366f1]"  },
  { src: ChakraUI, alt: "ChakraUI", width: 100, height: 100, title:"ChakraUI", shadow: "hover:drop-shadow-[0_0_10px_#319795]"  },
];

const tools = [
  {src:Windows, alt:Windows, width:100, height:100},
  {src:VSCode, alt:VSCode, width:100, height:100},
  {src:Git, alt:Git, width:100, height:100},
  {src:Github, alt:Github, width:100, height:100},
  {src:Netlify, alt:Netlify, width:100, height:100},
  {src:Vercel, alt:Vercel, width:100, height:100},
]

const hover="hover:scale-130 transition-transform duration-800"

const Tech_Stack = () => {
  return (
    <main className="w-full flex flex-col md:justify-center items-center gap-8 lg:py-25 py-10 bg-white text-black dark:bg-black dark:text-white">
        <h1 className="text-5xl text-center gradient-text">My Tech Stack</h1>
        <p className="text-xl">Technologies I’ve been working with recently...</p>
      <h1 className="text-3xl">
        Professional <b className="gradient-text">Skillset</b>
      </h1>
      <div className="w-full max-w-xl flex flex-wrap gap-12 justify-center items-center">
      {skillSet.map(({ src, alt, width, height,title,shadow }) => (
        <Image key={alt} src={src} alt={alt} width={width} height={height} title={title}   className={`${hover} ${shadow || ""}`}
        />
      ))}
      </div>
      <h1>
        <b className="gradient-text">Tools</b> I Use
      </h1>
      <div className="w-full max-w-xl flex flex-wrap gap-12 justify-center items-center">

      </div>
    </main>
  );
};

export default Tech_Stack;
