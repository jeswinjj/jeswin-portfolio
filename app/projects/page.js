"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Internal Company Portal",
    type: "Next.JS Project",
    description:
      "Created promotional materials for the Summer Vibes Festival, including posters, flyers, and social media graphics.",
    image: "/images/projects/portal.jpg",
    tech: ["Next.js", "TypeScript", "Tailwind", "Prisma"],
    link: "#",
    gradient: "from-purple-500/20 to-blue-500/20",
  },
  {
    id: 2,
    title: "Company Website",
    type: "Tailwind Project",
    description: "Created promotional materials for the social media graphics.",
    image: "/images/projects/coding.jpg",
    tech: ["React", "Tailwind", "Framer Motion"],
    link: "#",
    gradient: "from-green-500/20 to-cyan-500/20",
  },
  {
    id: 3,
    title: "Personal Dashboard Project",
    type: "PowerBI Project",
    description: "Created professional dashboard with data and its insights.",
    image: "/images/projects/analyst-laptop.jpg",
    tech: ["Power BI", "SQL", "Python"],
    link: "#",
    gradient: "from-orange-500/20 to-red-500/20",
  },
];

function ProjectCard({ project, isMobile = false, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className={`relative group cursor-pointer ${
        isMobile ? "h-[400px]" : "h-[90vh]"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-3xl`}
      />

      {/* Image with Parallax Effect */}
      <motion.div
        className="absolute inset-0 rounded-3xl overflow-hidden"
        animate={{ scale: isHovered ? 1.05 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Project Type */}
          <motion.span
            className="inline-block font-sans font-light bg-primary px-4 text-sm py-2 rounded-full mb-4"
            whileHover={{ scale: 1.05 }}
          >
            {project.type}
          </motion.span>

          {/* Title */}
          <h3 className="font-heading text-3xl md:text-5xl lg:text-6xl text-white uppercase font-bold mb-4 leading-tight">
            {project.title}
          </h3>

          {/* Description */}
          {!isMobile && (
            <motion.p
              className="font-sans text-lg text-white/90 max-w-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0.7 }}
            >
              {project.description}
            </motion.p>
          )}

          {/* CTA Button */}
          {!isMobile && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -20 }}
              transition={{ duration: 0.3 }}
              className="mt-6"
            >
              <button className="flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300">
                <span>View Project</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Hover Effect Border */}
      <div
        className={`absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-white/30 transition-all duration-500 ${
          isHovered ? "scale-105" : "scale-100"
        }`}
      />
    </motion.div>
  );
}

// ✅ Wrapper to handle useTransform safely
function ProjectWrapper({ project, index, scrollYProgress }) {
  const scale = useTransform(
    scrollYProgress,
    [index * 0.3, index * 0.3 + 0.5],
    [0.8, 1]
  );

  return (
    <motion.div style={{ opacity: 1, scale }} className="mb-20 last:mb-0">
      <ProjectCard project={project} index={index} />
    </motion.div>
  );
}

export default function Projects({ variant = "large" }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const headingClass =
    variant === "default"
      ? "text-4xl md:text-5xl lg:text-6xl"
      : "text-4xl md:text-6xl lg:text-8xl";

  return (
    <section
      ref={containerRef}
      className="relative py-20 px-5 md:px-20 lg:px-30 "
    >
      {/* Background Elements */}
      <div className="absolute inset-0 " />
      <div className="absolute inset-0 " />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2
            className={`uppercase font-heading font-bold text-black mb-6 ${headingClass}`}
          >
            Featured Projects
          </h2>
          <motion.p
            className="text-lg font-sans font-light text-black/70 max-w-2xl leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            These selected projects reflect my passion for blending strategy with
            creativity — solving real problems through thoughtful design and
            impactful storytelling.
          </motion.p>
        </motion.div>

        {/* Desktop Scroll Effect */}
        <div className="hidden md:block relative">
          {projects.map((project, index) => (
            <ProjectWrapper
              key={project.id}
              project={project}
              index={index}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>

        {/* Mobile Stacked Layout */}
        <div className="flex flex-col gap-16 md:hidden">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <ProjectCard project={project} isMobile index={index} />
              <p className="font-sans text-base text-white/80 mt-4 leading-relaxed">
                {project.description}
              </p>
              <button className="mt-4 px-6 py-2 border border-white/30 rounded-full text-white text-sm hover:bg-white/10 transition-colors">
                View Details
              </button>
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-20"
        >
          <button className="group relative px-8 py-4 bg-primary rounded-full text-white font-sans font-medium overflow-hidden">
            <span className="relative z-10">View All Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
