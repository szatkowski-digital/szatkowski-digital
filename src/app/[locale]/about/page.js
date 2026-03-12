import About from "@/components/sections/About";
import MainTransition from "@/components/ui/MainTransition";

export default function page() {
  return (
    <MainTransition>
      <About />
    </MainTransition>
  );
}
