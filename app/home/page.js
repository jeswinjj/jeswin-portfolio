"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Home(){
    return (
    <div>
      <section
        className="h-screen py-4 flex flex-col justify-center items-center text-center relative"
        // style={{
        //   background: "linear-gradient(to right, #1c0a6c, #4b1fff)",
        //   color: "var(--foreground)",
        // }}
      >
        {/* Profile Image */}
        <motion.img
          src="/profile.jpg"
          alt="Jeswin Jose Jen"
          className="w-32 h-32 rounded-full border-4 border-white shadow-lg mb-6"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />

        {/* Name */}
        <motion.h1
          className="text-5xl font-bold"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Jeswin Jose Jen
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="text-xl mt-4 max-w-xl"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Full Stack Developer | Data Analyst  
          <br />
          I build scalable web apps with React & Next.js, and deliver insights
          with SQL, Python, and Power BI.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="mt-6 flex space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <a
            href="/contact"
            className="px-6 py-3 rounded-lg text-white transition transform hover:scale-105"
            style={{ backgroundColor: "var(--accent)" }}
          >
            Hire Me
          </a>
          <a
            href="/Jeswin-Jose-Resume.pdf"
            className="px-6 py-3 rounded-lg border text-white hover:bg-white hover:text-black transition transform hover:scale-105"
            download
          >
            View Resume
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="flex space-x-6 mt-8 text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <motion.a
            href="https://github.com/jeswinjj"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.2 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/jeswin-jose-jen-1a1b2b23b"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.2 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a href="mailto:jeswinjj13@gmail.com" whileHover={{ scale: 1.2 }}>
            <FaEnvelope />
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
}
