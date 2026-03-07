"use client";

import { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    image: "/hero1.png",
    subtitle:
      "We are committed to constantly exploring new ideas and harnessing innovation to drive your success",
    title: "Shaping A Smarter World",
    highlight: "Our Vision, Your Solution.",
    description:
      "Engineering scalable digital infrastructure for modern enterprises.",
  },
  {
    image: "/hero2.jpg",
    subtitle: "Innovation meets performance-driven architecture",
    title: "Building Secure Systems",
    highlight: "Powered By Intelligence.",
    description: "Secure, optimized and high-performance backend systems.",
  },
  {
    image: "/hero3.png",
    subtitle: "Technology aligned with business growth",
    title: "Transforming Digital Infrastructure",
    highlight: "Results That Scale.",
    description: "From ERP customization to enterprise billing systems.",
  },
];

export default function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  // Autoplay function
  const autoplay = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    const interval = setInterval(autoplay, 6000);
    return () => clearInterval(interval);
  }, [autoplay]);

  return (
    <section className="relative overflow-hidden">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="relative flex-[0_0_100%] h-[85vh] min-h-[600px]"
            >
              {/* Background Image */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                className="object-cover"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/70 z-10" />

              {/* Content */}
              <div className="relative z-20 flex h-full flex-col justify-center px-6 text-white lg:px-20">
                <div className="max-w-5xl space-y-6">
                  {/* Subtitle */}
                  <p className="max-w-2xl text-sm md:text-lg text-gray-200">
                    {slide.subtitle}
                  </p>

                  {/* Main Title */}
                  <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl lg:text-7xl">
                    {slide.title}{" "}
                    <span className="text-primary">{slide.highlight}</span>
                  </h1>

                  {/* Description */}
                  <p className="max-w-xl text-lg text-gray-300">
                    {slide.description}
                  </p>

                  {/* CTA Button */}
                  <div className="pt-6">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground transition-all hover:shadow-xl hover:shadow-primary/30"
                    >
                      Let's Talk Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}