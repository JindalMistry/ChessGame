import React from "react";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar-wrapper">
      <div>
        <header className="sidebar-header">
          <div className="sidebar-logo">
          </div>
        </header>
        <main className="sidebar-main">
          <ul>
            <li className="sidebar-item">
              <div className="sidebar-item-logo">
              </div>
              <span>Play online</span>
            </li>
            <li className="sidebar-item">
              <div className="sidebar-item-logo"></div>
              <span>Play against AI</span>
            </li>
            <li className="sidebar-item">
              <div className="sidebar-item-logo"></div>
              <span>VS Friend</span>
            </li>
            <li className="sidebar-item">
              <div className="sidebar-item-logo"></div>
              <span>Achievements</span>
            </li>
            <li className="sidebar-item">
              <div className="sidebar-item-logo"></div>
              <span>Results</span>
            </li>
            <li className="sidebar-item">
              <div className="sidebar-item-logo"></div>
              <span>Get Better</span>
            </li>
          </ul>
        </main>
      </div>
      <footer className="sidebar-footer">
        <div className="sidebar-item">
          <div className="sidebar-item-logo"></div>
          <span>Help & Support</span>
        </div>
        <div className="sidebar-item">
          <div className="sidebar-item-logo">
          </div>
          <span>Log out</span>
        </div>
      </footer>
    </div>
  );
}
