import Image from 'next/image'
import React from 'react'

const ImagePage = () => {
  return (
    <div>
      <div className='h-screen flex justify-center items-center'>
        <div className='border'>
           <Image
              src="./images/home/profile-pic.jpg"
              alt="first image"
              className="object-contain"
              width={500}
              height={500}
            />
        </div>
      </div>
      <div className='h-screen flex justify-center items-center'>
        <div className='border'>
           <Image
              src="./images/home/profile-back.jpg"
              alt="second image"
              className="object-contain"
              width={500}
              height={500}
            />
        </div>
      </div>
      <div className='h-screen flex justify-center items-center'>
        <div className='border'>
           <Image
              src="./images/projects/image3.avif"
              alt="third image"
              className="object-contain"
              width={500}
              height={500}
            />
        </div>
      </div>
      <div className='h-screen flex justify-center items-center'>
        <div className='border'>
           <Image
              src="./images/projects/image4.avif"
              alt="Fourth image"
              className="object-contain"
              width={500}
              height={500}
            />
        </div>
      </div>
    </div>
  )
}

export default ImagePage