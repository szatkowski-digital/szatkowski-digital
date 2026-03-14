"use client";

import { CircleCheckBig } from "lucide-react";
import { useTranslations } from "next-intl";
import GradientDiv from "../design/GradientDiv";
import { skillsConfig } from "@/config/icons";
import Card from "../ui/Card";
import Button from "../ui/Button";
import Link from "next/link";

const About = () => {
  const t = useTranslations("about");
  const paragraphs = t.raw("hero.paragraphs");
  const points = t.raw("modernWeb.points");
  const skills = t.raw("skills");

  return (
    <div className="relative h-full overflow-y-auto box-border">
      <div className="space-y-12">
        {/* First section - About Me */}
        <div className="container flex flex-col pt-24 lg:pt-72 lg:flex-row max-lg:space-y-8 py-6 lg:py-24">
          <div>
            <h1 className="h1 font-black whitespace-pre-line">
              {t("hero.header")}
            </h1>
            <h5 className="h5 font-medium">{t("hero.title")}</h5>
          </div>

          <div className="lg:pl-[8rem] space-y-2 lg:space-y-8">
            <h2 className="h3">{t("hero.intro")}</h2>
            {paragraphs.map((p, i) => (
              <p key={i} className="h6">
                {p}
              </p>
            ))}
          </div>
        </div>

        {/* Second section - Build modern web */}
        <div className="container-xl">
          <GradientDiv fade="bottom" gradient="br">
            <div className="flex flex-col lg:flex-row">
              <div className="w-full px-2 space-y-4 lg:w-2/3 lg:space-y-8">
                <h2 className="h3 lg:h2 pb-2 lg:pb-8">
                  {t("modernWeb.title")}
                </h2>
                <div className="space-y-4 lg:px-8 lg:space-y-8 body-1">
                  {points.map((point, i) => (
                    <div
                      key={i}
                      className="body-sm flex items-center space-x-4 lg:space-x-8"
                    >
                      <CircleCheckBig className="w-4 h-4 lg:w-6 lg:h-6 shrink-0" />
                      <p>{point}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full lg:w-1/3"></div>
            </div>
          </GradientDiv>
        </div>

        {/* Third section - Skills */}
        <div className="container flex flex-wrap justify-between items-center gap-6">
          {skills.map((skill, index) => {
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
        </div>

        {/* Fourth section - Portfolio call to action */}
        <div className="container-xl pb-24">
          <GradientDiv fade="top" gradient="tl">
            <div className="flex flex-col items-center justify-center space-y-4">
              <h3 className="body-lg text-center">{t("CTA.tagline")}</h3>
              <h2 className="h2 text-center pb-4 lg:pb-8">{t("CTA.title")}</h2>
              <Link href="/portfolio">
                <Button className="text-xl">{t("CTA.button")}</Button>
              </Link>
            </div>
          </GradientDiv>
        </div>
      </div>
    </div>
  );
};

export default About;
