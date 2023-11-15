import React from "react";
import { Container } from "@/layouts";
import { RightArrow } from "../icons";

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-dim-black py-6 text-white">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex gap-10">
            <div className="flex items-center gap-2">
              <img src="/sterling-logo.png" alt="" />
              <p className="hidden text-xl font-semibold md:block">Sterling</p>
            </div>

            <ul className="hidden items-center gap-10 md:flex">
              <li>About</li>
              <li>Services</li>
              <li>Work</li>
            </ul>
          </div>

          <div className="flex items-center">
            <button className="group hidden items-center gap-2 rounded-3xl border border-primary px-4 py-2 text-primary transition-all duration-100 hover:bg-primary hover:text-black md:flex">
              <span className="font-semibold">Get in Touch</span> <RightArrow />
            </button>

            <ul className="flex items-center gap-8 text-sm md:hidden">
              <li>About</li>
              <li>Services</li>
              <li>Work</li>
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  );
}
