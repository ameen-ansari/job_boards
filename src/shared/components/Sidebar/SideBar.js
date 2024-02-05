import React, { useState } from "react";
import logout from "../../../assets/icons/logout.svg";
import close from "../../../assets/icons/close.svg";
import settingsIcon from "../../../assets/icons/settings.svg";
import logo from "../../../assets/images/logo.svg";
import user from "../../../assets/images/demoUser.svg";
import support from "../../../assets/icons/support.svg";
import BlueShadowBtn from "../buttons/BlueShadowBtn";
import { useLocation, useNavigate } from "react-router-dom";

function SideBar({ show, onClose }) {
  const navigate = useNavigate();
  const [demiAuth, setdemiAuth] = useState(false);
  const { pathname } = useLocation();

  const sidebarData = [
    {
      title: "Job Board",
      route: "/",
    },
    {
      title: "Bookmarked Jobs",
      route: "/bookmark",
    },
  ];
  return (
    <>
      <div
        className={`transition-all w-[100%] h-[100vh]   bg-[#0C111D] opacity-[0.9] absolute top-0 ${
          show ? "right-[0px]" : "right-[-101%]"
        }`}
      >
        <div
          onClick={onClose}
          className="absolute top-[12px] right-[8px] z-[4] cursor-pointer w-[40px] h-[40px] flex justify-center align-middle rounded-[58px] bg-[#344054] "
        >
          <img width={24} height={24} src={close} alt="close" />
        </div>
      </div>
      <div
        className={`transition-all w-[311px] bg-[#FFF] absolute top-0 ${
          show ? "left-[0px]" : "left-[-100%]"
        }`}
      >
        <div className="w-[311px] relative z-[3] bg-[#FFF] h-[100vh] flex flex-col pb-[24px]">
          <img
            width={142}
            height={32}
            src={logo}
            className="cursor-pointer pt-[16px] pb-[20px] pl-[16px]"
            alt="logo"
          />
          <div className="h-[100%] flex flex-col justify-between  px-[8px]">
            {/* Top div Start from Here */}
            <div className="flex flex-col w-auto gap-[4px]">
              {sidebarData.map((opt, i) => {
                return (
                  <p
                    className={`${
                      opt.route === pathname ? "bg-[#F9FAFB]" : null
                    } cursor-pointer px-[18px] py-[8px] text-[#344054] font-bold leading-[24px] rounded-[50px] hover:bg-[#F9FAFB]`}
                    key={i}
                    onClick={() => navigate(opt.route)}
                  >
                    {opt.title}
                  </p>
                );
              })}
            </div>
            {/* Bottom div Start from Here */}
            <div>
              <div className="pb-[20px] flex flex-col gap-[4px]">
                <div className="cursor-pointer gap-[12px] flex px-[12px] py-[8px]">
                  <img src={settingsIcon} alt="settings" />
                  <p className=" text-[#344054] font-bold leading-[24px]">
                    Settings
                  </p>
                </div>
                <div className="cursor-pointer gap-[12px] flex px-[12px] py-[8px]">
                  <img src={support} alt="support" />
                  <p className=" text-[#344054] font-bold leading-[24px]">
                    Support
                  </p>
                </div>
              </div>
              {/* Authraization */}
              {!demiAuth ? (
                <div className="flex pt-[18px] border-t border-t-[#EAECF0]">
                  <BlueShadowBtn
                    onClick={() => setdemiAuth(!demiAuth)}
                    width={true}
                    shadow={false}
                    color={"text-[#344054]"}
                    bg={"bg-[#FFF]"}
                    value={"Login"}
                  />
                  <BlueShadowBtn
                    onClick={() => setdemiAuth(!demiAuth)}
                    value={"Sign up"}
                    width={true}
                    shadow={false}
                  />
                </div>
              ) : (
                <div className="flex justify-between pt-[18px] border-t border-t-[#EAECF0]">
                  <div className="flex gap-[8px]">
                    <img
                      src={user}
                      alt="user"
                      width={40}
                      height={40}
                      className="rounded-[50% ]"
                    />
                    <div className="flex flex-col">
                      <p className="text-[14px] font-semibold leading-[20px] text-[#344054]">
                        Olivia Rhye
                      </p>
                      <p className="text-[14px] font-normal leading-[20px] text-[475467]">
                        olivia@untitledui.com
                      </p>
                    </div>
                  </div>
                  <img
                    onClick={() => setdemiAuth(!demiAuth)}
                    className="cursor-pointer"
                    src={logout}
                    alt="logout"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
