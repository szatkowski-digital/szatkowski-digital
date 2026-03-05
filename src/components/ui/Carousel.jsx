"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useRef, useState } from "react";

// SSR-safe import
const Slider = dynamic(() => import("react-slick"), {
  ssr: false,
});

export default function Carousel({ imgs }) {
  const sliderRef = useRef(null);
  const [index, setIndex] = useState(0);

  const settings = {
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    swipe: true,
    beforeChange: (_, next) => setIndex(next),
    adaptiveHeight: false,
  };

  return (
    <div className="relative w-full min-w-0 overflow-hidden pt-2">
      <div className="absolute top-0 left-0 right-0 z-10 flex">
        {imgs.map((_, i) => (
          <button
            key={i}
            onClick={() => sliderRef.current?.slickGoTo(i)}
            className="h-1 flex-1 overflow-hidden bg-white/30"
          >
            <div
              className={`h-full w-full transition-all duration-300 ${
                i === index ? "bg-white" : "bg-transparent"
              }`}
            />
          </button>
        ))}
      </div>

      <Slider ref={sliderRef} {...settings}>
        {imgs.map((src, i) => (
          <div key={i} className="relative w-full aspect-video">
            <Image
              src={src}
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
              priority={i === 0}
              loading={i === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
