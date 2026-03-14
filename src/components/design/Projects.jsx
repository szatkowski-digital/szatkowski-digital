import Image from "next/image";
import Button from "../ui/Button";
import { TransitionLink } from "../utils/TransitionLink";

/**
 * ------------------------------------------------------------------
 * PROJECT 1
 * ------------------------------------------------------------------
 * Mobile app showcase with dual device preview.
 */
export function Project1({ href, t }) {
  return (
    <div className="relative flex items-center justify-center w-full h-full text-white">
      <div className="container flex flex-row items-center justify-center gap-8 max-lg:flex-col max-lg:space-y-8">
        <TextSection
          title={t("project1.title")}
          description={t("project1.description")}
          href={href}
          button={t("navigation.button")}
        />

        <div className="flex flex-row items-center justify-end gap-2 overflow-hidden lg:flex-3">
          <Image
            src="/images/smokins_app_1.webp"
            width={400}
            height={800}
            alt="Smokins mobile application preview"
            className="w-auto h-140 lg:h-160 max-lg:hidden"
          />

          <Image
            src="/images/smokins_app_2.webp"
            width={400}
            height={800}
            alt="Smokins mobile application interface"
            className="w-auto h-100 max-lg:hidden"
          />
        </div>
      </div>
    </div>
  );
}

/**
 * ------------------------------------------------------------------
 * PROJECT 2
 * ------------------------------------------------------------------
 * Single visual preview with reversed layout.
 */
export function Project2({ href, t }) {
  return (
    <div className="relative flex items-center justify-center w-full h-full text-white">
      <div className="container flex flex-row items-center justify-center gap-8 max-lg:flex-col max-lg:space-y-8">
        <div className="flex flex-row items-center justify-center gap-2 overflow-hidden lg:flex-3">
          <Image
            src="/images/smokins_app_2.webp"
            width={400}
            height={800}
            alt="Blitzform application preview"
            className="w-auto h-max max-lg:hidden"
          />
        </div>

        <TextSection
          title={t("project2.title")}
          description={t("project2.description")}
          button={t("navigation.button")}
          href={href}
        />
      </div>
    </div>
  );
}

/**
 * ------------------------------------------------------------------
 * PROJECT 3
 * ------------------------------------------------------------------
 * Minimal preview with large device showcase.
 */
export function Project3({ href, t }) {
  return (
    <div className="relative flex items-center justify-center w-full h-full text-n-1">
      <div className="container flex flex-row items-center justify-center gap-8 max-lg:flex-col max-lg:space-y-8">
        <TextSection
          title={t("project3.title")}
          description={t("project3.description")}
          href={href}
          button={t("navigation.button")}
        />

        <div className="flex flex-row items-center justify-end gap-2 overflow-hidden lg:flex-3">
          <Image
            src="/images/smokins_app_2.webp"
            width={400}
            height={800}
            alt="Side Quests application preview"
            className="w-auto h-120 lg:h-128 max-lg:hidden"
          />
        </div>
      </div>
    </div>
  );
}

/**
 * ------------------------------------------------------------------
 * TEXT SECTION
 * ------------------------------------------------------------------
 * Reusable text block used across portfolio project layouts.
 */
function TextSection({ title, description, href, button }) {
  return (
    <div className="flex flex-col items-start justify-center lg:flex-2 space-y-8">
      <h1 className="font-bold h1">{title}</h1>

      <p className="pl-12 text-lg">{description}</p>

      <TransitionLink href={href} className="self-start">
        <Button className="text-xl">{button}</Button>
      </TransitionLink>
    </div>
  );
}
