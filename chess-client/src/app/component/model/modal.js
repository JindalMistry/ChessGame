import React, { useRef, useEffect, useState } from "react";
import CloseIcon from "../../../asset/modal-close-icon.svg";
import { createPortal } from "react-dom";
import "./modal.css";

export default function Modal({
  show,
  className,
  onClose,
  showHeading,
  label,
  children,
  size,
  height,
}) {
  const width =
    size === "small"
      ? "30%"
      : size === "medium"
      ? "40%"
      : size === "large"
      ? "60%"
      : size === "x-large"
      ? "70%"
      : "auto";

  const modalRef = useRef(null);
  useEffect(() => {
    if (modalRef && modalRef.current) {
      window.addEventListener("mousedown", (e) => {
        if (!modalRef.current?.contains(e.target)) {
          onClose();
        }
      });
    }
    return () => {
      window.removeEventListener("mousedown", (e) => {});
    };
  }, [modalRef]);
  return createPortal(
    <div className={`modal-wrapper ${show ? "open" : "close"}`}>
      <div
        style={{ width: width }}
        className={`modal ${className} ${
          show ? "animate-open" : "animate-close"
        }`}
        ref={modalRef}
      >
        {showHeading ? (
          <div className="modal-header py-1">
            <span className="label">{label}</span>
            <span className="modal-close" onClick={onClose}>
              <img src={CloseIcon} alt="close-icon" />
            </span>
          </div>
        ) : null}
        {children}
      </div>
    </div>,
    document.body
  );
}

Modal.defaultProps = {
  show: false,
  className: "",
  onClose: () => {},
  showHeading: true,
  label: "Modal",
  children: <></>,
  size: "medium",
  height: "auto",
};
