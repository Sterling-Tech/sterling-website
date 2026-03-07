import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/layouts";
import { LinkedIn, Twitter, Facebook } from "../icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dim-black text-slate-300 pt-20 pb-10 mt-32">
      <Container>
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* ================= COMPANY ================= */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/sterling-logo.png"
                alt="Sterling Technologies"
                width={40}
                height={40}
              />
              <span className="text-xl font-semibold text-white">
                Sterling
              </span>
            </Link>

            <p className="mt-6 text-sm leading-relaxed text-slate-400">
              Engineering scalable digital solutions through precision,
              innovation, and partnership-driven delivery.
            </p>
          </div>

          {/* ================= COMPANY LINKS ================= */}
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* ================= SERVICES ================= */}
          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/services" className="hover:text-white transition">
                  IT Consulting
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition">
                  Software Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition">
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition">
                  Cybersecurity
                </Link>
              </li>
            </ul>
          </div>

          {/* ================= SOCIAL ================= */}
          <div>
            <h4 className="text-white font-semibold mb-6">Connect</h4>

            <div className="flex items-center gap-5">
              <a
                href="#"
                className="p-3 bg-slate-800 rounded-lg hover:bg-primary transition"
              >
                <LinkedIn />
              </a>

              <a
                href="#"
                className="p-3 bg-slate-800 rounded-lg hover:bg-primary transition"
              >
                <Twitter />
              </a>

              <a
                href="#"
                className="p-3 bg-slate-800 rounded-lg hover:bg-primary transition"
              >
                <Facebook />
              </a>
            </div>

            <p className="mt-6 text-sm text-slate-400">
              info@sterlingtechnologies.com.ng
            </p>
          </div>
        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500">
          <p>
            © {currentYear} Sterling Technologies & Systems. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}