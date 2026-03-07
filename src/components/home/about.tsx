import React from "react";
import Link from "next/link";
import { Container } from "@/layouts";
import { aboutList } from "@/static/aboutdata";
import { ServiceCard, AnimateY, CTAButton, ServicesSection, ValuesSection } from "../partials";

export default function About() {
  return (
    <section className="bg-slate-100 py-20">
      <Container>
        <div className="space-y-6">
          <h1 className="md:text-heading-two text-heading-three font-bold">
            About Us
          </h1>
          {/* <p className="leading-[150%] text-slate-600 md:w-[464px] md:text-2xl">
            We create custom tech solutions to meet your unique requirements.
          </p> */}
          <ValuesSection/>
          <ServicesSection/>
        </div>

        {/* <div className="mt-20 grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2">
          {aboutList.slice(0, 4).map((item) => (
            <AnimateY staggerAmount={0.35}>
              <ServiceCard key={item.id} {...item} />
            </AnimateY>
          ))}
        </div> */}

        <div className="mx-auto mt-20 w-max">
          <Link href={"/about"}>
            <CTAButton title="See More" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
