import MainTransition from "@/components/ui/MainTransition";
import { SmokinsApp } from "@/features/projects/SmokinsApp";

export default function page() {
  return (
    <MainTransition>
      <SmokinsApp />
    </MainTransition>
  );
}
