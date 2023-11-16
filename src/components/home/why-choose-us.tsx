import React from "react";
import { Container } from "@/layouts";
import ChooseUsCard from "./choose-us-card";
import { reasonList } from "@/static/data";
import { AnimateY } from "../partials";

export default function WhyChooseUs() {
  return (
    <section className=" bg-dim-black">
      <Container>
        <div className="space-y-20 py-20">
          <h1 className="text-heading-three lg:text-heading-two font-semibold text-white">
            Why Choose Us?
          </h1>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {reasonList.map((item) => (
              <AnimateY staggerAmount={0.35 + item.stagger}>
                <ChooseUsCard key={item.id} {...item} />
              </AnimateY>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
