import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "./about/page";
import Skills from "./skills/page";
import Experience from "./experience/page";
import Projects from "./projects/page";
import Education from "./education/page";
import Contact from "./contact/page";
import Flipping from "./flipping/page";
import Home from "./home/page";

export default function Page() {
  return (
    <div>
      <Navbar />
      <main className="px-5 md:px-20 lg:px-30">
        <section id="home" className="relative flex justify-center w-full">
          <div className="absolute z-20"><Flipping /></div>
          <div className="z-30"><Home /></div>
          </section>
        {/* <section id="home"></section> */}
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="experience"><Experience /></section>
        <section id="projects"><Projects /></section>
        <section id="education"><Education /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
}
