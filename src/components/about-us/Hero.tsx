import React from "react";
import Link from "next/link";
import { CTAButton, AnimateY } from "../partials";

export default function Hero() {
  return (
    <div>
      <section className="relative">
        <div className="w-full h-full">
          <img src="/hero-img.png" alt="Tech Image" className="w-full lg:h-full md:h-[750px] h-[450px] object-cover" />
        </div>
        {/* <div className="bg-dim-black pb-20 pt-[90px]  text-white md:pb-[110px]"> */}
        <div className="lg:pt-24 md:pt-16 pt-12 bg-black/50 text-white md:pb-16 absolute top-0 left-0 w-full">
          <div className="px-6 md:px-16 lg:px-20 w-full">
            <div className="space-y-6 pt-20 md:min-h-screen">
              <AnimateY staggerAmount={0.35}>
                {/* <h2 className="w-[327px] text-sm leading-[150%] md:w-[411px] md:text-xl"> */}
                <h2 className="text-sm leading-[150%] md:text-xl md:w-[400px] lg:w-[600px]">
                  <div className="w-full">
                    Powering Africa's Energy Future with Intelligent Technology
                  </div>
                </h2>
              </AnimateY>

              <div className="space-y-6 md:space-y-10">
                <AnimateY staggerAmount={0.45}>
                  {/* <h1 className="text-[1rem] font-semibold leading-[150%] tracking-tight md:w-[800px]  md:text-8xl lg:w-[1200px] lg:leading-[140%]"> */}
                  <h1 className="text-[1rem] font-semibold leading-[150%] tracking-tight  md:text-3xl lg:text-4xl  lg:leading-[140%]">
                    Sterling Technologies delivers enterprise-grade ERP and prepaid vending solutions that {" "}
                    <span className="text-primary">
                      transform how utilities manage power, payments, and data.
                    </span>{" "}
                  </h1>
                </AnimateY>

                <AnimateY staggerAmount={0.5}>
                  <div>
                    <Link href={"/contact"}>
                      <CTAButton title="Let's Talk Now" />
                    </Link>
                  </div>
                </AnimateY>
              </div>
            </div>
          </div>
        </div>


      </section>
    </div>
  )
}
