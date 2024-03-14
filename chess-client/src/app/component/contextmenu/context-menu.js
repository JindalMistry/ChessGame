import React, { useState, useEffect, useRef } from "react";
import "./context-menu.css";
const ContextMenu = ({
  list,
  showIcon,
  content,
  position,
  onSelect,
  selected,
}) => {
  const contextRef = useRef();
  const contentRef = useRef();
  const [IsActive, setIsActive] = useState(false);
  const [pos, setPos] = useState("bottom");

  const toggleContext = () => {
    setIsActive(!IsActive);
  };

  useEffect(() => {
    // Handle dropdown positioning based on its position relative to the viewport
    if (contextRef && contextRef.current) {
      const contextRect = contextRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      console.log("Bottom", contextRect.bottom, windowHeight);
      if (contextRect.bottom > windowHeight) {
        setPos("top");
      } else {
        setPos("bottom");
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("mousedown", (e) => {
      if (
        contextRef &&
        contextRef.current &&
        contentRef &&
        contentRef.current
      ) {
        if (
          !contentRef.current?.contains(e.target) &&
          !contextRef.current?.contains(e.target)
        ) {
          setIsActive(false);
        }
      }
    });
  }, []);

  return (
    <div className="context-wrapper" onClick={toggleContext}>
      <div ref={contentRef}> {content}</div>
      <div
        ref={contextRef}
        className={`
      ${position}
      ${IsActive ? "show-context" : "hide-context"}
      ${pos === "bottom" ? "context-menu" : "context-menu-top"}
      `}
      >
        {list.map((item, index) => {
          return (
            <div
              className="context-item"
              key={index}
              onClick={() => {
                onSelect(item);
              }}
            >
              {showIcon && (
                <div className={`shadowed context-item-image`}>
                  <img src={item.Icon} alt="context-img" />
                </div>
              )}
              <p>{item.value}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ContextMenu;
