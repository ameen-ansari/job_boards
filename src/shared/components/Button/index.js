
import Loader from "../Loader";

export const Button = (props) => {
  const {
    label,
    onClick,
    color = "text-white",
    width = "w-[358px] lg:w-[384px] max-[400px]:w-[100%]",
    disabled = false,
    onlyDisabled = false,
    icon,
    prefix = true,
  } = props || {};
  return (
    <div
      className={`h-11 ${width} bg-primary rounded-full ${
        disabled ? "opacity-50" : ""
      } items-center justify-center flex`}
    >
      {disabled && !onlyDisabled ? (
        <Loader stroke="text-[#fff]" />
      ) : (
        <button
          onClick={onClick}
          className={`${width} ${color} h-11 font-semibold text-base  flex flex-row justify-center items-center`}
          disabled={disabled}
        >
          {!!icon && prefix && (
            <img src={icon} alt="" className="mr-2 w-5 h-5" />
          )}
          {label}
          {!!icon && !prefix && (
            <img src={icon} alt="" className="ml-2 w-5 h-5" />
          )}
        </button>
      )}
    </div>
  );
};
