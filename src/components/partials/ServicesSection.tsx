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
      "Scalable cloud platforms designed for resilience, automation, and continuous delivery.",
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
      "Connecting people, systems, and processes into one intelligent digital ecosystem.",
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
      "Transforming enterprise data into actionable intelligence through modern analytics.",
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
      "Enterprise-grade technologies built for reliability, performance, and long-term scalability.",
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
        <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-yellow-100 opacity-40 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-red-100 opacity-30 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-8">

        {/* Header */}

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <span className="inline-flex rounded-full bg-yellow-100 px-4 py-1 text-sm font-semibold tracking-wide text-yellow-700">
            OUR EXPERTISE
          </span>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            What We{" "}
            <span className="bg-gradient-to-r from-yellow-500 to-red-600 bg-clip-text text-transparent">
              Deliver
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-yellow-400 to-red-500" />

          <p className="mt-6 text-base leading-8 text-slate-600 lg:text-lg">
            From enterprise software and cloud infrastructure to cybersecurity,
            integrations, and data engineering, Sterling Technologies delivers
            scalable digital solutions that drive measurable business outcomes.
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
                {/* Top Border */}

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
                  <Icon className="h-9 w-9 text-slate-800 transition-all duration-500 group-hover:scale-110 group-hover:text-white" />
                </div>

                {/* Title */}

                <h3 className="text-center text-2xl font-semibold text-slate-900">
                  {service.title}
                </h3>

                {/* Divider */}

                <div className="mx-auto my-5 h-1 w-14 rounded-full bg-gradient-to-r from-yellow-400 to-red-500" />

                {/* Description */}

                <p className="text-center text-sm leading-7 text-slate-600">
                  {service.description}
                </p>

                {/* Embedded Services */}

                <div className="mt-8 rounded-2xl bg-slate-50 p-6">

                  <ul className="space-y-4">

                    {service.services.map((item) => (

                      <li
                        key={item}
                        className="group/item flex items-start gap-3 text-sm text-slate-700"
                      >
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-yellow-500 transition-transform duration-300 group-hover/item:scale-110" />

                        <span className="leading-6">{item}</span>
                      </li>

                    ))}

                  </ul>

                </div>

                {/* Bottom Accent */}

                <div className="mt-8 flex justify-center">
                  <span className="h-2 w-12 rounded-full bg-gradient-to-r from-yellow-400 to-red-500 opacity-0 transition-all duration-500 group-hover:w-24 group-hover:opacity-100" />
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
                END-TO-END DELIVERY
              </span>

              <h3 className="mt-5 text-3xl font-bold text-slate-900">
                Your Strategic Technology Partner
              </h3>

              <div className="mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-yellow-400 to-red-500" />

              <p className="mt-6 text-lg leading-8 text-slate-600">
                We combine software engineering, cloud architecture,
                cybersecurity, enterprise integrations, and data intelligence
                to deliver secure, scalable, and future-ready digital platforms.
              </p>

            </div>

            <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-black to-slate-800 p-8 text-white">

              <h4 className="text-2xl font-bold">
                Why Organizations Choose Sterling
              </h4>

              <ul className="mt-6 space-y-4">

                {[
                  "Enterprise-grade Architecture",
                  "Cloud-native & AI-ready Solutions",
                  "Rapid Deployment Methodology",
                  "24/7 Technical Support",
                  "Scalable for Millions of Users",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    {item}
                  </li>
                ))}

              </ul>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}