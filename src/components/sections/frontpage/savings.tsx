import React from "react";
import {Button} from "../../ui/button";
import {ArrowRight} from "lucide-react";
import Image from "next/image";
import SubTitle from "../../sub-title";

const savingData = [
  {
    id: 1,
    title: "New Laptop",
    price: "400$",
    icon: "/icon/twemoji_laptop.svg",
    colorBox: "bg-[#E8F2EE]",
  },
  {
    id: 2,
    title: "Dream bike",
    price: "200$",
    icon: "/icon/twemoji_bicycle.svg",
    colorBox: "bg-[#F1DFDF]",
  },
  {
    id: 3,
    title: "Holiday",
    price: "14000$",
    icon: "/icon/twemoji_airplane.svg",
    colorBox: "bg-[#DFE1F1]",
  },
  {
    id: 4,
    title: "Camera",
    price: "100$",
    icon: "/icon/twemoji_camera-with-flash.svg",
    colorBox: "bg-[#DFEBF1]",
  },
  {
    id: 5,
    icon: "/icon/plus.svg",
    colorBox: "bg-muted-bg",
    title: "",
    price: "",
  },
];

function Savings() {
  return (
    <section className="container mx-auto 2xl:w-main px-4 lg:px-0 pt-40 flex flex-col gap-16">
      <div className="flex flex-col lg:flex-row gap-10 lg:items-end justify-between">
        <SubTitle
          notif="Saving Accounts"
          title="Organize your money the right way"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <Button
          variant={"ghost"}
          className="text-primary hover:text-primary/90 hover:bg-inverse text-[18px] font-medium font-DMSans"
        >
          All Features <ArrowRight />
        </Button>
      </div>
      <div className="flex justify-center flex-wrap items-center xl:grid grid-cols-5 gap-8.25">
        {savingData.map((item) => (
          <div className="flex flex-col gap-4" key={item.id}>
            <div
              className={`${item.colorBox} w-53.5 h-53.5 flex items-center justify-center rounded-[16px]`}
            >
              <Image
                src={item.icon}
                alt={item.title}
                width={60}
                height={60}
                loading="eager"
              />
            </div>
            <div className="flex flex-col gap-1">
              <h5 className="font-DMSans text-[20px] leading-[120%] tracking-[-3%] font-medium">
                {item.title}
              </h5>
              <p className="font-medium text-[14px] leading-[160%] text-muted/50">
                {item.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Savings;
