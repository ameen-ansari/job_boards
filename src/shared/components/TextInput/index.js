import { error, password, passwordDisable } from "../../../helper/icons";
import { useState } from "react";

export const TextInput = (props) => {
  const {
    label,
    placeholder,
    type = "text",
    width = "w-[358px] lg:w-[384px] max-[400px]:w-[100%]",
    errorMsg = "",
    name,
    register,
    value,
    className = "",
    disabled = false,
    pattern = "\\S+.*\\S*",
    textTransform = "capitalize",
    adornment,
    ...rest
  } = props || {};
  const isPassword = type === "password";
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col w-[100%]">
      {!!label && (
        <span className="text-gray-700 font-medium text-sm mb-1.5">
          {label}
        </span>
      )}
      <div className={`flex row ${isPassword ? "relative" : ""}`}>
        <input
          {...register?.(name)}
          type={isPassword ? (!showPassword ? "password" : "text") : type}
          placeholder={placeholder}
          className={`${textTransform} ${width} ${className} ${
            disabled && "bg-white/50"
          } rounded-lg border border-solid ${
            errorMsg ? "border-red" : "border-gray-300"
          } py-2.5 ${adornment ? "pl-[45px] pr-3.5" : "px-3.5"} ${
            disabled ? "text-gray-900/50" : "text-gray-900"
          } font-inter font-normal text-md leading-6 text-base focus:outline-none`}
          value={value}
          disabled={disabled}
          // title="cannot consist of only spaces"
          // pattern={pattern}
          {...rest}
        />
        { (isPassword && !errorMsg )&& (
          <img
            src={showPassword ? password : passwordDisable}
            onClick={() => setShowPassword(!showPassword)}
            alt=""
            height={20}
            width={20}
            className="absolute top-1/2 right-2 transform -translate-x-1/10 -translate-y-1/2"
          />
        )}
         {errorMsg && (
          <img
            src={error}
            // onClick={() => setShowPassword(!showPassword)}
            alt=""
            height={20}
            width={20}
            className="ml-[-30px]"
          />
        )}
        {adornment && (
          <span className="absolute pointer-events-none flex flex-row items-center px-3">
            <div>{adornment}</div>
            <div className="w-[1.2px] bg-gray-300 ml-2.5 h-[46px]" />
          </span>
        )}
      </div>
      {!!errorMsg && (
        <span className="text-red font-medium max-w-[352px] text-sm mt-1">
          {errorMsg}
        </span>
      )}
    </div>
  );
};
