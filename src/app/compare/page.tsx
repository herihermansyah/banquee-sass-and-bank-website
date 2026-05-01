import {CtaTwo} from "@/components/cta";
import {HeroCompare} from "@/components/hero";
import TableCompare from "@/components/sections/compare/table-compare";
import React from "react";

function page() {
  return (
    <div>
      <HeroCompare image="/cards/cardstriple2.svg" imageClass="min-w-lg" />
      <TableCompare />
      <CtaTwo />
    </div>
  );
}

export default page;
