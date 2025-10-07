import type { SquareValue } from '../types';
import { Square } from './Square';

interface BoardProps {
  squares: SquareValue[];
  onSquareClick: (index: number) => void;
  winningLine: number[] | null;
}

export function Board({ squares, onSquareClick, winningLine }: BoardProps) {
  // Render board using nested loops (requirement #2)
  const renderBoard = () => {
    const rows = [];
    
    // Outer loop for rows (0-2)
    for (let i = 0; i < 3; i++) {
      const squaresInRow = [];
      
      // Inner loop for columns (0-2)
      for (let j = 0; j < 3; j++) {
        const squareIndex = i * 3 + j;
        const isWinner = winningLine ? winningLine.includes(squareIndex) : false;
        
        squaresInRow.push(
          <Square
            key={squareIndex}
            value={squares[squareIndex]}
            onClick={() => onSquareClick(squareIndex)}
            isWinner={isWinner}
          />
        );
      }
      
      rows.push(
        <div key={i} className="board-row">
          {squaresInRow}
        </div>
      );
    }
    
    return rows;
  };

  return <div className="board">{renderBoard()}</div>;
}
