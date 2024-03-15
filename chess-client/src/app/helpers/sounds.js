import Move from "../../asset/sound-effect/move-self.mp3";
import Capture from "../../asset/sound-effect/capture.mp3";
import Check from "../../asset/sound-effect/move-check.mp3";
import Checkmate from "../../asset/sound-effect/castle.mp3";
import Notify from "../../asset/sound-effect/notify.mp3";

export function playMove() {
  const sound = new Audio(Move);
  sound.play();
}

export function playCapture() {
  const sound = new Audio(Capture);
  sound.play();
}

export function playCheck() {
  const sound = new Audio(Check);
  sound.play();
}

export function playCheckmate() {
  const sound = new Audio(Checkmate);
  sound.play();
}

export function playNotify() {
  const sound = new Audio(Notify);
  sound.play();
}
