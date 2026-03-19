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
    <div className="relative flex items-center justify-center w-full h-full text-n-1">
      <div
        className={`
          relative
          container
          flex flex-col lg:flex-row
          items-center justify-end lg:justify-center
          lg:gap-8 h-full w-full
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
        <div className="flex items-center justify-center w-full h-auto lg:w-1/2 overflow-hidden">
          <Image
            src={image}
            width={1600}
            height={1200}
            alt={alt}
            priority
            className="object-contain lg:object-cover"
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
    <div className="flex flex-col justify-center w-full lg:w-1/2 space-y-4 lg:space-y-8 text-center lg:text-left max-w-lg">
      <h1 className="font-bold h1">{title}</h1>

      <p className="text-lg lg:pl-6 xl:pl-12">{description}</p>

      <TransitionLink href={href} className="self-center lg:self-start">
        <Button className="text-xl">{button}</Button>
      </TransitionLink>
    </div>
  );
}
