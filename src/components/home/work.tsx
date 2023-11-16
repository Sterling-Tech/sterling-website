import React from "react";
import { Container } from "@/layouts";
import { AnimateX } from "../partials";

export default function Work() {
  return (
    <section className=" py-20">
      <Container>
        <div className="space-y-6">
          <h1 className="md:text-heading-two text-heading-three font-bold">
            Our Work
          </h1>
          <p className="leading-[150%] text-slate-600 md:w-[664px] md:text-2xl">
            We have a plethora of projects that we have successfully delivered
            for our clients
          </p>
        </div>
        <div className="mt-20 space-y-20">
          <AnimateX staggerAmount={0.35} direction={40}>
            <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-2">
              <div>
                <img src="/smart-power.png" alt="Smart Power Thumbnail" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold md:text-4xl">
                  Smart Power
                </h3>
                <p className="text-sm leading-[140%] text-slate-700 md:w-[90%] md:text-base">
                  This project will discuss a logo from Sunnyday at Teamup where
                  the process of making this logo is very interesting from
                  determining the moodboard to the coloring design.
                </p>
                <div className="flex gap-x-4">
                  <span className="rounded-3xl border border-dim-black px-2 py-2 text-sm text-dim-black md:px-3 md:text-base">
                    Report Generation
                  </span>
                  <span className="rounded-3xl border border-dim-black px-2 py-2 text-sm text-dim-black md:px-3 md:text-base">
                    Payment Collection
                  </span>
                </div>
              </div>
            </div>
          </AnimateX>

          <AnimateX staggerAmount={0.45} direction={-40}>
            <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold md:text-4xl">QuikPay</h3>
                <p className="text-sm leading-[140%] text-slate-700 md:w-[90%] md:text-base">
                  This project will discuss a logo from Sunnyday at Teamup where
                  the process of making this logo is very interesting from
                  determining the moodboard to the coloring design.
                </p>
                <div className="flex gap-x-4">
                  <span className="rounded-3xl border border-dim-black px-2 py-2 text-sm text-dim-black md:px-3 md:text-base">
                    Report Generation
                  </span>
                  <span className="rounded-3xl border border-dim-black px-2 py-2 text-sm text-dim-black md:px-3 md:text-base">
                    Payment Collection
                  </span>
                </div>
              </div>

              <div>
                <img src="/quick-pay.png" alt="Quick Pay Thumbnail" />
              </div>
            </div>
          </AnimateX>

          <AnimateX staggerAmount={0.55} direction={40}>
            <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-2">
              <div>
                <img src="/quick-cash.png" alt="Smart Power Thumbnail" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold md:text-4xl">QuikCash</h3>
                <p className="text-sm leading-[140%] text-slate-700 md:w-[90%] md:text-base">
                  This project will discuss a logo from Sunnyday at Teamup where
                  the process of making this logo is very interesting from
                  determining the moodboard to the coloring design.
                </p>
                <div className="flex gap-x-4">
                  <span className="rounded-3xl border border-dim-black px-2 py-2 text-sm text-dim-black md:px-3 md:text-base">
                    Report Generation
                  </span>
                  <span className="rounded-3xl border border-dim-black px-2 py-2 text-sm text-dim-black md:px-3 md:text-base">
                    Payment Collection
                  </span>
                </div>
              </div>
            </div>
          </AnimateX>
        </div>
      </Container>
    </section>
  );
}
