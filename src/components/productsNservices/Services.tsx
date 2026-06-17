'use client'
import { Container } from '@/layouts';
import Aos from 'aos';
import React, { useEffect } from 'react'
import { Btn } from '../partials/cta-button';
import Link from 'next/link';

export const serviceList = [
  {
    id: 1,
    icon: "/images/vend.png",
    title: "Vending Services",
    desc: "End-to-end vending operations for prepaid electricity, including STS token generation, vendor network management, and real-time transaction processing.",
  },
  {
    id: 2,
    icon: "/images/erpicon.png",
    title: "Debt Management & Collection",
    desc: "Structured debt recovery using our sub-account engine, supporting multiple debt types and flexible repayment configurations tailored to each customer.",
  },
  {
    id: 3,
    icon: "/images/payment.png",
    title: "Vendor Network Management",
    desc: "Onboarding, monitoring, and managing third-party collection agents, aggregators, and payment channels within a unified network.",
  },
  {
    id: 4,
    icon: "/images/data.png",
    title: "Energy Infrastructure Management",
    desc: "End-to-end management of distribution assets including transformers, feeders, meters, and service connections within the utility network.",
  },
  {
    id: 5,
    icon: "/images/iot.png",
    title: "Metering Setup & Configuration",
    desc: "Professional installation, registration, and configuration of prepaid (STS) and smart (AMI) meters, including tariff and parameter setup.",
  },
  {
    id: 6,
    icon: "/images/ai.webp",
    title: "ERP Deployment Services",
    desc: "Implementation and customization of enterprise resource planning solutions tailored to utility and energy service businesses.",
  },
  {
    id: 7,
    icon: "/images/ai.webp",
    title: "Revenue Assurance Services",
    desc: "Identification and recovery of revenue leakages through data audits, billing reconciliation, and commercial loss analysis.",
  },
  {
    id: 8,
    icon: "/images/ai.webp",
    title: "Custom Application Development",
    desc: "Bespoke software development for utility operators, estates, institutions, and enterprises requiring specialized digital solutions.",
  },
  {
    id: 9,
    icon: "/images/ai.webp",
    title: "Cloud & Hosting Services",
    desc: "Secure, scalable infrastructure hosting for utility platforms, including multi-tenant cloud deployments and managed server environments.",
  },
  {
    id: 10,
    icon: "/images/ai.webp",
    title: "AMI Implementation & Integration",
    desc: "Full-cycle deployment of Advanced Metering Infrastructure — from hardware procurement to communication setup, platform integration, and shared AMI service models.",
  },
  {
    id: 11,
    icon: "/images/ai.webp",
    title: "GIS/Geomapping Integration",
    desc: "Integration of Geographic Information Systems (GIS) for network mapping, asset enumeration, transformer onboarding, and spatial infrastructure analysis.",
  },
];
interface ServiceList {
  id: number,
  icon: string,
  title: string,
  desc: string
}
interface ServicesProps {
  data: ServiceList[]
}
export default function Services({ data }: ServicesProps) {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <div className='bg-blue-950 text-white py-20'>
      <Container>

        <div className='text-center mb-10'> 
          <h1 className='text-3xl font-bold'>Our Services</h1>
          <h2 className='text-2xl font-semibold'>End-to-end utility management support</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map(service => (
            <div key={service.id} data-aos="zoom-out"
              className='bg-white text-black p-4 rounded space-y-5 text-center'
            >
              <div className='flex'>
                <img src={service.icon} alt={service.title}
                className="w-12 h-12 object-contain mx-auto"
              />
              </div>
              <h3 className='font-bold text-lg'>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
        <Link href="/services" className='text-center mt-10 flex justify-center'>
          <Btn
          className="mt-10 mx-auto block text-blue-950 font-bold bg-white hover:bg-gray-100 transition-colors py-4 px-10 rounded-lg" 
          title='See More'/>
        </Link>
      </Container>
    </div>
  );
}
