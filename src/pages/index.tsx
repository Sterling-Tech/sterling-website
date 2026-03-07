import { AppLayout, Container } from "@/layouts";
import {
  Hero,
  Services,
  Work,
  WhyChooseUs,
  About,
  PartnersAndClients,
} from "@/components/home";
import { CollaborateWithUs } from "@/components/partials";

export default function Home() {
  return (
    <AppLayout title="Home - Sterling Technologies & Systems">
      <Hero />
      <Services />
      <Work />
      <WhyChooseUs />
      <About />
      <PartnersAndClients />
      <CollaborateWithUs />
    </AppLayout>
  );
}
