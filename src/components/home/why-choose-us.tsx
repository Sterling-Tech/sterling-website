import React from "react";
import { Container } from "@/layouts";
import ChooseUsCard from "./choose-us-card";
import { partners } from "@/static/data";

export default function WhyChooseUs() {
  return (
    <section className=" bg-dim-black">
      <Container>
        <div className="space-y-20 py-20">
          <h1 className="text-heading-three lg:text-heading-two font-semibold text-white">
            Why Choose Us?
          </h1>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <ChooseUsCard />
            <ChooseUsCard />
            <ChooseUsCard />
            <ChooseUsCard />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-6">
            {partners.map((partner) => (
              <img src={partner} alt="Logo" />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
