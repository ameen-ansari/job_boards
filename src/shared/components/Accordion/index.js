// import { globalVariables } from "../../helper/globalVariables";
import { arrowDown } from "../../../helper/icons";
import { useEffect, useState } from "react";

const Accordion = (props) => {
  const {
    items,
    children,
    width = "w-[100%]",
    onChangeIndex,
    defaultIndex = 0,
    hasRemove = false,
    onRemove,
    hasLabel = false,
  } = props || {};
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  useEffect(() => {
    setActiveIndex(defaultIndex);
  }, [defaultIndex]);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
    onChangeIndex?.(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center max-[400px]:w-[100%]">
      {items.map((item, index) => {
        return (
          <div
            key={index}
            className={`border-t border-gray-300 mb-4 ${
              activeIndex === index && "pb-4 rounded-lg border bg-[#FCFCFD]"
            }  ${width}`}
          >
            <div
              className="flex justify-between items-center py-4 px-6 cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <h2 className="text-sm text-gray-700 font-semibold">
                {hasLabel
                  ? item.title
                  : hasRemove
                  ? `${item.title} ${index + 1}`
                  : item.title}
              </h2>
              <div className="flex flex-row">
                <img
                  className={`${
                    activeIndex !== index ? "transform rotate-180" : ""
                  }`}
                  src={arrowDown}
                  alt=""
                />
              </div>
            </div>
            {activeIndex === index && <div className="px-6">{children}</div>}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
