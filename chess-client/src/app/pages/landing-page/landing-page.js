import React from "react";
import "./landing.css";
import Sidebar from "../../component/sidebar/sidebar";
import SettingsIcon from '../../../asset/setting-icon.svg';
import DarkThemeIcon from '../../../asset/dark-theme-icon.svg';

export default function Hero() {
  return (
    <div className="hero-wrapper">
      <Sidebar />
      <div className="hero">
        <div className="hh">
          <span className="hh-left">KingsBane</span>
          <div className="hh-right">
            <div className="hh-theme">
              <img src={DarkThemeIcon} alt="select-theme"/>
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
        <div className="hero-main">
          <div className="hm-para">
            Experience the Thrill of Strategic warfare with KingsBane, where each move holds the power to shape the
            destiny of empires on the Chessboard
          </div>
          <div className="hm-right-btns">
            <button>Play online</button>
            <button>Challenge AI</button>
          </div>
        </div>
        <div className="hero-footer">
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
    </div>
  );
}
