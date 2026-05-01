import Image from "next/image";
import React from "react";

const featuresData = [
  {
    id: 1,
    title: "Instant transactions",
    description:
      "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.",
    image: "/icon/ri_flashlight-line.svg",
  },
  {
    id: 2,
    title: "Saving accounts",
    description:
      "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.",
    image: "/icon/ri_safe-2-fill.svg",
  },
  {
    id: 3,
    title: "Mobile banking",
    description:
      "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.",
    image: "/icon/ri_smartphone-line.svg",
  },
  {
    id: 4,
    title: "Advanced statistics",
    description:
      "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.",
    image: "/icon/ri_line-chart-line.svg",
  },
  {
    id: 5,
    title: "Virtual cards",
    description:
      "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.",
    image: "/icon/ri_bank-card-2-line.svg",
  },
  {
    id: 6,
    title: "Contactless payments",
    description:
      "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.",
    image: "/icon/ri_wifi-line.svg",
  },
];

function Features() {
  return (
    <section className="container mx-auto 2xl:w-main py-40 px-4 lg:px-0">
      <div className="flex flex-col lg:flex-row gap-20 justify-between items-start">
        <div className="flex flex-col gap-16">
          <h2 className="font-DMSans font-medium text-[70px] md:text-[80px] leading-[110%] tracking-[-3%] lg:w-120">
            One app. One banking.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 self-center">
            {featuresData.map((item) => (
              <div
                className="flex flex-col items-start gap-4 p-8 bg-inverse border border-gray-200 w-71 h-66 rounded-[16px]"
                key={item.id}
              >
                <div className="p-2 bg-primary-light rounded-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={28}
                    height={28}
                    loading="eager"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h5 className="font-DMSans text-[20px] leading-[120%] tracking-[-3%] font-medium w-25">
                    {item.title}
                  </h5>
                  <p className="font-medium text-[16px] leading-[160%]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="self-center lg:self-auto">
          <Image
            src="/app.svg"
            alt="features image"
            width={380}
            height={800}
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}

export default Features;
