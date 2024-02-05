function CardButton(props) {
  const { value, onClick } = props || {};
  return (
    <button
      className="flex justify-center align-middle h-[24px] text-center rounded-[16px] px-[10px]  text-[#344054] text-[14px] leading-[20px] border border-[#EAECF0] bg-[#F9FAFB]"
      onClick={onClick}
    >
      {value}
    </button>
  );
}

export default CardButton;
