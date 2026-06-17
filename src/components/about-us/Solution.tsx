'use client'
import { Container } from '@/layouts';
import React, { useEffect, useState } from 'react'
import { CTAButton } from '../partials';
import { Btn } from '../partials/cta-button';
import Aos from 'aos';

export default function IntegratedSolution() {
    // two tabs - one for the solution and the other for the impact
    const [activeTab, setActiveTab] = useState('solution');
    useEffect(()=>{
        Aos.init();
    },[])
    return (
        <div className="my-20">
            <Container>
                <div className="text-center mb-12">
                    <h2 className='font-bold items-center text-2xl'>Two Platforms. One Ecosystem.</h2>
                    {/* <h3 className='font-semibold text-lg'>Smartpower ERP + Quickcash Vending</h3> */}
                </div>
                <div className="flex justify-center mb-8">
                    <button
                        className={`px-4 py-2 mx-2 w-30 md:w-40 lg:w-72 rounded ${activeTab === 'solution' ? 'bg-blue-950 text-white' : 'bg-gray-200 text-gray-700'}`}
                        onClick={() => setActiveTab('solution')}
                    >
                        Smartpower ERP
                    </button>
                    <button
                        className={`px-4 py-2 mx-2 w-30 md:w-40 lg:w-72 rounded ${activeTab === 'impact' ? 'bg-blue-950 text-white' : 'bg-gray-200 text-gray-700'}`}
                        onClick={() => setActiveTab('impact')}
                    >
                        Quickcash Vending
                    </button>
                </div>
                <div className="max-w-7xl mx-auto">
                    {activeTab === 'solution' ? (
                        <div className='mb-20'>
                            <h2 className="text-2xl font-bold text-center mb-4">Smartpower ERP</h2>
                            <p className="text-gray-700 text-center">
                                Enterprise Resource Planning Built for Utilities.
                            </p>
                            <div className='grid grid-cols-1 lg:grid-cols-2 w-full lg:h-[400px] gap-6 mt-8'>
                                <div data-aos="fade-right">
                                    <img src="/images/erp2.jpg" alt="Smartpower ERP" className='w-full h-full object-cover rounded' />
                                </div>
                                <div className='w-full' data-aos="fade-down">
                                    <h1 className='text-xl font-semibold'>Comprehensive utility management platform that integrates meter data, billing, asset management, and AI-powered analytics into one unified system.</h1>
                                    <ul className='text-lg text-gray-700 mt-4 list-disc list-inside space-y-5'>
                                        <li>Real-time meter data management</li>
                                        <li>Automated billing & invoicing</li>
                                        <li>Work & asset management</li>
                                        <li>AI-powered demand forecasting</li>
                                        <li>Loss detection & prevention</li>
                                        <li>Regulatory compliance reporting</li>
                                    </ul>
                                    <div className='mt-3'>
                                        <Btn title="Explore Smartpower ERP" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className='mb-20'>
                            <h2 className="text-2xl font-bold text-center mb-4">Quickcash Vending</h2>
                            <p className="text-gray-700 text-center">
                                Seamless Prepaid Utility Vending.
                            </p>
                            <div className='grid grid-cols-1 lg:grid-cols-2 w-full lg:h-[400px] gap-6 mt-8'>
                                <div data-aos="fade-right">
                                    <img src="/images/quickcash4.jpg" alt="Quickcash Vending" className='w-full h-full object-cover rounded' />
                                </div>
                                <div className='w-full' data-aos="fade-left">
                                    <h1 className='text-xl font-semibold'>STS-compliant prepaid vending system with multi-channel payment collection, instant token generation, and real-time reconciliation.</h1>
                                    <ul className='text-lg text-gray-700 mt-4 list-disc list-inside space-y-5'>
                                        <li>STS-compliant token generation</li>
                                        <li>Multi-channel payments (USSD, Web, Mobile App, POS)</li>
                                        <li>Automated reconciliation</li>
                                        <li>Customer self-service portal</li>
                                        <li>Bulk vending for properties</li>
                                        <li>Integration with payment gateways</li>
                                    </ul>
                                    <div className='mt-3'>
                                        <Btn title="Explore Quickcash Vending" className="w-30 md:w-60 lg:w-72 bg-blue-950 text-white px-5 py-4 rounded-full text-center font-semibold cursor-pointer hover:bg-black border border-blue-950 transition-all duration-100"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </Container>
        </div>
    )
}
