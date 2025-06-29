import React from "react";
import Image from "next/image";
import { OrbitingCircles } from "@/src/components/magicui/orbiting-circles";

import HTML5 from "@/src/assets/html-5.png";
import CSS from "@/src/assets/css.png";
import JS from "@/src/assets/js.png";
import Bootstrap from "@/src/assets/bootstrap.png";
import TailwindCSS from "@/src/assets/tailwindcss.png";
import ShadcnUI from "@/src/assets/shadcn-ui.png";
import ChakraUI from "@/src/assets/chakra-ui.png";
import ReactJS from "@/src/assets/react-js.png";
import NextJS from "@/src/assets/nextjs.png";

// Define common hover styles
const hover = "hover:scale-130 transition-transform duration-800";

// Group skills by orbit layer
const orbitGroups = [
  {
    radius: 50,
    items: [
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
    ],
  },
  {
    radius: 100,
    reverse: true,
    items: [
      {
        src: Bootstrap,
        alt: "Bootstrap",
        title: "Bootstrap",
        shadow:
          "hover:drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] dark:hover:drop-shadow-[0_2px_8px_rgba(255,255,255,0.15)]",
      },
      {
        src: TailwindCSS,
        alt: "TailwindCSS",
        title: "TailwindCSS",
        shadow: "hover:drop-shadow-[0_0_10px_#38bdf8]",
      },
      {
        src: ShadcnUI,
        alt: "ShadcnUI",
        title: "ShadcnUI",
        shadow:
          "hover:drop-shadow-[0_0_10px_#4f46e5] dark:bg-white dark:rounded-lg dark:p-2",
      },
      {
        src: ChakraUI,
        alt: "ChakraUI",
        title: "ChakraUI",
        shadow: "hover:drop-shadow-[0_0_10px_#319795]",
      },
    ],
  },
  {
    radius: 150,
    items: [
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
    ],
  },
];
const SkillSet = () => {
  return (
    <div className="relative flex h-[350px] w-full flex-col items-center justify-center overflow-hidden">
      {orbitGroups.map(({ radius, iconSize, reverse, items }, groupIndex) => (
        <OrbitingCircles
          key={groupIndex}
          radius={radius}
          iconSize={iconSize}
          reverse={reverse}
        >
          {items.map(({ src, alt, title, shadow }) => (
            <Image
              key={alt}
              src={src}
              alt={alt}
              title={title}
              className={`w-full h-full object-contain ${hover} ${shadow}`}
            />
          ))}
        </OrbitingCircles>
      ))}
    </div>
  );
};

export default SkillSet;
