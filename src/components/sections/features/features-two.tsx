import {CardItems} from "@/components/card-transaction";
import SubTitle from "@/components/sub-title";
import Image from "next/image";
import React from "react";

const featuresData = [
  {image: "/cards/cardblack.svg", offset: "mt-30"},
  {image: "/cards/cardgreen.svg", offset: "mt-0"},
  {image: "/cards/cardgold.svg", offset: "mt-30"},
];

const tools1Data = [
  {id: 1, image: "/support/webflow.svg"},
  {id: 2, image: "/support/shopify.svg"},
  {id: 3, image: "/support/zapier.svg"},
  {id: 4, image: "/support/PayPal.svg"},
  {id: 5, image: "/support/Mastercard.svg"},
  {id: 6, image: "/support/visa.svg"},
  {id: 7, image: "/support/gpay.svg"},
  {id: 8, image: "/support/apay.svg"},
  {id: 9, image: "/support/amazon.svg"},
  {id: 10, image: "/support/bitcoin.svg"},
];

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
];

function FeaturesTwo() {
  return (
    <section className="pt-40 border-t border-t-gray-200">
      <div className="container mx-auto 2xl:w-main px-4 lg:px-0 flex flex-col gap-24 justify-center items-center">
        <SubTitle
          className="flex flex-col justify-center items-center text-center"
          title="All in one bank. Really."
          titleClass="text-center"
          description="Senectus et netus et malesuada fames ac turpis. Sagittis vitae et leo duis ut diam."
          descriptionClass="sm:w-[470px]"
        />
        <div className="flex flex-col gap-8">
          <div className="flex items-center flex-col xl:flex-row justify-center gap-8">
            <CardItems
              className="sm:w-146 h-125"
              imagePosition="top-64"
              titleClass="pt-16"
              title="Statistics"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do."
            >
              <Image
                src="/transaction/transaction3.svg"
                alt="transaction image"
                width={380}
                height={800}
                loading="eager"
              />
            </CardItems>
            <CardItems
              className="sm:w-146 h-125"
              imagePosition="top-49.25"
              title="Cards"
              titleClass="pt-16"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do."
            >
              {featuresData.map((item, index) => (
                <Image
                  key={index}
                  src={item.image}
                  alt="transaction image"
                  width={230}
                  height={800}
                  loading="eager"
                  className={item.offset}
                />
              ))}
            </CardItems>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-10 xl:grid grid-cols-3 ">
            <CardItems
              className="w-94.5 h-137.5"
              title="Easy integration"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              imagePosition="top-70"
              titleClass="w-[100px] self-start pl-7 pt-[56px]"
            >
              <div className="flex items-center gap-4 flex-wrap w-122.5">
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
            </CardItems>
            <CardItems
              className="w-94.5 h-137.5"
              title="Saving accounts"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              imagePosition="top-70"
              titleClass="w-[100px] self-start pl-7 pt-[56px]"
            >
              <div className="flex justify-center items-center gap-5">
                {savingData.map((item) => (
                  <div className="flex flex-col gap-4" key={item.id}>
                    <div
                      className={`${item.colorBox} w-40 h-40 flex items-center justify-center rounded-[16px]`}
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
            </CardItems>
            <CardItems
              className="w-94.5 h-137.5"
              title="Easy integration"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              imagePosition="top-70"
              titleClass="w-[100px] self-start pl-7 pt-[56px]"
            >
              <div className="flex flex-col gap-4 items-start">
                {transactionData2.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between gap-4 p-4 bg-muted-bg rounded-[10px] w-65"
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
            </CardItems>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesTwo;
