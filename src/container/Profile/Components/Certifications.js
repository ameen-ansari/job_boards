import { useNavigate } from "react-router-dom";
import { FileUpload } from "../../../shared/components/FileUpload";
import { useState } from "react";

const Certifications = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    image: "",
    fileName: "",
    fileSize: "",
  });

  const handleFormData = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  return (
    <div className="flex items-center justify-center w-[100%] flex-col md:flex-row">
      <div className={"w-[100%]"}>
        <FileUpload
          width="w-[100%] lg:w-[100%] max-[380px]:w-[100%]"
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
      </div>
    </div>
  );
};

export default Certifications;
