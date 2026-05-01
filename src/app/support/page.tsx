import {CtaTwo} from "@/components/cta";
import {HeroCompare} from "@/components/hero";
import FaqSupport from "@/components/sections/support/faq-support";
import React from "react";

function page() {
  return (
    <div>
      <HeroCompare image="/app3.svg" imageClass="w-[380px] h-[800px]" />
      <CtaTwo />
      <FaqSupport />
    </div>
  );
}

export default page;
