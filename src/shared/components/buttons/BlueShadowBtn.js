function BlueShadowBtn(props) {
  const { value, bg, color, shadow, width, onClick, h, margin , smhide } = props || {};
  return (
    <button
      onClick={onClick}
      style={{
        boxShadow: shadow ? "0px 1px 2px 0px rgba(16, 24, 40, 0.05)" : null,
      }}
      className={`${margin ? margin : null} ${smhide?"hidden sm:block":null} ${h ? h : "h-[44px]"} ${
        width ? "flex-1" : null
      } px-[18px]  font-bold ${
        bg ? color : "text-[#FFF]"
      } outline-0  rounded-[50px] ${bg ? bg : "bg-[#0C68FF]"} `}
    >
      {value}
    </button>
  );
}

export default BlueShadowBtn;
