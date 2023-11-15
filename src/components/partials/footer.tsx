import React from "react";
import { Container } from "@/layouts";
import { LinkedIn, Twitter, Facebook } from "../icons";

export default function Footer() {
  const currentYear = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
  }).format(new Date());
  return (
    <Container>
      <footer className="border-t border-slate-300 pb-10 pt-6">
        <div className="flex flex-col justify-between md:flex-row md:items-center">
          <div className="flex items-center gap-2">
            <img src="/sterling-logo.png" alt="" />
            <p className="text-xl font-semibold">Sterling</p>
          </div>

          <ul className="hidden items-center gap-6 md:flex">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Work</li>
          </ul>

          <div className="mt-10 flex items-start justify-between md:mt-0 md:items-center">
            <ul className="flex flex-row items-center gap-6 md:hidden md:flex-col md:gap-10">
              <div className="flex flex-col gap-6 md:flex-row md:gap-10">
                <li>Home</li>
                <li>About</li>
              </div>
              <div className="flex flex-col gap-6 md:flex-row md:gap-10">
                <li>Services</li>
                <li>Work</li>
              </div>
            </ul>

            <div className="flex flex-col items-center gap-4 md:flex-row">
              <LinkedIn />
              <Twitter />
              <Facebook />
            </div>
          </div>
        </div>

        <p className="mt-16 text-sm text-slate-600 md:text-center md:text-base">
          © {currentYear} Sterling Technologies and Systems. All rights
          reserved.
        </p>
      </footer>
    </Container>
  );
}
