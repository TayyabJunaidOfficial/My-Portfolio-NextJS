import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { FaGraduationCap } from "react-icons/fa";
  import { GiSuitcase } from "react-icons/gi";
  import Image from "next/image";
  import Superior from "@/src/assets/superior.png";

  
const educationData = [
    {
      title: "Associate Degree In Science (ADS)",
      institution: "The Superior College",
      period: "Dec 2020 – Jul 2022",
      description:
        "Learned HTML5, CSS3, Flexbox, and Grid by building 5 projects.",
    },
    
  ];

const EduCard = () => {
  return (
      <>
      {
          educationData.map((item, index) => (
            <Card key={index}  className="bg-white shadow-md rounded-2xl">
              <CardContent className="px-4">
                <Image src={Superior} alt="Superior ICon" width={70} height={70}/>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-600">{item.institution }</p>
                <p className="text-sm text-gray-500">{item.period }</p>
                <p className="mt-2 text-gray-700">{item.description }</p>
          </CardContent>
        </Card>
          ))
        }
      </>
  )
}

export default EduCard