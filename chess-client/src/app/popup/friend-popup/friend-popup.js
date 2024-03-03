import React from "react";
import Modal from "../../component/model/modal";
import "./friend-popup.css";
import Input from "../../component/input/input";
import Button from "../../component/button/button";

export default function FriendPopup({ show, onClose }) {
  let arr = [0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  return (
    <Modal label={"Play against AI"} onClose={onClose} show={show}>
      <div className="modal-main">
        <div className="modal-header">
          <div className="modal-button">
            <Button label={"List"} className={`w-40p py-05`} background={"secondary"} variant={"shadowed"} />
            <Button label={"Friends"} className={"w-40p py-05"} background={"secondary"} variant={"shadowed"} />
          </div>
          <div className="modal-input">
            <Input className={"w-80p py-05"} placeholder={"Search"} />
          </div>
        </div>
        <ul className="modal-lists">
          {arr.map((i, e) => {
            return (
              <li className="list">
                <div className="image"></div>
                <p>Jindal Mistry</p>
                <p>Legend</p>
                <p>100-50</p>
                <Button label={"Challange"} className={"w-10 py-05"} variant={"shadowed"} background={"primary"}/>
              </li>
            );
          })}
        </ul>
        {/* <div className="modal-lists">
          {arr.map((item) => {
            return (
              <>
                <div className="list">
                  <div className="image"></div>
                  <p>Jindal Mistry</p>
                  <p>Legend</p>
                  <p>100-50</p>
                  <Button label={"Challange"} className={"px-2 py-05 bc-primary popup-list-button"} />
                </div>
              </>
            );
          })}
        </div> */}
      </div>
    </Modal>
  );
}
