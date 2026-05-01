import {Check} from "lucide-react";
import Image from "next/image";
import React from "react";

const transactionsData = [
  {id: 1, description: "Malesuada Ipsum", icon: <Check size={18} />},
  {id: 2, description: "Vestibulum", icon: <Check size={18} />},
  {id: 3, description: "Parturient Lorem", icon: <Check size={18} />},
];

const transactionData2 = [
  {
    id: 1,
    image: "/icon/ri_apple-fill.svg",
    title: "Apple",
    description: "Macbook",
    price: "-999€",
  },
  {
    id: 2,
    image: "/icon/ri_apple-fill.svg",
    title: "Amazon",
    description: "Electronics",
    price: "-49€",
  },
  {
    id: 3,
    image: "/icon/ri_apple-fill.svg",
    title: "Twitter",
    description: "Ads",
    price: "-29€",
  },
  {
    id: 4,
    image: "/icon/ri_apple-fill.svg",
    title: "Microsoft",
    description: "Office Suite",
    price: "-149€",
  },
  {
    id: 5,
    image: "/icon/ri_apple-fill.svg",
    title: "Dropbox",
    description: "Cloud",
    price: "-14€",
  },
  {
    id: 6,
    image: "/icon/ri_apple-fill.svg",
    title: "Paypal",
    description: "Shopping",
    price: "-200€",
  },
];

function Transactions() {
  return (
    <section className="bg-primary-light py-7.25">
      <div className="container mx-auto 2xl:w-main px-4 lg:px-0 flex flex-col gap-20 lg:flex-row items-center justify-between">
        <div>
          <div className="flex flex-col gap-4 mb-8 xl:w-140">
            <h2 className="text-[50px] sm:text-[64px] font-DMSans leading-[110%] tracking-[-3%] font-medium">
              Send & receive money instantly
            </h2>
            <p className="text-[20px] font-medium leading-[180%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et.
            </p>
          </div>
          <ul className="flex flex-col gap-3">
            {transactionsData.map((item) => (
              <li key={item.id} className="flex items-center gap-4">
                <div className="bg-primary rounded-full text-inverse p-1">
                  {item.icon}
                </div>
                <p className="font-medium text-[18px] leading-[180%]">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4 items-start">
          {transactionData2.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between gap-4 p-4 bg-muted-bg rounded-[10px] w-80 sm:w-100"
            >
              <div className="flex items-center gap-4">
                <div className="bg-primary w-12.5 h-12.5 flex items-center justify-center rounded-[10px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={25}
                    height={25}
                    loading="eager"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="font-DMSans font-bold text-[18px] leading-[140%] tracking-[-3%] ">
                    {item.title}
                  </p>
                  <p className="text-[16px] font-medium leading-[160%] text-muted/50">
                    {item.description}
                  </p>
                </div>
              </div>
              <p className="font-DMSans font-medium text-[18px] leading-[140%] tracking-[-3%]">
                {item.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Transactions;
