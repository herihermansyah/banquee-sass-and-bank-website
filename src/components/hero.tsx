import {Check} from "lucide-react";
import React from "react";
import Image from "next/image";
import ButtonAction from "@/components/button-action";
import SubTitle from "@/components/sub-title";

const dataHero = [
  {id: 1, description: "Instant Transfer", icon: <Check size={18} />},
  {id: 2, description: "Payments worldwide", icon: <Check size={18} />},
  {id: 3, description: "Saving accounts", icon: <Check size={18} />},
  {id: 4, description: "100% mobile banking", icon: <Check size={18} />},
];

export function HeroHome() {
  return (
    <section className="container mx-auto px-4 lg:px-0 2xl:w-main flex flex-col-reverse lg:flex-row gap-20 justify-between items-center py-10 lg:py-32">
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-8">
          <SubTitle
            title="Banking starts here."
            titleClass="sm:w-[400px]"
            descriptionClass="sm:w-[500px]"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
          />
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-4">
            {dataHero.map((item) => (
              <li key={item.id} className="flex items-center gap-4">
                <div className="bg-primary-light rounded-full text-primary p-1">
                  {item.icon}
                </div>
                <p className="text-[18px] font-medium whitespace-nowrap">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <ButtonAction />
      </div>
      <div>
        <Image
          src="/cards.png"
          alt="card hero"
          width={399}
          height={578}
          loading="eager"
        />
      </div>
    </section>
  );
}

const heroCard = [
  {image: "/cards/cardgold.svg", offset: "mt-96"},
  {image: "/cards/cardblack.svg", offset: "mt-48"},
  {image: "/cards/cardgreen.svg", offset: "mt-0"},
  {image: "/cards/cardblack.svg", offset: "mt-48"},
  {image: "/cards/cardgold.svg", offset: "mt-96"},
];

export function HeroFeatures() {
  return (
    <section className="bg-primary-light pt-10 lg:pt-32 relative overflow-hidden h-217">
      <div className="container mx-auto 2xl:w-main px-4 lg:px-0">
        <div className="flex flex-col items-center  gap-8">
          <SubTitle
            className="flex flex-col items-center text-center"
            notif="Features"
            title="All in one card."
            description="Senectus et netus et malesuada fames ac turpis. Sagittis vitae et leo duis ut diam."
            descriptionClass="sm:w-[500px]"
          />
          <ButtonAction />
        </div>
      </div>
      <div className="flex items-center w-max gap-3 lg:gap-16.5 absolute top-60 lg:top-84 left-1/2 -translate-x-1/2">
        {heroCard.map((item, index) => (
          <Image
            key={index}
            src={item.image}
            alt="card image"
            width={300}
            height={500}
            loading="eager"
            className={item.offset}
          />
        ))}
      </div>
    </section>
  );
}

type HeroCompareType = {
  image: string;
  imageClass: string;
};

export function HeroCompare({image, imageClass}: HeroCompareType) {
  return (
    <section className="bg-primary-light pt-15 pb-100 lg:py-32 overflow-hidden">
      <div className="container mx-auto 2xl:w-wide px-4 lg:px-0 flex flex-col lg:flex-row items-center justify-between relative">
        <SubTitle
          className="items-center lg:items-start"
          notif="Compare Cards"
          title="The ideal card for you"
          titleClass="sm:w-[350px] text-center lg:text-start"
        />
        <div className="absolute top-60 lg:-top-10 lg:right-0">
          <Image
            src={image}
            alt="image card"
            width={512}
            height={574}
            loading="eager"
            className={imageClass}
          />
        </div>
      </div>
    </section>
  );
}
