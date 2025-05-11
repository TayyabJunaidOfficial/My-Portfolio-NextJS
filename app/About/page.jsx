"use client";
import React from "react";

import { FaGraduationCap } from "react-icons/fa";
import { GiSuitcase } from "react-icons/gi";
import EduCard from "../Components/Cards/EduCard";

const About = () => {
  return (
    <main className="flex flex-col justify-center items-center gap-8 lg:py-25 py-10">
      <h1 className="sm:text-5xl text-4xl p-3 text-center gradient-text">
        About
      </h1>
      <div className="flex flex-col md:flex-row gap-10 w-full max-w-6xl justify-center items-start">
        {/* Academic Background Section */}
        <div className="flex-1 flex flex-col items-center text-center md:text-left">
          <div className="flex items-center gap-2 text-2xl font-semibold mb-4">
            <FaGraduationCap className="text-blue-600" />
            <span>Academic Background</span>
          </div>
          <EduCard />
        </div>

        {/* Career Highlights Section */}
        <div className="flex-1 flex flex-col items-center text-center md:text-left">
          <div className="flex items-center gap-2 text-2xl font-semibold mb-4">
            <GiSuitcase className="text-green-600" />
            <span>Career Highlights</span>
          </div>
          <p className="text-gray-600">
            No formal work experience yet, but passionate and actively learning. Eager to contribute and grow professionally.
          </p>
        </div>
      </div>
    </main>
  );
};

export default About;
