import React, { useContext, useEffect, useState } from "react";
import "./landing.css";
import Sidebar from "../../component/sidebar/sidebar";
import SettingsIcon from "../../../asset/setting-icon.svg";
import DarkThemeIcon from "../../../asset/dark-theme-icon.svg";
import LightThemeIcon from "../../../asset/light-theme-icon.svg";
import FriendPopup from "../../popup/friend-popup/friend-popup";
import Button from "../../component/button/button";
import AiPopup from "../../popup/ai-popup/ai-popup";
import Image1 from "../../../asset/hero-image-1.svg";
import Image2 from "../../../asset/hero-image-2.svg";
import Image3 from "../../../asset/hero-image-3.svg";
import Image4 from "../../../asset/hero-image-4.svg";
import Image5 from "../../../asset/hero-image-5.svg";
import whitepawn from "../../../asset/white-pawn.svg";
import whiteking from "../../../asset/white-king.svg";
import whiterook from "../../../asset/white-rook.svg";
import whitequeen from "../../../asset/white-queen.svg";
import whitehorse from "../../../asset/white-horse.svg";
import whitebishop from "../../../asset/white-bishop.svg";
import blackpawn from "../../../asset/black-pawn.svg";
import blackking from "../../../asset/black-king.svg";
import blackrook from "../../../asset/black-rook.svg";
import blackqueen from "../../../asset/black-queen.svg";
import blackhorse from "../../../asset/black-horse.svg";
import blackbishop from "../../../asset/black-bishop.svg";
import { useTheme } from "../../context/ThemeContext";
import ContextMenu from "../../component/contextmenu/context-menu";
import { useSelector } from "react-redux";

export default function Hero() {
  const user = useSelector((state) => state.user);
  const [showFriendPopup, setFriendPopup] = useState(false);
  const [showAiPopup, setAiPopup] = useState(false);
  const [toggle, setToggle] = useState(false);
  const { toggleTheme, isDarkTheme } = useTheme();
  const settingsMenu = [
    { key: 1, value: "Profile", Icon: blackrook },
    { key: 2, value: "Icon theme", Icon: blackrook },
    { key: 3, value: "Settings", Icon: blackrook },
    { key: 4, value: "Log out", Icon: blackrook },
  ];
  const HeroImages = [
    whitepawn,
    whiteking,
    whiterook,
    whitequeen,
    whitehorse,
    whitebishop,
    blackpawn,
    blackking,
    blackrook,
    blackqueen,
    blackhorse,
    blackbishop,
  ];
  const data = [
    {
      img: "",
      name: "Jindal Mistry",
      title: "legend",
      result: "Loss",
    },
    {
      img: "",
      name: "Jindal Mistry",
      title: "legend",
      result: "Loss",
    },
    {
      img: "",
      name: "Jindal Mistry",
      title: "legend",
      result: "Loss",
    },
    {
      img: "",
      name: "Jindal Mistry",
      title: "legend",
      result: "Loss",
    },
    {
      img: "",
      name: "Jindal Mistry",
      title: "legend",
      result: "Loss",
    },
    {
      img: "",
      name: "Jindal Mistry",
      title: "legend",
      result: "Loss",
    },
    {
      img: "",
      name: "Jindal Mistry",
      title: "legend",
      result: "Loss",
    },
    {
      img: "",
      name: "Jindal Mistry",
      title: "legend",
      result: "Loss",
    },
    {
      img: "",
      name: "Jindal Mistry",
      title: "legend",
      result: "Loss",
    },
  ];
  const onsidebarToggle = () => {
    setToggle(true);
    setTimeout(() => {
      setToggle(false);
    }, 100);
  };
  useEffect(() => {
    console.log(user.user.data.username);
  }, [user]);
  return (
    <div
      className={`${
        isDarkTheme ? "black-theme-background" : "white-theme-background"
      } hero-wrapper`}
    >
      <Sidebar toggle={toggle} />
      <div className="hero">
        <div className="hh">
          <span className="hh-left">
            <span onClick={onsidebarToggle} className="menu-icon">
              <i className="fa-solid fa-burger"></i>
            </span>
            KingsBane
          </span>
          <div className="hh-right">
            <div
              className="hh-theme"
              onClick={toggleTheme}
              style={{ color: isDarkTheme ? "white" : "var(--sbg) " }}
            >
              <img
                src={isDarkTheme ? LightThemeIcon : DarkThemeIcon}
                alt="select-theme"
                className={isDarkTheme ? "invert-theme-icon" : ""}
              />
            </div>
            <div className="hh-setting">
              <div className="hh-setting-left">
                <div className="hh-profile">
                  <span>J</span>
                </div>
                <div className="hh-details">
                  {<p>{user ? user.user.data.username : "Guest"}</p>}
                  <span>Legend</span>
                </div>
              </div>
              <div className="hh-setting-btn">
                <ContextMenu
                  content={<img src={SettingsIcon} alt="settings-icon" />}
                  list={settingsMenu}
                  position={"end"}
                  showIcon={true}
                  onSelect={(ritesh) => {
                    console.log(ritesh);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="hm">
          <div className="hm-para">
            Experience the Thrill of Strategic warfare with KingsBane, where
            each move holds the power to shape the destiny of empires on the{" "}
            <span className="chessboard-title">Chessboard</span>
          </div>
          <div className="hm-right-btns">
            <Button
              label={"Friendly Duel"}
              className={"py-1 w-90p larger bold"}
              background={"primary"}
              loading={false}
              loadingType={"pulse"}
              variant={"shadowed"}
              onClick={() => {
                setFriendPopup(true);
              }}
            />
            <Button
              label={"AI Challenge"}
              className={"py-1 w-90p larger bold"}
              background={"secondary"}
              loading={false}
              loadingType={"falling"}
              variant={"shadowed"}
              onClick={() => {
                setAiPopup(true);
              }}
            />
          </div>
        </div>
        <div className="hf">
          {/* <div className="footer-right">
            <div className="hf-main">
              <div className="hf-header">
                <p>Past results</p>
              </div>
              <div className="hf-footer">
                {data.map((item, index) => {
                  return (
                    <div className="hf-item">
                      <div className="hf-item-left">
                        <div className="hf-profile-icon"></div>
                        <div className="hf-details">
                          <p>{item.name}</p>
                          <p>{item.title}</p>
                        </div>
                      </div>
                      <div className="hf-result">{item.result}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div> */}
          <div className="footer-left">
            <div className="animation-hero">
              <div class="wheel">
                {HeroImages.map((item, index) => {
                  return (
                    <div className="cabin">
                      {
                        <img
                          src={item}
                          alt="back"
                          key={index}
                          height={"100%"}
                          width={"100%"}
                        />
                      }
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <FriendPopup
        show={showFriendPopup}
        onClose={() => {
          setFriendPopup(false);
        }}
      />
      <AiPopup
        show={showAiPopup}
        onClose={() => {
          setAiPopup(false);
        }}
      />
    </div>
  );
}
