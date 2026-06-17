import React from "react";
import { Container } from "@/layouts";
import { LinkedIn, Twitter, Facebook } from "../icons";
import Link from "next/link";
import MapSection from "../about-us/Map";

export default function Footer() {
  const currentYear = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
  }).format(new Date());
  return (
    <footer className="pb-10 pt-6 bg-black text-white/70">
      <Container>
        {/* <div className="flex flex-col justify-between md:flex-row"> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="flex flex-col space-y-4">
            <Link href={"/"}>
              <div className="flex items-center gap-2">
                <img src="/images/sterlingLogo2.jpeg" alt="Sterling Technologies" 
                  className="w-12 h-12 rounded"
                />
                <p className="text-xl font-semibold">Sterling</p>
              </div>
            </Link>
            <Link href={"/about"}>About us</Link>
            <Link href={"/contact"}>Contact</Link>
            <Link href={"#"}>Jobs</Link>
            <MapSection />
          </div>

          <div>
            <ul className="items-center space-y-4">
              <h2 className="font-bold text-xl mt-5">Services</h2>
              <li>
                <Link href={"#"}>Energy Vending</Link>
              </li>
              <li>
                <Link href={"#"}>ERP Application Development</Link>
              </li>
              <li>
                <Link href={"#"}>Payment Collection</Link>
              </li>
              <li>
                <Link href={"#"}>Data Collection & Monitoring</Link>
              </li>
              <li>
                <Link href={"#"}>IOT Services</Link>
              </li>
              <li>
                <Link href={"#"}>Business Analysis & AI</Link>
              </li>
            </ul>
          </div>

          {/* <div className="mt-10 flex items-start justify-between md:mt-0 md:items-center">
            <ul className="flex flex-row items-center gap-6 md:hidden md:flex-col md:gap-10">
              <div className="flex flex-col gap-6 md:flex-row md:gap-10">
                <h2 className="font-bold text-xl">Services</h2>
                <li>
                  <Link href={"#"}>Energy Vending</Link>
                </li>
                <li>
                  <Link href={"#"}>ERP Application Development</Link>
                </li>
                <li>
                  <Link href={"#"}>Payment Collection</Link>
                </li>
                <li>
                  <Link href={"#"}>Data Collection & Monitoring</Link>
                </li>
                <li>
                  <Link href={"#"}>IOT Services</Link>
                </li>
                <li>
                  <Link href={"#"}>Business Analysis & AI</Link>
                </li>
              </div>
            </ul>
          </div> */}
          <div className="space-y-4">
            <h2 className="font-bold text-xl mt-5">Legal</h2>
            <ul className="space-y-4">
              <li><Link href={"#"}>Privacy Policy</Link></li>
              <li><Link href={"#"}>Terms of Service</Link></li>
              <li><Link href={"#"}>Refund Policy</Link></li>
              <li><Link href={"#"}>Cookie Policy</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="font-bold text-xl mt-5">Follow Us</h2>
            <div className="flex flex-col md:items-center gap-4 md:flex-row">
              <a href="#">
                <LinkedIn />
              </a>
              <a href="#">
                <Twitter />
              </a>
              <a href="#">
                <Facebook />
              </a>
            </div>
          </div>
        </div>
      </Container>
      <p className="mt-16 border-t border-primary text-sm text-slate-400 md:text-center md:text-base pt-6 mx-4">
        &copy; {currentYear} Sterling Technologies and Systems. All rights
        reserved.
      </p>
    </footer>
  );
}
