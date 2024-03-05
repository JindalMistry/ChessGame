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
  const [bg, setBg] = useState("");
  useEffect(() => {
    if (background === "primary") setBg("#2ECC71");
    else if (background === "secondary") setBg("#95BFFF");
    else if (background === "common") setBg("#F0F3FF");
    else setBg(background);
  }, [background]);
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
