import { useState } from 'react';
import './App.css';
import { Board } from './components/Board';
import type { HistoryEntry } from './types';
import { calculateWinner, getLocation } from './utils/gameLogic';

function App() {
  // Game state
  const [history, setHistory] = useState<HistoryEntry[]>([
    { squares: Array(9).fill(null), location: null }
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
    nextSquares[squareIndex] = xIsNext ? 'X' : 'O';

    // Get location for this move (1-based indexing)
    const location = getLocation(squareIndex);

    // Create new history (discard any future moves if we're not at the end)
    const newHistory = [
      ...history.slice(0, currentMove + 1),
      { squares: nextSquares, location }
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

  // Generate move list
  const moves = history.map((step, moveIndex) => {
    const location = step.location;
    
    // Check if this is the current move (requirement #1)
    const isCurrent = moveIndex === currentMove;
    
    let description: string;
    if (moveIndex === 0) {
      description = 'Go to game start';
    } else {
      // Requirement #5: Show position as (row, col) with 1-based indexing
      description = `Go to move #${moveIndex} (${location!.row}, ${location!.col})`;
    }

    // Requirement #1: Current move shows text, not button
    if (isCurrent) {
      return (
        <li key={moveIndex}>
          <span className="current-move">
            You are at move #{moveIndex}
          </span>
        </li>
      );
    }

    return (
      <li key={moveIndex}>
        <button onClick={() => jumpTo(moveIndex)}>{description}</button>
      </li>
    );
  });

  // Requirement #3: Apply ascending/descending sort
  const displayedMoves = isAscending ? moves : moves.slice().reverse();

  // Generate status message
  let status: string;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (isDraw) {
    // Requirement #4: Show draw message
    status = 'Result: Draw';
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
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
              <button onClick={handleRestart}>
                🔄 New Game
              </button>
            </div>
            <div className="sort-control">
              <button onClick={toggleSortOrder}>
                {isAscending ? '↑ Ascending' : '↓ Descending'}
              </button>
            </div>
          </div>
          <div className="move-history">
            <h3>Move History</h3>
            <ol>{displayedMoves}</ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
