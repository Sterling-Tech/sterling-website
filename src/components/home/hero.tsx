import React from "react";
import Link from "next/link";
import { CTAButton } from "../partials";

export default function Hero() {
  return (
    <section>
      <div className="bg-dim-black pt-[90px]  text-white md:pb-[110px]">
        <div className="mx-auto px-6 sm:max-w-2xl md:max-w-3xl lg:max-w-[1280px] lg:px-0">
          <div className="space-y-6 pt-20 md:min-h-screen">
            <h2 className="w-[327px] text-sm leading-[150%] md:w-[411px] md:text-xl">
              We are committed to constantly exploring new ideas, and harnessing
              innovation to drive your success
            </h2>

            <div className="space-y-10">
              <h1 className="w-80 text-[2.5rem] font-semibold leading-[150%] tracking-tight md:w-[800px]  md:text-8xl lg:w-[1200px] lg:leading-[140%]">
                Shaping A Smarter World{" "}
                <span className="text-primary">Our Vision, Your Solution.</span>{" "}
              </h1>

              <div>
                <Link href={"/contact"}>
                  <CTAButton title="Let's Talk Now" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <img src="/hero-img.png" alt="Tech Image" />
      </div>
    </section>
  );
}
