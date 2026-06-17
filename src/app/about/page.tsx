import React from 'react'
import { AppLayout } from "@/layouts";
import Hero from '@/components/about-us/Hero';
import PerformanceAtScale from '@/components/about-us/PerfAtScale';
import ScaleAndImpact from '@/components/about-us/ScaleAndImpact';
import IntegratedSolution from '@/components/about-us/Solution';
import CompetitiveAdvantage from '@/components/about-us/CompetitiveAdvantage';
import CaseStudies from '@/components/about-us/CaseStudies';
import TechStack from '@/components/about-us/TechStack';

export const metadata = {
  title: "About Us - Sterling Technologies & Systems",
  description: "Learn more about Sterling Technologies & Systems",
};

export default function About() {
  return (
    <AppLayout>
      <div>
        <Hero />
        <PerformanceAtScale />
        <ScaleAndImpact />
        <IntegratedSolution />
        <CompetitiveAdvantage />
        <CaseStudies />
        <TechStack />
      </div>
    </AppLayout>
  )
}
