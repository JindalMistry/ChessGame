import React, { useEffect, useState } from "react";
import "./button.css";

export default function Button({
  label,
  onClick,
  className,
  loading,
  loadingType, //"pulse" | "falling" | "floating" | "flashing"
  background, //"primary" | "secondary" | "common"
  variant, //"shadowd" | "clean",
}) {
  const bg =
    background === "primary"
      ? "#2ecc71"
      : background === "secondary"
      ? "#95bfff"
      : background === "common"
      ? "#f0f3ff"
      : background;
  return (
    <button
      onClick={onClick}
      className={`button ${className} ${variant}`}
      disabled={loading}
      style={{ backgroundColor: bg }}
    >
      {loading ? <div className={loadingType}></div> : null}
      <p>{loading ? <>&nbsp;</> : label}</p>
    </button>
  );
}

Button.defaultProps = {
  label: "Button",
  onClick: () => {},
  className: "",
  loading: false,
  loadingType: "pulse",
  variant: "clean",
};
