import React from "react";
import { IconCloud } from "@/src/components/magicui/icon-cloud";

const slugs = [
  "html5",
  "css3",
  "javascript",
  "bootstrap",
  "tailwindcss",
  "react",
  "nextdotjs",
  "shadcnui",
  "prisma",
  "vercel",
  "netlify",
  "cplusplus",
  "git",
  "github",
  "visualstudiocode",
  "figma",
  "macos",
  "lucide",
  "notion",
  "slack",
  "npm",
];
const Tools = () => {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );
  return (
    <div className="w-full max-w-md aspect-square">
      <IconCloud images={images} />
    </div>
  );
};

export default Tools;
