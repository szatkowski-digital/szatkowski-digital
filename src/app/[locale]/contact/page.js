import Contact from "@/components/pages/Contact";
import MainTransition from "@/components/ui/MainTransition";
import React from "react";

export default function page() {
  return (
    <MainTransition>
      <Contact />
    </MainTransition>
  );
}
