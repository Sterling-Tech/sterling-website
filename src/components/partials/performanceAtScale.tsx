"use client";

import React from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { Database, Zap, ShieldCheck } from "lucide-react";

const cards = [
  {
    icon: Database,
    title: "Massive Scale Processing",
    text: "Handles millions of vending transactions monthly with sub-second response times",
    stat: { value: 5, suffix: "M+", label: "transactions monthly" },
  },
  {
    icon: Zap,
    title: "Real-Time Intelligence",
    text: "Process meter data and analytics in real-time for instant decision-making",
    stat: { value: 2, prefix: "<", suffix: "s", label: "avg. response time" },
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Reliability",
    text: "Cloud-native architecture with automatic failover and disaster recovery",
    stat: { value: 99.9, suffix: "%", label: "uptime SLA" },
  },
];

const bigStats = [
  { value: 12, suffix: " Billion+", label: "kWh Managed Annually" },
  { value: 50, suffix: " Million+", label: "Transactions Processed" },
];

export default function PerformanceAtScale() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section ref={ref} className="bg-white py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-6">

        {/* HEADER */}
        <div className="mb-20 text-center">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-dim-black mb-4">
            Performance at Scale
          </h2>

          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Built for utilities of any size
          </h3>
        </div>

        {/* CARDS */}
        <div className="grid gap-8 md:grid-cols-3 mb-24">

          {cards.map((card) => (
            <div
              key={card.title}
              className="group flex flex-col p-8 rounded-2xl border border-slate-100 bg-slate-50/50 transition-all duration-300 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/60"
            >

              {/* ICON */}
              <div className="mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                  <card.icon className="h-6 w-6 text-slate-900" />
                </div>
              </div>

              <h4 className="text-xl font-bold text-slate-900 mb-3">
                {card.title}
              </h4>

              <p className="text-slate-600 leading-relaxed mb-6">
                {card.text}
              </p>

              {/* MINI STAT */}
              <div className="mt-auto pt-6 border-t border-slate-200/60">

                <div className="text-2xl font-bold text-[#FFC400]">
                  {inView && (
                    <CountUp
                      end={card.stat.value}
                      duration={2}
                      decimals={card.stat.value % 1 !== 0 ? 1 : 0}
                      prefix={card.stat.prefix}
                      suffix={card.stat.suffix}
                    />
                  )}
                </div>

                <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                  {card.stat.label}
                </p>

              </div>
            </div>
          ))}

        </div>

        {/* BIG STATS */}
        <div className="rounded-3xl bg-slate-900 p-12 text-white">

          <div className="grid gap-12 md:grid-cols-2">

            {bigStats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center text-center">

                <div className="text-4xl md:text-6xl font-extrabold mb-2 text-[#FFC400]">

                  {inView && (
                    <CountUp
                      end={stat.value}
                      duration={4}
                      separator=","
                      suffix={stat.suffix}
                    />
                  )}

                </div>

                <div className="h-1 w-12 bg-white/20 my-4" />

                <p className="text-lg text-slate-400 font-medium tracking-wide">
                  {stat.label}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}