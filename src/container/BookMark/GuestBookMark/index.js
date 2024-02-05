import { globalVariables } from "../../../helper/globalVariables";
import { SignUpCard } from "./Components/SignUpCard";
import { loginBookMark } from "../../../helper/images";
import { bookMarkRegister } from "../../../helper/images";
import { useNavigate } from 'react-router-dom';

const GuestBookMark = () => {
    const navigate  = useNavigate();

  const handleSignUp = ()=>{
    console.log("Handle Sign UP Called " , );
    navigate('/signup');
  }
  const handleLogin = ()=>{
    navigate('/login');
  }

  return (
    <div className="App login-container-gradient pb-10 min-h-screen">
      <div className="ml-4 pt-8">
        <div className={"text-xl font-semibold text-gray-900 lg:ml-16"}>
          {globalVariables.bookedMark}
        </div>

        <div
          className={"text-sm  font-normal mt-3 text-gray-600 lg:ml-16 w-[90%]"}
        >
          {globalVariables.bookMarkSubHead}
        </div>

        {/* <div className="flex flex-col md:flex-row items-center md:pr-[20px]"></div> */}
      </div>
      <div className="md:flex md:justify-center">
        <div className="flex items-center justify-center flex-col md:flex-row mt-10 md:w-[75%] md:justify-between">
          <SignUpCard
            heading={globalVariables.createAccount}
            subHeading={globalVariables.createBookMarkSub}
            buttontext={globalVariables.signUp}
            image={bookMarkRegister}
            submitHandler = {handleSignUp}
          />
          <SignUpCard
            heading={globalVariables.logIn}
            subHeading={globalVariables.loginBookMarkSub}
            buttontext={globalVariables.logIn}
            image={loginBookMark}
            submitHandler = {handleLogin}
          />
        </div>
      </div>
    </div>
  );
};

export default GuestBookMark;
