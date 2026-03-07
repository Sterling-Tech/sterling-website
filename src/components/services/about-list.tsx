import React from "react";
import Image from "next/image";
import { Container } from "@/layouts";
import { aboutList } from "@/static/aboutdata";
import { AnimateY, PerformanceAtScale, ValuesSection, RevenueAssurance } from "../partials";
import CTASection from "../partials/ctaSection";
import ServicesSection from '../partials/ServicesSection';
import StatsSection from "../partials/statsSection";
import { PartnersAndClients } from "../home";
import {ReviewsCard} from "../partials";

export default function AboutList() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <ValuesSection/>
        <PerformanceAtScale/>
        <RevenueAssurance/>
        <StatsSection/>
        <ServicesSection/>
        
      </Container>
      
      <PartnersAndClients/>
      <ReviewsCard />
    </section>
        
    

  );
  console.log({
  ValuesSection,
  PerformanceAtScale,
  RevenueAssurance,
  StatsSection,
  ServicesSection,
  PartnersAndClients,
});
}