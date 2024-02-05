import { globalVariables } from "../../helper/globalVariables";
import { useForm } from "react-hook-form";
import { Button } from "../../shared/components/Button";
import { TextInput } from "../../shared/components/TextInput";
import { signupResolver } from "../../validators/UserValidation";
import { useRef, useState } from "react";
import AuthLayout from "../../shared/components/AuthLayout";

const SignUp = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    resolver: signupResolver,
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const modalRef = useRef();
  const [apiData, setApiData] = useState({
    title: "",
    desc: "",
    type: "pending",
  });
  const [loading, setLoading] = useState();

  const handleSignup = async (credentials) => {
    setApiData({
      ...apiData,
      title: globalVariables.signUpSuccessful,
      // desc: globalVariables.signUpSuccessfulDesc,
      type: "success",
    });
    modalRef.current.openModal();
  };

  const onCloseModal = async (modalRef) => {};

  return (
    <AuthLayout ref={modalRef} apiData={apiData} onCloseModal={onCloseModal}>
      <div className="w-[358px] lg:w-[360px] max-[400px]:w-[100%] justify-center flex lg:block">
        <span className="pt-4 text-gray-900 font-semibold text-3xl">
          {globalVariables.signUp}
        </span>
      </div>
      <div className="w-[358px] lg:w-[360px] max-[400px]:w-[100%] justify-center flex lg:block">
        <span className="text-sm text-gray-600 font-regular mt-3">
          {`${globalVariables.alreadyMember} `}
          <a href="/login">
            <span className="text-sm text-primary font-semibold">
              {`${globalVariables.logIn}`}
            </span>
          </a>
        </span>
      </div>
      <div className="mt-6" />
      <form
        onSubmit={handleSubmit(handleSignup)}
        className="flex flex-col justify-center items-center max-[400px]:w-[90%]"
      >
        <TextInput
          register={register}
          name="name"
          width="w-[358px] lg:w-[360px] max-[400px]:w-[100%]"
          label={globalVariables.name}
          placeholder={globalVariables.enterName}
          errorMsg={errors.name?.message}
        />
        <div className="mt-4" />
        <TextInput
          register={register}
          name="email"
          width="w-[358px] lg:w-[360px] max-[400px]:w-[100%]"
          label={globalVariables.email}
          placeholder={globalVariables.enterEmail}
          errorMsg={errors.email?.message}
          type="email"
          textTransform="normal-case"
        />
        <div className="mt-4" />
        <TextInput
          register={register}
          name="password"
          width="w-[358px] lg:w-[360px] max-[400px]:w-[100%]"
          label={globalVariables.password}
          placeholder={globalVariables.tempPassword}
          errorMsg={errors.password?.message}
          type="password"
          textTransform="normal-case"
        />
        <div className="mt-4" />
        <TextInput
          register={register}
          name="confirmPassword"
          width="w-[358px] lg:w-[360px] max-[400px]:w-[100%]"
          label={globalVariables.confirmPasswordSignUp}
          type="password"
          placeholder={globalVariables.tempPassword}
          errorMsg={errors.confirmPassword?.message}
          textTransform="normal-case"
        />
        <div className="mt-6" />
        <Button
          width="w-[358px] lg:w-[360px] max-[400px]:w-[100%]"
          label={globalVariables.getStarted}
          disabled={loading}
        />
      </form>
      <div className="mt-10" />
    </AuthLayout>
  );
};

export default SignUp;
