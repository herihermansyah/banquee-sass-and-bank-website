import BlogCard from "@/components/blog-card";
import SubTitle from "@/components/sub-title";
import {Button} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";
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
];

function Blog() {
  return (
    <section className="py-40 border-t border-t-gray-200">
      <div className="container mx-auto 2xl:w-main px-4 lg:px-0 flex flex-col gap-16">
        <div className="flex items-center justify-between">
          <SubTitle title="Blog" />
          <Button
            variant={"ghost"}
            className="text-primary hover:text-primary/90 hover:bg-inverse text-[18px] font-medium font-DMSans"
          >
            All Articles <ArrowRight />
          </Button>
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
