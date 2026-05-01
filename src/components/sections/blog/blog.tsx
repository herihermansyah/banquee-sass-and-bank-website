import BlogCard from "@/components/blog-card";
import React from "react";

const blogData = [
  {
    id: 1,
    title: "How To Start Using Banko For Your Startup",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi.",
    image: "/blog1.png",
    cat1: "Product",
    cat2: "Technology",
    href: "/preview",
  },
  {
    id: 2,
    title: "10 Things Nobody Told You About Banko",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi.",
    image: "/blog2.png",
    cat1: "Product",
    cat2: "Technology",
    href: "/preview",
  },
  {
    id: 3,
    title: "7 Ways To Improve You Saving Habits",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi.",
    image: "/blog3.png",
    cat1: "Product",
    cat2: "Technology",
    href: "/preview",
  },
  {
    id: 4,
    title: "How To Start Using Banko For Your Startup",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi.",
    image: "/blog1.png",
    cat1: "Product",
    cat2: "Technology",
    href: "/preview",
  },
  {
    id: 5,
    title: "10 Things Nobody Told You About Banko",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi.",
    image: "/blog2.png",
    cat1: "Product",
    cat2: "Technology",
    href: "/preview",
  },
  {
    id: 6,
    title: "7 Ways To Improve You Saving Habits",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi.",
    image: "/blog3.png",
    cat1: "Product",
    cat2: "Technology",
    href: "/preview",
  },
];

const categoris = [
  {title: "All"},
  {title: "Product"},
  {title: "Technology"},
  {title: "App"},
];

function Blog() {
  return (
    <section className="container mx-auto 2xl:w-main px-4 lg:px-0 pb-40">
      <div>
        <h2 className="text-[96px] font-medium font-DMSans text-center py-24">
          Blog
        </h2>
      </div>
      <div className="flex flex-col gap-16">
        <div className="flex items-center flex-wrap gap-8">
          <h6 className="text-[18px] font-DMSans font-medium ">Categories</h6>
          <div className="flex flex-wrap items-center gap-4">
            {categoris.map((item) => (
              <div key={item.title} className="bg-muted-bg px-3 py-2">
                <p className="font-medium text-[13px]">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
        <BlogCard
          href={(item) => item.href}
          data={blogData}
          title={(item) => item.title}
          description={(item) => item.description}
          image={(item) => item.image}
          cat1={(item) => item.cat1}
          cat2={(item) => item.cat2}
        />
      </div>
    </section>
  );
}

export default Blog;
