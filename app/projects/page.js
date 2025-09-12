"use client";

import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Internal Company Portal",
    type: "Next.JS Project",
    description:
      "Created promotional materials for the Summer Vibes Festival, including posters, flyers, and social media graphics.",
    image: "/images/projects/portal.jpg",
  },
  {
    id: 2,
    title: "Company Website",
    type: "Tailwind Project",
    description: "Created promotional materials for the social media graphics.",
    image: "/images/projects/coding.jpg",
  },
  {
    id: 3,
    title: "Personal Dashboard Project",
    type: "PowerBI Project",
    description: "Created professional dashboard with data and its insights.",
    image: "/images/projects/analyst-laptop.jpg",
  },
];

function ProjectCard({ project, isMobile = false }) {
  return (
    <div
      className={`${isMobile ? "h-[350px]" : "h-[100vh]"} relative w-full rounded-3xl overflow-hidden`}
    >
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/60 rounded-3xl" />

      <div className="absolute inset-0 flex flex-col gap-4 justify-center items-center p-4 text-center">
        <span className="font-sans font-light text-white bg-primary px-4 text-sm py-1 rounded-full">
          {project.type}
        </span>
        <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white uppercase font-bold">
          {project.title}
        </h3>
        {!isMobile && (
          <p className="font-sans text-sm md:text-base text-white max-w-md">
            {project.description}
          </p>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="relative py-10">
      <h2 className="uppercase font-heading font-semibold text-4xl md:text-3xl lg:text-5xl mb-6">
        Featured Projects
      </h2>
      <p className="text-base font-sans font-light max-w-[350px] mb-16">
        These selected projects reflect my passion for blending strategy with
        creativity — solving real problems through thoughtful design and
        impactful storytelling.
      </p>

      {/* Desktop scroll effect */}
      <div className="projects-container hidden md:block relative h-[300vh]">
        {projects.map((project) => (
          <div
            key={project.id}
            className="sticky top-[80px] h-[100vh] transition-all duration-700 ease-out"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {/* Mobile stacked layout */}
      <div className="flex flex-col gap-10 md:hidden">
        {projects.map((project) => (
          <div key={project.id} className="flex flex-col">
            <ProjectCard project={project} isMobile />
            <p className="font-sans text-sm py-2 font-light text-[#303030] text-left max-w-md">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
