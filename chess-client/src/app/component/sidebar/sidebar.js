import {createPortal} from 'react-dom'
import React, { useEffect, useRef, useState } from "react";
import "./sidebar.css";

export default function Sidebar({toggle}) {
  const sidebarItem = [
    "Play online",
    "Play against AI",
    "VS Friend",
    "Achievements",
    "Results",
    "Get Better",
    "Help & Support",
    "Log out"
  ];
  const sidebarRef = useRef();
  const [checked, setChecked] = useState(true);

  useEffect(() => {
    if(toggle === true) {setChecked(!checked)}
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toggle])

  useEffect(() => {
    if(sidebarRef && sidebarRef.current) {
      window.addEventListener('mousedown', (e) => { 
        if(!sidebarRef.current.contains(e.target)) {
          setChecked(true);
        }
      })
    }
  },[sidebarRef])
  return (
    <>
      <div id="nav-bar" ref={sidebarRef}>
        <input id="nav-toggle" type="checkbox" checked={checked} onChange={(e) => {setChecked(e.target.checked)}}/>
        <div id="nav-header">
          <span id="nav-title">KingsBane</span>
          <label for="nav-toggle">
            <i class="fas fa-camera"></i>
          </label>
        </div>
        <div id="nav-content">
          {sidebarItem.map((item, index) => {
            return (
              <div class="nav-button">
                <i class="fas fa-camera"></i>
                <span>{item}</span>
              </div>
            );
          })}
        </div>
      </div>
      {!checked ? 
        createPortal(
          <div id="layer"></div>,
          document.body
        )
      : null}
    </>
  );
}
