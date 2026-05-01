import Link from "next/link";
import React from "react";

const categoriesData = [
  {id: 1, title: "Cards", path: "/cards"},
  {id: 2, title: "Account", path: "/Account"},
  {id: 3, title: "Personal details", path: "/Personal details"},
];

function Categories() {
  return (
    <div className="flex flex-col gap-8 bg-muted-bg p-8 w-70 h-57.75 rounded-[10px]">
      <h6 className="text-[18px] font-DMSans font-medium">Categories</h6>
      <div className="flex flex-col gap-4">
        {categoriesData.map((item) => (
          <Link key={item.id} href={item.path}>
            <p className="text-[16px] text-muted/50 font-medium">
              {item.title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Categories;
