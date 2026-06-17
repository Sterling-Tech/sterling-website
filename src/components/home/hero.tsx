'use client'
import React from "react";
import Link from "next/link";
import { CTAButton, AnimateY } from "../partials";
import Slider from "react-slick";

export const heroData = [
  {
    id: 1,
    image: "/hero-img.png",
    desc: "We are committed to constantly exploring new ideas, and harnessing innovation to drive your success",
    txt: (<div>Shaping A Smarter World {" "}</div>),
    text: "Our Vision, Your Solution.",
    shortdesc: "From ERP customization to enterprise billing systems"
  },
  {
    id: 2,
    image: "/images/erp.jpg",
    desc: "Innovation meets performance-driven architecture",
    txt: (<div>Building Secure Systems {" "}</div>),
    text: "Powered By Intelligence.",
    shortdesc: "Secure, optimized and high-performance backend systems."
  },
  {
    id: 3,
    image: "/images/erp7.webp",
    desc: "Innovation meets performance-driven architectureTechnology aligned with business growth",
    txt: (<div>Transforming Digital Infrastructure {" "}</div>),
    text: "Results That Scale.",
    shortdesc: "From ERP customization to enterprise billing systems."
  },
  {
    id: 4,
    image: "/images/quickcash4.jpg",
    desc: "We are committed to constantly exploring new ideas, and harnessing innovation to drive your success",
    txt: (<div>Shaping A Smarter World {" "}</div>),
    text: "Our Vision, Your Solution.",
    shortdesc: "From ERP customization to enterprise billing systems"
  },
  {
    id: 5,
    image: "/images/iotimg.jpg",
    desc: "Innovation meets performance-driven architectureTechnology aligned with business growth",
    txt: (<div>Transforming Digital Infrastructure {" "}</div>),
    text: "Results That Scale.",
    shortdesc: "From ERP customization to enterprise billing systems."
  },
]
interface HeroData {
  id: number,
  image: string,
  desc: string,
  txt: React.ReactNode,
  text: string,
  shortdesc: string
}
interface HeroProps {
  data: HeroData[]
}
export default function Hero({ data }: HeroProps) {
  var settings = {
    dots: true,
    pauseOnHover: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div className="w-full overflow-x-hidden overflow-y-hidden pt-10">
      <Slider {...settings}>
        {
          data.map(herodata => (
            <div className="relative" key={herodata.id}>
              <div className="relative w-full h-[450px] md:h-[600px] lg:h-[580px]">
                <img
                  src={herodata.image}
                  alt="Tech Image"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              <div className="pt-10 bg-black/50 text-white md:pb-16 absolute top-0 left-0 w-full">
                <div className="px-6 md:px-16 lg:px-20 w-full">
                  {/* <div className="space-y-6 pt-20 md:min-h-screen"> */}
                  <div className="space-y-6 pt-16 md:pt-20">
                    <AnimateY staggerAmount={0.35}>

                      <h2 className="text-sm leading-[150%] md:text-xl md:w-[400px] lg:w-[600px]">
                        <div className="w-full">
                          {herodata.desc}
                        </div>
                      </h2>
                    </AnimateY>

                    <div className="space-y-6 md:space-y-10">
                      <AnimateY staggerAmount={0.45}>
                        <h1 className="text-[2rem] font-semibold leading-[150%] tracking-tight  md:text-6xl lg:text-7xl  lg:leading-[140%]">
                          {herodata.txt}
                          <span className="text-primary">
                            {herodata.text}
                          </span>{" "}
                        </h1>
                      </AnimateY>

                      <AnimateY staggerAmount={0.35}>

                      <h2 className="text-sm leading-[150%] md:text-xl md:w-[400px] lg:w-[600px]">
                        <div className="w-full">
                          {herodata.shortdesc}
                        </div>
                      </h2>
                    </AnimateY>
                    </div>

                    <AnimateY staggerAmount={0.5}>
                        <div>
                          <Link href={"/contact"}>
                            <CTAButton title="Let's Talk Now" />
                          </Link>
                        </div>
                      </AnimateY>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </Slider>
    </div>
  );
}
