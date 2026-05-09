import About from "@/features/about";
import MainTransition from "@/components/ui/MainTransition";

export default function page() {
  return (
    <MainTransition>
      <About />
    </MainTransition>
  );
}
