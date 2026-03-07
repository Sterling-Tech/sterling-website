"use client";

import { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { reviewsList } from "@/static/data";
import StarIcon from "../icons/starIcons";

export default function ReviewsCard() {

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  // Scroll Next
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Scroll Prev
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  // Optional autoplay
  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => clearInterval(autoplay);
  }, [emblaApi]);

  return (
    <div className="bg-white shadow-xl rounded-2xl p-10 w-full relative">

      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-3">
          What Our Clients Say
        </h2>

        <p className="text-gray-600 max-w-xl mx-auto">
          Businesses trust our enterprise technology and energy solutions to
          power their growth.
        </p>
      </div>

      {/* Arrow Controls */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white border rounded-full p-3 shadow hover:bg-gray-100 transition z-10"
      >
        ←
      </button>

      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white border rounded-full p-3 shadow hover:bg-gray-100 transition z-10"
      >
        →
      </button>

      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">

          {reviewsList.map((review, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] px-4"
            >

              <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition">

                {/* Stars */}
                <div className="flex justify-center gap-1 mb-4">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>

                {/* Comment */}
                <p className="text-gray-600 italic mb-6">
                  "{review.comment}"
                </p>

                {/* Logo */}
                <div className="flex flex-col items-center">

                  <Image
                    src={review.logo}
                    alt={review.name}
                    width={60}
                    height={60}
                    className="object-contain mb-2"
                  />

                  <p className="font-semibold text-gray-800">
                    {review.name}
                  </p>

                </div>

              </div>

            </div>
          ))}

        </div>
      </div>
    </div>
  );
}