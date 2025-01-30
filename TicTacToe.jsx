import React, { useState } from "react";

function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);

  function handleClick(index) {
    if (squares[index] || winnerGame(squares)) return;

    const newSquares = squares.slice();
    newSquares[index] = isXTurn ? "X" : "O";
    setSquares(newSquares);
    setIsXTurn(!isXTurn);
  }

  function winnerGame(squares) {
    const winnerPattern = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winnerPattern.length; i++) {
      const [a, b, c] = winnerPattern[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[b] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  const winner = winnerGame(squares);
  const nextPlayer = isXTurn ? "X" : "O";
  const isDraw = !winner && squares.every(square => square !== "");

  function handleRestart() {
    setSquares(Array(9).fill(""));
    setIsXTurn(true);
  }

  return (
    <div className="container">
      <div className="game-container">
        {squares.map((square, index) => (
          <div
            key={index}
            className="square"
            onClick={() => handleClick(index)}
          >
            {square}
          </div>
        ))}
      </div>
      <p>{winner ? `Winner: ${winner}` : isDraw ? "It's a draw, please play it again !" : `Next player is ${nextPlayer}`}</p>
      <button onClick={handleRestart}>Restart</button>
    </div>
  );
}

export default TicTacToe;
