import React from "react";
import SubTitle from "../../sub-title";
import Image from "next/image";
import {Check} from "lucide-react";

const tools1Data = [
  {id: 1, image: "/support/webflow.svg"},
  {id: 2, image: "/support/shopify.svg"},
  {id: 3, image: "/support/zapier.svg"},
  {id: 4, image: "/support/bitcoin.svg"},
];

const tools2Data = [
  {id: 1, image: "/support/PayPal.svg"},
  {id: 2, image: "/support/Mastercard.svg"},
  {id: 3, image: "/support/visa.svg"},
  {id: 4, image: "/support/gpay.svg"},
  {id: 5, image: "/support/apay.svg"},
  {id: 6, image: "/support/amazon.svg"},
];

const transactionsData = [
  {
    id: 1,
    description: "Secure and encrypted integration",
    icon: <Check size={20} />,
  },
  {id: 2, description: "Fully API interface", icon: <Check size={20} />},
  {id: 3, description: "Payments worldwide", icon: <Check size={20} />},
];

function Tools() {
  return (
    <section className="container mx-auto 2xl:w-main px-4 lg:px-0 py-40 flex flex-col gap-16">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4 flex-wrap">
          {tools1Data.map((item) => (
            <div key={item.id} className="bg-muted-bg p-4 rounded-[10px]">
              <Image
                src={item.image}
                alt="support image"
                width={200}
                height={300}
                loading="eager"
                className="w-auto h-auto"
              />
            </div>
          ))}
        </div>
        <div className="flex items-center gap-4 flex-wrap">
          {tools2Data.map((item) => (
            <div key={item.id} className="bg-muted-bg p-4 rounded-[10px]">
              <Image
                src={item.image}
                alt="support image"
                width={200}
                height={200}
                loading="eager"
                className="w-auto h-auto"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex lg:flex-row flex-col items-start gap-10 lg:items-end justify-between">
        <SubTitle
          titleClass="w-[100px]"
          notif="Tools"
          title="Seemless integration"
          description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
        />
        <ul className="flex flex-col gap-3">
          {transactionsData.map((item) => (
            <li key={item.id} className="flex items-center gap-4">
              <div className="bg-primary-light rounded-full text-primary p-3">
                {item.icon}
              </div>
              <p className="font-medium text-[18px] leading-[180%]">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Tools;
