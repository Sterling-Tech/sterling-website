import { Container } from '@/layouts'
import React from 'react'
import MapSection from './Map'

export default function TechStack() {
    const techdata = [
        {
            id: 1,
            title: "Infrastructure:",
            service1: "Cloud-Native Architecture (AWS/Azure)",
            service2: "Microservices Design",
            service3: "Auto-scaling & Load Balancing",
            service4: "99.9% Uptime SLA",
        },
        {
            id: 2,
            title: "Security:",
            service1: "SOC 2 Type II Certified",
            service2: "End-to-end Encryption",
            service3: "NDPR Compliant (Nigeria Data Protection)",
            service4: "Regular Security Audits",
        },
        {
            id: 3,
            title: " Integrations:",
            service1: "RESTful API & Webhooks",
            service2: "End-to-end Encryption",
            service3: "SMS/USSD Providers",
            service4: "Meter Manufacturers (STS-compliant)",
        },
        {
            id: 4,
            title: " Tech Stack:",
            service1: (
                <>
                    <span className='font-bold'>Backend:</span> Node.js, Python, Go
                </>
            ),
            service2: (
                <>
                    <span className='font-bold'>Frontend:</span> React, Next.js
                </>
            ),
            service3: (
                <>
                    <span className='font-bold'>Mobile:</span> React Native (iOS & Android)
                </>
            ),
            service4: (
                <>
                    <span className='font-bold'>Database:</span> PostgreSQL, Redis, TimescaleDB
                </>
            ),
        },
    ]
    return (
        <div className='pb-20 pt-14 bg-gray-50'>
            <Container>
                <h1 className='mb-8 font-bold text-center text-2xl text-blue-950'>Enterprise-Grade Technology</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 space-x-5'>
                    {
                        techdata.map(tech => (
                            <div key={tech.id} className='bg-white p-4 rounded'>
                                <h1 className='font-bold text-lg mb-4 text-blue-950'>{tech.title}</h1>
                                <ul className='list-disc list-inside space-y-4'>
                                    <li>{tech.service1}</li>
                                    <li>{tech.service2}</li>
                                    <li>{tech.service3}</li>
                                    <li>{tech.service4}</li>
                                </ul>
                            </div>
                        ))
                    }
                </div>

                <div className='mt-16 h-[350px]'>
                    <MapSection />
                </div>
            </Container>

        </div>
    )
}
