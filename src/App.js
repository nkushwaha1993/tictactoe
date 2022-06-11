import React, { useState } from "react";
import "./App.css";
import Board from "./Board";

//1)Complete the logic for TicTacToe
//2)should show whose chance it is sharting with X'
//and O' after that
//3)should show a winner once a winner is found-> end the game there
//4)box once clicked with X/O cannot be overwritten

const App = () => {
  const [winner, setWinner] = useState("");
  return (
    <>
      <div>
        <p>1)Complete the logic for TicTacToe</p>
        <p>2)should show whose chance it is sharting with X</p>
        <p>
          3)should show a winner once a winner(or drawn) is found, end the game
          there{" "}
        </p>
        <p>4)box once clicked with X/O cannot be overwritten</p>
      </div>
      <div className="App">
        <Board setWinner={setWinner} />
        <p>Player X chance</p>
        <h1>Winner: {winner === -1 ? "" : winner}</h1>
        <button>Reset</button>
      </div>
    </>
  );
};

export default App;
