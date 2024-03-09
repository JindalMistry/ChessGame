import React, { useState, useRef, useEffect } from "react";
import "./dropdown.css";
import DropdownIcon from "../../../asset/drop-down-icon.svg";
import { useTheme } from "../../context/ThemeContext";

const Dropdown = ({ label, list, onChange, sel, classMain, classItem }) => {
  const dropdownMainRef = useRef();
  const [isActive, setIsActive] = useState(false);
  const [selected, setIsSelected] = useState("Choose one");
  const dropdownRef = useRef(null);
  const { isDarkTheme } = useTheme();

  useEffect(() => {
    // Handle dropdown positioning based on its position relative to the viewport
    if (dropdownRef.current) {
      const dropdownRect = dropdownRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (dropdownRect.bottom > windowHeight) {
        dropdownRect.classList.toggle("dropdown-content-top");
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("mousedown", (e) => {
      if (dropdownMainRef && dropdownMainRef.current) {
        if (!dropdownMainRef.current?.contains(e.target)) {
          setIsActive(false);
        }
      }
    });
  }, []);

  return (
    <div className={`dropdown`} ref={dropdownMainRef}>
      {label && <div className="dropdown-label">{label}</div>}
      <div
        onClick={() => {
          setIsActive(!isActive);
        }}
        className={`${classMain} dropdown-btn`}
      >
        {selected}
        <img
          src={DropdownIcon}
          alt="dropdown-icon"
          className={`${
            isActive ? "open-dropdown-icon" : "close-dropdown-icon"
          } ${!isDarkTheme && "invert-theme-icon"} dropdown-icon`}
        />
      </div>
      <div
        className={`${classItem} dropdown-content ${
          isActive ? "open-dropdown-content" : "close-dropdown-content"
        }`}
        ref={dropdownRef}
      >
        {list.map((item) => (
          <div
            key={item.key}
            onClick={() => {
              setIsSelected(item.value);
              setIsActive(!isActive);
              onChange(item);
            }}
            className="item"
          >
            {item.value}
          </div>
        ))}
      </div>
    </div>
  );
};

Dropdown.defaultProps = {
  label: "",
  list: [],
  selected: "",
  onChange: () => {},
  classMain: "",
  classItem: "",
};

export default Dropdown;
