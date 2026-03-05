import HeroSection from "@/components/projects/HeroSection";
import IntroSection from "@/components/projects/smokins/IntroSection";
import AppUXSection from "@/components/projects/smokins/AppUXSection";
import SellerPanelSection from "@/components/projects/smokins/SellerPanelSection";
import TechStackSection from "@/components/projects/TechStackSection";

export default function page() {
  return (
    <main className="bg-n-9 text-n-1">
      <HeroSection
        src="/images/smokins_hero.webp"
        alt="Smokins app"
        title="Smokins Loyalty App"
        description="Cyfrowa transformacja programu lojalnościowego dla sieci retail"
        keywords="Mobile App • eCommerce • Loyalty System"
      />
      <IntroSection />
      <AppUXSection />
      <SellerPanelSection />
      <TechStackSection />
    </main>
  );
}
