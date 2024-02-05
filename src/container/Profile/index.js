import { useState } from "react";
import { globalVariables } from "../../helper/globalVariables";
import Accordion from "../../shared/components/Accordion";
import { ProfileDetails } from "./Components/ProfileDetails";
import { ContactDetails } from "./Components/ContactDetails";
import { JobDetails } from "./Components/JobDetails";
import Certifications from "./Components/Certifications";
import { Button } from "../../shared/components/Button";
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  let profileTabs = [
    { title: "Profile Details" },
    { title: "Contact Details" },
    { title: "Job Preferences" },
    { title: "Certifications" },
  ];

  const [accordionIndex, setAccordionIndex] = useState(0);
  const [isAccordionOpen, setIsAccordionOpen] = useState(true);

  const renderAccordionBody = () => {
    if (profileTabs?.length === 0) return <></>;
    if (accordionIndex == 0) {
      return <ProfileDetails />;
    } else if (accordionIndex == 1) {
      return <ContactDetails />;
    } else if (accordionIndex == 2) {
      return <JobDetails />;
    } else if (accordionIndex == 3) {
      return <Certifications />;
    }
    return (
      <div className="">
        <h1>Text Here</h1>
      </div>
    );
  };

  const onChangeIndex = (index) => {
    // setCheckValidation(false);
    setAccordionIndex(index === null ? 0 : index);
    setIsAccordionOpen(index !== null);
  };

  const submitHandler = () => {
    // navigate("/profile");
  };

  return (
    <div className="App login-container-gradient pb-10 min-h-screen">
      <div className="md:flex md:justify-center">
        <div className="flex items-center justify-center flex-col md:flex-row mt-10 md:w-[100%]">
          <div className="ml-4 mr-4 pt-8 w-[100%] flex items-center flex-col">
            <div className={"text-2xl font-bold text-gray-900 md:w-[55%]"}>
              {globalVariables.myProfile}
            </div>
            <div
              className={
                "text-xl font-normal mt-3 text-gray-600 w-[90%] md:w-[55%]"
              }
            >
              {globalVariables.profileSub}
            </div>
            {/* <div>
                
            </div> */}
            <div className="pt-8 w-[90%] md:w-[55%]">
              {/* <div className="ml-4 mr-4 pt-8 w-[100%] flex items-center flex-col"> */}
              <Accordion
                hasLabel={true}
                items={profileTabs}
                children={renderAccordionBody()}
                onChangeIndex={onChangeIndex}
                defaultIndex={accordionIndex}
              />
              <div className="mt-6" />
              <div className="flex justify-center">
                <Button
                  width="w-[100%] md:w-[120px] max-[380px]:w-[100%]"
                  label={globalVariables.saveProfile}
                  onClick={submitHandler}
                  // disabled={loading}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
