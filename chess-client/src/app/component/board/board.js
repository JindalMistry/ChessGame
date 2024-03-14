import { useState } from "react";
import { toastAlert } from "../toastalert/toast-alert";
import "./board.css";

export const Board = ({
  board,
  onSelect,
  turn,
  onMove,
  possibleMoves,
  clearPossibleMoves,
}) => {
  const [selected, setSelected] = useState(null);

  const IsMoveValid = (pos) => {
    return true;
    if (possibleMoves[pos]) return true;
    return false;
  };

  const onPiecePress = async (square) => {
    console.log(turn, square);
    if (selected === null && square.type && turn !== square.color) {
      toastAlert("Hold on, your opponent haven't made a move.", "WARN");
      return;
    }
    if (selected) {
      if (turn === square.color) {
        setSelected(square);
        onSelect(square);
      } else {
        if (!IsMoveValid(square.square)) {
          toastAlert("Oops, that's not a legal move.");
          return;
        }
        const move = await onMove(selected, square);
        console.log("Move", move);
        if (move) {
          setSelected(null);
          clearPossibleMoves();
        }
      }
    } else {
      if (square) {
        setSelected(square);
        onSelect(square);
      }
    }
  };

  return (
    <div className="chessboard-container">
      {board.map((row, rowIndex) => {
        return (
          <div className={`chessboard-row`} key={rowIndex}>
            {row.map((square, colIndex) => {
              return (
                <div
                  className={`chessboard-square ${
                    (rowIndex + colIndex) % 2 === 0 ? "light" : "dark"
                  }`}
                  key={colIndex}
                  onClick={() => {
                    onPiecePress(square);
                  }}
                >
                  {square && !square.type && possibleMoves[square.square] && (
                    <div className="board-circle-center"></div>
                  )}
                  {square && square.type && possibleMoves[square.square] && (
                    <div className="board-circle-corner"></div>
                  )}
                  {square.type && <Piece square={square} />}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export const getImageSource = (color, type) => {
  return `asset/Theme4/${color}-${type}.png`;
};

export const Piece = ({ square, possibleMoves }) => {
  if (square === null) return;
  const pieceType = square.type;
  const pieceColor = square.color;
  const PiecesPosition = square.square;

  return (
    <img
      style={
        pieceType === "p"
          ? { width: "60%", height: "60%" }
          : { width: "90%", height: "90%" }
      }
      src={require("../../../" + getImageSource(pieceColor, pieceType))}
      alt={PiecesPosition}
    />
  );
};
