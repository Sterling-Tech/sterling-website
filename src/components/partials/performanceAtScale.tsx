"use client";

import React from "react";
import { Container } from "@/layouts";
import { performanceList as defaultPerformanceList } from "@/static/data";
import { AnimateY } from "../partials";

export interface PerformanceItem {
  id: number | string;
  title: string;
  text: string;
  stat: string;
  icon?: string;
}

export interface PerfAtScaleProps {
  items?: PerformanceItem[];
}

export default function PerformanceAtScale({
  items = defaultPerformanceList,
}: PerfAtScaleProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-24 lg:py-32">
      {/* Decorative Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-yellow-100 opacity-40 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-red-100 opacity-30 blur-3xl" />
      </div>

      <Container>
        {/* Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-yellow-100 px-4 py-1 text-sm font-semibold tracking-wide text-yellow-700">
            ENTERPRISE PERFORMANCE
          </span>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Performance{" "}
            <span className="bg-gradient-to-r from-yellow-500 to-red-600 bg-clip-text text-transparent">
              at Scale
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-yellow-400 to-red-500" />

          <p className="mt-6 text-base leading-8 text-slate-600 lg:text-lg">
            Built for utilities of every size, our platform delivers enterprise
            scalability, resilience, security, and operational excellence while
            supporting millions of customers across Africa.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item, index) => (
            <AnimateY
              key={item.id}
              staggerAmount={0.15 * index}
            >
              <div
                className="
                  group
                  relative
                  flex
                  h-full
                  flex-col
                  overflow-hidden
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-10
                  shadow-sm
                  transition-all
                  duration-500
                  ease-out
                  hover:-translate-y-3
                  hover:border-yellow-300
                  hover:shadow-2xl
                "
              >
                {/* Animated Top Border */}
                <div className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-yellow-400 to-red-500 transition-transform duration-500 group-hover:scale-x-100" />

                {/* Icon */}
                {item.icon && (
                  <div
                    className="
                      mx-auto
                      mb-8
                      flex
                      h-20
                      w-20
                      items-center
                      justify-center
                      rounded-2xl
                      bg-gradient-to-br
                      from-yellow-100
                      to-red-100
                      transition-all
                      duration-500
                      group-hover:rotate-6
                      group-hover:scale-110
                      group-hover:from-yellow-500
                      group-hover:to-red-600
                    "
                  >
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="
                        h-10
                        w-10
                        transition-all
                        duration-500
                        group-hover:scale-110
                        group-hover:brightness-0
                        group-hover:invert
                      "
                    />
                  </div>
                )}

                {/* Statistic */}
                <div className="text-center">
                  <p className="bg-gradient-to-r from-yellow-500 to-red-600 bg-clip-text text-5xl font-black text-transparent">
                    {item.stat}
                  </p>

                  {/* Title */}
                  <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                    {item.title}
                  </h3>

                  {/* Divider */}
                  <div className="mx-auto my-5 h-1 w-14 rounded-full bg-gradient-to-r from-yellow-400 to-red-500" />

                  {/* Description */}
                  <p className="min-h-[140px] text-sm leading-7 text-slate-600">
                    {item.text}
                  </p>
                </div>

                {/* Bottom Accent */}
                <div className="mt-8 flex justify-center">
                  <span className="h-2 w-12 rounded-full bg-gradient-to-r from-yellow-400 to-red-500 opacity-0 transition-all duration-500 group-hover:w-24 group-hover:opacity-100" />
                </div>
              </div>
            </AnimateY>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mx-auto mt-24 max-w-5xl rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-slate-900">
              Engineered for Mission-Critical Operations
            </h3>

            <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-yellow-400 to-red-500" />

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              From national utilities to private energy providers, our
              enterprise platforms are designed to deliver high availability,
              operational efficiency, intelligent automation, and exceptional
              customer experiences at every stage of growth.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}