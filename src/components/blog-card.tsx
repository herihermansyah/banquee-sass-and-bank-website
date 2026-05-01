import React from "react";
import {Button} from "./ui/button";
import Image from "next/image";
import Link from "next/link";

type BlogCardType<T> = {
  data: T[];
  title: (item: T) => string;
  description: (item: T) => string;
  image: (item: T) => string;
  cat1: (item: T) => string;
  cat2: (item: T) => string;
  href: (item: T) => string;
};

function BlogCard<T>({
  data,
  title,
  description,
  image,
  cat1,
  cat2,
  href,
}: BlogCardType<T>) {
  return (
    <div className="flex flex-wrap justify-center xl:grid grid-cols-3 gap-8.25">
      {data.map((item, index) => (
        <div key={index} className="flex flex-col gap-6 w-94.5">
          <Image
            src={image(item)}
            alt={title(item)}
            width={378}
            height={378}
            loading="eager"
            className="rounded-[16px]"
          />
          <Link href={href(item)}>
            <div className="flex flex-col gap-2">
              <h4 className="font-DMSans font-medium text-[28px] leading-[120%] tracking-[-3%]">
                {title(item)}
              </h4>
              <p className="text-[16px] font-medium leading-[160%]">
                {description(item)}
              </p>
            </div>
          </Link>
          <div className="flex items-center gap-2 font-medium text-[13px] ">
            <Button className="bg-muted-bg rounded-lg text-default">
              {cat1(item)}
            </Button>
            <Button className="bg-muted-bg rounded-lg text-default">
              {cat2(item)}
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlogCard;
