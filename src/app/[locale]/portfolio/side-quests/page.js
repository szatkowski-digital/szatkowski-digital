import HeroSection from "@/components/projects/HeroSection";
import MediaSection from "@/components/projects/MediSection";
import LogoGrid from "@/components/projects/others/LogoGrid";
import Carousel from "@/components/ui/Carousel";

const desc = `• projekty logotypów
• dobór kolorystyki marki
• typografię brandową
• podstawowe księgi znaku
• materiały startowe (wizytówki, social media)`;

const photos = [
  {
    src: "/images/side_quests/corporate-identity/brevkyV1.webp",
    width: 400,
    height: 400,
    alt: "Project preview 1",
  },
  {
    src: "/images/side_quests/corporate-identity/brevkyV2.webp",
    width: 400,
    height: 400,
    alt: "Project preview 2",
  },
  {
    src: "/images/side_quests/corporate-identity/eter.webp",
    width: 400,
    height: 400,
    alt: "Project preview 3",
  },
  {
    src: "/images/side_quests/corporate-identity/friedsOn.webp",
    width: 600,
    height: 400,
    alt: "Project preview 4",
  },
  {
    src: "/images/side_quests/corporate-identity/outdoor.webp",
    width: 400,
    height: 400,
    alt: "Project preview 5",
  },
  {
    src: "/images/side_quests/corporate-identity/physioV1.webp",
    width: 900,
    height: 400,
    alt: "Project preview 6",
  },
  {
    src: "/images/side_quests/corporate-identity/physioV2.webp",
    width: 600,
    height: 400,
    alt: "Project preview 7",
  },
  {
    src: "/images/side_quests/corporate-identity/propixiaV1.webp",
    width: 400,
    height: 400,
    alt: "Project preview 8",
  },
  {
    src: "/images/side_quests/corporate-identity/propixiaV2.webp",
    width: 400,
    height: 400,
    alt: "Project preview 9",
  },
];

export default function page() {
  return (
    <main className="bg-n-9 text-n-1">
      <HeroSection
        src="/images/blitzform_hero.webp"
        alt="BlitzForm 3D"
        title="Side Quests"
        description="Zbiór mniejszych realizacji z obszaru identyfikacji wizualnej, stron internetowych oraz materiałów marketingowych."
        keywords="Branding • Web Design • WordPress • Materiały reklamowe"
      />

      <MediaSection
        media={<LogoGrid imgs={photos} />}
        title={"Identyfikacja wizualna"}
        description={desc}
        bottomText="Kluczem do sukcesu aplikacji lojalnościowej jest prostota. Zaprojektowałem interfejs tak, aby klient miał łatwy dostęp do swojego salda i kodu identyfikacyjnego. Aplikacja stawia na wydajność – pobieranie danych jest zoptymalizowane, aby użytkownik nie czekał przy kasie."
      />

      <MediaSection
        media={
          <Carousel
            imgs={[
              "/images/blitzform_hero.webp",
              "/images/blitzform_hero.webp",
              "/images/blitzform_hero.webp",
              "/images/blitzform_hero.webp",
              "/images/blitzform_hero.webp",
            ]}
          />
        }
        title={"Strony internetowe"}
        description={desc}
      />

      <MediaSection
        media={<LogoGrid imgs={photos} />}
        title={"Materiały marketingowe"}
        description={desc}
        bottomText="Kluczem do sukcesu aplikacji lojalnościowej jest prostota. Zaprojektowałem interfejs tak, aby klient miał łatwy dostęp do swojego salda i kodu identyfikacyjnego. Aplikacja stawia na wydajność – pobieranie danych jest zoptymalizowane, aby użytkownik nie czekał przy kasie."
      />
    </main>
  );
}
