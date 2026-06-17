import { Container } from '@/layouts';
import { performanceList as defaultPerformanceList } from '@/static/data';
import React from 'react';
import { AnimateY } from '../partials';

// define a reusable type for a single performance item
export interface PerformanceItem {
    id: number | string;
    title: string;
    text: string;
    stat: string;
    icon?: string;
}

// props accepted by the component: an optional array of items
export interface PerfAtScaleProps {
    items?: PerformanceItem[]; // if omitted, we'll fall back to the default list
}

// functional component with explicit props type
export default function PerformanceAtScale({
    items = defaultPerformanceList,
}: PerfAtScaleProps) {
    return (
        <div className='my-16'>
            <Container>
                <div className="mb-8 space-y-2 text-center">
                    <h2 className='font-bold text-2xl'>PERFORMANCE AT SCALE</h2>
                    <h4 className="text-lg text-gray-700 font-semibold">Built for utilities of any size</h4>
                </div>
                <div className="grid gap-6 grid-cols-1 lg:grid-cols-3 h-full">
                    {items.map((item) => (
                        <AnimateY staggerAmount={0.45}>
                            <div key={item.id} className="items-center text-center p-6 border rounded-lg shadow hover:shadow-lg transition-shadow h-full hover:bg-gray-50 ">
                                {item.icon && (
                                    <img src={item.icon} alt={item.title} className="mx-auto h-10 w-10 text-primary" />
                                )}
                                <p className="text-3xl font-bold text-blue-950 my-2">{item.stat}</p>
                                <h3 className="my-4 font-bold">{item.title}</h3>
                                <p className="text-gray-700">{item.text}</p>
                            </div>
                        </AnimateY>
                    ))}
                </div>
            </Container>
        </div>
    );
}
