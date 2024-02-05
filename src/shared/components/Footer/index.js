import { useMediaQuery } from "react-responsive";
import logo from "../../../assets/images/logo.svg";
import xImg from "../../../assets/images/xSocial.svg";
import fb from "../../../assets/images/fb.svg";
import linkedIn from "../../../assets/images/linkedIn.svg";

function Footer() {
  const isMobile = useMediaQuery({ maxWidth: 600 });
  return (
    <div className="bg-[#FFF]  px-[0px] lg:px-[80px]">
      <div className="px-[16px] md:px-[32px] py-[64px]  flex flex-wrap gap-[64px]">
        <div className="flex flex-col gap-[32px] w-[100%] lg:w-[320px]">
          <img width={142} height={32} src={logo} alt="logo" />
          <p className="text-[#475467] leading-[24px] font-normal w-[320px]">
            Design amazing digital experiences that create more happy in the
            world.
          </p>
        </div>
        {!isMobile ? (
          <div className="flex flex-1  gap-[16px] justify-between">
            <div className="flex flex-col gap-[16px]">
              <p className="text-[#667085] font-bold leading-[20px] text-[14px] ">
                Explore
              </p>
              <p className="text-[#475467] font-bold leading-[24px] cursor-pointer">
                Home
              </p>
            </div>
            <div className="flex flex-col gap-[16px]">
              <p className="text-[#667085] font-bold leading-[20px] text-[14px]">
                Account
              </p>
              <p className="text-[#475467] font-bold leading-[24px] cursor-pointer">
                Upgrade
              </p>
              <p className="text-[#475467] font-bold leading-[24px] cursor-pointer">
                Upgrade
              </p>
            </div>
            <div className="flex flex-col gap-[16px]">
              <p className="text-[#667085] font-bold leading-[20px] text-[14px] ">
                Sponser
              </p>
              <p className="text-[#475467] font-bold leading-[24px] cursor-pointer">
                Upgrade
              </p>
              <p className="text-[#475467] font-bold leading-[24px] cursor-pointer">
                Upgrade
              </p>
            </div>
            <div className="flex flex-col gap-[16px]">
              <p className="text-[#667085] font-bold leading-[20px] text-[14px] ">
                AI Service
              </p>
              <p className="text-[#475467] font-bold leading-[24px] cursor-pointer">
                AI Services
              </p>
            </div>
            <div className="flex flex-col gap-[16px]">
              <p className="text-[#667085] font-bold leading-[20px] text-[14px] ">
                Premium
              </p>
              <p className="text-[#475467] font-bold leading-[24px] cursor-pointer">
                AI Tool
              </p>
              <p className="text-[#475467] font-bold leading-[24px] cursor-pointer">
                Report Pro
              </p>
            </div>
            <div className="flex flex-col gap-[16px]">
              <p className="text-[#667085] font-bold leading-[20px] text-[14px] ">
                Tool Database
              </p>
              <p className="text-[#475467] font-bold leading-[24px] cursor-pointer">
                Tool Database
              </p>
            </div>
          </div>
        ) : (
          <div className="flex flex-1 gap-[16px] justify-between">
            <div className="flex flex-col flex-1 gap-[32px] justify-between align-top">
              <div className="flex flex-col gap-[16px] ">
                <p className="text-[#667085] font-bold leading-[20px] text-[14px] ">
                  Explore
                </p>
                <p className="text-[#475467] font-bold leading-[24px]">Home</p>
              </div>
              <div className="flex flex-col gap-[16px]">
                <p className="text-[#667085] font-bold leading-[20px] text-[14px] ">
                  Account
                </p>
                <p className="text-[#475467] font-bold leading-[24px]">
                  Upgrade
                </p>
                <p className="text-[#475467] font-bold leading-[24px]">
                  Upgrade
                </p>
              </div>
              <div className="flex flex-col gap-[16px]">
                <p className="text-[#667085] font-bold leading-[20px] text-[14px] ">
                  Sponser
                </p>
                <p className="text-[#475467] font-bold leading-[24px]">
                  Upgrade
                </p>
                <p className="text-[#475467] font-bold leading-[24px]">
                  Upgrade
                </p>
              </div>
            </div>
            <div className="flex flex-col flex-1  gap-[32px] justify-between align-top">
              <div className="flex flex-col gap-[16px]">
                <p className="text-[#667085] font-bold leading-[20px] text-[14px] ">
                  AI Service
                </p>
                <p className="text-[#475467] font-bold leading-[24px]">
                  AI Services
                </p>
              </div>
              <div className="flex flex-col gap-[16px]">
                <p className="text-[#667085] font-bold leading-[20px] text-[14px] ">
                  Premium
                </p>
                <p className="text-[#475467] font-bold leading-[24px]">
                  AI Tool
                </p>
                <p className="text-[#475467] font-bold leading-[24px]">
                  Report Pro
                </p>
              </div>
              <div className="flex flex-col gap-[16px]">
                <p className=" text-[#667085] font-bold leading-[20px] text-[14px] ">
                  Tool Database
                </p>
                <p className=" text-[#475467] font-bold leading-[24px]">
                  Tool Database
                </p>
                <p className="invisible">hidden</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className=" mb-[48px] px-[16px] md:px-[32px]">
        <div className="pt-[32px] border-t border-t-[#EAECF0] flex justify-between flex-wrap gap-[32px]">
          <div className="flex gap-[12px] flex-wrap">
            <p className="text-[#667085] leading-[24px] font-normal">
              ©2023 AI Tool Report
            </p>
            <div className="flex gap-[12px] ">
              <p className="text-[#667085] leading-[24px] font-normal underline cursor-pointer">
                Privacy Policy
              </p>
              <p className="text-[#667085] leading-[24px] font-normal underline cursor-pointer">
                Terms of Use
              </p>
            </div>
          </div>

          <div className="flex gap-[24px]">
            <img
              width={24}
              height={24}
              className="cursor-pointer"
              src={xImg}
              alt="XIcon"
            />
            <img
              width={24}
              height={24}
              className="cursor-pointer"
              src={linkedIn}
              alt="linkedIn"
            />
            <img
              width={24}
              height={24}
              className="cursor-pointer"
              src={fb}
              alt="fb"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
