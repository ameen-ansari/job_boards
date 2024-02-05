function JobContent(data) {
 
  return (
    <div className="px-[0px] lg:px-[80px] ">
      <div className="py-[32px]  md:py-[48px] px-[16px] md:px-[32px]">
        <p className="text-[24px] sm:text-[30px] font-bold sm:font-semibold text-[#101828] leading-[38px]">
          Job Description
        </p>
        <p className="mt-[20px] text-[20px] sm:text-[24px] font-bold sm:font-semibold text-[#101828] leading-[32px]">
          Job Summary
        </p>
        <p className="text-[#475467] text-[18px] font-normal leading-[28px] mt-[16px]">
          {data["Job Summary"]}
        </p>
        <p className="mt-[20px] text-[20px] sm:text-[24px] font-bold sm:font-semibold text-[#101828] leading-[32px]">
          Job Duties and Responsibilities{" "}
        </p>
        <ul className="text-[#475467] text-[18px] font-normal leading-[28px] mt-[16px] list-disc pl-[25px]">
          {data["Job Duties and Responsibilities"]?.map((text, i) => {
            return <li key={i}>{text}</li>;
          })}
        </ul>
        <p className="text-[#475467] text-[18px] font-normal leading-[28px] mt-[16px]">
          Additional assignments may be required depending on company needs.
        </p>
        <p className="mt-[20px] text-[20px] sm:text-[24px] font-bold sm:font-semibold text-[#101828] leading-[32px]">
          Qualifications{" "}
        </p>
        <ul className="text-[#475467] text-[18px] font-normal leading-[28px] mt-[16px] list-disc pl-[25px]">
          {data?.Qualifications?.map((text, i) => {
            return <li key={i}>{text}</li>;
          })}
        </ul>
        <p className="mt-[20px] text-[20px] sm:text-[24px] font-bold sm:font-semibold text-[#101828] leading-[32px]">
          Benefits{" "}
        </p>
        <ul className="text-[#475467] text-[18px] font-normal leading-[28px] mt-[16px] list-disc pl-[25px]">
          {data?.Benefits?.map((text, i) => {
            return <li key={i}>{text}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default JobContent;
