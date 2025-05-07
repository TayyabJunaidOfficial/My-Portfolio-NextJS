"use client";
import React from "react";
import Typewriter from "typewriter-effect";
import Profile_Pic from "../Components/Profile_Pic/Profile_Pic";

const About = () => {
  return (
    <main className="flex justify-center items-center gap-4 py-15 px-6 bg-white text-black dark:bg-black dark:text-white">
      <div className="w-full max-w-4xl font-bold text-5xl">
        <div className="flex gap-1 py-3">
        <span>Hey</span>
        <span className="wave" role="img" aria-labelledby="wave">
          👋🏻
          </span>
          ,
        </div>
        <p className="py-3 ">My Name is</p>
        <p className="py-3 cursor-pointer font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">Tayyab Juniad</p>
        <span className="pt-2">
        <Typewriter
          options={{
            strings: ["React JS Developer", "Web Designer", "Website Creator"],
            autoStart: true,
            loop: true,
          }}
        />
        </span>
      </div>
      <Profile_Pic/>
    </main>
  );
};

export default About;
