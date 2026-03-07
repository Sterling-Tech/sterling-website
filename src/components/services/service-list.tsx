import React from "react";
import { Container } from "@/layouts";
import { serviceList } from "@/static/data";
import { ServiceCard, AnimateY, ServicesSection } from "../partials";

export default function ServiceList() {
  return (
    <section className="bg-slate-50 py-20">
      <Container>
        <ServicesSection/>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2">
          {serviceList.map((item, index) => (
            <AnimateY
              key={item.id ?? index}
              staggerAmount={0.35}
            >
              <ServiceCard {...item} />
            </AnimateY>
          ))}
        </div>
      </Container>
    </section>
  );
}