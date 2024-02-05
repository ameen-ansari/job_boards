import bgImg from "../../../assets/images/bgImage.svg";
import bookmark from "../../../assets/icons/bookmark.svg";
import BlueShadowBtn from "../../../shared/components/buttons/BlueShadowBtn";

function ViewJobPageHeader(props) {
  const { postedOn, title, blueText, country, requirments, flag } = props || {};
  return (
    <div
      style={{
        background: `linear-gradient(180deg, #F0F6FF 20%, rgba(240, 246, 255, 0.00) 69.72%), url(${bgImg}), lightgray 50% / cover no-repeat`,
        backgroundSize:'cover'
      }}
      className="px-[0px] lg:px-[80px] py-[32px]  md:py-[48px]"
    >
      <div className="px-[16px] md:px-[32px] flex gap-[18px] flex-col">
        <p className="text-[#475467] text-[14px] leading-[20px] font-normal">
          {postedOn}
        </p>
        <div>
          <p className="leading-[32px] md:leading-[38px] text-[24px] font-bold text-[#101828] md:text-[30px]">
            {title}
          </p>
          <p className="text-[#054CC1]  font-bold leading-[24px] mt-[8px]">
            {blueText}
          </p>
        </div>
        <div>
          <button className="flex h-[28px] rounded-[38px] gap-[6px] pl-[6px] pr-[12px] border border-[#CFE1FF]  ">
            <img
              width={16}
              height={16}
              className="m-auto"
              src={flag}
              alt="Flag"
            />
            <p className="text-[#054CC1] text-[14px] leading-[20px] m-auto">
              {country}
            </p>
          </button>
        </div>
        <div className="flex gap-[24px]">
          <div>
            <p className="text-[#101828] leading-[24px] font-bold">Pay</p>
            <button className="mt-[10px] flex h-[28px] rounded-[38px]  px-[10px] border border-[#CFE1FF]  ">
              <p className="text-[#054CC1] text-[14px] leading-[20px] m-auto">
                {requirments[0]}
              </p>
            </button>
          </div>
          <div>
            <p className="text-[#101828] leading-[24px] font-bold">Job type</p>
            <button className="mt-[10px] flex h-[28px] rounded-[38px]  px-[10px] border border-[#CFE1FF]  ">
              <p className="text-[#054CC1] text-[14px] leading-[20px] m-auto">
                {requirments[1]}
              </p>
            </button>
          </div>
        </div>
        <div className="flex gap-[18px]">
        <BlueShadowBtn value={'Apply Now'} />
          <button
            style={{ boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)" }}
            className="w-[44px] h-[44px] bg-[#FFF] outline-0 border border-[#D0D5DD] rounded-[50%]"
          >
            <img
              src={bookmark}
              className="m-auto"
              width={20}
              height={20}
              alt="bookmark"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ViewJobPageHeader;
