import React from "react";
import Work from "../Components/Work/Work";




const Projects = () => {
  return (
    <main className="flex flex-col md:justify-center items-center gap-8 lg:py-25 py-10">
      <h1 className="sm:text-5xl text-4xl p-3 text-center gradient-text">
        Learning by Doing
      </h1>
      <Work/>
    </main>
  );
};

export default Projects;
