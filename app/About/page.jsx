"use client";
import React from "react";

import { FaGraduationCap } from "react-icons/fa";
import { GiSuitcase } from "react-icons/gi";
import EduCard from "../Components/Cards/EduCard";
import Info_Section from "../Components/Info_Section/Info_Section";

const About = () => {
  return (
    <main className="flex flex-col justify-center items-center gap-8 lg:py-25 py-10">
      <h1 className="sm:text-5xl text-4xl p-3 text-center gradient-text">
        About
      </h1>
      <section className="">
        {/* Academic Background Section */}
        <Info_Section
          icon={<FaGraduationCap className="text-blue-600" />}
          title="Academic Background"
        >
          <EduCard />
        </Info_Section>

        {/* Career Highlights Section */}
        <Info_Section
          icon={<GiSuitcase className="text-green-600" />}
          title="Career Highlights"
        >
          <p className="text-gray-600">
            No formal work experience yet, but passionate and actively learning.
            Eager to contribute and grow professionally.
          </p>
        </Info_Section>
      </section>
    </main>
  );
};

export default About;
