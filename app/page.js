import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "./about/page";
import Skills from "./skills/page";
import Experience from "./experience/page";
import Projects from "./projects/page";
import Education from "./education/page";
import Contact from "./contact/page";
import Home from "./home/page";

export default function Page() {
  return (
    <div>
      <Navbar />
      <main className="">
        <section id="home"><Home /></section>
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
