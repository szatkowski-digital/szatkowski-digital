import LogoGrid from "@/components/projects/others/LogoGrid";
import { Blitzform } from "@/components/pages/Blitzform";
import MainTransition from "@/components/ui/MainTransition";

export default function page() {
  return (
    <MainTransition className="bg-n-9 text-n-1">
      <Blitzform />
    </MainTransition>
  );
}
