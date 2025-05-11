"use client";
import React from "react";

import { FaGraduationCap } from "react-icons/fa";
import { GiSuitcase } from "react-icons/gi";
import EduCard from "../Components/Cards/EduCard";


const About = () => {
  return (
    <main className="flex flex-col md:flex-row md:justify-center items-center gap-8 lg:py-25 py-10">
      <h1 className="sm:text-5xl text-4xl p-3 text-center gradient-text">
        About
      </h1>
      <div>
        <FaGraduationCap />
        <h1>Academic Background</h1>
        <EduCard/>
      </div>
      <div>
        <GiSuitcase />
        <h1>Career Highlights</h1>
      </div>
    </main>
  );
};

export default About;
