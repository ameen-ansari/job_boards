import React, { useState } from "react";
import Dropdown from "./Dropdown";
import close from "../../../assets/icons/close.svg";
import { Calendar } from "react-date-range";
import cylender from "../../../assets/icons/cylender.svg";

function Filters({ onClose, datePicker, setDatePicker , dropdownsRef }) {
  const [date, setDate] = useState("Select dates");

  return (
    <div className="w-[100%] gap=[18px] opacity-[1]  m-auto rounded-[16px] border border-[#EAECF0]   bg-[#FFF] p-[18px]">
      <div className="flex justify-between">
        <p>Filters</p>
        <img onClick={onClose} src={close} alt="close" />
      </div>
      <div className="flex flex-col flex-wrap mt-[18px] gap-[18px]">
        <div
          className="relative"
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          <button
            onClick={setDatePicker}
            className="relative flex justify-center border w-[100%] rounded-[50px] border-[#D0D5DD] px-[18px] py-[10px] gap-[8px] text-[#667085] font-normal"
          >
            <img
              width={20}
              height={20}
              className="my-auto"
              src={cylender}
              alt=""
            />
            {date}
          </button>
          {datePicker ? (
            <div className="calender-parent w-[328px] absolute left-0 z-[1] top-[115%]">
              <Calendar
                onChange={(e) => {
                  setDate(
                    `${e.getDate()}-${e.getMonth() + 1}-${e.getFullYear()}`
                  );
                  setDatePicker();
                }}
              />
            </div>
          ) : null}
        </div>
        {dropdownsRef.map((dropdown, i) => (
          <Dropdown key={i} {...dropdown} />
        ))}
      </div>
    </div>
  );
}

export default Filters;
