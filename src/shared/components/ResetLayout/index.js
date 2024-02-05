import { forwardRef } from "react";
import { sideImage } from "../../../helper/images";
import { PopUpMessages } from "../../../container/PopupMessages";
import { logo } from "../../../helper/images";

const ResetLayout = forwardRef((props, ref) => {
  const {
    children,
    apiData = {
      title: "",
      desc: "",
      type: "pending",
    },
    onCloseModal = () => {},
  } = props;

  return (
    <div className="App login-container-gradient">
      <div className="flex row overflow-auto">
        <div className="h-screen w-screen flex flex-col justify-center items-center">
          <img
            src={logo}
            alt=""
            className="w-40 lg:w-44 mt-8 lg:mt-0 md:mt-0"
          />
          {children}
        </div>
      </div>
      <PopUpMessages
        title={apiData.title}
        desc={apiData.desc}
        type={apiData.type}
        ref={ref}
        onCloseModal={onCloseModal}
      />
    </div>
  );
});

export default ResetLayout;
