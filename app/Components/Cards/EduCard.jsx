import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Superior from "@/src/assets/superior.png";
import Virtual from "@/src/assets/Virtual.png";

const educationData = [
  {
    title: "Associate Degree In Science (ADS)",
    institution: "The Superior College",
    period: "Dec 2020 – Jul 2022",
    description:
      "Completed Coursework in Physics, Chemistry, Statistics and English.",
    src: Superior,
  },
  {
    title: "BS Software Engineering",
    institution: "The Virtual University of Pakistan",
    period: "Oct 2024 – Cont...",
    description:
      "Engaged in comprehensive coursework covering Software Engineering fundamentals, Programming Concepts, Object-Oriented Programming, and Human-Computer Interaction. Gained foundational knowledge in web development, including HTML5, CSS3, Bootstrap, and Javascript.",
    src: Virtual,
  }
  
];

const EduCard = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      {educationData.map((item, index) => (
        <Card key={index} className="bg-white shadow-md rounded-2xl max-w-lg">
          <CardContent className="px-4">
            <Image src={item.src} alt="Superior ICon" width={70} height={70} />
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-600">{item.institution}</p>
            <p className="text-sm text-gray-500">{item.period}</p>
            <p className="mt-2 text-gray-700">{item.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default EduCard;
