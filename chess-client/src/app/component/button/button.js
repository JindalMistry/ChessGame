import React from "react";
import "./button.css";

export default function Button({
  label,
  onClick,
  className,
  loading,
  loadingType = "pulse" | "falling" | "floating" | "flashing",
}) {
  return (
    <button
      onClick={onClick}
      className={`button ${className}`}
      disabled={loading}
    >
      {loading ? <div className={loadingType}></div> : <>{label}</>}
    </button>
  );
}

Button.defaultProps = {
  label: "Button",
  onClick: () => {},
  className: "",
  loading: false,
  loadingType: "pulse",
};
