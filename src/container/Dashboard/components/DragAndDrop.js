import { FileUploader } from "react-drag-drop-files";
import upload from "../../../assets/icons/upload.svg";

function DragAndDrop({ onChange }) {
  const fileTypes = ["DOC", "PDF"];

  return (
    <FileUploader
      handleChange={(file) => onChange(file)}
      name="file"
      types={fileTypes}
      onTypeError={() => alert("Unsupported File")}
    >
      <div className="rounded-[12px] h-[206px] flex justify-center align-middle gap-[12px] cursor-pointer flex-col border border-[#EAECF0] py-[16px] px-[24px]">
        <div
          style={{ boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)" }}
          className="w-[40px]  mx-auto h-[40px] border border-[#EAECF0] rounded-[8px] flex justify-center align-middle"
        >
          <img src={upload} alt="upload" width={20} height={20} />
        </div>
        <p className="text-[14px] text-center">
          <span className="font-semibold  text-[#054CC1]">Drop files here</span>
          <span className="font-normal text-[#475467] pl-[4px]">
            or drag and drop
          </span>
        </p>
      </div>
    </FileUploader>
  );
}

export default DragAndDrop;
