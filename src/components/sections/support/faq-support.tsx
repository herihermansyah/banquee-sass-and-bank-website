import Categories from "@/components/categories";
import QandaCard from "@/components/q-and-a-card";
import Image from "next/image";
import React from "react";

const faqDataAsq1 = [
  {
    id: 1,
    ask: "How to setup my card?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.",
  },
  {
    id: 2,
    ask: "How do I create a virtual card?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.",
  },
  {
    id: 3,
    ask: "How to order an extra card?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.",
  },
  {
    id: 4,
    ask: "My card will exprise soon. What to do?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.",
  },
  {
    id: 5,
    ask: "How do I freeze my card?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.",
  },
];

const faqDataAsq2 = [
  {
    id: 1,
    ask: "How do I verify my account?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.",
  },
  {
    id: 2,
    ask: "How to upgrade my account?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.",
  },
  {
    id: 3,
    ask: "Can I have multiple accounts?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.",
  },
  {
    id: 4,
    ask: "How do I cancel my account?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.",
  },
];

const faqDataAsq3 = [
  {
    id: 1,
    ask: "How do I change my account address?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.",
  },
  {
    id: 2,
    ask: "How to close my account?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.",
  },
  {
    id: 3,
    ask: "Where do I find my tax ID?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.",
  },
  {
    id: 4,
    ask: "How can I download my bank documents?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis natoque penatibus et magnis dis parturient.",
  },
];

function FaqSupport() {
  return (
    <section className="container mx-auto 2xl:w-main px-4 lg:px-0 pb-40">
      <div className="flex md:flex-row flex-col gap-20 justify-between">
        <Categories />
        <div className="flex flex-col gap-10 md:gap-32">
          <FaqCard icon="/icon/ri_secure-payment-fill.svg" title="Cards">
            <div className="xl:w-198.5">
              <QandaCard
                data={faqDataAsq1}
                ask={(item) => item.ask}
                answer={(item) => item.answer}
              />
            </div>
          </FaqCard>
          <FaqCard icon="/icon/ri_secure-payment-fill.svg" title="Account">
            <div className="xl:w-198.5">
              <QandaCard
                data={faqDataAsq2}
                ask={(item) => item.ask}
                answer={(item) => item.answer}
              />
            </div>
          </FaqCard>
          <FaqCard
            icon="/icon/ri_secure-payment-fill.svg"
            title="Personal Details"
          >
            <div className="xl:w-198.5">
              <QandaCard
                data={faqDataAsq3}
                ask={(item) => item.ask}
                answer={(item) => item.answer}
              />
            </div>
          </FaqCard>
        </div>
      </div>
    </section>
  );
}

export default FaqSupport;

type FaqCardType = {
  icon: string;
  title: string;
  children: React.ReactNode;
};

function FaqCard({icon, title, children}: FaqCardType) {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex items-center gap-4">
        <div className="w-12.5 h-12.5 rounded-full bg-primary-light flex items-center justify-center">
          <Image
            src={icon}
            alt="icon qna"
            width={28}
            height={28}
            loading="eager"
          />
        </div>
        <h4 className="text-[28px] font-medium font-DMSans">{title}</h4>
      </div>
      {children}
    </div>
  );
}
