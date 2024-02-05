import { globalVariables } from "../../helper/globalVariables";
import { useForm } from "react-hook-form";
import { Button } from "../../shared/components/Button";
import { TextInput } from "../../shared/components/TextInput";
import { useRef, useState } from "react";
import ResetLayout from "../../shared/components/ResetLayout";
import { setNewResolver } from "../../validators/UserValidation";
import { back, checkIcon } from "../../helper/icons";
import { useNavigate } from "react-router-dom";
import { IconRow } from "./components/iconRow";

const NewPassword = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    resolver: setNewResolver,
    defaultValues: {
      //   name: "",
      //   email: "",
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

  const navigate = useNavigate();

  const handleReset = async (credentials) => {
    setApiData({
      ...apiData,
      title: globalVariables.signUpSuccessful,
      // desc: globalVariables.signUpSuccessfulDesc,
      type: "success",
    });
    navigate("/resetSuccess");
    // modalRef.current.openModal();
  };

  const onCloseModal = async (modalRef) => {
    navigate("/resetSuccess");
  };

  return (
    <ResetLayout ref={modalRef} apiData={apiData} onCloseModal={onCloseModal}>
      <span className="pt-4 text-gray-900 font-semibold text-3xl mt-6">
        {globalVariables.setNewPassword}
      </span>
      <span className="text-sm text-gray-600 font-regular mt-3 w-[358px] lg:w-[360px] max-[400px]:w-[100%] text-center">
        {`${globalVariables.differentPassword} `}
      </span>
      <div className="mt-6" />
      <form
        onSubmit={handleSubmit(handleReset)}
        className="flex flex-col justify-center items-center max-[400px]:w-[90%]"
      >
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

        <IconRow label={`${globalVariables.mustEight}`} icon={checkIcon} />
        <IconRow label={`${globalVariables.mustSpecial}`} icon={checkIcon} />

        <div className="mt-6" />
        <Button
          width="w-[358px] lg:w-[360px] max-[400px]:w-[100%]"
          label={globalVariables.resetPassword}
          disabled={loading}
        />
      </form>
      <div className="mt-4" />
      <span className="text-sm text-gray-600 flex flex-row items-center font-semibold mt-3">
        <a href="/login">
          <img src={back} alt="" className="h-4 w-4 mr-3" />
        </a>
        {`${globalVariables.backToLogin} `}
      </span>
    </ResetLayout>
  );
};

export default NewPassword;
