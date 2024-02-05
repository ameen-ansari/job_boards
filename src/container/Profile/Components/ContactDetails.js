// import { useState } from "react";
import { useForm } from "react-hook-form";
import { globalVariables } from "../../../helper/globalVariables";
import { contactResolver } from "../../../validators/UserValidation";
import { TextInput } from "../../../shared/components/TextInput";
import { TextArea } from "../../../shared/components/TextArea";
import { TextButton } from "../../../shared/components/TextButton";
// import { Button } from "shared/Components/button";

export const ContactDetails = (props) => {
  const { onTapNext } = props || {};
  //   const [checkValidation, setCheckValidation] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: contactResolver,
    defaultValues: {
      email: "",
      website: "",
      linkedin: "",
      gitHub: "",
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
              width="w-[100%]"
              register={register}
              name="email"
              textTransform = "none"
              placeholder={globalVariables.email}
              label={globalVariables.email}
              errorMsg={errors.email?.message}
            />
            <div className="mt-[10px] lg:mt-0 mr-0 lg:mr-5" />
            <TextInput
              register={register}
              width="w-[100%]"
              name="website"
              textTransform = "none"
              placeholder={globalVariables.website}
              label={globalVariables.website}
              errorMsg={errors.website?.message}
            />
          </div>
          <div className="mt-[10px] lg:mt-5" />
          <div className={innerContainerClass}>
            <TextInput
              width="w-[100%]"
              register={register}
              name="linkedin"
              textTransform = "none"
              placeholder={globalVariables.linkedIn}
              label={globalVariables.linkedIn}
              errorMsg={errors.linkedin?.message}
            />

            <div className="mt-[10px] lg:mt-0 mr-0 lg:mr-5" />
            <TextInput
              width="w-[100%]"
              register={register}
              name="gitHub"
              textTransform = "none"
              placeholder={globalVariables.gitHub}
              label={globalVariables.gitHub}
              errorMsg={errors?.gitHub?.message}
              // type="number"
            />
          </div>
        </div>
        <div className="mt-5 flex w-[100%] justify-end">
          <TextButton onClick={(success , error) => console.log("Error" , error) } label={globalVariables.save} />
        </div>
      </form>
    </div>
  );
};
