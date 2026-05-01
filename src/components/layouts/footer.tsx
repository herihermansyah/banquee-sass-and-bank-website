import React from "react";
import Logo from "../logo";
import MenuData from "../menu-data";
import {Separator} from "../ui/separator";

const aboutMenu = [
  {id: 1, title: "Features", href: "/"},
  {id: 2, title: "Pricing", href: "/"},
  {id: 3, title: "Support", href: "/"},
];

const blogMenu = [
  {id: 1, title: "Products", href: "/"},
  {id: 2, title: "Technology", href: "/"},
  {id: 3, title: "Crypto", href: "/"},
];

const webflowMenu = [
  {id: 1, title: "Styleguide", href: "/"},
  {id: 2, title: "Licensing", href: "/"},
  {id: 3, title: "Changelog", href: "/"},
];

const socialMenu = [
  {id: 1, title: "Twitter", href: "/"},
  {id: 2, title: "Facebook", href: "/"},
  {id: 3, title: "Instagram", href: "/"},
];

function Footer() {
  return (
    <div className="border-t border-t-gray-200 pt-24.25 pb-12 bg-inverse">
      <div className="container px-4 lg:px-0 mx-auto 2xl:w-wide ">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-20 lg:gap-75">
          <Logo textName="banquee." />
          <div className="flex items-start justify-center flex-wrap  gap-12">
            <div className="flex flex-col gap-8 sm:w-50">
              <h6 className="font-DMSans font-medium text-[18px]">About</h6>
              <MenuData
                data={aboutMenu}
                title={(item) => item.title}
                path={(item) => item.href}
              />
            </div>
            <div className="flex flex-col gap-8 sm:w-50">
              <h6 className="font-DMSans font-medium text-[18px]">Blog</h6>
              <MenuData
                data={blogMenu}
                title={(item) => item.title}
                path={(item) => item.href}
              />
            </div>
            <div className="flex flex-col gap-8 sm:w-50">
              <h6 className="font-DMSans font-medium text-[18px]">Webflow</h6>
              <MenuData
                data={webflowMenu}
                title={(item) => item.title}
                path={(item) => item.href}
              />
            </div>
            <div className="flex flex-col gap-8 sm:w-50">
              <h6 className="font-DMSans font-medium text-[18px]">
                Social Media
              </h6>
              <MenuData
                data={socialMenu}
                title={(item) => item.title}
                path={(item) => item.href}
              />
            </div>
          </div>
        </div>
        <Separator className="mt-20 mb-4" />
        <div className="flex flex-wrap items-center justify-between text-[16px] font-medium leading-[160%] text-muted/50">
          <p>
            © Made by <span className="text-primary">Pawel Gola</span> - Powered
            by <span className="text-primary">Webflow</span>
          </p>
          <div className="flex items-center gap-8">
            <span>Impressum</span>
            <span>Datenschutz</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
