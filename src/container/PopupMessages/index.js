import { pending, success } from "../../helper/images";
import { forwardRef, useImperativeHandle, useRef } from "react";
import Modal from "../Modal";

export const PopUpMessages = forwardRef((props, ref) => {
  const {
    type = "success",
    title,
    desc,
    width = "w-[100%] lg:w-[320px]",
    onCloseModal,
    preventClickOnOutside = false,
  } = props || {};
  const modalRef = useRef();

  useImperativeHandle(ref, () => ({
    openModal() {
      modalRef.current.openModal();
    },
  }));

  return (
    <Modal
      ref={modalRef}
      onClose={onCloseModal}
      preventClickOnOutside={preventClickOnOutside}
    >
      <div className={`flex flex-col ${width}`}>
        <img
          src={type === "pending" ? pending : success}
          alt=""
          className="w-12 h-12 mb-4"
        />

        <span className="font-semibold text-lg text-gray-900 mb-1">
          {title}
        </span>
        {desc && (
          <span className="font-normal text-sm text-gray-600 text-center px-3">
            {desc}
          </span>
        )}
      </div>
    </Modal>
  );
});
