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

import LogoGrid from "./components/LogoGrid";
import Carousel from "@/features/projects/components/Carousel";

export function SideQuests() {
  const t = useTranslations("projects.sideQuests");
  const introData = getIntroData(t);
  const corporateIdentityData = getMediaSectionData(t, "corporateIdentity");
  const projects3dData = getMediaSectionData(t, "projects3d");
  const websitesData = getMediaSectionData(t, "websites");
  const techStackData = getTechStackData(t);
  const heroData = getHeroData(t);

  return (
    <div className="shell">
      <HeroSection
        src="/images/sidequests_banner.webp"
        t={heroData}
        tech={["WordPress", "Figma", "3D Modeling"]}
      />

      <IntroSection t={introData} />

      <MediaSection
        t={corporateIdentityData}
        media={<LogoGrid imgs={corporateIdentityImages} />}
      />

      <MediaSection
        t={projects3dData}
        media={<LogoGrid imgs={projects3dImages} />}
      />

      <MediaSection
        t={websitesData}
        media={
          <Carousel
            imgs={[
              "/images/side-quests/websites/website_brevky.avif",
              "/images/side-quests/websites/website_eter.avif",
              "/images/side-quests/websites/website_blancotrade.avif",
              "/images/side-quests/websites/website_smokins.avif",
            ]}
          />
        }
      />

      <TechStackSection
        t={techStackData}
        onNextProject="/portfolio/smokins-app"
      />
    </div>
  );
}

const corporateIdentityImages = [
  {
    src: "/images/side-quests/corporate-identity/brevkyV1.webp",
    width: 400,
    height: 400,
    alt: "Project preview 1",
  },
  {
    src: "/images/side-quests/corporate-identity/brevkyV2.webp",
    width: 400,
    height: 400,
    alt: "Project preview 2",
  },
  {
    src: "/images/side-quests/corporate-identity/eter.webp",
    width: 400,
    height: 400,
    alt: "Project preview 3",
  },
  {
    src: "/images/side-quests/corporate-identity/friedsOn.webp",
    width: 600,
    height: 400,
    alt: "Project preview 4",
  },
  {
    src: "/images/side-quests/corporate-identity/outdoor.webp",
    width: 400,
    height: 400,
    alt: "Project preview 5",
  },
  {
    src: "/images/side-quests/corporate-identity/physioV1.webp",
    width: 900,
    height: 400,
    alt: "Project preview 6",
  },
  {
    src: "/images/side-quests/corporate-identity/physioV2.webp",
    width: 600,
    height: 400,
    alt: "Project preview 7",
  },
  {
    src: "/images/side-quests/corporate-identity/propixiaV1.webp",
    width: 400,
    height: 400,
    alt: "Project preview 8",
  },
  {
    src: "/images/side-quests/corporate-identity/propixiaV2.webp",
    width: 400,
    height: 400,
    alt: "Project preview 9",
  },
];

const projects3dImages = [
  {
    src: "/images/side-quests/marketiong-3d/newdelhi_banner.avif",
    width: 600,
    height: 400,
    alt: "Project preview 1",
  },
  {
    src: "/images/side-quests/marketiong-3d/newdelhi_book.avif",
    width: 400,
    height: 400,
    alt: "Project preview 2",
  },
  {
    src: "/images/side-quests/marketiong-3d/newdelhi_leaflet_n.avif",
    width: 600,
    height: 400,
    alt: "Project preview 1",
  },
  {
    src: "/images/side-quests/marketiong-3d/3d_tables_render.avif",
    width: 600,
    height: 400,
    alt: "Project preview 2",
  },
  {
    src: "/images/side-quests/marketiong-3d/3d_rims_render.avif",
    width: 400,
    height: 400,
    alt: "Project preview 1",
  },
  {
    src: "/images/side-quests/marketiong-3d/3d_bathroom_render.avif",
    width: 400,
    height: 400,
    alt: "Project preview 2",
  },
  {
    src: "/images/side-quests/marketiong-3d/msi_render.avif",
    width: 600,
    height: 400,
    alt: "Project preview 2",
  },
  {
    src: "/images/side-quests/marketiong-3d/newdelhi_leaflet.avif",
    width: 400,
    height: 600,
    alt: "Project preview 2",
  },
  {
    src: "/images/side-quests/marketiong-3d/eter_poster.avif",
    width: 400,
    height: 600,
    alt: "Project preview 2",
  },
  {
    src: "/images/side-quests/marketiong-3d/newdelhi_menu.avif",
    width: 400,
    height: 600,
    alt: "Project preview 2",
  },
];
