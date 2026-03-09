import React from "react";
import { AppLayout } from "@/layouts";
import { Work } from "@/components/home";
import { PageHeader, CollaborateWithUs } from "@/components/partials";
import { PartnersAndClients } from "@/components/home";

export default function Products() {
  return (
    <AppLayout>
      <PageHeader
        heading="Our Products"
        body="Here are Our Paramount Products"
        cta="Reach Out to Us"
        link="/contact"
      />
      <Work/>
      <CollaborateWithUs />
      <PartnersAndClients />
    </AppLayout>
  );
}
