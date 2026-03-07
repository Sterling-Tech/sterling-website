import React from "react";
import { AppLayout } from "@/layouts";
import {AboutList} from "@/components/services/index";
import { PageHeader, CollaborateWithUs } from "@/components/partials";



export default function About() {
  return (
    <AppLayout>
      <PageHeader
        heading="About Us"
        body="Powering Africa's Energy Future"
        cta="Reach Out to Us"
        link="/contact"
      />

      <AboutList />
      <CollaborateWithUs />
    </AppLayout>
  );
}
