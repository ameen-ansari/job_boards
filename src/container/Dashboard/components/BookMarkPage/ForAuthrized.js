import { useState } from "react";
import BlueShadowBtn from "../../../../shared/components/buttons/BlueShadowBtn";
import DragAndDrop from "../DragAndDrop";
import FileInfo from "../FileInfo";

function ForAuthrized() {
  const [files, setFiles] = useState([]);

  const handleChange = (file) => {
    setFiles([
      ...files,
      {
        name: file.name,
        size: file.size,
        id: files.length,
        onDelete: (deleteFile) => fileDeleteH(deleteFile),
        extension: file.type.includes("pdf")
          ? "PDF"
          : file.type.includes("doc")
          ? "DOC"
          : null,
      },
    ]);
  };

  const fileDeleteH = (deleteFile) => {
    console.log("delete file", deleteFile);
    console.log("files", files);
    const filteredArr = files.filter(
      (file) => file.id !== undefined && file.id !== deleteFile.id
    );
    setFiles(filteredArr);
  };

  return (
    <div className="px-[0px] lg:px-[80px]">
      <div className="px-[16px] md:px-[32px] flex justify-center align-middle">
        <div className="py-[48px] px-[32px] max-w-[768px] flex flex-col gap-[32px]">
          <div className="flex flex-col gap-[16px]">
            <p className="text-[#101828] font-bold text-[24px] leading-[32px]">
              Upload Certifications
            </p>
            <p className="text-[#475467] font-normal text-[20px] leading-[30px]">
              To create your account, please upload your
              certifications/accreditations.
            </p>
          </div>
          <DragAndDrop onChange={handleChange} />
          <div className="flex flex-col gap-[12px]">
            {files.map((file, i) => (
              <FileInfo file={file} key={i} />
            ))}
          </div>
          <div className="flex justify-center">
            <BlueShadowBtn
              onClick={() => null}
              margin={"w-[120px]"}
              value={"Next"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForAuthrized;
