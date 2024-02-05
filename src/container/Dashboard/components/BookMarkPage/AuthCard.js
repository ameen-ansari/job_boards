import BlueShadowBtn from "../../../../shared/components/buttons/BlueShadowBtn";

function AuthCard(props) {
  const { btnValue, image, title, desc, onClick } = props || {};

  return (
    <div className="flex flex-col max-w-[475px] cursor-pointer px-[42px] py-[33px] rounded-[16px] border border-[#EAECF0] bg-[#FCFCFD]">
      <img className="w-[100%] rounded-[16px]" src={image} alt="cardImage" />
      <div className="py-[32px]">
        <p className="text-[#101828] text-[24px] font-bold leading-[32px]">
          {title}
        </p>
        <p className="text-[#475467] text-[18px] font-normal leading-[28px] mt-[12px]">
          {desc}
        </p>
      </div>
      <BlueShadowBtn onClick={() => onClick(btnValue)} value={btnValue} />
    </div>
  );
}

export default AuthCard;
