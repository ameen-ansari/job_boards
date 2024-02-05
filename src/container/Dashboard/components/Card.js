import menuDots from "../../../assets/icons/3dots.svg";
import CardButton from "./CardButton";
function Card(props) {
  const {
    postedOn,
    title,
    blueText,
    flag,
    country,
    desc,
    requirments,
    onClick,
  } = props || {};
  return (
    <div
      onClick={onClick}
      className="border cursor-pointer border-[#EAECF0] rounded-[16px] p-[24px] max-w-[596px] flex flex-col gap-[18px]"
    >
      <div className="flex justify-between">
        <p className="text-[#475467] text-[12px] leading-[18px] font-normal">
          {postedOn}
        </p>
        <img src={menuDots} alt="Menu" />
      </div>
      <div>
        <div className="flex justify-between">
          <p className="leading-[28px] font-bold text-[#101828] text-[18px]">
            {title}
          </p>
          <button className=" hidden sm:flex h-[28px] rounded-[38px] gap-[6px] pl-[6px] pr-[10px] border border-[#D0D5DD] bg-[#FFF] ">
            <img
              width={16}
              height={16}
              className="m-auto"
              src={flag}
              alt="Flag"
            />{" "}
            <p className="text-[#344054] text-[14px] leading-[20px] m-auto">
              {country}
            </p>
          </button>
        </div>
        <p className="text-[#054CC1] text-[14px] font-bold leading-[20px] mt-[8px]">
          {blueText}
        </p>
        <button className="flex sm:hidden mt-[8px] h-[28px] rounded-[38px] gap-[6px] pl-[6px] pr-[10px] border border-[#D0D5DD] bg-[#FFF] ">
          <img
            width={16}
            height={16}
            className="m-auto"
            src={flag}
            alt="Flag"
          />{" "}
          <p className="text-[#344054] text-[14px] leading-[20px] m-auto">
            {country}
          </p>
        </button>
      </div>
      <div className="flex gap-[12px] flex-wrap">
        {requirments?.map((req, i) => {
          return <CardButton key={i} value={req} />;
        })}
      </div>
      <div className="w-[100%]">
        <p
          style={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            textOverflow: "ellipsis",
            WebkitLineClamp: 3,
            maxHeight: "60px",
          }}
          className="w-[100%] overflow-hidden text-[#475467] text-[14px] font-normal leading-[20px]"
        >
          {desc}
        </p>
      </div>
    </div>
  );
}

export default Card;
