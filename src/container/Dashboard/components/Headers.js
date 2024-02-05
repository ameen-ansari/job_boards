import sortIcon from "../../../assets/icons/sortIcon.svg";

function Headers({ jobs }) {
  return (
    <>
      {/* ForMobile */}
      <p className="leading-[30px] mb-[18px] font-bold text-[#101828] block sm:hidden text-[20px]">
        Product Designer
      </p>
      <div className="flex justify-between">
        {/* ForDesktop */}
        <p className="leading-[32px] font-bold text-[#101828] hidden  sm:block text-[24px]">
          Product Designer ({jobs} Jobs)
        </p>
        {/* ForMobile */}
        <p className="leading-[32px] font-bold text-[#101828] block sm:hidden">
          {jobs} Jobs Found
        </p>
        <button
          style={{ boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)" }}
          className="h-[40px] px-[18px] text-[#344054] font-bold leading-[24px] rounded-[50px] border border-[#D0D5DD] flex gap-[8px] justify-center align-middle text-center  outline-0"
        >
          <p className="m-auto">Sort by</p>
          <img
            width={20}
            height={20}
            className="m-auto"
            src={sortIcon}
            alt="Sort"
          />
        </button>
      </div>
    </>
  );
}

export default Headers;
