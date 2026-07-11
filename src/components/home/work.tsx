"use client";
import { PageHeader } from "@/components/partials";
import { Container } from "@/layouts";
import Aos from "aos";
import { Btn } from "../partials/cta-button";
import { useEffect, useState } from "react";
import Integration from "./integration";

export default function Products() {
  const [activeTab, setActiveTab] = useState("smartpower");
  const tabs = [
    { id: "smartpower", label: "Smart Power" },
    { id: "quickcash", label: "QuickCash" },
    { id: "quickpay", label: "QuickPay" },
    { id: "postpaid", label: "Postpaid Billing" },
    { id: "analytics", label: "SPI/Analytics" },

    { id: "smartbilling", label: "Smart Billing" },
    { id: "smartvending", label: "Smart Vending" },
    { id: "revenueassurance", label: "Revenue Assurance" },
    { id: "energytheftmgt", label: "Energy Theft Management" },

  ];
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <div className="my-20">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="items-center text-2xl font-bold">Our Products</h2>
            <h2 className="items-center text-2xl font-bold">
              {" "}
              Enterprise Grade Utility Management ││ Platforms Built For Scale
            </h2>
          </div>
          <div
            className="mb-8 flex w-full gap-4 overflow-x-auto whitespace-nowrap 
                        pb-2 sm:flex-wrap sm:overflow-visible"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                                    w-[200px] flex-shrink-0 rounded-lg px-6 py-3
                                    font-semibold transition sm:w-auto
                                    ${
                                      activeTab === tab.id
                                        ? "bg-blue-950 text-white shadow-lg"
                                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                    }
                            `}
                data-aos="zoom-out"
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="rounded-lg bg-white p-8 shadow-md">
            {activeTab === "smartpower" && (
              <div className="space-y-6">
                <div className="border-l-4 border-blue-950 pl-6">
                  <h3 className="mb-2 text-3xl font-bold text-blue-900">
                    Smart Power
                  </h3>
                  <h4 className="mb-4 text-xl font-semibold italic text-primary">
                    Utility Billing & Customer Information System
                  </h4>
                </div>
                
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  <div className="w-full" data-aos="zoom-out">
                    <img
                      src="/images/smartpower.jpg"
                      alt="smartpower"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div
                    className="text-lg leading-relaxed text-gray-700"
                    data-aos="zoom-in"
                  >
                    <p className="text-black">
                      Our flagship utility management platform providing
                      comprehensive billing infrastructure and Customer
                      Information System (CIS). Supports multiple billing
                      methodologies including feeder-wise, district-wise,
                      transformer-level, and availability-based billing.
                    </p>
                    <ul className="list-inside list-disc">
                      <h1 className="font-semibold text-black">
                        Key Features:
                      </h1>
                      <li>Comprehensive billing infrastructure</li>
                      <li>Customer Information System (CIS)</li>
                      <li>
                        Multiple billing methodologies (feeder-wise,
                        district-wise, transformer-level)
                      </li>
                      <li>Availability-based billing support</li>
                      <li>Manages millions of customers with accuracy</li>
                      <li>Deep integration across utility value chain</li>
                      <li>Scalable for large distribution ivtworks</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <Btn title="Learn More" />
                </div>
              </div>
            )}

            {activeTab === "quickcash" && (
              <div className="space-y-6">
                <div className="border-l-4 border-blue-950 pl-6">
                  <h3 className="mb-2 text-3xl font-bold text-blue-900">
                    QuickCash
                  </h3>
                  <h4 className="mb-4 text-xl font-semibold italic text-primary">
                    Collection & Third-Party Payment Network Platform
                  </h4>
                </div>
                
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  <div className="w-full" data-aos="zoom-out">
                    <img
                      src="/quick-cash.png"
                      alt="smartpower"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div
                    className="text-lg leading-relaxed text-gray-700"
                    data-aos="zoom-in"
                  >
                    <p className="text-black">
                      Robust collection and payment network platform designed
                      for utility companies. Includes powerful sub-account
                      module for comprehensive debt management, third-party
                      vendor integrations, and real-time analytics through
                      built-in SPI/reporting engine.
                    </p>
                    <ul className="list-inside list-disc">
                      <h1 className="font-semibold text-black">
                        Key Features:
                      </h1>
                      <li>Financial backbone for vending operations</li>
                      <li>Collection and revenue assurance</li>
                      <li>Sub-account module for debt management</li>
                      <li>Third-party vendor integrations</li>
                      <li>Real-time analytics and reporting</li>
                      <li>Built-in SPI/reporting engine</li>
                      <li>Multi-channel payment processing</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <Btn title="Learn More" />
                </div>
              </div>
            )}

            {activeTab === "quickpay" && (
              <div className="space-y-6">
                <div className="border-l-4 border-blue-950 pl-6">
                  <h3 className="mb-2 text-3xl font-bold text-blue-900">
                    QuickPay
                  </h3>
                  <h4 className="mb-4 text-xl font-semibold italic text-primary">
                    STS Token-Based & AMI Vending Platform
                  </h4>
                </div>
                
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  <div className="w-full" data-aos="zoom-out">
                    <img
                      src="/quick-pay.png"
                      alt="smartpower"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div
                    className="text-lg leading-relaxed text-gray-700"
                    data-aos="zoom-in"
                  >
                    <p className="text-black">
                      Multi-mode vending platform supporting both Standard
                      Transfer Specification (STS) token-based prepaid meters
                      and Advanced Metering Infrastructure (AMI) smart meters.
                      Enables remote connect/disconnect, wallet-based energy
                      control, and automated credit threshold management.
                    </p>
                    <ul className="list-inside list-disc">
                      <h1 className="font-semibold text-black">
                        Key Features:
                      </h1>
                      <li>STS-compliant token generation</li>
                      <li>AMI smart meter support</li>
                      <li>Remote connect/disconnect capability</li>
                      <li>Wallet-based energy control</li>
                      <li>Automated credit threshold management</li>
                      <li>No physical token distribution needed</li>
                      <li>Improved customer experience</li>
                      <li>Higher collection rates</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <Btn title="Learn More" />
                </div>
              </div>
            )}

            {activeTab === "postpaid" && (
              <div className="space-y-6">
                <div className="border-l-4 border-blue-950 pl-6">
                  <h3 className="mb-2 text-3xl font-bold text-blue-900">
                    Postpaid Billing System
                  </h3>
                  <h4 className="mb-4 text-xl font-semibold italic text-primary">
                    Metered & Non-Metered Postpaid Billing
                  </h4>
                </div>
                
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  <div className="w-full" data-aos="zoom-out">
                    <img
                      src="/images/postpaid4.jpg"
                      alt="smartpower"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div
                    className="text-lg leading-relaxed text-gray-700"
                    data-aos="zoom-in"
                  >
                    <p className="text-black">
                      Comprehensive postpaid billing solution handling both
                      metered customers (traditional and digital meter reading)
                      and unmetered customers through availability-based and
                      estimated billing models.
                    </p>
                    <ul className="list-inside list-disc">
                      <h1 className="font-semibold text-black">
                        Key Features:
                      </h1>
                      <li> Metered customer billing (traditional & digital)</li>
                      <li> Non-metered customer billing</li>
                      <li>Availability-based billing models</li>
                      <li>Estimated billing support</li>
                      <li>Pre-billing runs</li>
                      <li>Alignment workflows</li>
                      <li>Multi-level bill generation</li>
                      <li>Automated bill sheet production</li>
                      <li>Configurable to regulatory requirements</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <Btn title="Learn More" />
                </div>
              </div>
            )}

            {activeTab === "analytics" && (
              <div className="space-y-6">
                <div className="border-l-4 border-blue-950 pl-6">
                  <h3 className="mb-2 text-3xl font-bold text-blue-900">
                    SPI / Analytics
                  </h3>
                  <h4 className="mb-4 text-xl font-semibold italic text-primary">
                    Vendor Transaction Analytics & Reporting
                  </h4>
                </div>
                
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  <div className="w-full" data-aos="zoom-out">
                    <img
                      src="/images/spi.jpg"
                      alt="smartpower"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div
                    className="text-lg leading-relaxed text-gray-700"
                    data-aos="zoom-in"
                  >
                    <p className="text-black">
                      Real-time and historical insights into vendor performance,
                      collection trends, customer segments, and revenue
                      patterns. Dashboards provide at-a-glance views of
                      prepaid/postpaid splits, MD vs. non-MD customers, and
                      tariff distributions.
                    </p>
                    <ul className="list-inside list-disc">
                      <h1 className="font-semibold text-black">
                        Key Features:
                      </h1>
                      <li>Real-time analytics dashboards</li>
                      <li>Historical data analysis</li>
                      <li>Vendor performance tracking</li>
                      <li>Collection trend analysis</li>
                      <li>Customer segmentation</li>
                      <li>Revenue pattern insights</li>
                      <li>Prepaid/postpaid split views</li>
                      <li>MD vs. non-MD customer analysis</li>
                      <li>Feeder-level analysis</li>
                      <li>Operational intelligence</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <Btn title="Learn More" />
                </div>
              </div>
            )}

            {activeTab === "smartbilling" && (
              <div className="space-y-6">
                <div className="border-l-4 border-blue-950 pl-6">
                  <h3 className="mb-2 text-3xl font-bold text-blue-900">
                    Smart Power Billing System
                  </h3>
                  <h4 className="mb-4 text-xl font-semibold italic text-primary">
                    Advanced billing module within the Smart Power ecosystem.
                  </h4>
                </div>
                
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  <div className="w-full" data-aos="zoom-out">
                    <img
                      src="/images/spb.jpg"
                      alt="smartpower"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div
                    className="text-lg leading-relaxed text-gray-700"
                    data-aos="zoom-in"
                  >
                    <p className="text-black">
                        Advanced billing module within the Smart Power ecosystem.
                        Handles complex utility billing scenarios including prepaid
                        and postpaid models, multi-tariff structures, automated
                        invoice generation, and real-time billing analytics for
                        utility providers.
                    </p>
                    <ul className="list-inside list-disc">
                      <h1 className="font-semibold text-black">
                        Key Features:
                      </h1>
                      <li>Real-time analytics dashboards</li>
                      <li>Historical data analysis</li>
                      <li>Vendor performance tracking</li>
                      <li>Collection trend analysis</li>
                      <li>Customer segmentation</li>
                      <li>Revenue pattern insights</li>
                      <li>Prepaid/postpaid split views</li>
                      <li>MD vs. non-MD customer analysis</li>
                      <li>Feeder-level analysis</li>
                      <li>Operational intelligence</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <Btn title="Learn More" />
                </div>
              </div>
            )}

            {activeTab === "smartvending" && (
              <div className="space-y-6">
                <div className="border-l-4 border-blue-950 pl-6">
                  <h3 className="mb-2 text-3xl font-bold text-blue-900">
                    Smart Power Vending System
                  </h3>
                  <h4 className="mb-4 text-xl font-semibold italic text-primary">
                    Comprehensive prepaid electricity vending solution
                  </h4>
                </div>
                
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  <div className="w-full" data-aos="zoom-out">
                    <img
                      src="/images/spv.jpg"
                      alt="smartvending"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div
                    className="text-lg leading-relaxed text-gray-700"
                    data-aos="zoom-in"
                  >
                    <p className="text-black">
                        Comprehensive prepaid electricity vending solution.
                        Handles complex vending scenarios including prepaid
                        and postpaid models. 
                        STS-compliant token generation, multi-channel distribution
                        (USSD, mobile app, web, POS), real-time transaction
                        processing, and seamless integration with payment gateways for
                        utility vendors and distributors.
                    </p>
                    <ul className="list-inside list-disc">
                      <h1 className="font-semibold text-black">
                        Key Features:
                      </h1>
                      <li>Real-time analytics dashboards</li>
                      <li>Historical data analysis</li>
                      <li>Vendor performance tracking</li>
                      <li>Collection trend analysis</li>
                      <li>Customer segmentation</li>
                      <li>Revenue pattern insights</li>
                      <li>Prepaid/postpaid split views</li>
                      <li>MD vs. non-MD customer analysis</li>
                      <li>Feeder-level analysis</li>
                      <li>Operational intelligence</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <Btn title="Learn More" />
                </div>
              </div>
            )}

            {activeTab === "revenueassurance" && (
              <div className="space-y-6">
                <div className="border-l-4 border-blue-950 pl-6">
                  <h3 className="mb-2 text-3xl font-bold text-blue-900">
                    Revenue Assurance Analytics
                  </h3>
                  <h4 className="mb-4 text-xl font-semibold italic text-primary">
                    Real-time collections, predictive insights, executive
                    clarity
                  </h4>
                </div>
                
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  <div className="w-full" data-aos="zoom-out">
                    <img
                      src="/images/revenueassurance.jpg"
                      alt="revenueassurance"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div
                    className="text-lg leading-relaxed text-gray-700"
                    data-aos="zoom-in"
                  >
                    <p className="text-black">
                        Comprehensive prepaid electricity vending solution. Enables
                        STS-compliant token generation, multi-channel distribution
                        (USSD, mobile app, web, POS), real-time transaction
                        processing, and seamless integration with payment gateways for
                        utility vendors and distributors.
                    </p>
                    <ul className="list-inside list-disc">
                      <h1 className="font-semibold text-black">
                        Key Features:
                      </h1>
                      <li>Real-time analytics dashboards</li>
                      <li>Historical data analysis</li>
                      <li>Vendor performance tracking</li>
                      <li>Collection trend analysis</li>
                      <li>Customer segmentation</li>
                      <li>Revenue pattern insights</li>
                      <li>Prepaid/postpaid split views</li>
                      <li>MD vs. non-MD customer analysis</li>
                      <li>Feeder-level analysis</li>
                      <li>Operational intelligence</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <Btn title="Learn More" />
                </div>
              </div>
            )}

            {activeTab === "energytheftmgt" && (
              <div className="space-y-6">
                <div className="border-l-4 border-blue-950 pl-6">
                  <h3 className="mb-2 text-3xl font-bold text-blue-900">
                    Energy Theft Management
                  </h3>
                  <h4 className="mb-4 text-xl font-semibold italic text-primary">
                    AI-powered energy theft detection leveraging smart meter
                    data and advanced analytics
                  </h4>
                </div>
                
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  <div className="w-full" data-aos="zoom-out">
                    <img
                      src="/images/energytheftmgt.jpg"
                      alt="energytheftmgt"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div
                    className="text-lg leading-relaxed text-gray-700"
                    data-aos="zoom-in"
                  >
                    <p className="text-black">
                        AI-powered energy theft detection leveraging smart meter data
                        and advanced analytics. Real-time tamper alerts, consumption
                        anomaly detection, transformer-level loss analysis, and
                        automated field inspection workflows to reduce non-technical
                        losses and protect revenue.
                    </p>
                    <ul className="list-inside list-disc">
                      <h1 className="font-semibold text-black">
                        Key Features:
                      </h1>
                      <li>Real-time analytics dashboards</li>
                      <li>Historical data analysis</li>
                      <li>Vendor performance tracking</li>
                      <li>Collection trend analysis</li>
                      <li>Customer segmentation</li>
                      <li>Revenue pattern insights</li>
                      <li>Prepaid/postpaid split views</li>
                      <li>MD vs. non-MD customer analysis</li>
                      <li>Feeder-level analysis</li>
                      <li>Operational intelligence</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <Btn title="Learn More" />
                </div>
              </div>
            )}

          </div>
        </Container>
      </div>
      <Integration />
    </div>
  );
}
