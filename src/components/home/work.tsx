import React from "react";
import { Container } from "@/layouts";
import { AnimateX } from "../partials";

export default function Work() {
  return (
    <section id="work" className=" py-20">
      <Container>
        <div className="space-y-6">
          <h1 className="text-heading-three font-bold md:text-heading-two">
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
                <h6 className="text-lg md:text-xl font-semibold text-red-600">
                  Utility Billing & Customer Information System
                </h6>
                <p className="text-sm leading-[140%] text-slate-700 md:w-[90%] md:text-base">
                  Smart Power is our flagship utility management platform,
                  providing a comprehensive billing infrastructure and
                  Customer Information System (CIS). It supports multiple
                  billing methodologies — including feeder-wise,
                  district-wise, transformer-level, and availability-based
                  billing — enabling discos to manage millions of customers
                  with accuracy and efficiency. Built with deep integration
                  across the utility value chain.
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
                <h3 className="text-2xl font-semibold md:text-4xl">
                  QuikPay
                </h3>
                
                <h6 className="text-lg md:text-xl font-semibold text-red-600">
                  STS Token-Based & AMI Vending Platform
                </h6>
                <p className="text-sm leading-[140%] text-slate-700 md:w-[90%] md:text-base">
                  QuickPay is our multi-mode vending platform supporting
                  both Standard Transfer Specification (STS) token-based
                  prepaid meters and Advanced Metering Infrastructure
                  (AMI) smart meters. AMI-enabled vending allows remote
                  connect/disconnect, wallet-based energy control, and
                  automated credit threshold management — eliminating
                  the need for physical token distribution while improving
                  customer experience and collection rates.
                </p>
                <div className="flex gap-x-4">
                  <span className="rounded-3xl border border-dim-black px-2 py-2 text-sm text-dim-black md:px-3 md:text-base">
                    Report Generation
                  </span>
                  <span className="rounded-3xl border border-dim-black px-2 py-2 text-sm text-dim-black md:px-3 md:text-base">
                    Product Vending
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
                <h3 className="text-2xl font-semibold md:text-4xl">
                  QuikCash
                </h3>
                
                <h6 className="text-lg md:text-xl font-semibold text-red-600">
                  Collection & Third-Party Payment Network Platform
                </h6>
                <p className="text-sm leading-[140%] text-slate-700 md:w-[90%] md:text-base">
                  QuickCash is a robust collection and payment network
                  platform designed for utility companies and service
                  providers. It includes a powerful sub-account module for
                  comprehensive debt management, supports third-party
                  vendor integrations, and provides real-time analytics
                  through its built-in SPI/reporting engine. QuickCash
                  serves as the financial backbone for vending, collection,
                  and revenue assurance operations.
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
                <h3 className="text-2xl font-semibold md:text-4xl">
                  Postpaid Billing System
                </h3>
                
                <h6 className="text-lg md:text-xl font-semibold text-red-600">
                  Metered & Non-Metered Postpaid Billing
                </h6>
                <p className="text-sm leading-[140%] text-slate-700 md:w-[90%] md:text-base">
                  Our postpaid billing solution handles both
                  metered customers (traditional and digital meter reading) 
                  and unmetered customers through availability-based 
                  and estimated billing models. It supports pre-billing runs, 
                  alignment workflows, multi-level bill generation, 
                  and automated bill sheet production — fully configurable to regulatory 
                  and tariff requirements across any distribution network.
                </p>
                <div className="flex gap-x-4">
                  <span className="rounded-3xl border border-dim-black px-2 py-2 text-sm text-dim-black md:px-3 md:text-base">
                    Report Generation
                  </span>
                  <span className="rounded-3xl border border-dim-black px-2 py-2 text-sm text-dim-black md:px-3 md:text-base">
                    Product Vending
                  </span>
                </div>
              </div>

              <div>
                <img src="/postpaid-electricity-billing.jpg" alt="postpaid-electricity-billing Thumbnail" />
              </div>
            </div>
          </AnimateX>

          <AnimateX staggerAmount={0.55} direction={40}>
            <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-2">
              <div>
                <img src="/SPI.jpg" alt="SPI Thumbnail" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold md:text-4xl">
                  SPI / Analytics
                </h3>
                
                <h6 className="text-lg md:text-xl font-semibold text-red-600">
                  Vendor Transaction Analytics & Reporting
                </h6>
                <p className="text-sm leading-[140%] text-slate-700 md:w-[90%] md:text-base">
                  Our analytics module delivers real-time and historical
                  insights into vendor performance, collection trends,
                  customer segments, and revenue patterns. Dashboards
                  provide at-a-glance views of prepaid/postpaid splits, MD
                  vs. non-MD customers, tariff distributions, and
                  feeder-level analysis — giving tenants and administrators
                  the intelligence needed to drive operational decisions.
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
