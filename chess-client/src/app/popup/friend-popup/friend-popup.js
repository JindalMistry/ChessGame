import React from "react";
import Modal from "../../component/model/modal";
import "./friend-popup.css";
import Input from "../../component/input/input";
import Button from "../../component/button/button";
import { useTheme } from "../../context/ThemeContext";
export default function FriendPopup({ show, onClose }) {
  let arr = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ];
  const { isDarkTheme } = useTheme;
  return (
    <Modal
      label={"Play against a Friend"}
      onClose={onClose}
      show={show}
      showHeading={true}
      size={"large"}
      className={"px-1"}
    >
      <div className="fp-main">
        <div className="fp-header">
          <div className="fp-button">
            <Button
              label={"List"}
              className={`w-40p py-05`}
              background={"secondary"}
              variant={"shadowed"}
            />
            <Button
              label={"Friends"}
              className={"w-40p py-05"}
              background={"secondary"}
              variant={"shadowed"}
            />
          </div>
          <div className="fp-input">
            <Input className={"w-90p py-05"} placeholder={"Search"} />
          </div>
        </div>
        <ul className="fp-lists">
          {arr.map((i, e) => {
            return (
              <li className="list">
                <div className="image"></div>
                <p>Jindal Mistry</p>
                <p>Legend</p>
                <p>100-50</p>
                <Button
                  label={"Challange"}
                  className={"w-9 py-05"}
                  variant={"shadowed"}
                  background={"primary"}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </Modal>
  );
}
