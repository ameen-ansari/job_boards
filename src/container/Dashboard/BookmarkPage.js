import React, { useState } from "react";
import Navbar from "../../shared/components/Navbar";
import ForUnAuthrized from "./components/BookMarkPage/ForUnAuthrized";
import Subscribe from "./components/Subscribe";
import Footer from "../../shared/components/Footer";
import ForAuthrized from "./components/BookMarkPage/ForAuthrized";
import Layout from "../../shared/components/Layout";

function BookmarkPage() {
  const [Auth, setAuth] = useState(false);
  return (
    <Layout SubscribeBg="bg-[#F9FAFB]">
      {Auth ? (
        <ForAuthrized />
      ) : (
        // You Can get the value of button from e
        <ForUnAuthrized onClick={(e) => setAuth(!Auth)} />
      )}
    </Layout>
  );
}

export default BookmarkPage;
