import Image from "next/image";
import Button from "../ui/Button";
import { TransitionLink } from "../utils/TransitionLink";

/**
 * ------------------------------------------------------------------
 * SHARED PROJECT
 * ------------------------------------------------------------------
 */
function Project({ title, description, href, button, image, alt, reverse }) {
  return (
    <div className="relative flex items-center justify-center w-full h-full text-white">
      <div
        className={`
          container flex items-center justify-center gap-8 flex-collg:flex-row
          ${reverse ? "lg:flex-row-reverse" : ""}
          `}
      >
        {/* TEXT */}
        <TextSection
          title={title}
          description={description}
          href={href}
          button={button}
        />

        {/* IMAGE */}
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <Image
            src={image}
            width={1440}
            height={1440}
            alt={alt}
            className="w-auto object-contain h-[300px] sm:h-[400px] lg:h-[550px] xl:h-[750px] 2xl:h-[900px]"
            priority
          />
        </div>
      </div>
    </div>
  );
}

/**
 * ------------------------------------------------------------------
 * PROJECT 1
 * ------------------------------------------------------------------
 */
export function Project1({ href, t }) {
  return (
    <Project
      title={t("project1.title")}
      description={t("project1.description")}
      button={t("navigation.button")}
      href={href}
      image="/images/smokins_app.webp"
      alt="Smokins application"
      reverse={false}
    />
  );
}

/**
 * ------------------------------------------------------------------
 * PROJECT 2
 * ------------------------------------------------------------------
 */
export function Project2({ href, t }) {
  return (
    <Project
      title={t("project2.title")}
      description={t("project2.description")}
      button={t("navigation.button")}
      href={href}
      image="/images/blitzform.webp"
      alt="Blitzform application"
      reverse={true}
    />
  );
}

/**
 * ------------------------------------------------------------------
 * PROJECT 3
 * ------------------------------------------------------------------
 */
export function Project3({ href, t }) {
  return (
    <Project
      title={t("project3.title")}
      description={t("project3.description")}
      button={t("navigation.button")}
      href={href}
      image="/images/side_quests.webp"
      alt="Side Quests"
      reverse={false}
    />
  );
}

/**
 * ------------------------------------------------------------------
 * TEXT SECTION
 * ------------------------------------------------------------------
 */
function TextSection({ title, description, href, button }) {
  return (
    <div className="flex flex-col justify-center w-full lg:w-1/2 space-y-8 text-center lg:text-left">
      <h1 className="font-bold h1">{title}</h1>

      <p className="text-lg lg:pl-12">{description}</p>

      <TransitionLink href={href} className="self-center lg:self-start">
        <Button className="text-xl">{button}</Button>
      </TransitionLink>
    </div>
  );
}
