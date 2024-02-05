import { globalVariables } from "../../helper/globalVariables";
import { Button } from "../../shared/components/Button";
import { useRef, useState } from "react";
import ResetLayout from "../../shared/components/ResetLayout";
import { back } from "../../helper/icons";
import { useNavigate } from "react-router-dom";

const CheckEmail = (props) => {
  const modalRef = useRef();
  const [apiData, setApiData] = useState({
    title: "",
    desc: "",
    type: "pending",
  });
  const [loading, setLoading] = useState();

  const navigate = useNavigate();

  const handleCheckEmail = (e) => {
    e.preventDefault();
    setApiData({
      ...apiData,
      title: globalVariables.signUpSuccessful,
      // desc: globalVariables.signUpSuccessfulDesc,
      type: "success",
    });
    navigate("/resetPassword");
    // modalRef.current.openModal();
  };

  const onCloseModal = async (modalRef) => {
    // navigate("/checkEmail");
  };

  return (
    <ResetLayout ref={modalRef} apiData={apiData} onCloseModal={onCloseModal}>
      <span className="pt-4 text-gray-900 font-semibold text-3xl mt-6">
        {globalVariables.checkEmail}
      </span>
      <span className="text-sm text-gray-600 font-regular mt-3">
        {`${globalVariables.willSendLink} `}
      </span>
      <span className="text-sm text-gray-600 font-semibold mt-1">
        {`olivia@untitledui.com`}
      </span>
      <div className="mt-6" />
      <form
        onSubmit={() => {navigate("/resetPassword");}}
        className="flex flex-col justify-center items-center max-[400px]:w-[90%]"
      >     
        {/* <div className="mt-6" /> */}
        <Button
          width="w-[358px] lg:w-[360px] max-[400px]:w-[100%]"
          label={globalVariables.openEmailApp}
          disabled={loading}
        />
      </form>
      <div className="mt-4" />
      <span className="text-sm text-gray-600 font-regular mt-3">
        {`${globalVariables.notReceiveEmail} `}
        <a href="/login">
          <span className="text-sm text-primary font-semibold">
            {`${globalVariables.resend}`}
          </span>
        </a>
      </span>
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

export default CheckEmail;
