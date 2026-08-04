import MainTransition from "@/components/ui/MainTransition";
import { SideQuests } from "@/features/projects/SideQuests";

export default function page() {
  return (
    <MainTransition>
      <SideQuests />
    </MainTransition>
  );
}
