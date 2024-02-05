import { useEffect, useState } from "react";
import "./styles.scss";
import { globalVariables } from "../../../helper/globalVariables";
import { Upload } from "../../../helper/images";
import { file, trash, fileDoc, filePDF } from "../../../helper/icons";
// import { useUploadImage } from "../../../redux/hooks";
import Loader from "../Loader";

export const FileUpload = (props) => {
  const {
    checkValidation,
    width = "w-[100%] lg:w-[768px] max-[380px]:w-[100%]",
    height = "h-[206px]",
    // icon = avatar,
    onSetImage,
    defaultImage = "",
    label = "",
    isFileUpload = false,
    onRemoveFile,
    disabled = false,
    containerWidth = "max-[400px]:w-[100%] w-[100%] ",
    setFileLoading,
    onSetFileData,
    defaultFileName = "",
    defaultFileSize = "",
    fileUploadDesc = globalVariables.csvOrPdf,
    fileType = [
      "application/doc",
      "application/docx",
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ],
    fileTypeString = ".doc, .docx , .pdf",
    uploadId = "upload",
  } = props || {};
  const [image, setImage] = useState("");
  const [fileName, setFileName] = useState("");
  const [fileSize, setFileSize] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const imageType = ["image/png", "image/jpg", "image/jpeg"];

  const [uploadedType, setUploadedType] = useState("file");
  //   const { onUploadImage, imageUrl } = useUploadImage();

  useEffect(() => {
    if (defaultImage) {
      setImage(defaultImage);
    }
  }, [defaultImage]);

  useEffect(() => {
    if (defaultFileName) {
      setFileName(defaultFileName);
    }
  }, [defaultFileName]);

  useEffect(() => {
    if (defaultFileSize) {
      setFileSize(defaultFileSize);
    }
  }, [defaultFileSize]);

  //   useEffect(() => {
  //     if (imageUrl) {
  //       onSetImage?.(imageUrl);
  //       setLoading(false);
  //       setFileLoading?.(false);
  //     }
  //   }, [imageUrl]);

  const handleFileChange = async (e) => {
    if (e.target.files?.length) {
      const maxSize = 2 * 1024 * 1024; // 2MB in bytes
      if (e.target.files[0].size > maxSize) {
        setError(globalVariables.maximumFileSizeAllowed);
      } else {
        const type = e.target.files[0]?.type;
        console.log("type ", type, e.target.files[0]);

        if (isFileUpload ? fileType.includes(type) : imageType.includes(type)) {
          const img = URL.createObjectURL(e.target.files[0]);
          if (isFileUpload) {
            setLoading(true);
            setFileLoading?.(true);
            try {
              //   onUploadImage(e.target.files[0]);
            } catch (err) {
              setLoading(false);
              setFileLoading?.(false);
            }
          } else {
            setLoading(false);
            onSetImage?.(e.target.files[0]);
          }

          console.log("Handle FIle Change ", img, e.target.files[0]);
          setUploadedType(
            type ==
              "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
              type == "application/msword"
              ? "doc"
              : type == "application/pdf"
              ? "pdf"
              : "file"
          );

          setImage(img);
          setError("");
          setFileName(e.target.files[0]?.name);
          setFileSize(parseInt(e.target.files[0]?.size / 1000));
          onSetFileData?.(
            e.target.files[0]?.name,
            parseInt(e.target.files[0]?.size / 1000)
          );
        } else {
          setImage("");
          onSetImage?.("");
          setFileName("");
          setFileSize("");
          onSetFileData?.("", "");
          setError(
            isFileUpload
              ? globalVariables.uploadedFileNotValid
              : globalVariables.uploadedImageNotValid
          );
        }
      }
    }
  };

  const removeFile = () => {
    setImage("");
    onSetImage?.("");
    onRemoveFile?.();
    setFileName("");
    setFileSize("");
  };

  return (
    <div className="flex flex-col items-center mt-12">
      <div className={`flex flex-col items-center ${containerWidth}`}>
        {!!label && (
          <div className="self-start">
            <span className="text-gray-700 font-medium text-sm">{label}</span>
            <div className="mt-2" />
          </div>
        )}
        {/* {
          !isFileUpload && (
            //   (image ? (
            //     <img
            //       className="avatar mt-[4px] lg:mt-[5px]"
            //       src={image}
            //       alt=""
            //       height={64}
            //       width={64}
            //     />
            //   ) : (
            <img
              className="mt-[4px] lg:mt-[5px]"
              src={icon}
              alt=""
              height={64}
              width={64}
            />
          )
          //   ) )
        } */}
        {!isFileUpload && !disabled && <div className="mt-5" />}
        {!disabled && (
          <input
            type="file"
            id={uploadId}
            accept={
              isFileUpload ? fileTypeString : "image/png, image/jpg, image/jpeg"
            }
            onChange={handleFileChange}
            onClick={(event) => {
              event.target.value = null;
            }}
            className="absolute w-96 h-32 bg-primary"
            hidden
            size="50000"
            disabled={disabled}
          />
        )}
        {!disabled && (
          <label className={width} htmlFor={uploadId}>
            <div
              className={`bg-white ${disabled && "opacity-50"} ${
                !disabled && "uploadStyle"
              } rounded-xl border border-solid flex items-center justify-center ${height} ${width}${
                checkValidation || error
                  ? image
                    ? "border-gray-300"
                    : "border-red"
                  : "border-gray-300"
              }`}
              style={{ width }}
            >
              <div className="py-4 flex flex-col items-center px-6 cursor-pointer">
                {/* {isFileUpload && loading ? (
                  <Loader stroke="text-gradient-500" />
                ) : ( */}
                <Upload />
                {/* )} */}
                <div className="mt-3" />
                <div className="flex flex-row mb-1">
                  <span className="text-sm font-semibold text-center text-primary">
                    {globalVariables.uploadFiles}
                  </span>
                  <span className="text-sm font-regular text-center text-gray-600 ml-1">
                    {globalVariables.dragAndDrop}{" "}
                    {/* {isFileUpload ? fileUploadDesc : globalVariables.svgPNG} */}
                  </span>
                </div>
              </div>
            </div>
          </label>
        )}
        {error && (
          <span className="text-red font-medium max-w-[352px] text-sm mt-1 self-start">
            {error}
          </span>
        )}
      </div>
      {isFileUpload && !!fileName && (
        <div
          className={`bg-white rounded-xl border border-solid ${width} mt-5 p-4 ${"border-gray-300"} flex flex-row justify-between`}
          style={{ width }}
        >
          <div className="flex flex-row">
            <img
              src={
                uploadedType == "pdf"
                  ? filePDF
                  : uploadedType == "doc"
                  ? fileDoc
                  : file
              }
              alt=""
            />
            <div className="ml-2 flex flex-col">
              <span className="text-sm font-medium text-gray-700">
                {fileName}
              </span>
              <span className="text-sm font-normal text-gray-600">
                {`${fileSize} KB`}
              </span>
            </div>
          </div>
          {/* {!loading && ( */}
          <button onClick={removeFile}>
            <img src={trash} alt="" />
          </button>
          {/* )} */}
        </div>
      )}
    </div>
  );
};
