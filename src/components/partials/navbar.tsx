import React from "react";
import Link from "next/link";
import { Container } from "@/layouts";
import { RightArrow } from "../icons";

export default function Navbar() {
  return (
    <nav className="fixed z-30 w-full bg-dim-black py-6 text-white">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex gap-10">
            <Link href={"/"}>
              <div className="flex items-center gap-2">
                <img src="/sterling-logo.png" alt="" />
                <p className="hidden text-xl font-semibold md:block">
                  Sterling
                </p>
              </div>
            </Link>
          </div>

          <div className="flex items-center gap-6">
            <ul className="hidden items-center gap-10 md:flex">
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/services"}>Services</Link>
              </li>
              <li>
                <a href={"#work"}>Work</a>
              </li>
            </ul>
            <button className="group hidden items-center gap-2 rounded-3xl border border-primary px-4 py-2 text-primary transition-all duration-100 hover:bg-primary hover:text-black md:flex">
              <Link href={"/contact"}>
                <span className="font-semibold">Get in Touch</span>
              </Link>{" "}
              <RightArrow />
            </button>

            <ul className="flex items-center gap-8 text-sm md:hidden">
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/services"}>Services</Link>
              </li>
              <li>
                <Link href={"/"}>Work</Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  );
}
