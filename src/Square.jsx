import React from "react";

export default function Square({
  id,
  playerValue,
  setPlayerValue,
  board,
  row,
  setBoard,
  setWinner
}) {
  const checkWinner = (value) => {
    const tempBoard = [...board];
    const column = id % 3;
    tempBoard[row][column] = value;
    console.log(tempBoard);
    setBoard(tempBoard);
    for (let i = 0; i < 3; i++) {
      if (
        tempBoard[i][0] === tempBoard[i][1] &&
        tempBoard[i][0] === tempBoard[i][2]
      ) {
        return tempBoard[i][0];
      }
      if (
        tempBoard[0][i] === tempBoard[1][i] &&
        tempBoard[0][i] === tempBoard[2][i]
      ) {
        return tempBoard[0][i];
      }
    }
    if ((tempBoard[0][0] === tempBoard[1][1]) === tempBoard[2][2]) {
      return tempBoard[0][0];
    }
    if ((tempBoard[0][2] === tempBoard[1][1]) === tempBoard[2][0]) {
      return tempBoard[0][2];
    }
    return "";
  };

  const onSquareClick = (e) => {
    const sqaureId = e.nativeEvent.target.id;
    const value = playerValue === "X" ? "O" : "X";
    if (document.getElementById(sqaureId).innerHTML === "") {
      document.getElementById(sqaureId).innerHTML = value;
      setPlayerValue(value);
      setWinner(checkWinner(value));
    }
  };

  return (
    <div
      style={{
        height: 100,
        width: 100,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "black",
        borderCollapse: "collapse",
        fontSize: "50px",
        textAlign: "center"
      }}
      id={id}
      row={row}
      onClick={(e) => onSquareClick(e)}
    ></div>
  );
}
