"use client";
import AccordionItem from "@/components/AccordionItem";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import React, { useState } from "react";
import Link from "next/link";
import { div } from "framer-motion/client";

const Desktop = () => {
  // track which accordion is open
  const [activeIndex, setActiveIndex] = useState(null);

  // data for multiple accordions
  const data = [
    {
      title: "Full-Stack Web Development",
      items: [
        "Design and development of responsive, accessible web applications using React.js and Next.js",
        "End-to-end project leadership, from concept to deployment on live domains",
        "RESTful API design and implementation for efficient client-server data exchange",
        "State management solutions using Redux for complex application logic",
      ],
    },
    {
      title: "Front-End Engineering & Optimization",
      items: [
        "Building modern, user-friendly interfaces with HTML, CSS, and Tailwind CSS",
        "Website performance optimization (lazy loading, code minification) for faster load times",
        "Responsive design implementation for flawless across desktop, tablet, and mobile",
        "Fixing UI/UX issues like text overflow and element misalignment",
      ],
    },
    {
      title: "Back-End & Security Integration",
      items: [
        "Developing secure authentication workflows with token-based login and session management",
        "Identifying and resolving critical security vulnerabilities to ensure application safety",
        "Building internal tools and portals (e.g., company announcements, admin dashboards)",
        "Database management and efficient SQL querying",
      ],
    },
    {
      title: "Data Analytics & Visualization",
      items: [
        "Data processing and analysis using Python, SQL, and SPSS", 
        "Translating complex data into clear, actionable insights through Power BI dashboards",
        "Leveraging analytical skills to inform development decisions and create data-driven solutions"
      ],
    },
  ];

  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        {/* Hero Section */}
        <div className=" h-screen flex w-full items-center justify-between lg:ml-[160px] lg:mr-[140px]">
          <div className="font-heading">
            <div className="font-semibold text-lg md:text-xl lg:text-2xl uppercase">
              Jeswin J J
            </div>
            <div className="font-extrabold text-4xl md:text-4xl lg:text-8xl uppercase text-right">
              Software
            </div>
          </div>
          
          {/* <Image
            src="./images/home/profile-pic.jpg"
            alt="Profile Pic"
            className="max-w-[300px] h-auto object-cover rounded-xl"
            width={2000}
            height={2000}
            priority
          /> */}

          <div className="font-heading mt-20">
            <div className="font-extrabold text-4xl md:text-4xl lg:text-8xl uppercase">
              Developer
            </div>
            <div className="font-sans font-light text-[11px] md:text-base lg:text-lg text-right">
              Full Stack Developer & <br /> Data Analyst.
            </div>
          </div>
        </div>

        {/* What I Can Do Section */}
        <div className="h-screen font-heading flex w-full items-center gap-10 ">
          <div className="font-heading max-w-[500px]">
            <div className="font-semibold text-lg md:text-3xl lg:text-5xl uppercase">
              what I can do for you
            </div>
            <div className="font-sans text-sm font-light max-w-[350px] mt-5">
              I specialize in turning ideas into fully functional, secure, and performant web platforms that enhance user engagement and streamline business operations.
            </div>

            {/* Accordion List */}
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

          {/* <Image
            src="./images/home/profile-back.jpg"
            alt="Profile Pic"
            className="max-w-[300px] h-fit object-cover rounded-xl rotate-6"
            width={2000}
            height={2000}
            priority
          /> */}
        </div>

          {/* About Me */}
          <div className="h-[80vh] items-center flex w-full gap-10">
              <div className="flex flex-col max-w-[800px]">
                  <div className="uppercase font-heading font-semibold text-lg md:text-3xl lg:text-5xl">About me</div>
                  <div className="font-sans text-sm font-light max-w-[350px] mt-5">
                    {"Hi, I'm Jeswin — A Full Stack Developer specializing in modern React and Next.js, building secure, high-performance digital experiences from front-end to back-end."}
                  </div>

                  <div className="flex gap-4 w-full py-5">
                      <div className="basis-1/3">
                          <div className="flex flex-col gap-1">
                              <span className="font-heading text-4xl font-extrabold text-primary">1+</span>
                              <span className="font-sans font-semibold text-sm">Years of Experience</span>
                          </div>
                      </div>
                      <div className="basis-1/3">
                          <div className="flex flex-col gap-1">
                              <span className="font-heading text-4xl font-extrabold text-primary">5+</span>
                              <span className="font-sans font-semibold text-sm">Completed Projects</span>
                          </div>
                      </div>
                      <div className="basis-1/3">
                          <div className="flex flex-col gap-1">
                              <span className="font-heading text-4xl font-extrabold text-primary">100%</span>
                              <span className="font-sans font-semibold text-sm">Client Satisfaction</span>
                          </div>
                      </div>
                  </div>

                  <div className="flex w-full gap-6 py-5">
                    <div className="flex flex-col text-left font-sans">
                      <span className="font-semibold">Phone:</span>
                      <a href="tel:+9196118220021" className="font-light hover:text-primary">
                        +91 96118220021
                      </a>
                    </div>
                    <div className="flex flex-col text-left font-sans">
                      <span className="font-semibold">Email:</span>
                      <a href="mailto:jeswinjj13@gmail.com" className="font-light hover:text-primary">
                        jeswinjj13@gmail.com
                      </a>
                    </div>
                  </div>


                  <div className="flex gap-5 mb-8">
                    <a href="" className=""><FaLinkedin className="size-5 hover:text-primary"/></a>
                    <a href="" className=""><RiInstagramFill className="size-5 hover:text-primary"/></a>
                    <a href="" className=""><FaFacebook className="size-5 hover:text-primary"/></a>
                  </div>

                  <div>
                    <Link href="/about">
                      <button className="w-fit text-xl border border-primary text-primary px-6 py-1 bg-white hover:bg-primary hover:text-white rounded-full uppercase font-heading transition-all duration-500 cursor-pointer">
                        My Story
                      </button>
                    </Link>
                  </div>

              </div>
              {/* <Image
              src="./images/home/profile-pic.jpg"
              alt="Profile Pic"
              className="max-w-[300px] h-fit object-cover rounded-xl rotate-6"
              width={2000}
              height={2000}
              priority
              /> */}
          </div>
      </div>
    </div>
  );
};

export default Desktop;
