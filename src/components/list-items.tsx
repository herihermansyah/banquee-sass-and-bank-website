import React from "react";

type ListItemsProps<T> = {
  data: T[];
  icon: (item: T) => React.ReactNode;
  description: (item: T) => string;
};

function ListItems<T>({data, icon, description}: ListItemsProps<T>) {
  return (
    <ul className="flex flex-col gap-3">
      {data.map((item, index) => (
        <li key={index} className="flex items-center gap-4">
          <div className="bg-primary-light rounded-full text-primary p-1">
            {icon(item)}
          </div>
          <p className="font-medium text-[18px] leading-[180%]">
            {description(item)}
          </p>
        </li>
      ))}
    </ul>
  );
}

export default ListItems;
