import React from "react";

export const IconRow = (props)  => {
    const {
      label,
      icon,
    } = props || {};
  return (
    <div className="w-[358px] lg:w-[360px] max-[400px]:w-[100%]">
      <span className="text-sm text-gray-600 flex flex-row items-center font-semibold mt-3">
        <img src={icon} alt="" className="h-4 w-4 mr-3" />
        {`${label}`}
      </span>
    </div>
  );
}
