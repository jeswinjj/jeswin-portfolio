"use client";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import AccordionItem from "@/components/AccordionItem";
import { useState } from "react";

const MainPage = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const data = [
    {
      title: "Web Development",
      items: [
        "Responsive, scalable web applications with React.js & Next.js",
        "RESTful API integration & backend logic implementation",
        "Authentication & security workflows (token-based login, session handling)",
        "State management with Redux",
      ],
    },
    {
      title: "UI Development",
      items: [
        "Clean, accessible interfaces with Tailwind CSS, HTML, and JavaScript",
        "Performance optimization (lazy loading, minification, SEO)",
        "Cross-browser and cross-device responsive design",
      ],
    },
    {
      title: "Data & Analytics",
      items: [
        "SQL querying, database management (MySQL)",
        "Data processing and visualization with Python & Power BI",
        "Insightful dashboards to drive data-backed decisions",
      ],
    },
    {
      title: "Collaboration & Problem-Solving",
      items: [
        "Agile development practices with Jira & GitHub", 
        "Team leadership in project execution",
        "Security best practices & vulnerability fixes"
      ],
    },
  ];

  return (
    <section>
        {/* Scrollable content */}
      <div className="h-screen flex justify-center items-center">
        <div className="font-heading">
          <div className="font-extrabold text-4xl md:text-4xl lg:text-8xl uppercase py-8">
            About Me
          </div>
          <div className="font-semibold text-lg md:text-xl lg:text-2xl uppercase mb-3">
            Jeswin J J
          </div>
          <p className="text-light font-sans max-w-[400px] text-sm">
            {"I'm a Full Stack Developer skilled in React.js, Next.js, and modern web technologies, creating clean, responsive, and secure web applications."}
          </p>
          <p className="text-light font-sans max-w-[400px] text-sm mt-4">
           With a strong base in Data Analytics using SQL, Python, and Power BI, I build solutions that blend seamless user experiences with data-driven insights.
          </p>

          <div className="flex gap-5 mb-8 py-5">
            <a href="" className=""><FaLinkedin className="size-5 hover:text-primary"/></a>
            <a href="" className=""><RiInstagramFill className="size-5 hover:text-primary"/></a>
            <a href="" className=""><FaFacebook className="size-5 hover:text-primary"/></a>
          </div>
        </div>
      </div>
      
      <div className="h-screen flex justify-center items-center">
        <div className="font-heading">
          <div className="font-extrabold text-4xl md:text-4xl lg:text-5xl uppercase py-8">
            what I can do for you
          </div>
          <p className="text-light font-sans max-w-[400px] text-sm">
            As a developer, I bridge front-end experiences with back-end logic, ensuring every solution is fast, secure, and user-friendly.
          </p>

          <div className="flex flex-col mt-12">
            {data.map((section, i) => (
              <AccordionItem
                key={i}
                index={i + 1}
                title={section.title}
                items={section.items}
                isOpen={activeIndex === i}
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="h-screen flex justify-center items-center">
        <div className="font-heading">
          <div className="font-extrabold text-4xl md:text-4xl lg:text-5xl uppercase py-8">
           Discover My Journey in Tech
          </div>
          <p className="text-light font-sans max-w-[400px] text-sm">
           From building simple projects in university to delivering end-to-end solutions for live clients, my journey is driven by a love for problem-solving and innovation.
          </p>

          <div className="flex flex-col mt-6">
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <div className="text-2xl uppercase">Software Developer</div>
              <div className="flex flex-col font-sans">
                <div className="text-primary font-bold">
                    Stellar Innovation Pvt. Ltd
                </div>
                <div className="font-light text-sm text-right">
                    2024–Present
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <div className="text-2xl uppercase">Machine Learning Project</div>
              <div className="flex flex-col font-sans">
                <div className="text-primary font-bold">
                    Christ University (Academic Project)
                </div>
                <div className="font-light text-sm text-right">
                    2023–2024
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <div className="text-2xl uppercase">B.Tech in CSE</div>
              <div className="flex flex-col font-sans">
                <div className="text-primary font-bold">
                    Christ University
                </div>
                <div className="font-light text-sm text-right">
                    2020–2024
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainPage