"use client";

import { useTranslations } from "next-intl";
import {
  getIntroData,
  getMediaSectionData,
  getTechStackData,
} from "@/data/projectData";

import HeroSection from "./HeroSection";
import IntroSection from "./IntroSection";
import TechStackSection from "./TechStackSection";
import MediaSection from "./MediaSection";

import Image from "next/image";

export function SmokinsApp() {
  const t = useTranslations("projects.smokins");
  const introData = getIntroData(t);
  const appUxData = getMediaSectionData(t, "appUx");
  const sellerPanelData = getMediaSectionData(t, "sellerPanel");
  const techStackData = getTechStackData(t);

  return (
    <section className="shell">
      <HeroSection
        src="/images/smokins_banner.webp"
        alt="Smokins app"
        title="Smokins Loyalty App"
        description="Cyfrowa transformacja programu lojalnościowego dla sieci retail"
        keywords="Mobile App • eCommerce • Loyalty System"
      />

      <IntroSection t={introData} />

      <MediaSection
        t={appUxData}
        media={
          <Image
            src="/images/smokins_app_UX.webp"
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

      <TechStackSection t={techStackData} />
    </section>
  );
}
