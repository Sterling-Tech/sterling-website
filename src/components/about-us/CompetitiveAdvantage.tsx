import { Container } from '@/layouts'
import React from 'react'

export default function CompetitiveAdvantage() {
    const advantages = [
        {
            id: 1,
            icon: "/images/rocket.svg",
            title: "Deploy in Weeks, Not Months",
            text: "Cloud-native architecture means you’re live in 4-6 weeks, not 6 months"
        },
        {
            id: 2,
            icon: "/images/badge-dollar-sign.svg",
            title: "40% Lower TCO",
            text: "Integrated platform eliminates costly system integrations and maintenance"
        },
        {
            id: 3,
            icon: "/images/hammer.svg",
            title: "Designed for Local Challenges",
            text: "Offline-first design, multi-language support, local payment methods, and compliance with Nigerian regulations",
        }
    ];
    return (
        <div className='my-20 bg-blue-950 py-16 text-white'>
            <Container>
                <h1 className='font-bold md:text-3xl text-center mb-4'>Why Leading Utilities Choose Sterling</h1>
                <div className='overflow-x-auto rounded-md shadow-lg'>
                    <table className='collapsed border-collapse border w-full text-left divide-y divide-gray-300 min-w-full'>
                        <thead className='bg-gray-200'>
                            <tr className='text-gray-900 font-semibold md:text-lg h-12'>
                                <th className='pl-2 md:pl-8'>Feature</th>
                                <th> Sterling</th>
                                <th> Traditional Enterprise</th>
                            </tr>
                        </thead>
                        <tbody className='divide-y border-gray-300'>
                            <tr className='h-12'>
                                <td className='pl-2 md:pl-8'>Integrated ERP + Vending</td>
                                <td>✓ Included</td>
                                <td>✗ Separate systems</td>
                            </tr>
                            <tr className='bg-gray-50 h-12 text-gray-900 font-semibold'>
                                <td className='pl-2 md:pl-8'>Local Nigerian Support</td>
                                <td>✓ 24/7</td>
                                <td>△ Limited hours</td>
                            </tr>
                            <tr className='h-12'>
                                <td className='pl-2 md:pl-8'>AI-Powered Analytics</td>
                                <td>✓ Built-in</td>
                                <td>✗ Add-on required</td>
                            </tr>
                            <tr className='bg-gray-50 h-12 text-gray-900 font-semibold'>
                                <td className='pl-2 md:pl-8'>Deployment Time</td>
                                <td>4-6 weeks</td>
                                <td>3-6 months</td>
                            </tr>
                            <tr className='h-12'>
                                <td className='pl-2 md:pl-8'>Scalability</td>
                                <td>✓ Cloud-based</td>
                                <td>△ On-premises</td>
                            </tr>
                            <tr className='bg-gray-50 h-12 text-gray-900 font-semibold'>
                                <td className='pl-2 md:pl-8'>Total Cost of Ownership</td>
                                <td>40% lower</td>
                                <td>Enterprise pricing</td>
                            </tr>
                            <tr className='h-12'>
                                <td className='pl-2 md:pl-8'>Customer Satisfaction</td>
                                <td>95%+</td>
                                <td>70-80%</td>
                            </tr>
                            <tr className='bg-gray-50 h-12 text-gray-900 font-semibold'>
                                <td className='pl-2 md:pl-8'>STS Compliance</td>
                                <td>✓ Native</td>
                                <td>△ Requires integration</td>
                            </tr>
                            <tr className='h-12'>
                                <td className='pl-2 md:pl-8'>Multi-Utility Support</td>
                                <td>✓ Electric/Water/Gas</td>
                                <td>△ Often single utility</td>
                            </tr>
                            <tr className='bg-gray-50 h-12 text-gray-900 font-semibold'>
                                <td className='pl-2 md:pl-8'>User Experience</td>
                                <td>✓ Modern, intuitive</td>
                                <td>△ Legacy interfaces</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    {advantages.map((advantage) => (
                        <div key={advantage.id} className='flex flex-col md:flex-row md:items-center gap-6 mt-10'>
                            <img src={advantage.icon} alt={advantage.title} className='w-10 h-10' />
                            <div>
                                <h3 className='text-lg font-semibold'>{advantage.title}</h3>
                                <p className='text-gray-400'>{advantage.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}
