import MembershipTier from "@/components/membership-tier";
import SubTitle from "@/components/sub-title";
import React from "react";

function ChooseCard() {
  return (
    <section className="container mx-auto 2xl:w-main px-4 lg:px-0 py-40">
      <div className="flex flex-col items-center justify-center gap-24">
        <SubTitle
          className="items-center justify-center"
          notif="Accounts"
          title="Choose your card."
          titleClass="text-center"
          description="Senectus et netus et malesuada fames ac turpis. Sagittis vitae et leo duis ut diam."
          descriptionClass="text-center sm:w-[480px]"
        />
        <MembershipTier />
      </div>
    </section>
  );
}

export default ChooseCard;
