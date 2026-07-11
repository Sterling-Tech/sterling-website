"use client";

import {
  Target,
  Users,
  Lightbulb,
  Rocket,
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Precision Engineering",
    text: "Every solution we build is engineered for performance, scalability, and reliability. We eliminate complexity and deliver software that solves real business challenges.",
  },
  {
    icon: Users,
    title: "Partnership Mindset",
    text: "We become an extension of your team, collaborating closely to understand your goals and deliver measurable outcomes that create long-term value.",
  },
  {
    icon: Lightbulb,
    title: "Relentless Innovation",
    text: "Technology evolves every day. We continuously innovate, embracing AI, cloud-native technologies, and automation to keep your organization ahead of the competition.",
  },
  {
    icon: Rocket,
    title: "Speed to Value",
    text: "Using agile methodologies and continuous delivery, we rapidly transform ideas into production-ready solutions that generate immediate business impact.",
  },
];

const ValuesSection = () => {
  return (
    <section
      id="core-values"
      className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-24 lg:py-32"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-yellow-100 blur-3xl opacity-40"></div>

        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-red-100 blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-yellow-100 px-4 py-1 text-sm font-semibold text-yellow-700">
            OUR FOUNDATION
          </span>

          <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Our{" "}
            <span className="bg-gradient-to-r from-yellow-500 to-red-600 bg-clip-text text-transparent">
              Core Values
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-yellow-400 to-red-500"></div>

          <p className="mt-6 text-base leading-8 text-slate-600 lg:text-lg">
            Engineering the pulse of modern utilities. We build secure,
            scalable, and intelligent platforms that help organizations
            transform operations, improve customer experiences, and accelerate
            sustainable growth.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="
                  group
                  relative
                  flex
                  h-full
                  flex-col
                  overflow-hidden
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  p-8
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
                <div className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-yellow-400 to-red-500 transition-transform duration-500 group-hover:scale-x-100"></div>

                {/* Icon */}
                <div
                  className="
                    mx-auto
                    mb-6
                    inline-flex
                    h-16
                    w-16
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
                  <Icon
                    aria-hidden="true"
                    className="
                      h-8
                      w-8
                      text-slate-800
                      transition-colors
                      duration-500
                      group-hover:text-white
                    "
                  />
                </div>

                {/* Title */}
                <h3 className="text-center text-xl font-semibold text-slate-900">
                  {value.title}
                </h3>

                {/* Divider */}
                <div className="mx-auto my-5 h-1 w-14 rounded-full bg-gradient-to-r from-yellow-400 to-red-500"></div>

                {/* Text */}
                <p className="flex-grow text-center text-sm leading-7 text-slate-600">
                  {value.text}
                </p>

                {/* Bottom Accent */}
                <div className="mt-8 flex justify-center">
                  <span className="h-2 w-12 rounded-full bg-gradient-to-r from-yellow-400 to-red-500 opacity-0 transition-all duration-500 group-hover:w-20 group-hover:opacity-100"></span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Quote */}
        <div className="mx-auto mt-24 max-w-4xl rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
          <blockquote className="text-xl font-medium italic leading-9 text-slate-700 lg:text-2xl">
            "Technology is most powerful when it empowers people. Every solution
            we build is designed to create measurable impact, foster innovation,
            and accelerate the digital transformation of our clients."
          </blockquote>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-yellow-400 to-red-500"></div>

          <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-slate-500">
            Sterling Technologies & Systems Limited
          </p>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;