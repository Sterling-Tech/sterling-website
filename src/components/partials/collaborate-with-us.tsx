import React from "react";
import { Container } from "@/layouts";
import { RightArrow } from "../icons";
import Link from "next/link";
import AnimateY from "./animate-y";

export default function CollaborateWithUs() {
  return (
    <div>
      <Container>
        <div className="flex flex-col space-y-4 py-20 md:space-y-0">
          <AnimateY staggerAmount={0.35}>
            <h1 className="text-heading-three text-center font-bold md:text-left md:text-[5rem]">
              Ready to Collaborate With Us?
            </h1>
          </AnimateY>

          <div className="flex flex-col space-y-6">
            <AnimateY staggerAmount={0.45}>
              {/* <p className="sm-[500px] w-[345px] text-center leading-[150%] md:w-[586px] md:text-left"> */}
              <div className="grid grid-cols-12">
                <div className="md:col-span-6"></div>
                <div className="col-span-12 md:col-span-6 w-full text-center leading-[150%] md:text-left">
                  <p className="w-full text-center leading-[150%] md:text-left">
                    If you already have an awesome idea for your project and don't
                    know how to make it real? Don’t worry we all here to help you
                    realize your idea
                  </p>

                  <button className="group flex w-max items-center gap-2 border-b border-dim-black  py-2 transition-all duration-100 md:mx-0">
                    <Link href={"/contact"}>
                      <span className="font-semibold">Let's Talk Now</span>{" "}
                    </Link>
                    <span className="transition-all duration-100 group-hover:translate-x-1">
                      <RightArrow color="#0C0E12" />
                    </span>
                  </button>
                </div>
              </div>
            </AnimateY>
          </div>
        </div>
      </Container>
    </div>
  );
}
