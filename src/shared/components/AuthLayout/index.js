import { forwardRef } from "react";
import { sideImage } from "../../../helper/images";
import { PopUpMessages } from "../../../container/PopupMessages";
import { logo } from "../../../helper/images";

const AuthLayout = forwardRef((props, ref) => {
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
        <div className="hidden lg:w-[50%] lg:flex h-screen items-center">
          <img
            // className="h-[100%] w-[100%]"
            // height={}
            // width={}
            src={sideImage}
            alt=""
          />
        </div>
        <div className="h-screen w-screen lg:w-[50%] flex flex-col items-center">
          <div className="lg:mt-7 lg:items-start items-center lg:w-[100%] lg:ml-16 mt-20">
            <img
              src={logo}
              alt=""
              // className="w-40 lg:w-40 h-36 mt-3 lg:mt-0 md:mt-0"
            />
          </div>
          <div className="h-screen w-screen flex flex-col justify-center items-center">
            {children}
          </div>
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

export default AuthLayout;
