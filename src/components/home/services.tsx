import React from "react";
import Link from "next/link";
import { Container } from "@/layouts";
import { serviceList } from "@/static/data";
import { ServiceCard, AnimateY, CTAButton } from "../partials";

export default function Services() {
  return (
    <section className="bg-slate-100 py-20">
      <Container>
        <div className="space-y-6">
          <h1 className="md:text-heading-two text-heading-three font-bold">
            Our Services
          </h1>
          <p className="leading-[150%] text-slate-600 md:w-[464px] md:text-2xl">
            We create custom tech solutions to meet your unique requirements.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2">
          {serviceList.slice(0, 4).map((item) => (
            <AnimateY staggerAmount={0.35}>
              <ServiceCard key={item.id} {...item} />
            </AnimateY>
          ))}
        </div>

        <div className="mx-auto mt-20 w-max">
          <Link href={"/services"}>
            <CTAButton title="See More" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
