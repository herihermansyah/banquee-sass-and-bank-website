import Cta from "@/components/cta";
import Faq from "@/components/faq";
import { HeroFeatures } from "@/components/hero";
import ChooseCard from "@/components/sections/features/choose-card";
import FeaturesOne from "@/components/sections/features/features-one";
import FeaturesTwo from "@/components/sections/features/features-two";
import React from "react";

function page() {
  return (
    <div>
      <HeroFeatures />
      <FeaturesOne />
      <FeaturesTwo />
      <ChooseCard />
      <Cta />
      <Faq />
    </div>
  );
}

export default page;
