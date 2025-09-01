"use client"

import Image from "next/image";

export default function Projects() {

  return (
    <section className="relative py-10"> 
      <h2 className="uppercase font-heading font-semibold text-lg md:text-3xl lg:text-5xl mb-6">Featured Projects</h2>
      <div className="text-base font-sans font-light max-w-[350px] mb-16">
        These selected projects reflect my passion for blending strategy with creativity — solving real problems through thoughtful design and impactful storytelling.
      </div>

      <div className="projects-container relative h-[300vh]" >
        {/* Project 1 */}
        <div className="sticky top-[70px] h-[100vh] transition-all duration-700 ease-out">
          <div className="relative w-full h-full rounded-3xl overflow-hidden">
            <Image src="/images/projects/portal.jpg" alt="Internal Company Portal" fill className="object-cover"/>
            <div className="absolute inset-0 bg-black/60 rounded-3xl"></div>
            <div className="project-content absolute inset-0 flex flex-col gap-4 justify-center items-center p-4 transition-opacity duration-500">
              <div className="font-sans font-light text-white bg-primary w-fit text-center px-4 text-sm py-1 rounded-full">Next.JS Project</div>
              <div className="font-heading text-3xl md:text-4xl lg:text-5xl text-white uppercase font-bold text-center">Internal Company Portal</div>
              <div className="font-sans text-sm md:text-base text-white text-center max-w-md">{"Created promotional materials for the Summer Vibes Festival, including posters, flyers, and social media graphics."}</div>
            </div>    
          </div>
        </div>

        {/* Project 2 */}
        <div className="sticky top-[70px] h-[100vh] transition-all duration-700 ease-out">
          <div className="relative w-full h-full rounded-3xl overflow-hidden">
            <Image src="/images/projects/coding.jpg" alt="Company Website" fill className="object-cover"/>
            <div className="absolute inset-0 bg-black/60 rounded-3xl"></div>
            <div className="project-content absolute inset-0 flex flex-col gap-4 justify-center items-center p-4 transition-opacity duration-500">
              <div className="font-sans font-light text-white bg-primary w-fit text-center px-4 text-sm py-1 rounded-full">Tailwind Project</div>
              <div className="font-heading text-3xl md:text-4xl lg:text-5xl text-white uppercase font-bold text-center">Company Website</div>
              <div className="font-sans text-sm md:text-base text-white text-center max-w-md">Created promotional materials for the social media graphics.</div>
            </div>    
          </div>
        </div>

        {/* Project 3 */}
        <div className="sticky top-[70px] h-[100vh] transition-all duration-700 ease-out">
          <div className="relative w-full h-full rounded-3xl overflow-hidden">
            <Image src="/images/projects/analyst-laptop.jpg" alt="Personal Dashboard Project" fill className="object-cover"/>
            <div className="absolute inset-0 bg-black/60 rounded-3xl"></div>
            <div className="project-content absolute inset-0 flex flex-col gap-4 justify-center items-center p-4 transition-opacity duration-500">
              <div className="font-sans font-light text-white bg-primary w-fit text-center px-4 text-sm py-1 rounded-full">PowerBI Project</div>
              <div className="font-heading text-3xl md:text-4xl lg:text-5xl text-white uppercase font-bold text-center">Personal Dashboard Project</div>
              <div className="font-sans text-sm md:text-base text-white text-center max-w-md">Created professional dashboard with data and its insights</div>
            </div>    
          </div>
        </div>
      </div>
    </section>
  );
}