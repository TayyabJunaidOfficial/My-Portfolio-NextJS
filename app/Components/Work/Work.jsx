import React from "react";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import StayInHostels from "@/src/assets/Stay-In-Hostel.png";
import ZaskTools from "@/src/assets/Zask-Tools.png";
import Link from "next/link";

const ProjectsData = [
  {
    heading: "Stay Inn Hostels",
    src: StayInHostels,
    description:
      "Built with Next.js, Tailwind CSS, and Framer Motion, this project showcases my skills in modern web development, responsive design, and smooth UI animations.",
    visit: "https://stay-in-hostels.vercel.app/",
    alt: "Stay Inn Hostels Image",
  },
  {
    heading: "Zask Tools",
    src: ZaskTools,
    description:
      "Developed a modern tool hub using Next.js, Tailwind CSS, ShadCN UI, and animation libraries—offering seamless, user-friendly access to powerful productivity utilities.",
    visit: "https://zasktools.com/",
    alt: "Zask Tools Image",
  },
];

const Work = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex gap-6">
        {ProjectsData.map(
          ({ heading, src, description, visit, alt }, index) => (
            <CardContainer key={index} className="inter-var">
              <CardBody
                className={`
                transition-all duration-300
                bg-white dark:bg-zinc-900
                text-black dark:text-white
                shadow-md rounded-2xl max-w-lg
                border border-transparent
                hover:border-gray-300 dark:hover:border-emerald-400/40
                h-full
              `}
              >
                <CardItem translateZ={30} className="p-4 space-y-3">
                  <Image
                    src={src}
                    alt={alt}
                    className="w-full h-48 object-cover rounded-xl"
                    priority
                  />
                  <h2 className="text-xl font-semibold">{heading}</h2>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {description}
                  </p>
                            <div className="flex justify-center">
                                <Link
                    href={visit}
                    className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white border-2 w-28 rounded-lg p-2 font-semibold transition hover:shadow-[0_0_15px_#ec4899]"
                    target="_blank"
                  >
                    Live Preview
                  </Link>
                  </div>
                </CardItem>
              </CardBody>
            </CardContainer>
          )
        )}
      </div>
    </div>
  );
};

export default Work;
