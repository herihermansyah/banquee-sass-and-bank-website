import Image from "next/image";
import Link from "next/link";
import React from "react";

interface LogoProps {
  textClass?: string;
  textName?: string;
  imageClass?: string;
  imageSrc?: string;
  className?: string;
}

function Logo({
  textClass,
  textName,
  imageClass,
  imageSrc,
  className,
}: LogoProps) {
  return (
    <Link href={"/"} className={className}>
      {imageSrc && (
        <Image
          src={imageSrc}
          alt="logo"
          width={100}
          height={100}
          className={imageClass}
        />
      )}
      <h1
        className={`${textClass} font-DMSans text-[32px] font-bold text-primary`}
      >
        {textName}
      </h1>
    </Link>
  );
}

export default Logo;
