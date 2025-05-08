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

const skillSet = [
  {
    src: HTML5,
    alt: "HTML5",
    title: "HTML5",
    shadow: "hover:drop-shadow-[0_0_5px_#e34c26]",
  },
  {
    src: CSS,
    alt: "CSS",
    title: "CSS",
    shadow: "hover:drop-shadow-[0_0_10px_#264de4]",
  },
  {
    src: JS,
    alt: "JS",
    title: "JS",
    shadow: "hover:drop-shadow-[0_0_10px_#f0db4f]",
  },
  {
    src: Bootstrap,
    alt: "Bootstrap",
    title: "Bootstrap",
    shadow: "hover:drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] dark:hover:drop-shadow-[0_2px_8px_rgba(255,255,255,0.15)]"
  },
  {
    src: TailwindCSS,
    alt: "TailwindCSS",
    title: "TailwindCSS",
    shadow: "hover:drop-shadow-[0_0_10px_#38bdf8]",
  },
  {
    src: ReactJS,
    alt: "ReactJS",
    title: "ReactJS",
    shadow: "hover:drop-shadow-[0_0_10px_#61dafb]",
  },
  {
    src: NextJS,
    alt: "NextJS",
    title: "NextJS",
    shadow: "hover:drop-shadow-[0_0_10px_#888]",
  },
  {
    src: ShadcnUI,
    alt: "ShadcnUI",
    title: "ShadcnUI",
    shadow: "hover:drop-shadow-[0_0_10px_#4f46e5] dark:bg-white dark:rounded-lg dark:p-2"
  },
  {
    src: ChakraUI,
    alt: "ChakraUI",
    title: "ChakraUI",
    shadow: "hover:drop-shadow-[0_0_10px_#319795]",
  },
];

const hover = "hover:scale-130 transition-transform duration-800";

const SkillSet = () => {
  return (
    <div className="w-full max-w-xl flex flex-wrap gap-12 justify-center items-center">
      {skillSet.map(({ src, alt, title, shadow }) => (
        <Image
          key={alt}
          src={src}
          alt={alt}
          width={100}
          height={100}
          title={title}
          className={`${hover} ${shadow || ""}`}
        />
      ))}
    </div>
  );
};

export default SkillSet;
