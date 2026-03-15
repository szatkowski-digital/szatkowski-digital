"use client";

import { CircleCheckBig } from "lucide-react";
import { useTranslations } from "next-intl";

import GradientDiv from "../design/GradientDiv";
import Card from "../ui/Card";
import Button from "../ui/Button";

import { skillsConfig } from "@/config/icons";
import { TransitionLink } from "../utils/TransitionLink";

/**
 * ------------------------------------------------------------------
 * ABOUT PAGE
 * ------------------------------------------------------------------
 * Main structure of the About page.
 * Contains:
 * - Hero introduction
 * - Modern web philosophy
 * - Skills overview
 * - Portfolio call to action
 */

export default function About() {
  const t = useTranslations("about");

  const paragraphs = t.raw("hero.paragraphs");
  const points = t.raw("modernWeb.points");
  const skills = t.raw("skills");

  return (
    <div className="relative h-full overflow-y-auto box-border">
      <div className="space-y-12">
        <AboutHero
          header={t("hero.header")}
          title={t("hero.title")}
          intro={t("hero.intro")}
          paragraphs={paragraphs}
        />

        <ModernWebSection title={t("modernWeb.title")} points={points} />

        <SkillsSection skills={skills} />

        <PortfolioCTA
          tagline={t("CTA.tagline")}
          title={t("CTA.title")}
          button={t("CTA.button")}
        />
      </div>
    </div>
  );
}

/**
 * ------------------------------------------------------------------
 * ABOUT HERO
 * ------------------------------------------------------------------
 * Introductory section presenting the developer.
 */

function AboutHero({ header, title, intro, paragraphs }) {
  return (
    <section className="container flex flex-col pt-24 lg:pt-72 lg:flex-row max-lg:space-y-8 py-6 lg:py-24">
      <div>
        <h1 className="h1 font-black whitespace-pre-line">{header}</h1>
        <h5 className="h5 font-medium">{title}</h5>
      </div>

      <div className="lg:pl-32 space-y-2 lg:space-y-8">
        <h2 className="h3">{intro}</h2>

        {paragraphs.map((p, i) => (
          <p key={i} className="h6">
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}

/**
 * ------------------------------------------------------------------
 * MODERN WEB SECTION
 * ------------------------------------------------------------------
 * Describes philosophy and approach to modern web development.
 */

function ModernWebSection({ title, points }) {
  return (
    <section className="container-xl">
      <GradientDiv fade="bottom" gradient="br">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full px-2 space-y-4 lg:w-2/3 lg:space-y-8">
            <h2 className="h3 lg:h2 pb-2 lg:pb-8">{title}</h2>

            <div className="space-y-4 lg:px-8 lg:space-y-8 body-1">
              {points.map((point, i) => (
                <PointItem key={i} text={point} />
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/3" />
        </div>
      </GradientDiv>
    </section>
  );
}

function PointItem({ text }) {
  return (
    <div className="body-sm flex items-center space-x-4 lg:space-x-8">
      <CircleCheckBig className="w-4 h-4 lg:w-6 lg:h-6 shrink-0" />
      <p>{text}</p>
    </div>
  );
}

/**
 * ------------------------------------------------------------------
 * SKILLS SECTION
 * ------------------------------------------------------------------
 * Displays technology stack and capabilities.
 */

function SkillsSection({ skills }) {
  return (
    <section className="container flex flex-wrap justify-between items-center gap-6">
      {skills.map((skill) => {
        const config = skillsConfig[skill.id];

        return (
          <Card
            key={skill.id}
            title={skill.title}
            subtitle={skill.subtitle}
            icon={config.icon}
          />
        );
      })}
    </section>
  );
}

/**
 * ------------------------------------------------------------------
 * PORTFOLIO CTA
 * ------------------------------------------------------------------
 * Final section directing the user to portfolio projects.
 */

function PortfolioCTA({ tagline, title, button }) {
  return (
    <section className="container-xl pb-24">
      <GradientDiv fade="top" gradient="tl">
        <div className="flex flex-col items-center justify-center space-y-4">
          <h3 className="body-lg text-center">{tagline}</h3>

          <h2 className="h2 text-center pb-4 lg:pb-8">{title}</h2>

          <TransitionLink href="/portfolio">
            <Button className="text-xl">{button}</Button>
          </TransitionLink>
        </div>
      </GradientDiv>
    </section>
  );
}
