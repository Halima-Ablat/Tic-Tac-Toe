import React, { useState } from "react";

function TicTacToe() {

  const[squares, setSquares] = useState(Array(9).fill(''));
  console.log(squares)
  return (
    <div className="container">
      <div className="game-container">
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
      </div>
      <p>Next player is </p>
      <button>Restart</button>
    </div>
  );
}

export default TicTacToe;
