import About from "@/components/pages/About";
import Test from "@/components/pages/Test";
import MainTransition from "@/components/ui/MainTransition";

export default function page() {
  return (
    <MainTransition>
      <Test />
      {/* <About /> */}
    </MainTransition>
  );
}
