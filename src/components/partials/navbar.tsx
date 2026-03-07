"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/layouts";
import { RightArrow } from "../icons";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About Us", href: "/about" },
  ];

  return (
    <nav className="fixed z-30 w-full bg-dim-black py-6 text-white">
      <Container>
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <img src="/sterling-logo.png" alt="Sterling logo" />
              <p className="hidden text-xl font-semibold md:block">
                Sterling
              </p>
            </div>
          </Link>

          <div className="flex items-center gap-6">

            {/* Desktop Menu */}
            <ul className="hidden items-center gap-10 md:flex">

              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <li key={link.name} className="relative group">

                    <Link
                      href={link.href}
                      className={`
                        font-medium transition-colors duration-200
                        ${
                          isActive
                            ? "text-[#FFDE26]"
                            : "text-white hover:text-[#FFDE26]"
                        }
                      `}
                    >
                      {link.name}
                    </Link>

                    {/* Underline */}
                    <span
                      className={`
                        absolute left-0 -bottom-2 h-[2px] w-full bg-[#FFDE26]
                        transform origin-left transition-transform duration-300
                        ${
                          isActive
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                        }
                      `}
                    />
                  </li>
                );
              })}

            </ul>

            {/* CTA Button */}
            <Link href="/contact">
              <button className="group hidden items-center gap-2 rounded-3xl border border-primary px-4 py-2 text-primary transition-all duration-200 hover:bg-primary hover:text-black md:flex">
                <span className="font-semibold">Get in Touch</span>
                <RightArrow />
              </button>
            </Link>

            {/* Mobile Menu */}
            <ul className="flex items-center gap-8 text-sm md:hidden">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
            </ul>

          </div>
        </div>
      </Container>
    </nav>
  );
}