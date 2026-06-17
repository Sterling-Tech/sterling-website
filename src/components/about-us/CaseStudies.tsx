'use client'
import { Container } from '@/layouts';
import React from 'react'
import Slider from "react-slick";
import { Btn } from '../partials/cta-button';
import Link from 'next/link';
const caseStudies = [
    {
        id: 1,
        title: "Electrical Distribution Company",
        client: "Major Lagos Distribution Company (or anonymized)",
        Challenge: "High revenue loss (35%), manual billing errors, poor collection rates, and lack of real-time data for decision-making.",
        Solution: "Deployed Smartpower ERP + Quickcash Vending across 500k meters, integrated with local payment channels, and provided real-time analytics for revenue assurance.",
        Results: [
            "45% reduction in revenue loss",
            "98% collection rate achieved",
            "60% faster billing cycles"
        ],
        image: "/bedc.png",
        quote: "Sterling transformed our operations. We recovered revenue we thought was lost forever."
    },
    {
        id: 2,
        title: "Property Management",
        client: "West Africa's Largest Mixed-Use Development",
        Challenge: "Manual utility billing for 5,000+ units, tenant disputes, cash handling.",
        Solution: "Quickcash bulk vending with tenant self-service portal, integrated with property management system for automated billing and real-time consumption data.",
        Results: [
            "₦5B collected in first year",
            "90% reduction in billing disputes",
            "Zero cash handling"
        ],
        image: "/baxi.png",
        quote: "Our tenants love the convenience. We love the automation. Sterling was a game-changer for our property management."
    },
    {
        id: 3,
        title: "Rural Electrification",
        client: "Off-Grid Solar Provider",
        Challenge: "Remote meter management, payment collection in rural areas, and lack of data for system optimization.",
        Solution: "IoT-enabled meters with USSD vending integration, offline-first design for areas with poor connectivity, and real-time analytics for system performance monitoring.",
        Results: [
            "10,000+ active prepaid meters deployed",
            "95% payment compliance",
            "Real-time remote monitoring"
        ],
        image: "/aple.png",
        quote: ""
    }
];

export default function CaseStudies() {
    var settings = {
    dots: true,
    pauseOnHover: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear"
  };
    return (
        <div className='pb-20'>
            <Container>
                <h1 className='font-bold text-3xl text-center'>Success Stories</h1>
                <h2 className='text-center text-lg text-gray-700 font-semibold my-2'>See how utilities transformed with us</h2>
                {/* <div className='grid gap-8 mt-10'> */}
                <Slider {...settings}>
                    {caseStudies.map((study) => (
                        <div key={study.id} className='bg-gray-50 rounded-md p-6 space-y-3 border'>
                            <div className='flex items-center'>
                                <img src={study.image} alt={study.title} className='mx-auto'/>
                            </div>
                            <h3 className='text-2xl font-bold my-3'>{study.title}</h3>
                            <p><strong>Client:</strong> {study.client}</p>
                            <p><strong>Challenge:</strong> {study.Challenge}</p>
                            <p><strong>Solution:</strong> {study.Solution}</p>
                            <ul className='mt-2'>
                                <strong>Result:</strong>
                                {study.Results.map((result, index) => (
                                    <li className='list-disc list-inside ml-5' key={index}>{result}</li>
                                ))}
                            </ul>
                            <div className='pb-5'>
                                {study.quote && <blockquote className='italic text-gray-600'>"{study.quote}"</blockquote>}
                            </div>
                            <Link href={"#"} className=''>
                                <Btn title='Read Full Case Study' />
                            </Link>
                        </div>
                    ))}
                </Slider>
            </Container>
        </div>
    )
}
