import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <section className="mx-auto px-6 sm:max-w-2xl md:max-w-3xl lg:max-w-[1280px] lg:px-0">
      {children}
    </section>
  );
}
