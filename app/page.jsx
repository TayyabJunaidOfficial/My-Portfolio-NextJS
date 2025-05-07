import Image from "next/image";
import About from "./About/page";
import Tech_Stack from "./Tech_Stack/page";
import Contact from "./Contact/page";

export default function Home() {
  return (
    <div>
      <About/>
      <Tech_Stack/>
      <Contact/>
    </div>
  );
}
