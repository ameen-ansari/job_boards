import { globalVariables } from "../../helper/globalVariables";
import { useForm } from "react-hook-form";
import { Button } from "../../shared/components/Button";
import { TextInput } from "../../shared/components/TextInput";
import { loginResolver } from "../../validators/UserValidation";
import { useRef, useState } from "react";
import AuthLayout from "../../shared/components/AuthLayout";

const Login = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    resolver: loginResolver,
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

  const handleLogin = async (credentials) => {
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
          {globalVariables.logIn}
        </span>
      </div>
      <div className="w-[358px] lg:w-[360px] max-[400px]:w-[100%] mt-3 justify-center flex lg:block">
        <span className="text-sm text-gray-600 font-regular mt-3">
          {`${globalVariables.noAccount} `}
          <a href="/signup">
            <span className="text-sm text-primary font-semibold">
              {`${globalVariables.signUp}`}
            </span>
          </a>
        </span>
      </div>
      <div className="mt-6" />
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="flex flex-col justify-center items-center max-[400px]:w-[90%]"
      >
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
        <div className="mt-3" />
        <div className="w-[358px] lg:w-[360px] max-[400px]:w-[100%]">
          <a href="/forgetPassword">
            <span className="text-sm text-primary flex flex-row justify-end font-semibold mt-3">
              {`${globalVariables.forget}`}
            </span>
          </a>
        </div>
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

export default Login;
