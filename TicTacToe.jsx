import React, { useState } from "react";

function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);

  return (
    <div className="container">
      <div className="game-container">
        {squares.map((square, index) => (
          <div key={index} className="square">
            {square}
          </div>
        ))}
      </div>
      <p>Next player is</p>
      <button>Restart</button>
    </div>
  );
}

export default TicTacToe;
