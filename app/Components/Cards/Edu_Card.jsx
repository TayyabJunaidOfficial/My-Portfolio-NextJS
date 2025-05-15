"use client";

import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import Image from "next/image";

import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import Superior from "@/src/assets/superior.png";
import Virtual from "@/src/assets/Virtual.png";

const educationData = [
  {
    title: "Associate Degree In Science (ADS)",
    institution: "The Superior College",
    period: "Dec 2020 – Jul 2022",
    description:
      "Completed coursework in Physics, Chemistry, Statistics, and English.",
    src: Superior,
    alt: "Superior College Logo",
  },
  {
    title: "BS Software Engineering",
    institution: "The Virtual University of Pakistan",
    period: "Oct 2024 – Cont...",
    description:
      "Studying core software engineering, programming, OOP, and HCI. Built a strong foundation in web development with HTML, CSS, Bootstrap, and JavaScript.",
    src: Virtual,
    alt: "Virtual University Logo",
  },
];

const Edu_Card = () => {
  return (
    <section className="flex-1 flex flex-col items-center">
      <div className="flex items-center gap-2 text-2xl font-semibold mb-4">
        <FaGraduationCap className="text-blue-600 dark:text-blue-400" />
        <p className="text-black dark:text-white">Academic Background</p>
      </div>

      <div className="flex flex-col gap-5 justify-center items-center text-center">
        {educationData.map((item, index) => (
          <CardContainer key={index} className="inter-var">
            <CardBody
              className={`
                transition-all duration-300
                bg-white dark:bg-zinc-900
                text-black dark:text-white
                shadow-md rounded-2xl max-w-lg
                border border-transparent
                hover:border-gray-300 dark:hover:border-emerald-400/40
              `}
            >
              <CardItem translateZ={30} className="px-4 py-6">
                <div className="flex justify-center mb-4">
                  <div className="w-[70px] h-[70px] relative">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-contain"
                      sizes="70px"
                    />
                  </div>
                </div>

                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.institution}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {item.period}
                </p>
                <p className="mt-2 text-gray-700 dark:text-gray-200">
                  {item.description}
                </p>
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </section>
  );
};

export default Edu_Card;
