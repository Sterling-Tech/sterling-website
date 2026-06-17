import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <section className="mx-auto px-6 md:px-16 lg:px-20 w-full">
      {children}
    </section>
  );
}
