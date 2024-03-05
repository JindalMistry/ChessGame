import React, { useState } from "react";
import "./landing.css";
import Sidebar from "../../component/sidebar/sidebar";
import SettingsIcon from "../../../asset/setting-icon.svg";
import DarkThemeIcon from "../../../asset/dark-theme-icon.svg";
import { createPortal } from "react-dom";
import FriendPopup from "../../popup/friend-popup/friend-popup";
import Button from "../../component/button/button";
import AiPopup from "../../popup/ai-popup/ai-popup";

export default function Hero() {
  const [showFriendPopup, setFriendPopup] = useState(false);
  const [showAiPopup, setAiPopup] = useState(false);
  return (
    <div className="hero-wrapper">
      <Sidebar />
      <div className="hero">
        <div className="hh">
          <span className="hh-left">KingsBane</span>
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
            Experience the Thrill of Strategic warfare with <br /> KingsBane,
            where each move holds the power to shape <br /> the destiny of
            empires on the <span className="chessboard-title">Chessboard</span>
          </div>
          <div className="hm-right-btns">
            <Button
              label={"Play online"}
              className={"py-1 w-70p larger bold"}
              background={"primary"}
              loading={false}
              loadingType={"pulse"}
              variant={"shadowed"}
              onClick={() => {
                setFriendPopup(true);
              }}
            />
            <Button
              label={"Challenge AI"}
              className={"py-1 w-70p larger bold"}
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
          <div className="footer-left"></div>
          <div className="footer-right">
            <p>Past results</p>
            <div className="hf-item">
              <div className="hf-profile-icon"></div>
              <div className="hf-details"></div>
              <div className="hf-result">Loss</div>
            </div>
            <div className="hf-item">
              <div className="hf-profile-icon"></div>
              <div className="hf-details"></div>
              <div className="hf-result">Loss</div>
            </div>
            <div className="hf-item">
              <div className="hf-profile-icon"></div>
              <div className="hf-details"></div>
              <div className="hf-result">Loss</div>
            </div>
            <div className="hf-item">
              <div className="hf-profile-icon"></div>
              <div className="hf-details"></div>
              <div className="hf-result">Loss</div>
            </div>
            <div className="hf-item">
              <div className="hf-profile-icon"></div>
              <div className="hf-details"></div>
              <div className="hf-result">Loss</div>
            </div>
          </div>
        </div>
      </div>
      {showFriendPopup &&
        createPortal(
          <FriendPopup
            show={true}
            onClose={() => {
              setFriendPopup(false);
            }}
          />,
          document.body
        )}
      {showAiPopup &&
        createPortal(
          <AiPopup
            show={true}
            onClose={() => {
              setAiPopup(false);
            }}
          />,
          document.body
        )}
    </div>
  );
}
