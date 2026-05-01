import React from "react";
import SubTitle from "../../sub-title";
import {ArrowRight, Check} from "lucide-react";
import {Button} from "../../ui/button";
import Image from "next/image";

const transactionsData = [
  {id: 1, description: "Malesuada Ipsum", icon: <Check size={18} />},
  {id: 2, description: "Vestibulum", icon: <Check size={18} />},
  {id: 3, description: "Parturient Lorem", icon: <Check size={18} />},
];

const transactionData2 = [
  {
    id: 1,
    image: "/icon/b..svg",
    title: "Banko.",
    description: "You payment of 49€ has been processed!",
  },
  {
    id: 2,
    image: "/icon/b..svg",
    title: "Banko.",
    description: "You got a new support message!",
  },
  {
    id: 3,
    image: "/icon/b..svg",
    title: "Banko.",
    description: "You payment was declined!",
  },
  {
    id: 4,
    image: "/icon/b..svg",
    title: "Banko.",
    description: "Please verify your payment of 99€!",
  },
  {
    id: 5,
    image: "/icon/b..svg",
    title: "Banko.",
    description: "New account statistics are available!",
  },
];

function Notifications() {
  return (
    <section className="container mx-auto 2xl:w-main px-4 lg:px-0 pt-40 flex lg:flex-row flex-col gap-10 items-center justify-between">
      <div>
        <SubTitle
          notif="Notifications"
          title="Stay notified"
          description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        />
        <ul className="flex flex-col gap-3 mt-8 mb-12">
          {transactionsData.map((item) => (
            <li key={item.id} className="flex items-center gap-4">
              <div className="bg-primary-light rounded-full text-primary p-1">
                {item.icon}
              </div>
              <p className="font-medium text-[18px] leading-[180%]">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
        <Button
          variant={"ghost"}
          className="text-primary hover:text-primary/90 hover:bg-inverse text-[18px] font-medium font-DMSans"
        >
          Compare Cards <ArrowRight />
        </Button>
      </div>
      <div className="flex flex-col gap-4 items-start">
        {transactionData2.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 p-4 bg-muted-bg rounded-[10px] w-80 sm:w-124.5"
          >
            <div className="bg-primary w-12.5 h-12.5 flex items-center justify-center rounded-[10px]">
              <Image
                src={item.image}
                alt={item.title}
                width={25}
                height={25}
                loading="eager"
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-DMSans font-bold text-[20px] leading-[100%] tracking-[-3%] ">
                {item.title}
              </p>
              <p className="text-[16px] font-medium leading-[160%]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Notifications;
