import "./ai-popup.css";
import Modal from "../../component/model/modal";
import Button from "../../component/button/button";
import "../../../app/global.css";

const AiPopup = ({ show, onClose }) => {
  return (
    <Modal label={"Play against AI"} onClose={onClose} show={show} showHeading={true} size={"large"} className={"px-05"}>
      <div className="aipopup-main">
        <div className="player-icons shadowed">
          <div className="player-image">
            <h1>W</h1>
          </div>
          <div className="player-image">
            <h1>B</h1>
          </div>
        </div>
        <div className="game-difficulty shadowed">
          <Button className={"lvl-sml smaller py-03 button bold"} label={"Easy"} />
          <Button className={"lvl-sml smaller py-03 button bold"} label={"Medium"} />
          <Button className={"lvl-sml smaller py-03 button bold"} label={"Hard"} />
          <Button className={"lvl-lrg smaller py-03 button bold"} label={"Not for a Noob"} />
          <Button className={"lvl-lrg smaller py-03 button bold"} label={"Defeat if you can"} />
        </div>
        <div className="game-duration shadowed">
          <Button className={"w-5 smaller py-03 button bold"} label={"10:00"} />
          <Button className={"w-5 smaller py-03 button bold"} label={"15:00"} />
          <Button className={"w-5 smaller py-03 button bold"} label={"20:00"} />
          <Button className={"w-5 smaller py-03 button bold"} label={"25:00"} />
        </div>
        <div className="aipopup-button">
          <Button
            label={"Start Game"}
            background={"primary"}
            className={"ai-start-game py-05 button bold large"}
            variant={"shadowed"}
          />
        </div>
      </div>
    </Modal>
  );
};
export default AiPopup;
