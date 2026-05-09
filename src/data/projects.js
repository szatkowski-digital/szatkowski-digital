export const getProjects = (t) => [
  {
    id: "01",
    title: t("project1.title"),
    label: "MOBILE ARCHITECTURE",
    description: t("project1.description"),
    image: "/images/smokins_banner.png",
    href: "/portfolio/smokins-app",
    alt: t("project1.images_alt"),
  },
  {
    id: "02",
    title: t("project2.title"),
    label: "UI ENGINEERING",
    description: t("project2.description"),
    image: "/images/blitzform_banner.png",
    href: "/portfolio/blitzform",
    alt: t("project2.images_alt"),
  },
  {
    id: "03",
    title: t("project3.title"),
    label: "INTERACTIVE EXPERIENCE",
    description: t("project3.description"),
    image: "/images/sidequests_banner.webp",
    href: "/portfolio/side-quests",
    alt: t("project3.images_alt"),
  },
];
