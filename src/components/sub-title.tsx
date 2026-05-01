import React from "react";

type SubTitleProps = {
  notif?: string;
  title?: string;
  description?: string;
  titleClass?: string;
  className?: string;
  descriptionClass?: string;
};

function SubTitle({
  notif,
  title,
  description,
  titleClass,
  className,
  descriptionClass,
}: SubTitleProps) {
  return (
    <div className={`2xl:w-158 flex flex-col gap-4 ${className}`}>
      <h5 className="font-DMSans font-medium text-[20px] leading-[120%] tracking-[-3%]">
        {notif}
      </h5>
      <h2
        className={`${titleClass} font-DMSans font-medium text-[50px] sm:text-[64px] leading-[110%] tracking-[-3%]`}
      >
        {title}
      </h2>
      <p
        className={`font-medium text-[20px] leading-[180%] ${descriptionClass}`}
      >
        {description}
      </p>
    </div>
  );
}

export default SubTitle;
