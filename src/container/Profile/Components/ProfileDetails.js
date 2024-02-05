// import { useState } from "react";
import { useForm } from "react-hook-form";
import { globalVariables } from "../../../helper/globalVariables";
import { profileResolver } from "../../../validators/UserValidation";
import { TextInput } from "../../../shared/components/TextInput";
import { TextArea } from "../../../shared/components/TextArea";
import { TextButton } from "../../../shared/components/TextButton";
// import { Button } from "shared/Components/button";

export const ProfileDetails = (props) => {
  const { onTapNext } = props || {};
  //   const [checkValidation, setCheckValidation] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: profileResolver,
    defaultValues: {
      name: "",
      headline: "",
      location: "",
      skills: "",
      bio: "",
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
        className="lg:w-full items-center flex pb-[50px] flex-col md:pb-[0px]  w-[100%] max-[400px]:w-[90%]"
        onSubmit={handleSubmit(onHandleSubmit)}
      >
        <div className="w-[100%]">
          <div className={innerContainerClass}>
            <TextInput
              width="w-[100%]"
              register={register}
              name="name"
              placeholder={globalVariables.name}
              label={globalVariables.name}
              errorMsg={errors.name?.message}
            />
            <div className="mt-[10px] lg:mt-0 mr-0 lg:mr-5" />
            <TextInput
              register={register}
              width="w-[100%]"
              name="headline"
              placeholder={globalVariables.headline}
              label={globalVariables.headline}
              errorMsg={errors.headline?.message}
            />
          </div>
          <div className="mt-[10px] lg:mt-5" />
          <div className={innerContainerClass}>
            <TextInput
              width="w-[100%]"
              register={register}
              name="location"
              placeholder={globalVariables.location}
              label={globalVariables.location}
              errorMsg={errors.location?.message}
            />

            <div className="mt-[10px] lg:mt-0 mr-0 lg:mr-5" />
            <TextInput
              width="w-[100%]"
              register={register}
              name="skills"
              placeholder={globalVariables.skills}
              label={globalVariables.skills}
              errorMsg={errors?.skills?.message}
              // type="number"
            />
          </div>
          <div className="mt-[10px] lg:mt-5" />
          <div className={"block w-full lg:w-auto"}>
            <TextArea
              register={register}
              width="w-[100%]"
              name="bio"
              label={globalVariables.bio}
              placeholder={globalVariables.bio}
              errorMsg={errors.bio?.message}
            />
          </div>
        </div>
        <div className="mt-5 flex w-[100%] justify-end">
          <TextButton onClick={onHandleSubmit} label={globalVariables.save} />
        </div>
      </form>
    </div>
  );
};
