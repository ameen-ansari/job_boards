import React from "react";
import { useNavigate } from "react-router-dom";
import flag from "../../assets/images/cardFlag.svg";
import { Data, data2 } from "../../damiData";
import Footer from "../../shared/components/Footer";
import Navbar from "../../shared/components/Navbar";
import Card from "./components/Card";
import JobContent from "./components/JobContent";
import Subscribe from "./components/Subscribe";
import ViewJobPageHeader from "./components/ViewJobPageHeader";
import Layout from "../../shared/components/Layout";

function ViewJobPage() {
  const navigate = useNavigate();
  const data = {
    postedOn: "Posted on 29 November 2023",
    title: "Product Designer",
    blueText: "AI Tool Report INC.",
    country: "Greenwich, NY",
    requirments: ["$70,000-$120,000", "Full Time", "Technical"],
    flag,
  };

  return (
    <Layout SubscribeBg="bg-[#F9FAFB]">
      <ViewJobPageHeader {...data} />
      <JobContent {...data2} />
      <div className="px-[0px] lg:px-[80px] ">
        <div className="px-[16px] md:px-[24px] pb-[48px]">
          <p className="text-[30px] font-bold text-[#101828] leading-[38px]">
            More Analyst Jobs
          </p>
          <div className="mt-[24px] md:mt-[32px] flex gap-[16px] flex-wrap">
            {Data?.map((obj, i) => {
              return (
                <Card
                  onClick={() => navigate(`/job/${obj.title}`)}
                  key={i}
                  {...obj}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ViewJobPage;
