import { AppLayout, Container } from "@/layouts";
import {
  Hero,
  Services,
  Work,
  WhyChooseUs,
  PartnersAndClients,
  Reviews
} from "@/components/home";
import { CollaborateWithUs } from "@/components/partials";
import { heroData } from "@/components/home/hero";

export const metadata = {
  title: "Home - Sterling Technologies & Systems",
  description: "Sterling Technologies & Systems - Professional Services. Smart Power ERP, QuickCash vending, QuickPay AMI platforms. Comprehensive utility management solutions for African electricity distribution companies.",
  keywords: "Smart Power ERP, QuickCash vending, QuickPay AMI platforms, utility management, African electricity"
};

export default function Home() {
  return (
    <AppLayout title="Home - Sterling Technologies & Systems">
      <Hero data={heroData}/>
      <Services />
      <Work />
      <WhyChooseUs />
      <PartnersAndClients />
      <CollaborateWithUs />
      <Reviews/>
    </AppLayout>
  );
}
