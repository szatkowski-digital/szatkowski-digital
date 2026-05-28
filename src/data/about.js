import { Layout, Zap, Activity, Layers } from "lucide-react";

export const getHeroData = (t) => ({
  subtitle: "Full-Stack Software Engineer",
  title_line1: t("hero.title_line1"),
  title_gradient: t("hero.title_gradient"),
  title_line2: t("hero.title_line2"),
  description: t("hero.description"),
});

export const getWhoAmIData = (t) => ({
  number: t("whoAmI.header.number"),
  title: t("whoAmI.header.title"),
  mainStatement: t("whoAmI.main_statement"),
  paragraph1: t("whoAmI.paragraph_1"),
  paragraph2: t("whoAmI.paragraph_2"),
});

export const getSkillsData = (t) => ({
  header: {
    number: t("skills.header.number"),
    title: t("skills.header.title"),
  },
  items: t.raw("skills.items"),
});

export const getTechStackData = (t) => {
  const stack = [
    { name: "React", url: "https://react.dev" },
    { name: "Next.js", url: "https://nextjs.org" },
    { name: "Node.js", url: "https://nodejs.org" },
    { name: "Tailwind CSS", url: "https://tailwindcss.com" },
    { name: "JavaScript", url: "https://developer.mozilla.org/en/JavaScript" },
    { name: "React Native", url: "https://reactnative.dev" },
    { name: "Motion", url: "https://www.framer.com/motion" },
    { name: "Vite", url: "https://vitejs.dev" },
    { name: "Python", url: "https://www.python.org" },
    { name: "Appwrite", url: "https://appwrite.io" },
    { name: "Firebase", url: "https://firebase.google.com" },
  ];

  return {
    header: {
      number: t("techStack.header.number"),
      title: t("techStack.header.title"),
    },
    technologies: stack,
  };
};

export const getPhilosophyData = (t) => {
  const icons = [Layout, Zap, Activity, Layers];
  const rawItems = t.raw("philosophy.items");

  return {
    exploreLabel: t("philosophy.explore"),
    discoverLabel: t("philosophy.discover"),
    items: rawItems.map((item, index) => ({
      ...item,
      icon: icons[index] || Layout,
    })),
  };
};

export const getCTAData = (t) => ({
  title1: t("cta.title_1"),
  title2: t("cta.title_2"),
  buttonLabel: t("cta.button"),
  footer: {
    left: t("cta.footer.left"),
    middle: t("cta.footer.middle"),
    right: t("cta.footer.right"),
  },
});

export const getPersonalData = (t) => ({
  subtitle: t("personal.subtitle"),
  quote: t("personal.quote"),
});
