"use client";

import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { Building2, Zap, Users, Banknote } from "lucide-react";

const stats = [
  {
    value: 50,
    suffix: "+",
    label: "Utilities & Distribution Partners",
    icon: Building2,
  },
  {
    value: 2,
    suffix: "B+",
    label: "kWh Managed Annually",
    icon: Zap,
  },
  {
    value: 5,
    suffix: "M+",
    label: "Active Platform Users",
    icon: Users,
  },
  {
    value: 50,
    prefix: "₦",
    suffix: "B+",
    label: "Revenue Processed",
    icon: Banknote,
  },
];

const StatsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      ref={ref}
      className="w-full bg-slate-50 py-24 lg:py-32"
    >
      <div className="container mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
            Our <span className="text-gradient">Impact at a Glance</span>
          </h2>
          <p className="mt-4 text-muted-foreground font-body leading-relaxed">
            Serving utilities across Nigeria & West Africa
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group rounded-2xl bg-white p-8 text-center shadow-sm transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-2 hover:scale-105"
            >
              
              {/* Icon */}
              <div className="mb-6 inline-flex rounded-xl bg-primary/10 p-4 transition-transform duration-300 group-hover:scale-110">
                <stat.icon className="h-7 w-7 text-dim-black" />
              </div>

              {/* Animated Number */}
              <div className="font-display text-4xl lg:text-5xl font-bold">
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
              </div>

              {/* Label */}
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground font-body">
                {stat.label}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StatsSection;