"use client";

import { useTranslations } from "next-intl";
import {
  getHeroData,
  getIntroData,
  getMediaSectionData,
  getTechStackData,
} from "@/data/projectData";

import HeroSection from "./components/HeroSection";
import IntroSection from "./components/IntroSection";
import TechStackSection from "./components/TechStackSection";
import MediaSection from "./components/MediaSection";

import Image from "next/image";
import Carousel from "@/features/projects/components/Carousel";

export function Blitzform() {
  const t = useTranslations("projects.blitzform");
  const introData = getIntroData(t);
  const appUxData = getMediaSectionData(t, "appUx");
  const sellerPanelData = getMediaSectionData(t, "mobileUx");
  const techStackData = getTechStackData(t);
  const heroData = getHeroData(t);

  return (
    <div className="shell">
      <HeroSection
        src="/images/blitzform_banner.webp"
        t={heroData}
        tech={["Next.js", "JavaScript / TypeScript", "Motion"]}
      />

      <IntroSection t={introData} />

      <MediaSection
        t={appUxData}
        media={
          <Carousel
            imgs={[
              "/images/blitzform/blitzform_home_ss.avif",
              "/images/blitzform/blitzform_tech_ss.avif",
              "/images/blitzform/blitzform_about_ss.avif",
              "/images/blitzform/blitzform_contact_ss.avif",
            ]}
          />
        }
      />

      <MediaSection
        t={sellerPanelData}
        media={
          <Carousel
            imgs={[
              "/images/blitzform/blitzform_mobile_hero.avif",
              "/images/blitzform/blitzform_mobile_info.avif",
            ]}
          />
        }
      />

      <TechStackSection
        t={techStackData}
        onNextProject="/portfolio/side-quests"
      />
    </div>
  );
}
