import React, { useEffect, useState } from "react";
import { Calendar } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
import cylender from "../../../assets/icons/cylender.svg";
import filter from "../../../assets/icons/filters.svg";
import location from "../../../assets/icons/location.svg";
import BlueShadowBtn from "../../../shared/components/buttons/BlueShadowBtn";
import Dropdown from "./Dropdown";
import Filters from "./Filters";

function FormControl() {
  const [showDatePicker, setshowDatePicker] = useState(false);
  const [showFilters, setshowFilters] = useState(false);
  const [date, setDate] = useState("Select dates");
  const dropdownsRef = [
    {
      placeholder: "Job Types",
      isDropdown: true,
      options: [
        { label: "Full-Time", value: "fullTime" },
        { label: "Part-Time", value: "partTime" },
        { label: "Internship", value: "internship" },
        { label: "Freelance", value: "freelance" },
        { label: "Contract", value: "contract" },
      ],
      onChange: () => null,
    },
    {
      placeholder: "Experience level (All)",
      isDropdown: true,
      options: [
        { label: "All", value: "All" },
        { label: "Entry level/Junior", value: "Junior" },
        { label: "Mid level/Intermediate", value: "Intermediate" },
        { label: "Senior level/Expert", value: "Expert" },
        { label: "Executive level/Director", value: "Director" },
      ],
      minWidth: 225,
      onChange: () => null,
    },
    {
      placeholder: "Pay (All)",
      isDropdown: true,
    },
    {
      placeholder: "Technical",
      isDropdown: true,
      options: [
        { label: "Technical", value: "Technical" },
        { label: "Non-technical", value: "Non-technical" },
      ],
      onChange: () => null,
    },
    {
      placeholder: "Region",
      isDropdown: true,
      options: [
        { label: "Remote", value: "Remote" },
        { label: "Africa", value: "Africa" },
        { label: "Asia", value: "Asia" },
        { label: "Europe", value: "Europe" },
        { label: "Middle East", value: "Middle East" },
        { label: "North America", value: "North America" },
        { label: "South America", value: "South America" },
      ],
      onChange: () => null,
    },
    {
      placeholder: "Company",
      isDropdown: true,
    },
  ];

  const hideDatePicker = () => {
    showDatePicker
      ? setshowDatePicker(!showDatePicker)
      : setshowDatePicker(false);
  };
  return (
    <>
      <div
        className="pt-[48px] px-[0px] lg:px-[80px] pb-[24px] md:pb-[32px]"
        onClick={hideDatePicker}
      >
        <div className="px-[16px] md:px-[32px] ">
          {/*Show In Mobile Screens */}
          {showFilters ? (
            <div className="fixed sm:hidden top-0 left-0 w-[100vw] h-[100vh] z-[3] bg-[#0C111D] bg-opacity-90 px-[16px] flex">
              <Filters
                onClose={() => setshowFilters(!showFilters)}
                datePicker={showDatePicker}
                setDatePicker={() => setshowDatePicker(!showDatePicker)}
                dropdownsRef={dropdownsRef}
              />
            </div>
          ) : null}
          {/* Form 1st Row Inputs & Button */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-[18px]">
            <div className="flex flex-wrap flex-col sm:flex-row flex-1 gap-[18px]">
              <div className="flex-1 min-w-[250px]">
                <Dropdown
                  placeholder={"Search for jobs"}
                  leftImage={cylender}
                />
              </div>
              <div className="flex-1 min-w-[250px]">
                <Dropdown
                  placeholder={"Search by location"}
                  leftImage={location}
                />
              </div>
            </div>
            {/*Buttons Show in Mobile View */}
            <div className="flex gap-[18px] sm:hidden">
              <button
                onClick={() => setshowFilters(!showFilters)}
                style={{ boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)" }}
                className="flex-1 h-[44px] px-[18px] text-[#344054] font-bold leading-[24px] rounded-[50px] border border-[#D0D5DD] flex gap-[8px] justify-center align-middle text-center  outline-0"
              >
                <img
                  width={20}
                  height={20}
                  className="my-auto"
                  src={filter}
                  alt="filter"
                />
                <p className="my-auto">Filters</p>
              </button>
              <BlueShadowBtn
                width={true}
                margin={"m-auto"}
                value={"Find Jobs"}
              />
            </div>
            {/*Buttons Show in Desktop View */}
            <BlueShadowBtn
              smhide={true}
              margin={"m-auto"}
              value={"Find Jobs"}
            />
          </div>
          {/*2nd Row Parent of Dropdowns */}
          <div className="hidden sm:flex flex-wrap  mt-[18px] gap-[18px]">
            {/* Select dates Button */}
            <div
              className="relative"
              onClick={(event) => {
                event.stopPropagation();
              }}
            >
              <button
                onClick={() => {
                  setshowDatePicker(!showDatePicker);
                }}
                className="relative flex border rounded-[50px] border-[#D0D5DD] px-[18px] py-[10px] gap-[8px] text-[#667085] font-normal"
              >
                <img
                  width={20}
                  height={20}
                  className="m-auto"
                  src={cylender}
                  alt=""
                />
                {date}
              </button>
              {/* Calender */}
              {showDatePicker ? (
                <div className="calender-parent w-[328px] absolute left-0 z-[1] top-[115%]">
                  <Calendar
                    onChange={(e) => {
                      setDate(
                        `${e.getDate()}-${e.getMonth() + 1}-${e.getFullYear()}`
                      );
                      setshowDatePicker(false);
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
      </div>
    </>
  );
}

export default FormControl;
