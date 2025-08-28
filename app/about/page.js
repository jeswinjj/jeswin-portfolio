"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="max-w-6xl mx-auto py-20 px-6 flex flex-col md:flex-row items-center gap-12">
      {/* Profile / Illustration */}
      <motion.img
        src="/profile.jpg"
        alt="Jeswin Jose Jen"
        className="w-64 h-64 object-cover rounded-2xl shadow-lg border-4 border-white"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* About Content */}
      <motion.div
        className="flex-1"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg leading-relaxed mb-4">
          I’m a <span className="font-semibold text-[var(--accent)]">Full Stack Developer</span> 
          with over a year of experience building scalable web applications using{" "}
          <span className="font-semibold text-[var(--accent)]">React.js</span>,{" "}
          <span className="font-semibold text-[var(--accent)]">Next.js</span>, and modern 
          technologies. I love designing responsive, intuitive user interfaces and connecting 
          them with robust backend systems.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          I also specialize in{" "}
          <span className="font-semibold text-[var(--accent)]">Data Analytics</span>, with strong 
          expertise in <span className="font-semibold">SQL</span>,{" "}
          <span className="font-semibold">Python</span>, and{" "}
          <span className="font-semibold">Power BI</span>. My focus is always on delivering 
          clean solutions that balance performance, security, and user experience.
        </p>

        {/* Resume Button */}
        {/* <a
          href="/Jeswin-Jose-Resume.pdf"
          download
          className="px-6 py-3 bg-[var(--accent)] text-white rounded-lg shadow hover:scale-105 transition inline-block"
        >
          Download Resume
        </a> */}
      </motion.div>
    </section>
  );
}
