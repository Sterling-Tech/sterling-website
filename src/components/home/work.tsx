import React from "react";
import { Container } from "@/layouts";
import WorkCard from "./work-card";
import { CTAButton } from "../partials";

export default function Work() {
  return (
    <section className=" py-20">
      <Container>
        <div className="space-y-6">
          <h1 className="md:text-heading-two text-heading-three font-bold">
            Our Work
          </h1>
          <p className="leading-[150%] text-slate-600 md:w-[464px] md:text-2xl">
            We have a plethora of projects that we have successfully delivered
            for our clients
          </p>
        </div>
        <div className="mt-20 space-y-20">
          <WorkCard />
          <WorkCard />
          <WorkCard />
        </div>

        <div className="mx-auto mt-20 w-max">
          <CTAButton title="See More" />
        </div>
      </Container>
    </section>
  );
}
