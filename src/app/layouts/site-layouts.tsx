import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import React from "react";

function SiteLayouts({children}: {children: React.ReactNode}) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 py-2 bg-inverse lg:py-6">
        <Header />
      </header>
      <main className="grow">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default SiteLayouts;
