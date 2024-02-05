import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Subscribe from "../../container/Dashboard/components/Subscribe";

function Layout({ children, SubscribeBg }) {
  return (
    <div className="pt-[64px] sm:pt-[72px]">
      <Navbar />
      {children}
      {SubscribeBg ? <Subscribe bg={SubscribeBg} /> : null}
      <Footer />
    </div>
  );
}

export default Layout;
