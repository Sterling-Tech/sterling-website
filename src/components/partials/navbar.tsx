'use client'
import React, { useState } from "react";
import Link from "next/link";
import { Container } from "@/layouts";
import { RightArrow } from "../icons";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) =>
    pathname === path
      ? "text-primary underline underline-offset-4"
      : "text-white hover:text-primary transition-colors";
  return (
    <nav className="fixed z-30 w-full bg-dim-black py-6 text-white">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex gap-10">
            <Link href={"/"}>
              <div className="flex items-center gap-2">
                {/* <img src="/sterling-logo.png" alt="" /> */}
                <Image src="/images/sterlingLogo2.jpeg" alt="logo" width={50} height={50} className="rounded" />
                <p className="text-xl font-semibold">
                  Sterling
                </p>
              </div>
            </Link>
          </div>

          <div className="flex items-center gap-6">
            <ul className="hidden items-center gap-10 md:flex">
              <li>
                <Link href={"/"} className={isActive("/")}>
                  Home
                </Link>
              </li>
              {/* <li>
                <Link href={"/services"} className={isActive("/services")}>
                  Services
                </Link>
              </li> */}
              <li>
                <Link href={"/about"} className={isActive("/about")}>
                  About
                </Link>
              </li>
              <li>
                <Link href={"/contact"} className={isActive("/contact")}>
                  Contact
                </Link>
              </li>
              <li>
                <Link href={"/product"} className={isActive("/product")}>
                  Products and Services
                </Link>
              </li>
            </ul>
            <button className="group hidden items-center gap-2 rounded-3xl border border-primary px-4 py-2 text-primary transition-all duration-100 hover:bg-primary hover:text-black lg:flex">
              <Link href={"/contact"}>
                <span className="font-semibold">Get in Touch</span>
              </Link>{" "}
              <RightArrow />
            </button>

            {/* hamburger menu */}
            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu size={24} />
            </button>

            {isOpen && (
              <div className="absolute left-0 top-full w-full bg-dim-black md:hidden shadow-lg">
                <ul className="flex flex-col gap-6 px-6 py-6 text-sm">
                  <li>
                    <Link
                      href="/"
                      className={isActive("/")}
                      onClick={() => setIsOpen(false)}
                    >
                      Home
                    </Link>
                  </li>

                  {/* <li>
                    <Link
                      href="/services"
                      className={isActive("/services")}
                      onClick={() => setIsOpen(false)}
                    >
                      Services
                    </Link>
                  </li> */}

                  <li>
                    <Link
                      href="/about"
                      className={isActive("/about")}
                      onClick={() => setIsOpen(false)}
                    >
                      About
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/contact"
                      className={isActive("/contact")}
                      onClick={() => setIsOpen(false)}
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/product"
                      className={isActive("/product")}
                      onClick={() => setIsOpen(false)}
                    >
                      Products and Services
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </Container>
    </nav>
  );
}
