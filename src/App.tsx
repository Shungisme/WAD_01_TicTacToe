import { useState } from "react";
import "./App.css";
import { Board } from "./components/Board";
import type { HistoryEntry } from "./types";
import { calculateWinner, getLocation } from "./utils/gameLogic";

function App() {
  // Game state
  const [history, setHistory] = useState<HistoryEntry[]>([
    { squares: Array(9).fill(null), location: null },
  ]);
  const [currentMove, setCurrentMove] = useState(0);
  const [isAscending, setIsAscending] = useState(true);

  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove].squares;

  // Calculate winner and check for draw
  const winnerInfo = calculateWinner(currentSquares);
  const winner = winnerInfo?.winner ?? null;
  const winningLine = winnerInfo?.line ?? null;
  const isDraw = currentMove === 9 && !winner;

  // Handle square click
  function handleSquareClick(squareIndex: number) {
    // Ignore click if game is over or square is already filled
    if (winner || currentSquares[squareIndex] || isDraw) {
      return;
    }

    // Create new squares array with the move
    const nextSquares = currentSquares.slice();
    nextSquares[squareIndex] = xIsNext ? "X" : "O";

    // Get location for this move (1-based indexing)
    const location = getLocation(squareIndex);

    // Create new history (discard any future moves if we're not at the end)
    const newHistory = [
      ...history.slice(0, currentMove + 1),
      { squares: nextSquares, location },
    ];

    setHistory(newHistory);
    setCurrentMove(newHistory.length - 1);
  }

  // Jump to a specific move
  function jumpTo(move: number) {
    setCurrentMove(move);
  }

  // Toggle sort order
  function toggleSortOrder() {
    setIsAscending(!isAscending);
  }

  // Restart game
  function handleRestart() {
    setHistory([{ squares: Array(9).fill(null), location: null }]);
    setCurrentMove(0);
    setIsAscending(true);
  }

  // Generate move list as table rows
  const moveRows = history.map((step, moveIndex) => {
    const location = step.location;
    const isCurrent = moveIndex === currentMove;

    const player = moveIndex === 0 ? "-" : moveIndex % 2 === 0 ? "O" : "X";
    const position =
      moveIndex === 0 ? "-" : `(${location!.row}, ${location!.col})`;

    return {
      moveIndex,
      player,
      position,
      isCurrent,
    };
  });

  // Requirement #3: Apply ascending/descending sort
  const displayedRows = isAscending ? moveRows : [...moveRows].reverse();

  // Generate status message
  let status: string;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (isDraw) {
    // Requirement #4: Show draw message
    status = "Result: Draw";
  } else {
    status = `Next player: ${xIsNext ? "X" : "O"}`;
  }

  return (
    <div className="game">
      <h1 className="game-title">TIC-TAC-TOE</h1>
      <div className="game-container">
        <div className="game-board">
          <Board
            squares={currentSquares}
            onSquareClick={handleSquareClick}
            winningLine={winningLine}
          />
        </div>
        <div className="game-info">
          <div className="status">{status}</div>
          <div className="controls">
            <div className="restart-control">
              <button onClick={handleRestart}>New Game</button>
            </div>
            <div className="sort-control">
              <button onClick={toggleSortOrder}>
                {isAscending ? "Ascending" : "Descending"}
              </button>
            </div>
          </div>
          <div className="move-history">
            <h3>Move History</h3>
            <div className="history-table-container">
              <table className="history-table">
                <thead>
                  <tr>
                    <th>Move</th>
                    <th>Player</th>
                    <th>Position</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {displayedRows.map((row) => (
                    <tr
                      key={row.moveIndex}
                      className={row.isCurrent ? "current-row" : ""}
                    >
                      <td>{row.moveIndex}</td>
                      <td className="player-cell">{row.player}</td>
                      <td>{row.position}</td>
                      <td>
                        {row.isCurrent ? (
                          <span className="current-badge">Current</span>
                        ) : (
                          <button
                            className="jump-button"
                            onClick={() => jumpTo(row.moveIndex)}
                          >
                            Jump
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
