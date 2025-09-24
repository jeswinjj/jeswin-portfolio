"use client";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import AccordionItem from "@/components/AccordionItem";
import { useState } from "react";
import Image from "next/image";

// Reusable Section Wrapper
function Section({ title, children, titleClass = "text-4xl md:text-4xl lg:text-5xl" }) {
  return (
    <div className="section h-screen flex justify-start items-center">
      <div className="font-heading">
        <div className={`font-extrabold uppercase py-8 ${titleClass}`}>{title}</div>
        {children}
      </div>
    </div>
  );
}

// Reusable Tech Stack Item
function TechStackItem({ src, alt, name, description }) {
  return (
    <div className="flex justify-between items-center gap-5 border-b border-gray-200">
      <div className="flex max-w-[70px]">
        <Image src={src} alt={alt} className="w-fit h-auto p-2" width={500} height={500} />
      </div>
      <div className="flex flex-col font-sans max-w-[450px]">
        <div className="font-bold">{name}</div>
        <div className="font-light text-sm">{description}</div>
      </div>
    </div>
  );
}

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
        "Security best practices & vulnerability fixes",
      ],
    },
  ];

  const journey = [
    {
      role: "Software Developer",
      org: "Stellar Innovation Pvt. Ltd",
      period: "2024–Present",
    },
    {
      role: "Machine Learning Project",
      org: "Christ University (Academic Project)",
      period: "2023–2024",
    },
    {
      role: "B.Tech in CSE",
      org: "Christ University",
      period: "2020–2024",
    },
  ];

  const techStack = [
    {
      src: "/images/about/react-js.svg",
      alt: "React.js logo",
      name: "React.js",
      description:
        "My go-to library for building dynamic, component-driven user interfaces that scale seamlessly.",
    },
    {
      src: "/images/about/next-js.svg",
      alt: "Next.js logo",
      name: "Next.js",
      description:
        "Framework I use for fast, optimized, and SEO-friendly full-stack applications.",
    },
    {
      src: "/images/about/tailwind-css.svg",
      alt: "Tailwind CSS logo",
      name: "Tailwind CSS",
      description:
        "Utility-first styling framework I rely on for crafting responsive and clean UIs quickly.",
    },
    // {
    //   src: "/images/about/javascript.svg",
    //   alt: "JavaScript logo",
    //   name: "JavaScript",
    //   description:
    //     "The core language I use to bring interactivity, logic, and functionality to web applications.",
    // },
    {
      src: "/images/about/python.svg",
      alt: "Python logo",
      name: "Python",
      description:
        "My tool for automation, data processing, and building analytics-driven solutions.",
    },
    {
      src: "/images/about/mysql.svg",
      alt: "MySQL logo",
      name: "MySQL",
      description:
        "Reliable database solution I use for structured data storage and efficient querying.",
    },
    {
      src: "/images/about/power-bi.svg",
      alt: "Power BI logo",
      name: "Power BI",
      description:
        "My choice for creating interactive dashboards and data visualizations that drive insights.",
    },
    {
      src: "/images/about/github.svg",
      alt: "GitHub logo",
      name: "GitHub",
      description:
        "Version control hub I use to manage codebases, track changes, and collaborate effectively.",
    },
    // {
    //   src: "/images/about/jira.svg",
    //   alt: "Jira logo",
    //   name: "Jira",
    //   description:
    //     "My project management tool for organizing tasks, tracking progress, and working in Agile teams.",
    // },
    
  ];

  return (
    <section>
      {/* About Me */}
      <Section title="About Me" titleClass="text-4xl md:text-4xl lg:text-8xl">
        <div className="font-semibold text-lg md:text-xl lg:text-2xl uppercase mb-3">
          Jeswin J J
        </div>
        <p className="text-light font-sans max-w-[400px] text-sm">
          {"I'm a Full Stack Developer skilled in React.js, Next.js, and modern web technologies, creating clean, responsive, and secure web applications."}
        </p>
        <p className="text-light font-sans max-w-[400px] text-sm mt-4">
          With a strong base in Data Analytics using SQL, Python, and Power BI, I build solutions
          that blend seamless user experiences with data-driven insights.
        </p>
        <div className="flex gap-5 mb-8 py-5">
          <a href="#"><FaLinkedin className="size-5 hover:text-primary" /></a>
          <a href="#"><RiInstagramFill className="size-5 hover:text-primary" /></a>
          <a href="#"><FaFacebook className="size-5 hover:text-primary" /></a>
        </div>
      </Section>

      {/* Skills Accordion */}
      <Section title="What I Can Do For You">
        <p className="text-light font-sans max-w-[400px] text-sm">
          As a developer, I bridge front-end experiences with back-end logic, ensuring every
          solution is fast, secure, and user-friendly.
        </p>
        <div className="flex flex-col mt-12">
          {data.map((section, i) => (
            <AccordionItem
              key={i}
              index={i+1}
              title={section.title}
              items={section.items}
              isOpen={activeIndex === i}
              onClick={() => setActiveIndex(activeIndex === i ? null : i)}
            />
          ))}
        </div>
      </Section>

      {/* Journey Timeline */}
      <Section title="Discover My Journey in Tech">
        <p className="text-light font-sans max-w-[400px] text-sm">
          From building simple projects in university to delivering end-to-end solutions for live
          clients, my journey is driven by a love for problem-solving and innovation.
        </p>
        <div className="flex flex-col mt-6">
          {journey.map((j, i) => (
            <div key={i} className="flex justify-between items-center py-3 border-b border-gray-200">
              <div className="text-2xl uppercase">{j.role}</div>
              <div className="flex flex-col font-sans">
                <div className="text-primary font-bold">{j.org}</div>
                <div className="font-light text-sm text-right">{j.period}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Tech Stack */}
      <Section title="My Tech Stack">
        <p className="text-light font-sans max-w-[400px] text-sm">
          I build with modern, proven technologies to create robust applications and insightful
          dashboards.
        </p>
        <div className="flex flex-col py-5">
          {techStack.map((tech, i) => (
            <TechStackItem key={i} {...tech} />
          ))}
        </div>
      </Section>
    </section>
  );
};

export default MainPage;
