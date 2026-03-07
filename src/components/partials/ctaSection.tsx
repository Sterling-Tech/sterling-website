"use client";

import { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowRight } from "lucide-react";

const slides = [
  {
    image: "/images/slide1.jpg",
    title: "Accelerate Your Growth",
    description:
      "We engineer scalable digital solutions that drive measurable business results.",
  },
  {
    image: "/images/slide2.jpg",
    title: "Innovate With Confidence",
    description:
      "From strategy to deployment, we build systems designed for performance.",
  },
  {
    image: "/images/slide3.jpg",
    title: "Build Smarter Infrastructure",
    description:
      "Secure, scalable and optimized platforms tailored to your business goals.",
  },
];

export default function CTASection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  // Auto-play
  const autoplay = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    const interval = setInterval(autoplay, 5000);
    return () => clearInterval(interval);
  }, [autoplay]);

  return (
    <section className="relative overflow-hidden">
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="relative flex-[0_0_100%] h-[600px] lg:h-[700px]"
            >
              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60" />

              {/* Content */}
              <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-6">
                <h2 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
                  {slide.title}
                </h2>

                <p className="mt-4 max-w-xl text-lg text-gray-200">
                  {slide.description}
                </p>

                <div className="mt-8">
                  <a
                    href="mailto:hello@nexadev.com"
                    className="group inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground transition-all hover:shadow-xl hover:shadow-primary/25"
                  >
                    Get in Touch
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}