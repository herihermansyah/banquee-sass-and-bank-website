import React from "react";
import SubTitle from "../../sub-title";
import Image from "next/image";
import {Button} from "../../ui/button";

function Cards() {
  return (
    <section className="border-t border-t-gray-200 pt-40">
      <div className="container mx-auto 2xl:w-main px-4 lg:px-0 flex flex-col items-center gap-14">
        <SubTitle
          className="items-center text-center"
          titleClass="sm:w-[450px]"
          descriptionClass="sm:w-[500px]"
          notif="Account"
          title="Perfect card for your needs."
          description="Senectus et netus et malesuada fames ac turpis. Sagittis vitae et leo duis ut diam."
        />
        <Image src="/cards2.svg" alt="card image" width={500} height={500} />
        <div className="flex items-center gap-4 flex-wrap justify-center">
          <Button className="px-6 py-6 text-[18px] font-medium font-DMSans">
            Open Account
          </Button>
          <Button className="px-6 py-6 text-[18px] font-medium font-DMSans bg-inverse text-default border border-gray-200">
            Compare Cards
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Cards;
