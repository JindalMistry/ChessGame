import React, { useEffect, useState } from "react";
import "./local-multiplayer.css";
import { Board, getImageSource } from "../../component/board/board";
import whorse from "../../../asset/Theme4/w-n.png";
import { toastAlert } from "../../component/toastalert/toast-alert";
import { Chess } from "chess.js";

export default function LocalMultiplayer() {
  const defaultRemoved = {
    white: [],
    black: [],
  };
  const [game, setGame] = useState(new Chess());
  const [removed, setRemoved] = useState(defaultRemoved);
  const [chessBoard, setChessBoard] = useState([]);
  const [possibleMoves, setPossibleMoves] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const createBoard = () => {
    const board = [];
    for (let row = 8; row >= 1; row--) {
      const rowArray = [];
      for (let col = 1; col <= 8; col++) {
        const position = `${String.fromCharCode(col + 96)}${row}`;
        const piece = game.get(position);
        let obj = {
          square: position,
          color: piece ? piece.color : null,
          type: piece ? piece.type : null,
        };
        rowArray.push(obj);
      }
      board.push(rowArray);
    }
    return board;
  };
  const onMove = async (from, to) => {
    try {
      const move = { from: from.square, to: to.square };
      let moved = game.move(move);
      if (moved) {
        setGame(game);
        if (moved.captured) {
          const capturedPiece = {
            color: to.color,
            type: moved.captured,
          };

          let temp = JSON.parse(JSON.stringify(removed));
          if (from.color === "w") {
            temp.white.push(capturedPiece);
          } else {
            temp.black.push(capturedPiece);
          }
          setRemoved(temp);
        }
        setChessBoard(createBoard());
        let status = getGameStatus();
        if (status.type !== "SUCCESS") {
          toastAlert(status.msg, status.type);
        }
        return { success: true, IsCaptured: moved.captured };
      } else {
        toastAlert("There was error while making the move.!", "ERROR");
        return { success: true, IsCaptured: false };
      }
    } catch (error) {
      console.log(error);
      return { success: true, IsCaptured: false };
    }
  };
  const clearPossibleMoves = () => {
    setPossibleMoves({});
  };

  const onSelect = (square) => {
    let moves = game.moves({ square: square.square, verbose: true });
    let obj = {};
    moves.forEach((i) => {
      obj[i.to] = "Move";
    });
    setPossibleMoves(obj);
  };

  const getGameStatus = () => {
    let obj = {
      msg: "",
      type: "",
    };
    if (game.isCheckmate()) {
      obj.msg = `Game over ${
        game.turn() === "b" ? "black" : "white"
      } is in checkmate!`;
      obj.type = "ERROR";
      setIsCompleted(true);
    } else if (game.isDraw()) {
      obj.msg = "Game over, it's a draw.";
      obj.type = "WARN";
      setIsCompleted(true);
    } else {
      obj.msg = `Move has been made by ${
        game.turn() === "b" ? "white" : "black"
      }`;
      obj.type = "SUCCESS";
    }
    return obj;
  };

  useEffect(() => {
    setChessBoard(createBoard());
  }, []);
  return (
    <div className="chessboard-wrapper">
      <div className="chessboard-left">
        <div className="playerinfo">
          <div className="playerinfo-left">
            <div className="profile-pic">
              <img src={whorse} alt="" />
            </div>
            <div className="player-name">
              <p>Player Name</p>
              <div className="player-pieces">
                {removed.white &&
                  removed.white.map((item, index) => {
                    return (
                      <div className="sacrificed-piece" key={index}>
                        <img
                          src={require("../../../" +
                            getImageSource(item.color, item.type))}
                          alt=""
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
          <div className="timer">
            <div>
              <p>20:00</p>
            </div>
          </div>
        </div>
        <div className="chessboard">
          <Board
            board={chessBoard}
            turn={game.turn()}
            possibleMoves={possibleMoves}
            clearPossibleMoves={clearPossibleMoves}
            onMove={onMove}
            onSelect={onSelect}
            disabled={isCompleted}
          />
        </div>
        <div className="playerinfo">
          <div className="playerinfo-left">
            <div className="profile-pic">
              <img src={whorse} alt="right-pic" />
            </div>
            <div className="player-name">
              <p>Player Name</p>
              <div className="player-pieces">
                {removed.black &&
                  removed.black.map((item, index) => {
                    return (
                      <div className="sacrificed-piece" key={index}>
                        <img
                          src={require("../../../" +
                            getImageSource(item.color, item.type))}
                          alt=""
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
          <div className="timer">
            <div>
              <p>20:00</p>
            </div>
          </div>
        </div>
      </div>
      <div className="chessboard-right"></div>
    </div>
  );
}
