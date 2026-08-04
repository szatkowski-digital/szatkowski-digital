import LogoGrid from "@/features/projects/components/LogoGrid";
import MainTransition from "@/components/ui/MainTransition";
import { Blitzform } from "@/features/projects/Blitzform";

export default function page() {
  return (
    <MainTransition>
      <Blitzform />
    </MainTransition>
  );
}
