import type {Metadata} from "next";
import {DM_Sans, Inter, Geist} from "next/font/google";
import "./globals.css";
import {cn} from "@/lib/utils";
import SiteLayouts from "./layouts/site-layouts";

const geist = Geist({subsets: ["latin"], variable: "--font-sans"});

const dmSansFonts = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const interFonts = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "banquee sass and bank website",
  description: "banquee sass and bank website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        dmSansFonts.variable,
        interFonts.className,
        "font-sans",
        geist.variable,
      )}
    >
      <body className="min-h-full flex flex-col text-default">
        <SiteLayouts>{children}</SiteLayouts>
      </body>
    </html>
  );
}
