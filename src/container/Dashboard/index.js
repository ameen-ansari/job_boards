import { useNavigate } from "react-router-dom";
import { Data } from "../../damiData";
import Footer from "../../shared/components/Footer";
import Navbar from "../../shared/components/Navbar";
import Card from "./components/Card";
import Headers from "./components/Headers";
import Subscribe from "./components/Subscribe";
import FormControl from "./components/FormControl";
import Layout from "../../shared/components/Layout";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <Layout SubscribeBg="bg-[#F0F6FF]">
      <FormControl />
      <div className="mb-[24px] md:mb-[32px] px-[0px] lg:px-[80px]">
        <div className="px-[16px] md:px-[32px] ">
          <Headers jobs={528} />
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
};

export default Dashboard;
