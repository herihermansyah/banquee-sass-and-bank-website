import React from "react";
import SubTitle from "./sub-title";
import {ArrowRight, Mail, Phone} from "lucide-react";
import {Button} from "./ui/button";
import QandaCard from "./q-and-a-card";

const faqData = [
  {
    id: 1,
    phone: "+49176123456",
    name: "Support Hotline",
    icon: <Phone size={28} />,
  },
  {
    id: 2,
    phone: "help@banquee.com",
    name: "Support Email",
    icon: <Mail size={28} />,
  },
];

const faqDataAsq = [
  {
    id: 1,
    ask: "How do I open an Banko account?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.",
  },
  {
    id: 2,
    ask: "How do I order a new card?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.",
  },
  {
    id: 3,
    ask: "How to change my account limits?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.",
  },
  {
    id: 4,
    ask: "How does Banko premium works?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.",
  },
  {
    id: 5,
    ask: "Can I have two Banko accounts?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.",
  },
];

function Faq() {
  return (
    <section className="container mx-auto 2xl:w-main px-4 lg:px-0 flex flex-col gap-25 lg:gap-0 lg:flex-row items-start justify-between py-40">
      <div className="flex flex-col gap-12 items-start">
        <SubTitle title="Need help?" titleClass="sm:w-[500px]" />
        <div className="flex flex-col gap-8">
          {faqData.map((item) => (
            <div key={item.id} className="flex items-center gap-6">
              <div className="w-12.5 h-12.5 bg-primary-light text-primary flex items-center justify-center rounded-full">
                {item.icon}
              </div>
              <div className="flex flex-col">
                <p className="font-DMSans font-medium text-[18px] leading-[140%] tracking-[-3%]">
                  {item.phone}
                </p>
                <p className="font-medium text-[14px] leading-[160%] text-muted/50">
                  {item.name}
                </p>
              </div>
            </div>
          ))}
        </div>
        <Button
          variant={"ghost"}
          className="text-primary hover:text-primary/90 hover:bg-inverse text-[18px] font-medium font-DMSans"
        >
          Support <ArrowRight />
        </Button>
      </div>
      <QandaCard
        data={faqDataAsq}
        ask={(item) => item.ask}
        answer={(item) => item.answer}
      />
    </section>
  );
}

export default Faq;
