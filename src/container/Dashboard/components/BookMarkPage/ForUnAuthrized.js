import cardimage1 from "../../../../assets/images/cardImg.svg";
import cardimage2 from "../../../../assets/images/cardImg2.svg";
import AuthCard from "./AuthCard";

function ForUnAuthrized({ onClick }) {
  const cards = [
    {
      btnValue: "Sign up",
      image: cardimage1,
      title: "Create your account",
      desc: "Don’t have an account? Create your account to bookmark the jobs that interest you.",
    },
    {
      btnValue: "Log in",
      image: cardimage2,
      title: "Log in",
      desc: "Already have an account? Log in to bookmark the jobs that interest you.",
    },
  ];
  
  return (
    <div className="px-[0px] lg:px-[80px]">
      <div className="px-[16px] md:px-[32px]  pt-[25px] sm:pt-[64px]">
        <p className="text-[#101828] text-[20px] sm:text-[24px] font-bold leading-[32px]">
          Bookmarked Jobs
        </p>
        <p className="text-[#000] font-normal leading-[20px] text-[14px] mt-[6px] sm:mt-[18px]">
          Create your account or log in to your existing one to bookmark your
          favorite jobs and apply to them later.
        </p>
      </div>
      <div className="flex justify-evenly sm:mt-[77px] flex-wrap gap-[33px] pb-[63px] px-[4px] lg:px-[0px]">
        {cards.map((card, i) => {
          return <AuthCard onClick={onClick} {...card} key={i} />;
        })}
      </div>
    </div>
  );
}

export default ForUnAuthrized;
