export const getHeroData = (t) => ({
  alt: t("hero.alt"),
  title: t("hero.title"),
  description: t("hero.description"),
  keywords: t("hero.keywords"),
});

export const getIntroData = (t) => ({
  mainText: t("intro.mainText"),
  subText: t("intro.subText"),
  techText: t("intro.techText"),
});

export const getMediaSectionData = (t, keyPrefix) => ({
  title: t(`${keyPrefix}.title`),
  description: t(`${keyPrefix}.description`),
  bottomText: t(`${keyPrefix}.bottomText`),
});

export const getTechStackData = (t) => ({
  categories: [
    {
      step: "01",
      title: t(`techStack.designTitle`),
      description: t(`techStack.designDesc`),
    },
    {
      step: "02",
      title: t(`techStack.techTitle`),
      description: t(`techStack.techDesc`),
    },
    {
      step: "03",
      title: t(`techStack.backendTitle`),
      description: t(`techStack.backendDesc`),
    },
  ],
  title: t(`techStack.title`),
  buttonText: t(`techStack.buttonText`),
});
