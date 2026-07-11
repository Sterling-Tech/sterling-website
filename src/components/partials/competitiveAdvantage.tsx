import { Container } from '@/layouts'
import React from 'react'
import { CheckCircle2, XCircle, AlertTriangle } from 'lucide-react'

export default function CompetitiveAdvantage() {
    const advantages = [
        {
            id: 1,
            icon: "/images/rocket.svg",
            title: "Deploy in Weeks, Not Months",
            text: "Cloud-native architecture means you’re live in 4-6 weeks, not 6 months."
        },
        {
            id: 2,
            icon: "/images/badge-dollar-sign.svg",
            title: "40% Lower TCO",
            text: "Integrated platform eliminates costly system integrations and maintenance."
        },
        {
            id: 3,
            icon: "/images/hammer.svg",
            title: "Designed for Local Challenges",
            text: "Offline-first design, multi-language support, local payment methods, and compliance with Nigerian regulations."
        }
    ];

    return (
        <div className='my-20 bg-slate-50 py-20 text-slate-600 font-sans antialiased'>
            <Container>
                {/* Section Header */}
                <div className='text-center max-w-3xl mx-auto mb-16'>
                    <h2 className='font-bold text-3xl md:text-4xl text-slate-900 tracking-tight mb-4'>
                        Why Utilities Choose Sterling
                    </h2>
                    <p className='text-lg text-slate-500 leading-relaxed'>
                        Enterprise software built specifically for African utilities, delivering faster deployment, lower costs, and measurable operational improvements.
                    </p>
                </div>
                
                {/* Premium Comparison Table Card */}
                <div className='overflow-x-auto rounded-3xl bg-white border border-slate-200 shadow-sm mb-20'>
                    <table className='w-full text-left border-collapse min-w-full table-fixed md:table-auto'>
                        <thead>
                            <tr className='bg-slate-100 text-slate-900 font-semibold md:text-base border-b border-slate-200 h-14'>
                                <th className='pl-6 md:pl-10 w-2/5'>Feature</th>
                                <th className='w-3/10'>Sterling</th>
                                <th className='text-slate-400 w-3/10'>Traditional Enterprise</th>
                            </tr>
                        </thead>
                        <tbody className='divide-y divide-slate-150 text-slate-700 font-medium'>
                            <tr className='h-14 transition-colors duration-150 ease-in-out hover:bg-amber-50/40 odd:bg-white even:bg-amber-50/10'>
                                <td className='pl-6 md:pl-10 font-normal text-slate-900'>Integrated ERP + Vending</td>
                                <td className='text-emerald-600 align-middle'>
                                    <div className='flex items-center gap-2'>
                                        <CheckCircle2 className='w-5 h-5 shrink-0' />
                                        <span>Included</span>
                                    </div>
                                </td>
                                <td className='text-red-500 align-middle'>
                                    <div className='flex items-center gap-2 opacity-80'>
                                        <XCircle className='w-5 h-5 shrink-0' />
                                        <span>Separate systems</span>
                                    </div>
                                </td>
                            </tr>
                            <tr className='h-14 transition-colors duration-150 ease-in-out hover:bg-amber-50/40 odd:bg-white even:bg-amber-50/10'>
                                <td className='pl-6 md:pl-10 font-normal text-slate-900'>Local Nigerian Support</td>
                                <td className='text-emerald-600 align-middle'>
                                    <div className='flex items-center gap-2'>
                                        <CheckCircle2 className='w-5 h-5 shrink-0' />
                                        <span>24/7</span>
                                    </div>
                                </td>
                                <td className='text-amber-500 align-middle'>
                                    <div className='flex items-center gap-2'>
                                        <AlertTriangle className='w-5 h-5 shrink-0' />
                                        <span>Limited hours</span>
                                    </div>
                                </td>
                            </tr>
                            <tr className='h-14 transition-colors duration-150 ease-in-out hover:bg-amber-50/40 odd:bg-white even:bg-amber-50/10'>
                                <td className='pl-6 md:pl-10 font-normal text-slate-900'>AI-Powered Analytics</td>
                                <td className='text-emerald-600 align-middle'>
                                    <div className='flex items-center gap-2'>
                                        <CheckCircle2 className='w-5 h-5 shrink-0' />
                                        <span>Built-in</span>
                                    </div>
                                </td>
                                <td className='text-red-500 align-middle'>
                                    <div className='flex items-center gap-2 opacity-80'>
                                        <XCircle className='w-5 h-5 shrink-0' />
                                        <span>Add-on required</span>
                                    </div>
                                </td>
                            </tr>
                            <tr className='h-14 transition-colors duration-150 ease-in-out hover:bg-amber-50/40 odd:bg-white even:bg-amber-50/10'>
                                <td className='pl-6 md:pl-10 font-normal text-slate-900'>Deployment Time</td>
                                <td className='text-slate-900 font-semibold align-middle'>4-6 weeks</td>
                                <td className='text-slate-500 align-middle font-normal'>3-6 months</td>
                            </tr>
                            <tr className='h-14 transition-colors duration-150 ease-in-out hover:bg-amber-50/40 odd:bg-white even:bg-amber-50/10'>
                                <td className='pl-6 md:pl-10 font-normal text-slate-900'>Scalability</td>
                                <td className='text-emerald-600 align-middle'>
                                    <div className='flex items-center gap-2'>
                                        <CheckCircle2 className='w-5 h-5 shrink-0' />
                                        <span>Cloud-based</span>
                                    </div>
                                </td>
                                <td className='text-amber-500 align-middle'>
                                    <div className='flex items-center gap-2'>
                                        <AlertTriangle className='w-5 h-5 shrink-0' />
                                        <span>On-premises</span>
                                    </div>
                                </td>
                            </tr>
                            <tr className='h-14 transition-colors duration-150 ease-in-out hover:bg-amber-50/40 odd:bg-white even:bg-amber-50/10'>
                                <td className='pl-6 md:pl-10 font-normal text-slate-900'>Total Cost of Ownership</td>
                                <td className='text-slate-900 font-semibold align-middle'>40% lower</td>
                                <td className='text-slate-500 align-middle font-normal'>Enterprise pricing</td>
                            </tr>
                            <tr className='h-14 transition-colors duration-150 ease-in-out hover:bg-amber-50/40 odd:bg-white even:bg-amber-50/10'>
                                <td className='pl-6 md:pl-10 font-normal text-slate-900'>Customer Satisfaction</td>
                                <td className='text-slate-900 font-semibold align-middle'>95%+</td>
                                <td className='text-slate-500 align-middle font-normal'>70-80%</td>
                            </tr>
                            <tr className='h-14 transition-colors duration-150 ease-in-out hover:bg-amber-50/40 odd:bg-white even:bg-amber-50/10'>
                                <td className='pl-6 md:pl-10 font-normal text-slate-900'>STS Compliance</td>
                                <td className='text-emerald-600 align-middle'>
                                    <div className='flex items-center gap-2'>
                                        <CheckCircle2 className='w-5 h-5 shrink-0' />
                                        <span>Native</span>
                                    </div>
                                </td>
                                <td className='text-amber-500 align-middle'>
                                    <div className='flex items-center gap-2'>
                                        <AlertTriangle className='w-5 h-5 shrink-0' />
                                        <span>Requires integration</span>
                                    </div>
                                </td>
                            </tr>
                            <tr className='h-14 transition-colors duration-150 ease-in-out hover:bg-amber-50/40 odd:bg-white even:bg-amber-50/10'>
                                <td className='pl-6 md:pl-10 font-normal text-slate-900'>Multi-Utility Support</td>
                                <td className='text-emerald-600 align-middle'>
                                    <div className='flex items-center gap-2'>
                                        <CheckCircle2 className='w-5 h-5 shrink-0' />
                                        <span>Electric/Water/Gas</span>
                                    </div>
                                </td>
                                <td className='text-amber-500 align-middle'>
                                    <div className='flex items-center gap-2'>
                                        <AlertTriangle className='w-5 h-5 shrink-0' />
                                        <span>Often single utility</span>
                                    </div>
                                </td>
                            </tr>
                            <tr className='h-14 transition-colors duration-150 ease-in-out hover:bg-amber-50/40 odd:bg-white even:bg-amber-50/10'>
                                <td className='pl-6 md:pl-10 font-normal text-slate-900'>User Experience</td>
                                <td className='text-emerald-600 align-middle'>
                                    <div className='flex items-center gap-2'>
                                        <CheckCircle2 className='w-5 h-5 shrink-0' />
                                        <span>Modern, intuitive</span>
                                    </div>
                                </td>
                                <td className='text-amber-500 align-middle'>
                                    <div className='flex items-center gap-2'>
                                        <AlertTriangle className='w-5 h-5 shrink-0' />
                                        <span>Legacy interfaces</span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Premium Animated Advantages Grid */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    {advantages.map((advantage) => (
                        <div 
                            key={advantage.id} 
                            className='group relative bg-white rounded-3xl p-8 border border-slate-200 shadow-sm overflow-hidden transition-all duration-350 ease-out hover:shadow-xl hover:-translate-y-2 flex flex-col items-start gap-6'
                        >
                            {/* Animated Icon Container (Yellow to Red on group hover) */}
                            <div className='w-14 h-14 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0 transition-colors duration-300 ease-in-out group-hover:bg-red-600 group-hover:text-white'>
                                <img 
                                    src={advantage.icon} 
                                    alt={advantage.title} 
                                    className='w-7 h-7 transition-all duration-300 group-hover:brightness-0 group-hover:invert' 
                                />
                            </div>
                            
                            <div className='relative z-10'>
                                <h3 className='text-xl font-bold text-slate-900 mb-3 tracking-tight'>
                                    {advantage.title}
                                </h3>
                                <p className='text-slate-500 text-base leading-relaxed'>
                                    {advantage.text}
                                </p>
                            </div>

                            {/* Card Bottom Gradient Accent (Transitions opacity or scale up on hover) */}
                            <div className='absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-500 to-red-600 transform scale-x-0 origin-left transition-transform duration-350 ease-out group-hover:scale-x-100' />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}