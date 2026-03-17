import React from "react";
import HeroSection from "../projects/HeroSection";
import Carousel from "../ui/Carousel";
import MediaSection from "../projects/MediaSection";

const images = [
  "/images/blitzform_hero.webp",
  "/images/blitzform_hero.webp",
  "/images/blitzform_hero.webp",
];

export const Blitzform = () => {
  return (
    <div className="pb-20">
      <HeroSection
        src="/images/blitzform_banner.webp"
        alt="BlitzForm 3D"
        title="BlitzForm"
        description="Cyfrowa transformacja programu lojalnościowego dla sieci retail"
        keywords="Mobile App • eCommerce • Loyalty System"
      />
    </div>
  );
};
