"use client";

import { useTranslations } from "next-intl";
import { HeroSection } from "./HeroSection";
import {
  getCTAData,
  getHeroData,
  getApproachData,
  getTechStackData,
  getWhoAmIData,
} from "@/data/about";
import { WhoAmISection } from "./WhoAmISection";
import { TechStackSection } from "./FullStackSection";
import { CoreCapabilitiesSection } from "./CoreCapabilitiesSection";
import { CTASection } from "./CTASection";

/* ABOUT PAGE */
export default function About() {
  const t = useTranslations("about");
  const heroData = getHeroData(t);
  const whoAmIData = getWhoAmIData(t);
  const techStackData = getTechStackData(t);
  const approachData = getApproachData(t);
  const ctaData = getCTAData(t);

  return (
    <div className="shell pt-16 lg:pt-26 space-y-24 md:space-y-64">
      <HeroSection t={heroData} />

      <WhoAmISection t={whoAmIData} />

      <CoreCapabilitiesSection t={approachData} />

      <TechStackSection t={techStackData} />

      <CTASection t={ctaData} />
    </div>
  );
}
