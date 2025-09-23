"use client";

import ImagePage from "./ImagePage";
import MainPage from "./MainPage";


export default function About() {
  
 
  
  return (
    <section className="relative flex justify-center items-center">
      <div className="flex justify-center w-full gap-10">
        
        <div className="w-fit">
          <MainPage />
        </div>
        <div className="w-1/4 border border-black">
         <ImagePage />
        </div>
       
        
      </div>
    </section>
  );
}