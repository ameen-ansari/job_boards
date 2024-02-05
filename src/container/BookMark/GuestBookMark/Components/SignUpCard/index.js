import { globalVariables } from "../../../../../helper/globalVariables";
import { Button } from "../../../../../shared/components/Button";

export const SignUpCard = (props) => {
  const {
    heading,
    subHeading,
    image,
    width = "w-[95%] md:w-[475px]",
    style = {},
    buttontext = "Sign Up",
    height = "min-h-[320px]",
    submitHandler
  } = props || {};

  return (
    <div
      className={`p-6 rounded-xl bg-gray-50 border border-solid border-gray-200 md:mr-4 lg:mr-6 sm:mr-2 my-3 ${width} ${height}`}
      style={style}
    >
      <div className="mb-4" />
      <div key={`detail.value`} className="mt-4 flex flex-col">
        <img height={277} width={500} src={image} alt="" />
        <span
          className={`${"text-2xl font-bold md:h-[20%] text-gray-900 mt-7"}`}
        >
          {heading}
        </span>

        <span
          className={`${"leading-7 text-base font-normal h-[40%] text-gray-600"}`}
        >
          {subHeading}
        </span>
        <div className="mt-6" />
        <Button
          width="w-[100%] max-[400px]:w-[100%]"
          label={buttontext}
          onClick = {submitHandler}
        />
      </div>
    </div>
  );
};
