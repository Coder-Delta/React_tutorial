import "./App.css";
import React, { useState, useEffect } from "react";
import Block from "./components/Block";

function App() {
  const [state, setState] = useState<(string | null)[]>(Array(9).fill(null));
  const [currentTurn, setCurrentTurn] = useState<"X" | "O">("X");
  const [winner, setWinner] = useState<"X" | "O" | null>(null);

  const checkWinner = (board: (string | null)[]) => {
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winPatterns.length; i++) {
      const [a, b, c] = winPatterns[i];

      if (
        board[a] !== null &&
        board[a] === board[b] &&
        board[a] === board[c]
      ) {
        return board[a] as "X" | "O";
      }
    }
    return null;
  };

  useEffect(() => {
    const win = checkWinner(state);
    if (win) {
      setWinner(win);
    }
  }, [state]);

  const blockHandleClick = (index: number) => {
    if (state[index] !== null || winner) return;

    const stateCopy = [...state];
    stateCopy[index] = currentTurn;

    const win = checkWinner(stateCopy);

    setState(stateCopy);

    if (win) {
      setWinner(win);
    } else {
      setCurrentTurn(currentTurn === "X" ? "O" : "X");
    }
  };

  return (
    <div className="board">
      {winner && <h2>{winner} won the game</h2>}

      <div className="row">
        <Block onClick={() => blockHandleClick(0)} value={state[0]} />
        <Block onClick={() => blockHandleClick(1)} value={state[1]} />
        <Block onClick={() => blockHandleClick(2)} value={state[2]} />
      </div>
      <div className="row">
        <Block onClick={() => blockHandleClick(3)} value={state[3]} />
        <Block onClick={() => blockHandleClick(4)} value={state[4]} />
        <Block onClick={() => blockHandleClick(5)} value={state[5]} />
      </div>
      <div className="row">
        <Block onClick={() => blockHandleClick(6)} value={state[6]} />
        <Block onClick={() => blockHandleClick(7)} value={state[7]} />
        <Block onClick={() => blockHandleClick(8)} value={state[8]} />
      </div>
    </div>
  );
}

export default App;
