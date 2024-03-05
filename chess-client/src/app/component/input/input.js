import React from "react";
import "./input.css";

export default function Input({
  type,
  className,
  onChange,
  value,
  placeholder,
}) {
  return (
    <input
      type={type}
      className={`input ${className}`}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
    />
  );
}

Input.defaultProps = {
  type: "text",
  className: "",
  onChange: () => {},
  value: "",
  placeholder: "",
};
