"use client";

import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";

function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    let start = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [started, target, duration]);

  return { count, ref };
}

export default function RevenueAssuranceSection() {
  const collected = useCountUp(50);
  const reduction = useCountUp(40);
  const rate = useCountUp(998);

  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT — Animated Illustration */}
          <div className="relative">
            <div className="relative mx-auto max-w-md">

              <svg
                viewBox="0 0 400 300"
                className="w-full animate-pulse"
              >
                {/* Customer */}
                <circle cx="60" cy="150" r="30" fill="#facc15" />
                <text x="40" y="155" fontSize="12" fill="#000">
                  Customer
                </text>

                {/* Quickcash */}
                <rect x="150" y="120" width="100" height="60" rx="10" fill="#2563eb" />
                <text x="165" y="155" fontSize="12" fill="#fff">
                  Vending
                </text>

                {/* ERP */}
                <rect x="300" y="110" width="80" height="80" rx="10" fill="#1e293b" />
                <text x="310" y="155" fontSize="12" fill="#fff">
                  ERP
                </text>

                {/* Flow Lines */}
                <line x1="90" y1="150" x2="150" y2="150" stroke="#facc15" strokeWidth="3">
                  <animate attributeName="stroke-dashoffset" values="100;0" dur="2s" repeatCount="indefinite" />
                </line>

                <line x1="250" y1="150" x2="300" y2="150" stroke="#2563eb" strokeWidth="3">
                  <animate attributeName="stroke-dashoffset" values="100;0" dur="2s" repeatCount="indefinite" />
                </line>
              </svg>

            </div>
          </div>

          {/* RIGHT — Content */}
          <div>
            <h2 className="text-4xl font-bold text-slate-900 lg:text-5xl">
              Revenue Assurance That <span className="text-primary">Actually Works</span>
            </h2>

            <p className="mt-6 text-lg text-slate-600">
              Reduce revenue loss by up to 40% with intelligent vending and ERP integration.
            </p>

            <ul className="mt-8 space-y-5">
              {[
                "STS-compliant prepaid vending",
                "Multi-channel payment collection (USSD, Web, Mobile, POS)",
                "Automated reconciliation & reporting",
                "Real-time fraud detection & alerts",
                "Seamless ERP integration",
              ].map((item) => (
                <li key={item} className="flex items-start gap-4 group">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                    <Check className="h-5 w-5 text-primary" />
                  </span>
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div className="mt-20 rounded-2xl bg-slate-900 p-8 text-white shadow-xl">
          <div className="grid gap-8 text-center sm:grid-cols-3">

            <div ref={collected.ref}>
              <div className="text-3xl font-bold lg:text-4xl">
                ₦{collected.count}+ Billion
              </div>
              <div className="mt-2 text-sm text-slate-400">
                Collected
              </div>
            </div>

            <div ref={reduction.ref}>
              <div className="text-3xl font-bold lg:text-4xl">
                {reduction.count}% 
              </div>
              <div className="mt-2 text-sm text-slate-400">
                Reduction in Revenue Loss
              </div>
            </div>

            <div ref={rate.ref}>
              <div className="text-3xl font-bold lg:text-4xl">
                99.{rate.count}%
              </div>
              <div className="mt-2 text-sm text-slate-400">
                Collection Rate
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Sticky Mobile Stats */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900 p-4 text-center text-white shadow-lg sm:hidden">
        <div className="text-sm font-semibold">
          ₦50+ Billion Collected • 40% Loss Reduction • 99.8% Rate
        </div>
      </div>
    </section>
  );
}