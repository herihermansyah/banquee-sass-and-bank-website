import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import Link from "next/link";

type MenuDataType<T> = {
  data: T[];
  path: (item: T) => string;
  title: (item: T) => string;
};

function MenuData<T>({data, path, title}: MenuDataType<T>) {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex flex-col items-start gap-4">
        {data.map((item, index) => (
          <NavigationMenuItem key={index}>
            <NavigationMenuLink
              className="px-0 hover:bg-muted-bg focus:bg-muted-bg"
              asChild
            >
              <Link
                href={path(item)}
                className="font-medium text-[16px] text-muted/50 "
              >
                {title(item)}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default MenuData;
