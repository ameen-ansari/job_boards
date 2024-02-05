// import { useState } from "react";
import { useForm } from "react-hook-form";
import { globalVariables } from "../../../helper/globalVariables";
import { JobResolver } from "../../../validators/UserValidation";
import { TextInput } from "../../../shared/components/TextInput";
import { TextArea } from "../../../shared/components/TextArea";
import { TextButton } from "../../../shared/components/TextButton";
// import { Button } from "shared/Components/button";

export const JobDetails = (props) => {
  const { onTapNext } = props || {};
  //   const [checkValidation, setCheckValidation] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: JobResolver,
    defaultValues: {
      role: "",
      jobType: "",
      location: "",
      experience: "",
      pay: "",
    },
  });

  //   const onCheckValidation = () => {
  //     setCheckValidation(true);
  //   };

  const onHandleSubmit = async (credentials) => {
    // if (city && state) {
    // dispatch(setHostDetails({ ...credentials}));
    onTapNext?.();
    // }
  };
  const innerContainerClass = "block lg:flex flex-row w-full lg:w-auto";

  return (
    <div className="flex justify-center flex-col items-center">
      <form
        className="lg:w-full items-center flex pb-[50px] flex-col md:pb-[0px] w-[100%]  max-[400px]:w-[90%]"
        onSubmit={handleSubmit(onHandleSubmit)}
      >
        <div className="w-[100%]">
          <div className={innerContainerClass}>
            <TextInput
              width="lg:w-[50%] w-[100%]"
              register={register}
              name="role"
              textTransform="none"
              placeholder={globalVariables.role}
              label={globalVariables.role}
              errorMsg={errors.role?.message}
            />
            <div className="mt-[10px] lg:mt-0 mr-0 lg:mr-5" />
            {/* <TextInput
              register={register}
              width="w-[100%]"
              name="location"
              textTransform = "none"
              placeholder={globalVariables.location}
              label={globalVariables.location}
              errorMsg={errors.location?.location}
            /> */}
          </div>
          <div className="mt-[10px] lg:mt-5" />
          <div className={innerContainerClass}>
            <TextInput
              width="w-[100%]"
              register={register}
              name="jobType"
              textTransform="none"
              placeholder={globalVariables.jobType}
              label={globalVariables.jobType}
              errorMsg={errors.jobType?.message}
            />
            <div className="mt-[10px] lg:mt-0 mr-0 lg:mr-5" />
            <TextInput
              register={register}
              width="w-[100%]"
              name="location"
              textTransform="none"
              placeholder={globalVariables.location}
              label={globalVariables.location}
              errorMsg={errors.location?.message}
            />
          </div>
          <div className="mt-[10px] lg:mt-5" />
          <div className={innerContainerClass}>
            <TextInput
              width="w-[100%]"
              register={register}
              name="experience"
              textTransform="none"
              placeholder={globalVariables.experience}
              label={globalVariables.experience}
              errorMsg={errors.experience?.message}
            />

            <div className="mt-[10px] lg:mt-0 mr-0 lg:mr-5" />
            <TextInput
              width="w-[100%]"
              register={register}
              name="pay"
              textTransform="none"
              placeholder={globalVariables.pay}
              label={globalVariables.pay}
              errorMsg={errors?.pay?.message}
              // type="number"
            />
          </div>
        </div>
        <div className="mt-5 flex w-[100%] justify-end">
          <TextButton
            onClick={(success, error) => console.log("Error", error)}
            label={globalVariables.save}
          />
        </div>
      </form>
    </div>
  );
};
