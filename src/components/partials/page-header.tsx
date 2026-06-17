import React from "react";
import { CTAButton, AnimateY } from "../partials";
import Link from "next/link";
import { Container } from "@/layouts";

interface IPageHeader {
  heading: string;
  body: string;
  cta: string;
  link: string;
  className?: string;
}

export default function PageHeader({ heading, body, cta, link, className }: IPageHeader) {
  return (
    <div className={className ? className : "bg-blue-950 pb-10 pt-[90px]  text-white md:pb-20"}>
      <Container>
        {/* <div className="sm:max-w-2xl md:max-w-3xl lg:max-w-[1280px] lg:px-0"> */}
        <div className="">
          <div className="pt-20 ">
            <div className="space-y-10">
              <AnimateY staggerAmount={0.35}>
                <h1 className="text-[2.5rem] font-semibold leading-[150%] tracking-tight  md:text-8xl lg:leading-[140%]">
                  {heading}
                </h1>
              </AnimateY>

              <AnimateY staggerAmount={0.45}>
                <p className="text-sm leading-[150%] md:text-xl">{body}</p>
              </AnimateY>
              <AnimateY staggerAmount={0.5}>
                <div>
                  <Link href={link}>
                    <CTAButton title={cta} />
                  </Link>
                </div>
              </AnimateY>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
