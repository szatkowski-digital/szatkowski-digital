"use client";

import { useTranslations } from "next-intl";
import { HeroSection } from "./HeroSection";
import {
  getCTAData,
  getHeroData,
  getPersonalData,
  getPhilosophyData,
  getSkillsData,
  getTechStackData,
  getWhoAmIData,
} from "@/data/about";
import { WhoAmISection } from "./WhoAmISection";
import { SkillsSection } from "./SkillsSection";
import { TechStackSection } from "./FullStackSection";
import { PhilosophySection } from "./PhilosophySection";
import { CTASection } from "./CTASection";
import { PersonalSection } from "./PersonalSection";

/* ABOUT PAGE */
export default function About() {
  const t = useTranslations("about");
  const heroData = getHeroData(t);
  const whoAmIData = getWhoAmIData(t);
  const skillsData = getSkillsData(t);
  const techStackData = getTechStackData(t);
  const philosophyData = getPhilosophyData(t);
  const ctaData = getCTAData(t);
  const personalData = getPersonalData(t);

  return (
    <div className="shell pt-16 lg:pt-26 space-y-24 md:space-y-64">
      <HeroSection t={heroData} />

      <WhoAmISection t={whoAmIData} />

      <PhilosophySection t={philosophyData} />

      {/* <PersonalSection t={personalData} /> */}

      <SkillsSection t={skillsData} />

      <TechStackSection t={techStackData} />

      <CTASection t={ctaData} />
    </div>
  );
}
