import React from "react";
import { Container } from "@/layouts";
import { serviceList } from "@/static/data";
import { ServiceCard } from "../partials";

export default function ServiceList() {
  return (
    <div className="bg-slate-50 py-20">
      <Container>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2">
          {serviceList.map((item) => (
            <ServiceCard key={item.id} {...item} />
          ))}
        </div>
      </Container>
    </div>
  );
}
