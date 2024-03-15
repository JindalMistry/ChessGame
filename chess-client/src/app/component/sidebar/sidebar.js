import { createPortal } from "react-dom";
import React, { useEffect, useRef, useState } from "react";
import VsFriendSvg from "../../../asset/vs-friend.svg";
import AchievementIcon from "../../../asset/achivement-icon.svg";
import PlayOnline from "../../../asset/tmep.svg";
import PlayAI from "../../../asset/vs-ai.svg";
import History from "../../../asset/history-icon.svg";
import GetBetter from "../../../asset/get-better.svg";
import HelpSupport from "../../../asset/help-support.svg";
import logout from "../../../asset/logout-icon.png";
import Logo from "../../../asset/main-logo.svg";
import "./sidebar.css";
import { useTheme } from "../../context/ThemeContext";
import { useNavigate } from "react-router-dom";

export default function Sidebar({ toggle, onSelect }) {
  const { isDarkTheme } = useTheme();
  const sidebarItem = [
    { key: "LM", label: "Local Multiplayer", img: PlayOnline, h: 60, w: 60 },
    { key: "AC", label: "AI Challenge", img: PlayAI, h: 55, w: 55 },
    { key: "FD", label: "Friendly Duel", img: VsFriendSvg, h: 55, w: 55 },
    {
      key: "ACMP",
      label: "Accomplishments",
      img: AchievementIcon,
      h: 60,
      w: 60,
    },
    { key: "GH", label: "Game History", img: History, h: 60, w: 60 },
    { key: "SI", label: "Skill Improvement", img: GetBetter, h: 60, w: 60 },
    { key: "SC", label: "Support Center", img: HelpSupport, h: 60, w: 60 },
    { key: "SO", label: "Sign Out", img: logout, h: 55, w: 56 },
  ];
  const sidebarRef = useRef();
  const navigate = useNavigate();
  const [checked, setChecked] = useState(true);

  const onItemSelect = (item) => {
    onSelect(item);
    setChecked(!checked);
  };

  useEffect(() => {
    if (toggle === true) {
      setChecked(!checked);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toggle]);

  useEffect(() => {
    if (sidebarRef && sidebarRef.current) {
      window.addEventListener("mousedown", (e) => {
        if (!sidebarRef.current.contains(e.target)) {
          setChecked(true);
        }
      });
    }
  }, [sidebarRef]);
  return (
    <>
      <div id="nav-bar" ref={sidebarRef}>
        <input
          id="nav-toggle"
          type="checkbox"
          checked={checked}
          onChange={(e) => {
            setChecked(e.target.checked);
          }}
        />
        <div id="nav-header">
          <span id="nav-title">KingsBane</span>
          <label for="nav-toggle" className="sidebar-cross">
            {checked ? (
              <i class="fas">
                <img
                  src={Logo}
                  alt="vsFriend"
                  className={`main-logo ${
                    !isDarkTheme ? "invert-theme-icon" : ""
                  }`}
                />
              </i>
            ) : (
              <i class="fa-regular fa-circle-xmark"></i>
            )}
          </label>
        </div>
        <div id="nav-content">
          {sidebarItem.map((item, index) => {
            return (
              <div
                class="nav-button"
                key={index}
                onClick={() => {
                  onItemSelect(item);
                }}
              >
                <i className="fas">
                  <img
                    src={item.img}
                    alt="vsFriend"
                    height={item.h}
                    width={item.w}
                    className="sidebar-listitem"
                  />
                </i>
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
      {!checked ? createPortal(<div id="layer"></div>, document.body) : null}
    </>
  );
}
