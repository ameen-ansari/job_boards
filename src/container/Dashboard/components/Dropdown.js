import { components } from "react-select";
import Creatable from "react-select/creatable";
import activeArrow from "../../../assets/icons/activeArrow.svg";
import arrow from "../../../assets/icons/arrow.svg";
import tick from "../../../assets/icons/tick.svg";

function Dropdown(props) {
  const {
    placeholder,
    isSearchable,
    isDropdown,
    leftImage,
    rightImage,
    options,
    onChange,
    minWidth,
  } = props || {};
  return (
    <div>
      <Creatable
        onChange={onChange}
        placeholder={placeholder}
        isSearchable={isDropdown ? false : isSearchable}
        options={options}
        autosize={true}
        components={{
          Control: ({ children, isFocused, menuIsOpen, ...rest }) => (
            <components.Control {...rest}>
              {leftImage ? (
                <img
                  width={20}
                  height={20}
                  src={leftImage}
                  className="cursor-pointer"
                  alt=""
                />
              ) : null}
              {children}
              {isDropdown ? (
                <img
                  width={20}
                  height={20}
                  src={menuIsOpen ? activeArrow : arrow}
                  className="cursor-pointer"
                  alt="arrow"
                />
              ) : null}
              {rightImage ? (
                <img
                  width={20}
                  height={20}
                  src={rightImage}
                  className="cursor-pointer"
                  alt="arrow"
                />
              ) : null}
            </components.Control>
          ),
          DropdownIndicator: () => null,
          IndicatorSeparator: () => null,
          Option: ({ children, isSelected, ...props }) => {
            return (
              <components.Option {...props}>
                {children}
                {isSelected ? <img src={tick} alt="selected" /> : null}
              </components.Option>
            );
          },
        }}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderColor: "#D0D5DD",
            borderRadius: "50px",
            outline: 0,
            boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
            height: "44px",
            padding: "0px 14px",
            minWidth: minWidth,
            color: "#667085",
            fontWeight: 400,
            lineHeight: "24px",
            display: "flex",
            cursor: "pointer",
            background: "#FFF",
          }),
          option: (baseStyles, state) => ({
            ...baseStyles,
            display: "flex",
            justifyContent: "space-between",
            cursor: "pointer",
            whiteSpace: "nowrap",
            color: "#101828",
            fontWeight: 500,
            background: state.isSelected
              ? "#F9FAFB"
              : state.isFocused
              ? "#F9FAFB"
              : "gray-900",
            borderRadius: 6,
          }),
        }}
      />
    </div>
  );
}

export default Dropdown;
