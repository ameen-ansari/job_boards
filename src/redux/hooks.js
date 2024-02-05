import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { baseURL } from "config";
import { useState } from "react";



// Use throughout your app instead of plain `useDispatch` and `useSelector` in case of TS to override the `useDispatch`
export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;

export const useUploadImage = () => {
    console.log("Handle Upload Here");
  return;
  const [imageUrl, setImageUrl] = useState("");

  const onUploadImage = (image) => {
    const document = new FormData();
    document.append("image", image);

    axios
      .post(`${baseURL}/upload/image`, document, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        setImageUrl(response.data?.imageUrl);
      })
      .catch((error) => {
        console.error("error===", error);
      });
  };

  return { imageUrl, onUploadImage };
};
