"use client";

import {
  Cloud,
  Code2,
  Shield,
  Workflow,
  Database,
  Cpu,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description:
      "Enterprise software engineered to solve complex business challenges and accelerate digital transformation.",
    services: [
      "Enterprise Web Applications",
      "Mobile Applications",
      "ERP & Business Systems",
      "API Development & Integrations",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps Infrastructure",
    description:
      "Scalable cloud platforms designed for resilience, automation and continuous delivery.",
    services: [
      "Cloud-Native Architecture (AWS/Azure)",
      "Microservices Design",
      "Auto-scaling & Load Balancing",
      "99.9% Uptime SLA",
    ],
  },
  {
    icon: Shield,
    title: "Cybersecurity Consulting",
    description:
      "Protecting mission-critical systems through modern security frameworks and compliance.",
    services: [
      "SOC 2 Type II Certified",
      "End-to-end Encryption",
      "NDPR Compliance",
      "Regular Security Audits",
    ],
  },
  {
    icon: Workflow,
    title: "Digital Integration & Transformation",
    description:
      "Connecting people, systems and processes into one intelligent digital ecosystem.",
    services: [
      "RESTful APIs & Webhooks",
      "Payment Gateway Integration",
      "SMS & USSD Providers",
      "STS Meter Integration",
    ],
  },
  {
    icon: Database,
    title: "Data Engineering & Analytics",
    description:
      "Modern analytics platforms that convert enterprise data into strategic insight.",
    services: [
      "Snowflake & Redshift",
      "Airflow & dbt",
      "Kafka & Spark",
      "Business Intelligence Dashboards",
    ],
  },
  {
    icon: Cpu,
    title: "Modern Technology Stack",
    description:
      "Enterprise-grade technologies built for reliability, scalability and long-term growth.",
    services: [
      "Backend: Node.js, Python, Go",
      "Frontend: React, Next.js",
      "Mobile: React Native",
      "Database: PostgreSQL, Redis, TimescaleDB",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-24 lg:py-32"
    >
      {/* Decorative Background */}

      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-yellow-100/40 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-red-100/30 blur-3xl" />

      </div>

      <div className="container mx-auto px-6 lg:px-8">

        {/* Header */}

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <span className="inline-flex rounded-full bg-yellow-100 px-5 py-2 text-sm font-semibold tracking-wide text-yellow-700">

            OUR EXPERTISE

          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">

            What We{" "}

            <span className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-600 bg-clip-text text-transparent">

              Deliver

            </span>

          </h2>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-yellow-400 to-red-500" />

          <p className="mt-8 text-lg leading-8 text-slate-600">

            We combine software engineering, cloud infrastructure,
            cybersecurity, enterprise integrations and analytics to
            help organizations modernize and scale with confidence.

          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service) => {

            const Icon = service.icon;

            return (

              <div
                key={service.title}
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

                <div
                  className="
                    absolute
                    left-0
                    top-0
                    h-1
                    w-full
                    origin-left
                    scale-x-0
                    bg-gradient-to-r
                    from-yellow-400
                    via-orange-500
                    to-red-500
                    transition-transform
                    duration-500
                    group-hover:scale-x-100
                  "
                />

                {/* Icon */}

                <div className="flex justify-center">

                  <div
                    className="
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
                      ease-out
                      group-hover:rotate-6
                      group-hover:scale-110
                      group-hover:from-yellow-500
                      group-hover:to-red-600
                      group-hover:shadow-xl
                      group-hover:shadow-red-300/40
                    "
                  >

                    <Icon
                      className="
                        h-9
                        w-9
                        text-slate-800
                        transition-all
                        duration-500
                        ease-out
                        group-hover:-rotate-6
                        group-hover:scale-125
                        group-hover:text-white
                      "
                    />

                  </div>

                </div>

                {/* Title */}

                <h3 className="mt-8 text-center text-2xl font-semibold text-slate-900">

                  {service.title}

                </h3>

                <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-yellow-400 to-red-500" />

                {/* Description */}

                <p className="mt-6 text-center leading-7 text-slate-600">

                  {service.description}

                </p>

                {/* Embedded List */}

                <div className="mt-8 rounded-2xl bg-slate-50 p-6">

                  <ul className="space-y-4">

                    {service.services.map((item) => (

                      <li
                        key={item}
                        className="group/item flex items-start gap-3"
                      >

                        <CheckCircle2
                          className="
                            mt-0.5
                            h-5
                            w-5
                            shrink-0
                            text-yellow-500
                            transition-all
                            duration-300
                            group-hover/item:scale-125
                            group-hover/item:text-red-500
                          "
                        />

                        <span className="text-sm leading-6 text-slate-700">

                          {item}

                        </span>

                      </li>

                    ))}

                  </ul>

                </div>

                {/* Bottom Accent */}

                <div className="mt-auto pt-8">

                  <div
                    className="
                      h-1.5
                      w-0
                      rounded-full
                      bg-gradient-to-r
                      from-yellow-400
                      via-orange-500
                      to-red-500
                      transition-all
                      duration-500
                      group-hover:w-full
                    "
                  />

                </div>

              </div>

            );

          })}

        </div>
      </div>
    </section>
  );
}
