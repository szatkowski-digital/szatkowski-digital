import Portfolio from "@/features/portfolio";
import MainTransition from "@/components/ui/MainTransition";

export default function page() {
  return (
    <MainTransition>
      <Portfolio />
    </MainTransition>
  );
}
