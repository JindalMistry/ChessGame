import React, { useState, useRef, useEffect } from "react";
import "./dropdown.css";
import DropdownIcon from "../../../asset/drop-down-icon.svg";
import { useTheme } from "../../context/ThemeContext";

const Dropdown = ({ label, selected, list, onSelect, classMain, classItem }) => {
  const dropdownMainRef = useRef();
  const [isActive, setIsActive] = useState(false);
  const [selectedValue, setSelectedValue] = useState(selected);
  const [pos, setPos] = useState("bottom");
  const dropdownRef = useRef(null);
  const { isDarkTheme } = useTheme();

  useEffect(() => {
    if (selected) {
      setSelectedValue(selected);
    }
  }, [selected]);

  useEffect(() => {
    // Handle dropdown positioning based on its position relative to the viewport
    if (dropdownRef.current) {
      const dropdownRect = dropdownRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (dropdownRect.bottom > windowHeight) {
        setPos("top");
      } else {
        setPos("bottom");
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

  const getLabel = () => {
    if (list) {
      let obj = list.find((o) => o.key === selectedValue);
      if (obj) {
        return obj.value;
      }
      return "Not found";
    }
    return "Not found";
  };
  return (
    <div className={`dropdown`} ref={dropdownMainRef}>
      {label && <div className="dropdown-label">{label}</div>}
      <div
        onClick={() => {
          setIsActive(!isActive);
        }}
        className={`${classMain} dropdown-btn`}
      >
        {getLabel()}
        <img
          src={DropdownIcon}
          alt="dropdown-icon"
          className={`${isActive ? "open-dropdown-icon" : "close-dropdown-icon"} ${
            !isDarkTheme && "invert-theme-icon"
          } dropdown-icon`}
        />
      </div>
      <div
        className={` 
           ${isActive ? "open-dropdown-content" : "close-dropdown-content"}
           ${pos === "bottom" ? "dropdown-content" : "dropdown-content-top"}
          `}
        ref={dropdownRef}
      >
        {list.map((item) => (
          <div
            key={item.key}
            onClick={() => {
              setSelectedValue(item.key);
              setIsActive(!isActive);
              onSelect(item);
            }}
            className={`${classItem} dropdown-item`}
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
  onSelect: () => {},
  classMain: "",
  classItem: "",
};

export default Dropdown;
