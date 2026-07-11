"use client";

import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import {
  Building2,
  Zap,
  Users,
  Banknote,
} from "lucide-react";

const stats = [
  {
    value: 50,
    suffix: "+",
    title: "Utilities & Distribution Partners",
    text: "Trusted by more than 50 utilities and distribution partners across Africa, enabling reliable, secure, and scalable energy management.",
    icon: Building2,
  },
  {
    value: 2,
    suffix: "B+",
    title: "kWh Managed Annually",
    text: "Processing billions of kilowatt-hours every year with enterprise-grade performance, availability, and operational efficiency.",
    icon: Zap,
  },
  {
    value: 5,
    suffix: "M+",
    title: "Active Platform Users",
    text: "Serving millions of customers through secure, intelligent, and user-friendly digital platforms for utilities and energy providers.",
    icon: Users,
  },
  {
    value: 50,
    prefix: "₦",
    suffix: "B+",
    title: "Revenue Processed",
    text: "Managing billions of naira in transactions through secure payment infrastructure, automated reconciliation, and intelligent reporting.",
    icon: Banknote,
  },
];

export default function StatsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-24 lg:py-32"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-yellow-100 opacity-40 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-red-100 opacity-30 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}

        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-yellow-100 px-4 py-1 text-sm font-semibold tracking-wide text-yellow-700">
            ENTERPRISE IMPACT
          </span>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Our{" "}
            <span className="bg-gradient-to-r from-yellow-500 to-red-600 bg-clip-text text-transparent">
              Impact at Scale
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-yellow-400 to-red-500" />

          <p className="mt-6 text-base leading-8 text-slate-600 lg:text-lg">
            Every day our platforms help utilities modernize operations,
            automate processes, improve customer experiences, and securely
            process millions of transactions across Nigeria and Africa.
          </p>
        </div>

        {/* Statistics */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.title}
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

                <div className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-yellow-400 to-red-500 transition-transform duration-500 group-hover:scale-x-100" />

                {/* Icon */}

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
                  <Icon
                    className="
                      h-9
                      w-9
                      text-slate-800
                      transition-all
                      duration-500
                      group-hover:scale-110
                      group-hover:text-white
                    "
                  />
                </div>

                {/* Statistic */}

                <div className="text-center">
                  <h3
                    className="bg-gradient-to-r from-yellow-500 to-red-600 bg-clip-text text-5xl font-black text-transparent"
                    aria-label={`${stat.prefix ?? ""}${stat.value}${
                      stat.suffix ?? ""
                    }`}
                  >
                    {inView && (
                      <CountUp
                        start={0}
                        end={stat.value}
                        duration={2.5}
                        separator=","
                        prefix={stat.prefix || ""}
                        suffix={stat.suffix || ""}
                      />
                    )}
                  </h3>

                  {/* Title */}

                  <h4 className="mt-6 text-xl font-semibold text-slate-900">
                    {stat.title}
                  </h4>

                  {/* Divider */}

                  <div className="mx-auto my-5 h-1 w-14 rounded-full bg-gradient-to-r from-yellow-400 to-red-500" />

                  {/* Description */}

                  <p className="min-h-[150px] text-sm leading-7 text-slate-600">
                    {stat.text}
                  </p>
                </div>

                {/* Bottom Accent */}

                <div className="mt-8 flex justify-center">
                  <span className="h-2 w-12 rounded-full bg-gradient-to-r from-yellow-400 to-red-500 opacity-0 transition-all duration-500 group-hover:w-24 group-hover:opacity-100"></span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Enterprise Card */}

        <div className="mx-auto mt-24 max-w-6xl rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-flex rounded-full bg-yellow-100 px-4 py-1 text-sm font-semibold text-yellow-700">
                WHY IT MATTERS
              </span>

              <h3 className="mt-5 text-3xl font-bold text-slate-900">
                Trusted Infrastructure for Modern Utilities
              </h3>

              <div className="mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-yellow-400 to-red-500" />

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Our enterprise solutions are engineered to support mission-
                critical utility operations with exceptional uptime,
                enterprise-grade security, intelligent automation, and seamless
                scalability.
              </p>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-black to-slate-800 p-8 text-white">
              <h4 className="text-2xl font-bold">
                Enterprise Performance Highlights
              </h4>

              <ul className="mt-6 space-y-4">
                <li className="flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
                  99.9% Platform Availability
                </li>

                <li className="flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full bg-red-500"></span>
                  AI-Powered Analytics & Forecasting
                </li>

                <li className="flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
                  Multi-Utility ERP Platform
                </li>

                <li className="flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full bg-red-500"></span>
                  Secure Payment & Revenue Management
                </li>

                <li className="flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
                  Cloud-Native & Enterprise Scalable
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}