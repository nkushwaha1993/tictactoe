import Square from "./Square";
import React, { useState } from "react";

export default function Board({ setWinner }) {
  const [playerValue, setPlayerValue] = useState("");
  const [board, setBoard] = useState([
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1]
  ]);
  return (
    <>
      <div style={{ display: "flex", width: 300 }}>
        <Square
          id="0"
          row="0"
          playerValue={playerValue}
          setPlayerValue={setPlayerValue}
          board={board}
          setBoard={setBoard}
          setWinner={setWinner}
        />
        <Square
          id="1"
          row="0"
          playerValue={playerValue}
          setPlayerValue={setPlayerValue}
          board={board}
          setBoard={setBoard}
          setWinner={setWinner}
        />
        <Square
          id="2"
          row="0"
          playerValue={playerValue}
          setPlayerValue={setPlayerValue}
          board={board}
          setBoard={setBoard}
          setWinner={setWinner}
        />
      </div>
      <div style={{ display: "flex", width: 300 }}>
        <Square
          id="3"
          row="1"
          playerValue={playerValue}
          setPlayerValue={setPlayerValue}
          board={board}
          setBoard={setBoard}
          setWinner={setWinner}
        />
        <Square
          id="4"
          row="1"
          playerValue={playerValue}
          setPlayerValue={setPlayerValue}
          board={board}
          setBoard={setBoard}
          setWinner={setWinner}
        />
        <Square
          id="5"
          row="1"
          playerValue={playerValue}
          setPlayerValue={setPlayerValue}
          board={board}
          setBoard={setBoard}
          setWinner={setWinner}
        />
      </div>
      <div style={{ display: "flex", width: 300 }}>
        <Square
          id="6"
          row="2"
          playerValue={playerValue}
          setPlayerValue={setPlayerValue}
          board={board}
          setBoard={setBoard}
          setWinner={setWinner}
        />
        <Square
          id="7"
          row="2"
          playerValue={playerValue}
          setPlayerValue={setPlayerValue}
          board={board}
          setBoard={setBoard}
          setWinner={setWinner}
        />
        <Square
          id="8"
          row="2"
          playerValue={playerValue}
          setPlayerValue={setPlayerValue}
          board={board}
          setBoard={setBoard}
          setWinner={setWinner}
        />
      </div>
    </>
  );
}
