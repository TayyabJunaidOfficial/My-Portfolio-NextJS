import React from "react";
import Image from "next/image";
import Windows from "@/src/assets/windows-os.png";
import VSCode from "@/src/assets/vs-code.png";
import Git from "@/src/assets/git.png";
import Github from "@/src/assets/github.png";
import Netlify from "@/src/assets/netlify-icon.png";
import Vercel from "@/src/assets/Vercel.png";

const tools = [
  {
    src: Windows,
    alt: "Windows",
    title: "Windows",
    shadow: "hover:drop-shadow-[0_0_5px_#00adef]",
  },
  {
    src: VSCode,
    alt: "VSCode",
    title: "VS Code",
    shadow: "hover:drop-shadow-[0_0_5px_#007acc]",
  },
  {
    src: Git,
    alt: "Git",
    title: "Git",
    shadow: "hover:drop-shadow-[0_0_5px_#f05032]",
  },
  {
    src: Github,
    alt: "Github",
    title: "Github",
    shadow:
      "hover:drop-shadow-[0_0_10px_#8e6fc3] dark:bg-white dark:rounded-full dark:hover:drop-shadow-[0_0_10px_#a991ff]",
  },
  {
    src: Netlify,
    alt: "Netlify",
    title: "Netlify",
    shadow: "hover:drop-shadow-[0_0_10px_#00c7b7]",
  },
  {
    src: Vercel,
    alt: "Vercel",
    title: "Vercel",
    shadow: "hover:drop-shadow-[0_0_10px_#363232] dark:bg-white dark:p-2",
  },
];

const hover = "hover:scale-125 transition-transform duration-500";

const Tools = () => {
  return (
    <div className="w-full max-w-xl flex flex-wrap gap-12 justify-center items-center">
      {tools.map(({ src, alt, title, shadow }) => (
        <div
          key={alt}
          className={`relative w-[100px] h-[100px] ${hover} ${shadow || ""}`}
        >
          <Image
            src={src}
            alt={alt}
            title={title}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100px"
          />
        </div>
      ))}
    </div>
  );
};

export default Tools;
