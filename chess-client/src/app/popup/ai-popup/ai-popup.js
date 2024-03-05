import "./ai-popup.css";
import Modal from "../../component/model/modal";
import Button from "../../component/button/button";
import "../../../app/global.css";

const AiPopup = ({ show, onClose }) => {
  return (
    <Modal label={"Play against AI"} onClose={onClose} show={show}>
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
          <div className="section">
            <Button
              className={"w-20p smaller py-03 button bold"}
              label={"Easy"}
            />
            <Button
              className={"w-20p smaller py-03 button bold"}
              label={"Medium"}
            />
            <Button
              className={"w-20p smaller py-03 button bold"}
              label={"Hard"}
            />
          </div>
          <div className="section">
            <Button
              className={"w-30p smaller py-03 button bold"}
              label={"Not for a Noob"}
            />
            <Button
              className={"w-30p smaller py-03 button bold"}
              label={"Defeat if you can"}
            />
          </div>
        </div>
        <div className="game-duration shadowed">
          <Button
            className={"w-15p smaller py-03 button bold"}
            label={"10:00"}
          />
          <Button
            className={"w-15p smaller py-03 button bold"}
            label={"15:00"}
          />
          <Button
            className={"w-15p smaller py-03 button bold"}
            label={"20:00"}
          />
          <Button
            className={"w-15p smaller py-03 button bold"}
            label={"25:00"}
          />
        </div>
        <div className="aipopup-button">
          <Button
            label={"Start Game"}
            background={"primary"}
            className={"w-30p py-05 button bold large"}
            variant={"shadowed"}
          />
        </div>
      </div>
    </Modal>
  );
};
export default AiPopup;
