import React from "react";
import SubTitle from "./sub-title";
import {Check, Mail, Phone} from "lucide-react";
import Image from "next/image";
import {Button} from "./ui/button";

const dataHero = [
  {id: 1, description: "Instant Transfer", icon: <Check size={18} />},
  {id: 2, description: "Payments worldwide", icon: <Check size={18} />},
  {id: 3, description: "Saving accounts", icon: <Check size={18} />},
  {id: 4, description: "100% mobile banking", icon: <Check size={18} />},
];

function Cta() {
  return (
    <section className="container mx-auto 2xl:w-main px-4 lg:px-0 bg-primary flex flex-col xl:flex-row items-center justify-center gap-27 rounded-[20px] pt-24">
      <div className="self-auto xl:self-start">
        <SubTitle
          titleClass="sm:w-[380px] text-inverse"
          title="One app. One banking."
          descriptionClass="sm:w-[580px] text-inverse"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
        />
        <ul className="grid grid-cols-1 sm:grid-cols-2  gap-y-4 mt-8 mb-12">
          {dataHero.map((item) => (
            <li key={item.id} className="flex items-center gap-4 text-inverse">
              <div className="bg-inverse/20 rounded-full text-inverse p-1">
                {item.icon}
              </div>
              <p className="text-[18px] font-medium whitespace-nowrap">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap items-center gap-4">
          <Image
            src="/icon/Apple_Store.svg"
            alt="apple store"
            width={149}
            height={50}
            loading="eager"
          />
          <Image
            src="/icon/Google_Store.svg"
            alt="apple store"
            width={149}
            height={50}
            loading="eager"
          />
        </div>
      </div>
      <div>
        <Image
          src="/app2.svg"
          alt="app image"
          width={380}
          height={800}
          loading="eager"
          className="w-95"
        />
      </div>
    </section>
  );
}

export default Cta;

const ctaData = [
  {
    id: 1,
    phone: "+49176123456",
    name: "Support Hotline",
    icon: <Phone size={22} />,
  },
  {
    id: 2,
    phone: "help@banquee.com",
    name: "Support Email",
    icon: <Mail size={22} />,
  },
];

export function CtaTwo() {
  return (
    <section className="py-24">
      <div className="bg-primary container mx-auto 2xl:w-main lg:px-0 rounded-[8px]">
        <div className="flex lg:flex-row flex-col gap-10 items-center justify-between p-8">
          <div className="flex flex-col text-inverse">
            <h4 className="font-DMSans font-medium text-[28px] leading-[120%] tracking-[-3%]">
              Still have questions?
            </h4>
            <p className="font-medium text-[18px] leading-[180%] text-center lg:text-start">
              We are here to help.
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-20">
            <div className="flex sm:flex-row flex-col justify-center items-start sm:items-center gap-20">
              {ctaData.map((item) => (
                <div key={item.id} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/20 text-inverse rounded-full flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div className="flex flex-col text-inverse font-medium ">
                    <h6 className="text-[18px]">{item.phone}</h6>
                    <p className="text-[14px]">{item.name}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button className="bg-default rounded-[6px] px-6 py-6 font-medium font-DMSans text-[18px]">
              Chat with us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
