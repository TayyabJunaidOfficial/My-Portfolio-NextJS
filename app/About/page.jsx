"use client";
import React from "react";
import Edu_Card from "../Components/Cards/Edu_Card";
import Exp_Card from "../Components/Cards/Exp_Card";

const About = () => {
  return (
    <main className="flex flex-col justify-center items-center gap-8 lg:py-25 py-10">
      <h1 className="sm:text-5xl text-4xl p-3 text-center gradient-text">
        About
      </h1>
      <section className="flex flex-col lg:flex-row justify-center px-5 gap-5">
        {/* Academic Background Section */}
        <article>
          <Edu_Card />
        </article>

        {/* Career Highlights Section */}
        <article >
          <Exp_Card/>
        </article>
      </section>
    </main>
  );
};

export default About;
