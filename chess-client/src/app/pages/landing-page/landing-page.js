import React, { useState } from "react";
import "./landing.css";
import Sidebar from "../../component/sidebar/sidebar";
import SettingsIcon from "../../../asset/setting-icon.svg";
import DarkThemeIcon from "../../../asset/dark-theme-icon.svg";
import FriendPopup from "../../popup/friend-popup/friend-popup";
import Button from "../../component/button/button";
import AiPopup from "../../popup/ai-popup/ai-popup";
import Image1 from "../../../asset/hero-image-1.svg";
import Image2 from "../../../asset/hero-image-2.svg";
import Image3 from "../../../asset/hero-image-3.svg";
import Image4 from "../../../asset/hero-image-4.svg";
import Image5 from "../../../asset/hero-image-5.svg";

export default function Hero() {
  const [showFriendPopup, setFriendPopup] = useState(false);
  const [showAiPopup, setAiPopup] = useState(false);
  const [toggle, setToggle] = useState(false);
  const HeroImages = [Image1, Image2, Image3, Image4, Image5];
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
  return (
    <div className="hero-wrapper">
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
            <div className="hh-theme">
              <img src={DarkThemeIcon} alt="select-theme" />
            </div>
            <div className="hh-setting">
              <div className="hh-setting-left">
                <div className="hh-profile">
                  <span>J</span>
                </div>
                <div className="hh-details">
                  <p>Jindal Mistry</p>
                  <span>Legend</span>
                </div>
              </div>
              <div className="hh-setting-btn">
                <img src={SettingsIcon} alt="settings-icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="hm">
          <div className="hm-para">
            Experience the Thrill of Strategic warfare with KingsBane, where each move holds the power to shape the
            destiny of empires on the <span className="chessboard-title">Chessboard</span>
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
              onClick={() => {
                setAiPopup(true);
              }}
              variant={"shadowed"}
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

          <div className="buckets">
            {HeroImages.map((item, index) => {
              return (
                <div>
                  <span></span>
                  {/* {<img src={item} alt="back" key={index} width={"40px"} />} */}
                </div>
              );
            })}
          </div>

          {/* <div className="footer-left"></div> */}
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
