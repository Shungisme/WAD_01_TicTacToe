import type { SquareValue } from '../types';

interface SquareProps {
  value: SquareValue;
  onClick: () => void;
  isWinner: boolean;
}

export function Square({ value, onClick, isWinner }: SquareProps) {
  return (
    <button 
      className={`square ${isWinner ? 'winner' : ''}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
}
