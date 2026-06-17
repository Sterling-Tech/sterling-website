import React from 'react'
import { PageHeader } from '../partials'

export default function Hero() {
    return (
        <div>
            <div className='relative'>
                <div>
                    <img src="/images/grid.jpg" alt="hero"
                        className="w-full h-[820px] lg:h-[620px] object-cover"
                    />
                </div>
                <div className="absolute inset-0 top-4 flex flex-col lg:grid lg:grid-cols-12 items-center">
                    <div className='lg:col-span-9'>
                        <PageHeader
                            heading="Products & Services"
                            className="bg-inherit text-white text-2xl md:text-4xl lg:text-5xl font-bold"
                            body="Sterling Technology and Systems Limited delivers integrated 
                            portfolio of products and services that empower electricity 
                            distribution companies with tools to drive efficiency, 
                            revenue growth, and superior customer experience.
                        "
                            cta="Let's Talk Now"
                            link="/contact"
                        />
                    </div>
                    <div className='hidden lg:block top-0 right-0 absolute text-white lg:col-span-2'>
                        <img src="/images/meter2.png" alt="meter" />
                        <h1 className='mt-[-25%] right-40 absolute font-bold text-4xl'>Our meter</h1>
                    </div>
                </div>
                <div className='lg:hidden block mt-[-25rem] md:mt-[-33rem] right-0 absolute text-white lg:col-span-2'>
                    <img src="/images/meter2.png" alt="meter" />
                    <h1 className='mt-[-25%] right-40 absolute font-bold text-2xl lg:text-4xl'>Our meter</h1>
                </div>
            </div>

        </div>
    )
}
