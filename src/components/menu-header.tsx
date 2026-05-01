import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import Link from "next/link";

const menuData = [
  {id: 1, title: "features", link: "/features"},
  {
    id: 2,
    title: "compare",
    link: "/",
    children: [
      {id: 21, title: "compare", link: "/compare"},
      {id: 22, title: "compare2", link: "/"},
      {id: 23, title: "compare3", link: "/"},
    ],
  },
  {id: 3, title: "support", link: "/support"},
  {
    id: 4,
    title: "blog",
    link: "/",
    children: [
      {id: 41, title: "blog", link: "/blog"},
      {id: 42, title: "blog2", link: "/"},
      {id: 43, title: "blog3", link: "/"},
    ],
  },
];

function MenuHeader() {
  return (
    <NavigationMenu className="relative w-full max-w-full">
      <NavigationMenuList className="gap-4 flex-col items-center justify-center lg:flex-row">
        {menuData.map((item) => (
          <NavigationMenuItem key={item.id} className="relative">
            {item.children ? (
              <>
                <NavigationMenuTrigger
                  className="data-[state=open]:bg-muted-bg hover:data-[state=open]:bg-muted-bg focus:data-[state=open]:bg-muted-bg active:data-[state=open]:bg-muted-bg
                            data-active:bg-muted-bg focus:bg-muted-bg hover:bg-muted-bg
                              py-2 pl-3 pr-2 font-medium text-[16px] capitalize cursor-pointer"
                >
                  {item.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="absolute top-full left-0 mt-2 z-50">
                  <ul className="grid gap-1 bg-white border rounded-md shadow-soft">
                    {item.children.map((child) => (
                      <li key={child.id}>
                        <NavigationMenuLink
                          className="hover:bg-muted-bg focus:bg-muted-bg"
                          asChild
                        >
                          <Link
                            href={child.link}
                            className="py-2 pl-3 pr-2 rounded-sm font-medium capitalize"
                          >
                            {child.title}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink
                asChild
                className={`${navigationMenuTriggerStyle()} hover:bg-muted-bg focus:bg-muted-bg`}
              >
                <Link
                  className="font-medium text-[16px] capitalize py-2 pl-3 pr-2 "
                  href={item.link}
                >
                  {item.title}
                </Link>
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default MenuHeader;
