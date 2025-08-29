"use client";
import AccordionItem from "@/components/AccordionItem";
import Image from "next/image";
import React, { useState } from "react";

const Home = () => {
  // track which accordion is open
  const [activeIndex, setActiveIndex] = useState(null);

  // data for multiple accordions
  const data = [
    {
      title: "UI/UX design",
      items: [
        "Wireframing and prototyping",
        "User Interface design for web and mobile apps",
      ],
    },
    {
      title: "Web Development",
      items: ["Frontend with React/Next.js", "Backend APIs with Node.js"],
    },
    {
      title: "Digital Marketing",
      items: ["SEO optimization", "Content marketing strategies"],
    },
    {
      title: "Web Development",
      items: ["Frontend with React/Next.js", "Backend APIs with Node.js"],
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center">
      {/* Hero Section */}
      <div className=" h-screen flex w-full items-center justify-between lg:ml-[140px] lg:mr-[120px]">
        <div className="font-heading">
          <div className="font-semibold text-lg md:text-xl lg:text-2xl uppercase">
            Jeswin J J
          </div>
          <div className="font-extrabold text-4xl md:text-4xl lg:text-8xl uppercase text-right">
            Software
          </div>
        </div>

        {/* <Image
          src="/images/home/profile-pic.jpg"
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
            Full Stack Developer with over a year of <br /> Professional
            Experience
          </div>
        </div>
      </div>

      {/* What I Can Do Section */}
      <div className="h-screen font-heading flex w-full items-center gap-10 lg:mx-20">
        <div className="font-heading max-w-[500px]">
          <div className="font-semibold text-lg md:text-3xl lg:text-5xl uppercase">
            what I can do for you
          </div>
          <div className="font-sans text-sm font-light max-w-[350px] mt-5">
            As a digital designer, I am a visual storyteller, crafting
            experiences that connect deeply and spark creativity.
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
          src="/images/home/profile-back.jpg"
          alt="Profile Pic"
          className="max-w-[300px] h-fit object-cover rounded-xl rotate-6"
          width={2000}
          height={2000}
          priority
        /> */}
      </div>

        {/* About Me */}
        <div className="h-[80vh] items-center flex w-full gap-10 lg:mx-20">
            <div className="flex flex-col max-w-[800px]">
                <div className="uppercase font-heading font-semibold text-lg md:text-3xl lg:text-5xl">About me</div>
                <div className="font-sans text-sm font-light max-w-[350px] mt-5">
                   {"Hi, I'm Duncan — a digital designer and Framer developer passionate about crafting meaningful and impactful digital experiences."}
                </div>

                <div className="flex gap-4 w-full">
                    <div className="basis-1/3">
                        <div className="flex flex-col gap-1">
                            <span className="font-heading text-4xl font-extrabold">1+</span>
                            <span className="font-sans font-semibold text-sm">Years of Experience</span>
                        </div>
                    </div>
                    <div className="basis-1/3">
                        <div className="flex flex-col gap-1">
                            <span className="font-heading text-4xl font-extrabold">5+</span>
                            <span className="font-sans font-semibold text-sm">Completed Projects</span>
                        </div>
                    </div>
                    <div className="basis-1/3">
                        <div className="flex flex-col gap-1">
                            <span className="font-heading text-4xl font-extrabold">2+</span>
                            <span className="font-sans font-semibold text-sm">Clients on Worldwide</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Image
            src="/images/home/profile-pic.jpg"
            alt="Profile Pic"
            className="max-w-[300px] h-fit object-cover rounded-xl rotate-6"
            width={2000}
            height={2000}
            priority
            /> */}
        </div>
    </div>
  );
};

export default Home;
