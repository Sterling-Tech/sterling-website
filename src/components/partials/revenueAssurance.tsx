'use client'
import { Container } from '@/layouts';
import React, { useEffect, useState } from 'react'
import CTAButton from '../partials/cta-button';
import { Btn } from '../partials/cta-button';
import Aos from 'aos';


const solutions = {
  solution: {
    title: "Smartpower ERP",
    subtitle: "Enterprise Resource Planning Built for Utilities.",
    description:
      "Comprehensive utility management platform that integrates meter data, billing, asset management, and AI-powered analytics into one unified system.",
    image: "/images/erp2.jpg",
    imageAlt: "Smartpower ERP",
    animation: "fade-right",
    button: "Explore Smartpower ERP",
    features: [
      "Real-time meter data management",
      "Automated billing & invoicing",
      "Work & asset management",
      "AI-powered demand forecasting",
      "Loss detection & prevention",
      "Regulatory compliance reporting",
    ],
  },

  impact: {
    title: "Quickcash Vending",
    subtitle: "Seamless Prepaid Utility Vending.",
    description:
      "STS-compliant prepaid vending system with multi-channel payment collection, instant token generation, and real-time reconciliation.",
    image: "/images/quickcash4.jpg",
    imageAlt: "Quickcash Vending",
    animation: "fade-left",
    button: "Explore Quickcash Vending",
    features: [
      "STS-compliant token generation",
      "Multi-channel payments (USSD, Web, Mobile App & POS)",
      "Automated reconciliation",
      "Customer self-service portal",
      "Bulk vending for properties",
      "Integration with payment gateways",
    ],
  },
};

export default function IntegratedSolution() {
  const [activeTab, setActiveTab] =
    useState<keyof typeof solutions>("solution");

  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const current = solutions[activeTab];

  return (
    <section className="bg-slate-50 py-24 lg:py-32">
      <Container>
        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Two Platforms.{" "}
            <span className="text-gradient">One Ecosystem.</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600 lg:text-lg">
            A complete digital ecosystem for utilities, combining enterprise
            operations management with secure and seamless prepaid vending.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => setActiveTab("solution")}
            className={`rounded-full px-8 py-3 text-sm font-semibold transition-all duration-300 md:min-w-[220px]
              ${
                activeTab === "solution"
                  ? "bg-primary text-white shadow-lg"
                  : "border border-slate-300 bg-white text-slate-700 hover:border-primary hover:text-primary"
              }`}
          >
            Smartpower ERP
          </button>

          <button
            onClick={() => setActiveTab("impact")}
            className={`rounded-full px-8 py-3 text-sm font-semibold transition-all duration-300 md:min-w-[220px]
              ${
                activeTab === "impact"
                  ? "bg-primary text-white shadow-lg"
                  : "border border-slate-300 bg-white text-slate-700 hover:border-primary hover:text-primary"
              }`}
          >
            Quickcash Vending
          </button>
        </div>

        {/* Content Card */}
        <div
          key={activeTab}
          className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:shadow-2xl lg:p-12"
        >
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Image */}
            <div data-aos={current.animation}>
              <img
                src={current.image}
                alt={current.imageAlt}
                className="h-full w-full rounded-2xl object-cover shadow-xl transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>

            {/* Content */}
            <div
              data-aos="fade-up"
              className="flex flex-col justify-center"
            >
              <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
                {current.title}
              </span>

              <h3 className="text-3xl font-bold text-slate-900">
                {current.subtitle}
              </h3>

              <p className="mt-6 text-base leading-8 text-slate-600">
                {current.description}
              </p>

              {/* Features */}
              <ul className="mt-8 space-y-4">
                {current.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-4"
                  >
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-primary"></span>

                    <span className="text-slate-700">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-10">
                <Btn
                  title={current.button}
                  className="rounded-full bg-primary px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-slate-900"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}