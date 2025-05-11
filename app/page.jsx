import Image from "next/image";
import About from "./About/page";
import Tech_Stack from "./Tech_Stack/page";
import Contact from "./Contact/page";
import Main from "./Components/Main/Main";
import Projects from "./Projects/Projects";

export default function Home() {
  return (
    <div>
      <Main/>
      <About/>
      <Tech_Stack />
      <Projects/>
      <Contact/>
    </div>
  );
}
