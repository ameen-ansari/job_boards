import { globalVariables } from "../../helper/globalVariables";
import { useNavigate } from "react-router-dom";
import { FileUpload } from "../../shared/components/FileUpload";
import { useState } from "react";
import { Button } from "../../shared/components/Button";

const UploadCertification = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    image: "",
    fileName: "",
    fileSize: "",
  });

  const handleFormData = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };
  const submitHandler = ()=>{
    navigate('/profile')
  }

  return (
    <div className="App login-container-gradient pb-10 min-h-screen">
      <div className="md:flex md:justify-center">
        <div className="flex items-center justify-center flex-col md:flex-row mt-10 md:w-[100%]">
          <div className="ml-4 mr-4 pt-8">
            <div className={"text-2xl font-bold text-gray-900 lg:ml-16"}>
              {globalVariables.uploadCertification}
            </div>
            <div
              className={
                " text-xl font-normal mt-3 text-gray-600 lg:ml-16 w-[90%]"
              }
            >
              {globalVariables.certificationSubText}
            </div>
            <div className={"lg:ml-16"}>
              <FileUpload
                // icon={avatar}
                // checkValidation={checkValidation}
                onSetImage={(img) => {
                  handleFormData("image", img);
                  console.log("Image Set ", img);
                }}
                defaultImage={formData.image}
                isFileUpload
                // label={globalVariables.uploadCertification}
                onRemoveFile={() => {
                  setFormData({
                    ...formData,
                    fileName: "",
                    fileSize: "",
                    image: "",
                  });
                }}
                // setFileLoading={setFileLoading}
                onSetFileData={(fileName, fileSize) => {
                  setFormData({ ...formData, fileName, fileSize });
                }}
                defaultFileName={formData.fileName}
                defaultFileSize={formData.fileSize}
              />
              <div className="mt-6" />
              <div className="flex justify-center" >
                <Button
                  width="w-[100%] md:w-[120px] max-[380px]:w-[100%]"
                  label={globalVariables.next}
                  onClick = {submitHandler}
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

export default UploadCertification;
