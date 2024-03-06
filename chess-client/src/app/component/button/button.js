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
      ? "rgba(120,120,120,0.5)"
      : background === "secondary"
      ? "rgba(120,120,120,0.5)"
      : background === "common"
      ? "rgba(120,120,120,0.5)"
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
