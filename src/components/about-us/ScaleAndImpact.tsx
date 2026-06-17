'use client'
import { Container } from '@/layouts'
import React, { useEffect } from 'react'
import MapSection from './Map'
import CountUp from 'react-countup';
import AOS from 'aos';

const scaleData = [
    {
        id: 1,
        title: "Utilities & Distribution Partners",
        text: "Our platform is trusted by over 50 utilities and distributors across Africa, showcasing our extensive reach and impact in the energy sector.",
        stat: 50,
        other: "partners",
        icon: "/images/university.svg",
    },
    {
        id: 2,
        title: "kWh Managed Annually",
        text: "We manage billions of kWh annually, demonstrating our ability to handle large-scale energy management and distribution with efficiency and reliability.",
        stat: 2,
        other: "Billion",
        icon: "/images/lightbulb.svg",
    },
    {
        id: 3,
        title: "Active Platform Users",
        text: "Our platform has millions of active users, showcasing our strong adoption and engagement in the energy sector.",
        stat: 5,
        other: "Million",
        icon: "/images/users.svg",
    },
    {
        id: 4,
        title: "Revenue Processed",
        text: "We have processed billions of naira in revenue, demonstrating our significant impact on the energy market.",
        stat: 50,
        other: "Billion",
        icon: "/images/banknote.svg"
    }
]
export default function ScaleAndImpact() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
        AOS.refresh();
    }, []);
    return (
        <div className='bg-blue-950 py-16'>
            <Container>
                <div className='text-center mb-12'>
                    <h2 className='text-3xl font-bold text-white'>Our Impact at a Glance</h2>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 h-full'>
                    {scaleData.map((item) => (
                        <div data-aos="zoom-in" key={item.id} className='text-center bg-white border p-6 rounded-lg shadow-lg hover:shadow-lg transition-shadow h-full'>
                            <div className='flex items-center justify-center w-12 h-12 mx-auto mb-4'>
                                <img src={item.icon} alt={item.title} className='w-full h-full' />
                            </div>
                            <span className="my-2 text-3xl font-bold text-blue-950">
                                <CountUp
                                    end={item.stat}
                                    duration={12}
                                    enableScrollSpy
                                    scrollSpyOnce
                                />
                                {item.other && ` ${item.other}`}
                                +
                            </span>
                            <h3 className='my-4 font-bold'>{item.title}</h3>
                            <p>{item.text}</p>

                        </div>
                    ))}
                </div>
                {/* <div className='mt-16 h-[350px]'>
                    <MapSection />
                </div> */}
            </Container>
        </div>
    )
}
