import React from "react";
import { RightArrowCTA } from "../icons";

export default function CTAButton({ title }: { title: string }) {
  return (
    <button className="group flex w-full items-center gap-4 rounded-[40px] border border-primary bg-primary px-10 py-4 text-black transition-all duration-100 hover:bg-transparent hover:text-primary md:w-max md:text-[1.75rem]">
      <span className="mx-auto font-semibold md:mx-0">{title}</span>{" "}
      <RightArrowCTA />
    </button>
  );
}

export const Btn=({title, className}:{title:string, className?: string})=>{
  return(
    // <div className="w-30 md:w-40 lg:w-60 bg-blue-950 text-white px-5 py-4 rounded-full text-center font-semibold cursor-pointer hover:bg-black border border-blue-950 transition-all duration-100">
    <div className={className ? className : "w-30 md:w-60 lg:w-72 bg-blue-950 text-white px-5 py-4 rounded-full text-center font-semibold cursor-pointer hover:bg-black border border-blue-950 transition-all duration-100"}>
      <span>{title}</span>
    </div>
  )
}
