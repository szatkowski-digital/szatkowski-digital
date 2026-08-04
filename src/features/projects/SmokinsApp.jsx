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

export function SmokinsApp() {
  const t = useTranslations("projects.smokins");
  const introData = getIntroData(t);
  const appUxData = getMediaSectionData(t, "appUx");
  const sellerPanelData = getMediaSectionData(t, "sellerPanel");
  const techStackData = getTechStackData(t);
  const heroData = getHeroData(t);

  return (
    <div className="shell">
      <HeroSection
        src="/images/smokins_banner_hero.avif"
        t={heroData}
        tech={["React Native", "JavaScript", "Appwrite"]}
      />

      <IntroSection t={introData} />

      <MediaSection
        t={appUxData}
        media={
          <Image
            src="/images/smokins_appUx.webp"
            width={892}
            height={612}
            alt={t("appUx.title")}
            priority
            className="w-full h-full object-contain object-center"
          />
        }
      />

      <MediaSection
        t={sellerPanelData}
        media={
          <Image
            src="/images/smokins_sellerPanel.webp"
            width={892}
            height={612}
            alt={t("sellerPanel.title")}
            priority
            className="w-full h-full object-contain object-center"
          />
        }
      />

      <TechStackSection
        t={techStackData}
        onNextProject="/portfolio/blitzform"
      />
    </div>
  );
}
