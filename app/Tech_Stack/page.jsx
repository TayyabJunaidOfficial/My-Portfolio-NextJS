import React from "react";
import SkillSet from "../Components/SkillSet/SkillSet";

import Tools from "../Components/Tools/Tools";

const Tech_Stack = () => {
  return (
    <main className="sm:w-full flex flex-col md:justify-center items-center gap-8 lg:py-25 py-10 bg-white text-black dark:bg-black dark:text-white">
        <h1 className="sm:text-5xl text-4xl p-3 text-center gradient-text">My Tech Stack</h1>
      <p className="sm:text-xl text-lg text-center">Technologies I’ve been working with recently...</p>
      <h1 className="text-3xl">
    Professional <b className="gradient-text">Skillset</b>
  </h1>
      <SkillSet />
      <h1 className="text-3xl">
        <b className="gradient-text">Tools</b> I Use
      </h1>
      <Tools/>
    </main>
  );
};

export default Tech_Stack;
