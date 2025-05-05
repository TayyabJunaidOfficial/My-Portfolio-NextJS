import Image from "next/image";
import Navbar from "./Components/Navbar";
import Navbarr from "./Components/Navbarr";
import About from "./About/page";
import Tech_Stack from "./Tech_Stack/page";
import Contact from "./Contact/page";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Navbarr/>
      <About/>
      <Tech_Stack/>
      <Contact/>
    </div>
  );
}
