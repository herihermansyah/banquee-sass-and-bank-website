import React from "react";
import Image from "next/image";

type CardTransactionProps = {
  children: React.ReactNode;
  image: string;
};

export default function CardTransaction({
  children,
  image,
}: CardTransactionProps) {
  return (
    <div className="flex items-center gap-30 flex-col lg:flex-row justify-between">
      <div className="flex flex-col gap-8">{children}</div>
      <Image
        src={image}
        alt="transaction image"
        width={380}
        height={800}
        loading="eager"
      />
    </div>
  );
}

type CardItemsProps = {
  children: React.ReactNode;
  title: string;
  description: string;
  imagePosition?: string;
  className?: string;
  titleClass?: string;
};

export function CardItems({
  children,
  title,
  description,
  imagePosition,
  className,
  titleClass,
}: CardItemsProps) {
  return (
    <div
      className={`rounded-[20px] px-4 bg-muted-bg flex flex-col items-center ${className} overflow-hidden relative`}
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <h3
          className={`font-DMSans font-medium text-[40px] leading-[120%] tracking-[-3%] ${titleClass}`}
        >
          {title}
        </h3>
        <p className="font-medium text-[18px] leading-[180%] text-muted/50 sm:w-100 text-center">
          {description}
        </p>
      </div>
      <div
        className={`flex items-center gap-5 w-max absolute ${imagePosition} left-1/2 -translate-x-1/2`}
      >
        {children}
      </div>
    </div>
  );
}
