import Cards from "@/components/sections/frontpage/cards";
import Cta from "@/components/cta";
import Faq from "@/components/faq";
import Features from "@/components/sections/frontpage/features";
import Notifications from "@/components/sections/frontpage/notifications";
import Savings from "@/components/sections/frontpage/savings";
import Testimonials from "@/components/sections/frontpage/testimonials";
import Tools from "@/components/sections/frontpage/tools";
import Transactions from "@/components/sections/frontpage/transactions";
import React from "react";
import {HeroHome} from "@/components/hero";
import Blog from "@/components/sections/frontpage/blog";

function page() {
  return (
    <div>
      <HeroHome />
      <Features />
      <Transactions />
      <Savings />
      <Notifications />
      <Tools />
      <Cards />
      <Testimonials />
      <Cta />
      <Faq />
      <Blog />
    </div>
  );
}

export default page;
