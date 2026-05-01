import MembershipTier from "@/components/membership-tier";
import {Check} from "lucide-react";
import Image from "next/image";
import React from "react";

type PricingFeature = {
  id: number;
  name: string;
  description: string;
  icon: string;
  basic: string | boolean;
  premium: string | boolean;
  gold: string | boolean;
};

const table1: PricingFeature[] = [
  {
    id: 1,
    name: "Physical Card",
    description: "Diam in arcu cursus euismod",
    icon: "/icon/ri_bank-card-2-line.svg",
    basic: "optional",
    premium: true,
    gold: true,
  },
  {
    id: 2,
    name: "Virtual Card",
    description: "Diam in arcu cursus euismod",
    icon: "/icon/ri_refund-line.svg",
    basic: "-",
    premium: "up to 2",
    gold: "unlimited",
  },
  {
    id: 3,
    name: "Contactless Payments",
    description: "Diam in arcu cursus euismod",
    icon: "/icon/ri_wifi-line.svg",
    basic: true,
    premium: true,
    gold: true,
  },
  {
    id: 4,
    name: "Mobile Payments",
    description: "Diam in arcu cursus euismod",
    icon: "/icon/ri_money-euro-circle-line.svg",
    basic: "optional",
    premium: true,
    gold: true,
  },
];

const table2: PricingFeature[] = [
  {
    id: 1,
    name: "Free Payments Worldwide",
    description: "Diam in arcu cursus euismod",
    icon: "/icon/ri_global-line.svg",
    basic: "-",
    premium: true,
    gold: true,
  },
  {
    id: 2,
    name: "Free ATM withdrawls",
    description: "Diam in arcu cursus euismod",
    icon: "/icon/ri_bank-line.svg",
    basic: "2",
    premium: "5",
    gold: "10",
  },
  {
    id: 3,
    name: "Mobile Banking",
    description: "Diam in arcu cursus euismod",
    icon: "/icon/ri_smartphone-line.svg",
    basic: true,
    premium: true,
    gold: true,
  },
];

const table3: PricingFeature[] = [
  {
    id: 1,
    name: "Saving Accounts",
    description: "Diam in arcu cursus euismod",
    icon: "/icon/ri_safe-2-fill.svg",
    basic: "2",
    premium: "5",
    gold: "unlimited",
  },
  {
    id: 2,
    name: "Advanced Statistics",
    description: "Diam in arcu cursus euismod",
    icon: "/icon/ri_line-chart-line.svg",
    basic: true,
    premium: true,
    gold: true,
  },
  {
    id: 3,
    name: "Premium Parnter Offers",
    description: "Diam in arcu cursus euismod",
    icon: "/icon/ri_copper-diamond-line.svg",
    basic: true,
    premium: true,
    gold: true,
  },
];

function TableCompare() {
  return (
    <section className="container mx-auto 2xl:w-wide px-4 lg:px-0 pt-24 flex flex-col gap-24">
      <div className="sm:self-end self-auto">
        <MembershipTier imageSize="sm:w-[290px] sm:h-[174px]" />
      </div>
      <TableData
        title="credit"
        data={table1}
        name={(item) => item.name}
        description={(item) => item.description}
        icon={(item) => item.icon}
        basic={(item) => item.basic}
        premium={(item) => item.premium}
        gold={(item) => item.gold}
      />
      <TableData
        title="Bank Account"
        data={table2}
        name={(item) => item.name}
        description={(item) => item.description}
        icon={(item) => item.icon}
        basic={(item) => item.basic}
        premium={(item) => item.premium}
        gold={(item) => item.gold}
      />
      <TableData
        title="Extra Features"
        data={table3}
        name={(item) => item.name}
        description={(item) => item.description}
        icon={(item) => item.icon}
        basic={(item) => item.basic}
        premium={(item) => item.premium}
        gold={(item) => item.gold}
      />
    </section>
  );
}

export default TableCompare;

type TableDataProps<T> = {
  data: T[];
  name: (item: T) => string;
  description: (item: T) => string;
  icon: (item: T) => string;
  basic: (item: T) => string | boolean;
  premium: (item: T) => string | boolean;
  gold: (item: T) => string | boolean;
  title: string;
};

function TableData<T>({
  data,
  name,
  description,
  icon,
  basic,
  premium,
  gold,
  title,
}: TableDataProps<T>) {
  return (
    <div>
      <h5 className="capitalize text-center sm:text-start font-medium text-[20px] font-DMSans mb-8">
        {title}
      </h5>
      <div className="flex flex-col">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-10 sm:flex-row items-center justify-between border-t border-t-gray-200 py-8"
          >
            <div className="flex items-center gap-4">
              <div className="min-w-12.5 min-h-12.5 flex items-center justify-center rounded-full bg-primary-light">
                <Image
                  src={icon(item)}
                  alt={name(item)}
                  width={28}
                  height={28}
                  loading="eager"
                />
              </div>
              <div className="flex flex-col whitespace-nowrap">
                <h6 className="font-medium font-DMSans text-[18px]">
                  {name(item)}
                </h6>
                <p className="font-medium text-[14px] text-muted/50">
                  {description(item)}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-15 md:gap-20">
              <div className="md:w-20 lg:w-40 xl:w-62.5 flex items-center justify-center">
                {basic(item) === true ? (
                  <div className="w-6 h-6 bg-primary-light text-primary rounded-full flex items-center justify-center">
                    <Check size={14} />
                  </div>
                ) : (
                  <p className="whitespace-nowrap text-[16px] font-medium capitalize">
                    {basic(item)}
                  </p>
                )}
              </div>
              <div className="md:w-20 lg:w-40 xl:w-62.5 flex items-center justify-center">
                {premium(item) === true ? (
                  <div className="w-6 h-6 bg-primary-light text-primary rounded-full flex items-center justify-center">
                    <Check size={14} />
                  </div>
                ) : (
                  <p className="whitespace-nowrap text-[16px] font-medium capitalize">
                    {premium(item)}
                  </p>
                )}
              </div>

              <div className="md:w-20 lg:w-40 xl:w-62.5 flex items-center justify-center">
                {gold(item) === true ? (
                  <div className="w-6 h-6 bg-primary-light text-primary rounded-full flex items-center justify-center">
                    <Check size={14} />
                  </div>
                ) : (
                  <p className="whitespace-nowrap text-[16px] font-medium capitalize">
                    {gold(item)}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
