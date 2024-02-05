export const TextArea = (props) => {
  const {
    label,
    placeholder,
    width = "w-[358px] lg:w-[384px] max-[400px]:w-[100%]",
    errorMsg = "",
    name,
    register,
    rows = 4,
    className = "",
    disabled = false,
  } = props || {};

  return (
    <div className="flex flex-col max-[400px]:w-[100%]">
      <span className="text-gray-700 font-medium text-sm mb-1.5">{label}</span>
      <div className="flex row">
        <textarea
          {...register?.(name)}
          placeholder={placeholder}
          className={`${width} ${className} rounded-lg border border-solid ${
            errorMsg ? "border-red" : "border-gray-300"
          } ${disabled && "bg-white/50"} py-2.5 px-3.5 ${
            disabled ? "text-gray-700/50" : "text-gray-700"
          } bg-white font-normal text-base`}
          rows={rows}
          disabled={disabled}
        />
      </div>
      {!!errorMsg && (
        <span className="text-red font-medium text-sm mt-1">{errorMsg}</span>
      )}
    </div>
  );
};
