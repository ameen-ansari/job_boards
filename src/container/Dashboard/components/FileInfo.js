import fileIcon from "../../../assets/icons/PDF.svg";
import trash from "../../../assets/icons/trash.svg";

function FileInfo({ file }) {
  return (
    <div className="border border-[#EAECF0] rounded-[12px] p-[16px] flex justify-between gap-[24px]">
      <div className="flex gap-[12px]">
        <div className="relative z-[-1]">
          <img width={32} height={40} src={fileIcon} alt="" />
          <div
            className={`absolute top-[18px] left-[-7px] w-[26px] rounded-[2px] flex  h-[16px] px-[3px] ${
              file.extension === "PDF" ? "bg-[#D92D20]" : "bg-[#155EEF]"
            }`}
          >
            <p className="text-[10px] text-center m-auto font-bold text-[#FFF]">
              {file?.extension}
            </p>
          </div>
        </div>
        <div>
          <p className="text-[#344054] font-medium text-[14px]">
            {file?.name}{" "}
          </p>
          <p className="text-[#475467] font-normal text-[14px]">
            {file?.size} KB
          </p>
        </div>
      </div>
      <img
        onClick={() => file.onDelete(file)}
        className="cursor-pointer"
        src={trash}
        alt=""
      />
    </div>
  );
}

export default FileInfo;
