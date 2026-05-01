"use client";
import Image from "next/image";
import {useRouter} from "next/navigation";
import React from "react";
import {Button} from "./ui/button";

const cardData = [
  {
    id: 1,
    variant: "Basic",
    popular: "true",
    price: 0,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/cards/card1.svg",
    href: "/basic",
  },
  {
    id: 2,
    variant: "Premium",
    popular: "false",
    price: 5,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/cards/card2.svg",
    href: "/premium",
  },
  {
    id: 3,
    variant: "Gold",
    popular: "false",
    price: 10,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/cards/card3.svg",
    href: "/gold",
  },
];

type MembershipTierProps = {
  imageSize?: string;
};

function MembershipTier({imageSize}: MembershipTierProps) {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center flex-wrap gap-16">
      {cardData.map((item) => (
        <div
          key={item.id}
          className="flex flex-col gap-6 items-center justify-center"
        >
          <div className="flex items-center gap-2">
            <h5 className="font-medium font-DMSans text-[20px] leading-[120%] tracking-[-3%]">
              {item.variant}
            </h5>
            {item.popular === "true" && (
              <span className="px-1.5 bg-primary-light text-primary rounded-sm font-medium text-[12px]">
                Popular
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2 items-center justify-center">
            <h5 className="font-DMSans font-bold text-[40px] ">
              {item.price === 0
                ? "Free"
                : `${item.price.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                    minimumFractionDigits: 0,
                  })}`}
              {item.price !== 0 && (
                <span className="font-medium text-[16px] text-muted/50">
                  {" "}
                  per mont
                </span>
              )}
            </h5>
            <p className="w-75 text-center text-[16px] font-medium leading-[160%] text-muted/50">
              {item.description}
            </p>
          </div>
          <Image
            src={item.image}
            alt={item.variant}
            width={355}
            height={213}
            loading="eager"
            className={imageSize}
          />
          <Button
            className="w-full rounded-[6px] px-4 py-5 font-DMSans font-medium text-inverse bg-primary"
            onClick={() => router.push(item.href)}
          >
            Get started
          </Button>
        </div>
      ))}
    </div>
  );
}

export default MembershipTier;
