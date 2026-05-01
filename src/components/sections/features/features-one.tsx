import CardTransaction from "@/components/card-transaction";
import ListItems from "@/components/list-items";
import SubTitle from "@/components/sub-title";
import {Check} from "lucide-react";
import React from "react";

const transactionsData = [
  {id: 1, description: "Malesuada Ipsum", icon: <Check size={18} />},
  {id: 2, description: "Vestibulum", icon: <Check size={18} />},
  {id: 3, description: "Parturient Lorem", icon: <Check size={18} />},
];

const transactionData2 = [
  {
    id: 1,
    image: "/transaction/transaction.svg",
    notif: "Transactions",
    title: "Send & receive money instantly",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    id: 2,
    image: "/transaction/transaction2.svg",
    notif: "Cards",
    title: "Manage your cards",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    id: 3,
    image: "/transaction/transaction3.svg",
    notif: "Advanced Statistics",
    title: "Keep control over your money",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    id: 4,
    image: "/transaction/transaction4.svg",
    notif: "Saving Accounts",
    title: "Lorem et ipsum dolor",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
];

function FeaturesOne() {
  return (
    <section className="container mx-auto 2xl:w-main px-4 lg:px-0 py-40">
      <div className="flex flex-col gap-40">
        {transactionData2.map((item) => (
          <CardTransaction key={item.id} image={item.image}>
            <SubTitle
              notif={item.notif}
              title={item.title}
              description={item.description}
            />
            <ListItems
              data={transactionsData}
              icon={(item) => item.icon}
              description={(item) => item.description}
            />
          </CardTransaction>
        ))}
      </div>
    </section>
  );
}

export default FeaturesOne;
