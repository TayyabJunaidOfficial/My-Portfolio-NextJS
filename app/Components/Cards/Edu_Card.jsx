import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { FaGraduationCap } from "react-icons/fa";
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
        <FaGraduationCap className="text-blue-600" />
        <p>Academic Background</p>
      </div>

      <div className="flex flex-col gap-5 justify-center items-center text-center lg:text-left">
        {educationData.map((item, index) => (
          <Card key={index} className="bg-white shadow-md rounded-2xl max-w-lg">
            <CardContent className="px-4 py-6">
              <div className="flex justify-center lg:justify-start mb-4">
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
              <p className="text-gray-600">{item.institution}</p>
              <p className="text-sm text-gray-500">{item.period}</p>
              <p className="mt-2 text-gray-700">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Edu_Card;
