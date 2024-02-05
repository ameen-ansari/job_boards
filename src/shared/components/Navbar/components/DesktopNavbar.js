import logo from "../../../../assets/images/logo.svg";
import DemoUser from "../../../../assets/images/demoUser.svg";
import Button from "./Button";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function DesktopNavbar() {
  const [demoAuth, setDemoAuth] = useState(false);
  const { pathname } = useLocation();
  const tabs = [
    {
      title: "Job Board",
      route: "/board",
    },
    {
      title: "Bookmarked Jobs",
      route: "/bookmark",
    },
  ];

  const navigate = useNavigate();
  return (
    <div className="bg-[#FFF] px-[0px] lg:px-[80px] h-[72px] z-[2] border border-b-[#EAECF0] w-[100%] flex fixed top-0 left-0">
      <div className="px-[32px] flex justify-between w-[100%]">
        <img width={142} height={32} src={logo} alt="logo" />
        <div className="flex align-middle justify-center gap-[4px]">
          {tabs.map((tab, i) => {
            return (
              <Button
                text={tab.title}
                key={i}
                active={tab.route === pathname ? true : false}
                clickH={() => navigate(tab.route)}
              />
            );
          })}
        </div>
        {!demoAuth ? (
          <div className="flex">
            <button
              className={
                "px-[18px] py-[8px] h-[40px] font-bold  text-[#344054] m-auto outline-0  rounded-[50px] bg-[#FFF]"
              }
              onClick={() => setDemoAuth(!demoAuth)}
            >
              Log in
            </button>
            <button
              className={
                "px-[18px] py-[8px] h-[40px] font-bold  text-[#FFF] m-auto outline-0  rounded-[50px] bg-[#0C68FF]"
              }
              onClick={() => setDemoAuth(!demoAuth)}
            >
              Sign up
            </button>
          </div>
        ) : (
          <div className="flex">
            <img
              width={40}
              height={40}
              className="rounded-[50%] cursor-pointer"
              src={DemoUser}
              alt="avatar"
              onClick={() => setDemoAuth(!demoAuth)}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default DesktopNavbar;
