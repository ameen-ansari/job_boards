import BlueShadowBtn from "../../../shared/components/buttons/BlueShadowBtn";

function Subscribe({ bg }) {
  return (
    <div className={`${bg} py-[32px] sm:py-[48px] px-[0px] lg:px-[80px]`}>
      <div className="px-[16px] md:px-[32px] flex gap-[32px] sm:gap-[48px] flex-col md:flex-row">
        <div className="flex flex-col gap-[16px]">
          <p className="text-[#101828] font-bold text-[24px] md:text-[30px] leading-[38px]">
            AI Tool Report
          </p>
          <p className="text-[#475467] font-normal text-[20px] leading-[30px]">
            Learn AI in 5 minutes a day. We'll teach you how to save time and
            earn more with AI. Join 475,000+ free daily readers from Tesla,
            Apple, A16z, Meta, & more.
          </p>
        </div>
        <div className="flex gap-[16px] flex-col sm:flex-row">
          <input
            style={{ boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)" }}
            className="h-[44px] px-[18px] text-[#667085] font-normal leading-[24px] border outline-0 border-[#D0D5DD] rounded-[50px]"
            type="email"
            placeholder="Enter your email"
          />
          <BlueShadowBtn value={'Subscribe'} />
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
