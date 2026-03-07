import React from "react";
import { AppLayout } from "@/layouts";
import { Work } from "@/components/home";
import { PageHeader, CollaborateWithUs } from "@/components/partials";
import { PartnersAndClients } from "@/components/home";

export default function Portfolio() {
  return (
    <AppLayout>
      <PageHeader
        heading="Our Portfolio"
        body="Here are Our Paramount Works"
        cta="Reach Out to Us"
        link="/contact"
      />
      <Work/>
      <CollaborateWithUs />
      <PartnersAndClients />
    </AppLayout>
  );
}
