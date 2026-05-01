import React from "react";
import SubTitle from "../../sub-title";
import Image from "next/image";

const testimonialsData = [
  {
    id: 1,
    title: "Sunt qui esse pariatur duis deserunt mollit",
    description:
      "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.",
    name: "Cody Fisher",
    dept: "Medical Assistant",
  },
  {
    id: 2,
    title: "Sunt qui esse pariatur duis deserunt mollit ",
    description:
      "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.",
    name: "Cody Fisher",
    dept: "Medical Assistant",
  },
  {
    id: 3,
    title: "At lectus urna duis convallis tellus",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi. In nibh mauris cursus mattis. At lectus urna duis convallis convallis tellus. Enim blandit volutpat maecenas volutpat.",
    name: "Jenny Wilson",
    dept: "Nursing Assistant",
  },
  {
    id: 4,
    title: "Donec et fringilla neque",
    description:
      "Etiam accumsan porta neque in viverra. Proin eleifend, eros in tristique hendrerit, nisi purus cursus sapien, id ultrices nunc tellus a ipsum. Donec et fringilla neque. Aenean consequat purus quis lectus maximus fermentum.",
    name: "Darlene Robertson",
    dept: "Dog Trainer",
  },
  {
    id: 5,
    title: "Elit aute irure tempor cupidatat incididunt",
    description:
      "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.",
    name: "Guy Hawkins",
    dept: "President of Sales",
  },

  {
    id: 6,
    title: "Etiam accumsan porta neque eros",
    description:
      "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    name: "Dianne Russell",
    dept: "Medical Assistant",
  },
];

function Testimonials() {
  return (
    <section className="container mx-auto 2xl:w-main px-4 lg:px-0 py-40 flex flex-col gap-16">
      <div className="flex gap-10 lg:flex-row flex-col items-center lg:items-end justify-between">
        <SubTitle
          notif="Testimonials"
          title="People all over the world use banko."
        />
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center">
            <Image
              src="/icon/ri_star-fill.svg"
              alt="start"
              width={22}
              height={22}
              loading="eager"
            />
          </div>
          <p className="text-[18px] font-medium">
            Rated <span className="text-primary">4.8/5</span> from over 1000
            users
          </p>
        </div>
      </div>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
        {testimonialsData.map((item) => (
          <div
            key={item.id}
            className="break-inside-avoid flex flex-col gap-6  p-8 rounded-[10px] bg-inverse border-2 border-gray-200"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Image
                    key={i}
                    src="/icon/ri_star-fill.svg"
                    alt="start icon"
                    width={20}
                    height={20}
                    loading="eager"
                  />
                ))}
              </div>
              <h4 className="text-[28px] font-DMSans font-medium leading-[120%] tracking-[-3%] ">
                {item.title}
              </h4>
              <p className="font-medium text-[16px] leading-[160%] ">
                {item.description}
              </p>
            </div>
            <div className="flex flex-col">
              <h6 className="text-[18px] leading-[140%] tracking-[-3%] font-medium">
                {item.name}
              </h6>
              <p className="text-[14px] font-medium leading-[160%] text-muted/50">
                {item.dept}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
