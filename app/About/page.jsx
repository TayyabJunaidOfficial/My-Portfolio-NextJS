"use client";
import React from "react";
import Typewriter from "typewriter-effect";
import Profile_Pic from "../Components/Profile_Pic/Profile_Pic";

const About = () => {
  return (
    <main className="flex flex-col md:flex-row md:justify-center items-center gap-8 lg:py-25 py-10 ">
      <div className="lg:w-full 2xl:max-w-4xl xl:max-w-3xl md:max-w-xl font-bold md:text-5xl sm:text-4xl text-3xl">
        <div className="flex justify-center md:justify-start gap-1 py-3">
          <span>Hey</span>
          <span className="wave" role="img" aria-labelledby="wave">
            👋🏻
          </span>
          ,
        </div>
        <p className="py-3">My Name is</p>
        <p className="py-3 gradient-text">
          Tayyab Juniad
        </p>
        <span className="lg:pt-2 pt-3 text-2xl md:text-5xl">
          <Typewriter
            options={{
              strings: [
                "React JS Developer",
                "Web Designer",
                "Website Creator",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
      </div>
      <Profile_Pic />
    </main>
  );
};

export default About;
