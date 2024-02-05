import React from "react";

function Button(props) {
  const { text, active, clickH} = props || {};
  return (
    <button
      className={`px-[18px] py-[8px] h-[40px] font-bold   m-auto outline-0
      rounded-[50px] hover:bg-[#F9FAFB] hover:text-[#344054]
       ${
         active ? `bg-[#F9FAFB]  text-[#182230]` : 'text-[#344054]'
       }`}
       onClick={clickH}
    >
      {text}
    </button>
  );
}

export default Button;
