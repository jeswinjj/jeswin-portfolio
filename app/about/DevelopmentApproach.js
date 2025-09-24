import Image from 'next/image'
import React from 'react'

const DevelopmentApproach = () => {
  return (
    <div className="flex flex-col py-10 w-full">
        <div className="font-extrabold font-heading text-4xl md:text-4xl lg:text-5xl uppercase py-8">My Development Approach</div>
        <p className="text-light font-sans max-w-[400px] text-sm">
            I build with modern, proven technologies to create robust applications and insightful
            dashboards.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-5">
            <div className='flex flex-col justify-between p-6 rounded-2xl bg-[#303030] text-white h-[250px] md:h-[330px]'>
                <div className='font-heading text-2xl'>01</div>
                <div className='flex flex-col gap-2'>
                    <div className='font-heading text-xl'>Research & Planning</div>
                    <div className='font-sans text-sm'>Understand business goals, user needs, and project scope. Create a clear roadmap.</div>
                </div>
            </div>

            <Image 
            src="./images/about/development.avif"
            className='w-auto h-[250px] md:h-[330px] object-center object-cover rounded-2xl'
            alt='development'
            width={1000}
            height={1000}
            />

            <div className='flex flex-col justify-between p-6 rounded-2xl bg-primary text-white h-[250px] md:h-[330px]'>
                <div className='font-heading text-2xl'>02</div>
                <div className='flex flex-col gap-2'>
                    <div className='font-heading text-xl'>Architecture & Development</div>
                    <div className='font-sans text-sm'>Design scalable structures, build front-end & back-end components, and integrate APIs.</div>
                </div>
            </div>

            <Image 
            src="./images/about/eye_coder.avif"
            className='w-full h-[250px] md:h-[330px] object-center object-cover rounded-2xl'
            alt='development'
            width={1000}
            height={1000}
            />

            <div className='flex flex-col justify-between p-6 rounded-2xl lg:col-span-2 bg-[#EEEEEE] text-black h-[250px] md:h-[330px]'>
                <div className='font-heading text-2xl'>03</div>
                <div className='flex flex-col gap-2'>
                    <div className='font-heading text-xl'>Collaboration & Iteration</div>
                    <div className='font-sans text-sm'>Work closely with stakeholders, gather feedback, and refine features for alignment.</div>
                </div>
            </div>

            <div className='flex flex-col justify-between p-6 rounded-2xl bg-primary text-white h-[250px] md:h-[330px]'>
                <div className='font-heading text-2xl'>04</div>
                <div className='flex flex-col gap-2'>
                    <div className='font-heading text-xl'>Testing & Optimization</div>
                    <div className='font-sans text-sm'>Conduct performance, usability, and security testing. Optimize for speed & scalability.</div>
                </div>
            </div>

            <div className='flex flex-col justify-between p-6 rounded-2xl bg-[#303030] text-white h-[250px] md:h-[330px]'>
                <div className='font-heading text-2xl'>02</div>
                <div className='flex flex-col gap-2'>
                    <div className='font-heading text-xl'>Deployment & Support</div>
                    <div className='font-sans text-sm'>Deploy to production with best practices, provide documentation, and support for future updates.</div>
                </div>
            </div>

            <Image 
            src="./images/about/hoodieCoder.avif"
            className='w-full h-[250px] md:h-[330px] object-center object-cover rounded-2xl'
            alt='development'
            width={1000}
            height={1000}
            />



        </div>
    </div>
  )
}

export default DevelopmentApproach