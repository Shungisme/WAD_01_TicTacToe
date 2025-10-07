import type { SquareValue, WinnerInfo } from '../types';

/**
 * Calculate the winner of the game and return the winning line
 * @param squares - Array of 9 squares representing the board
 * @returns WinnerInfo object with winner and winning line indices, or null if no winner
 */
export function calculateWinner(squares: SquareValue[]): WinnerInfo | null {
  // All possible winning lines
  const lines = [
    [0, 1, 2], // top row
    [3, 4, 5], // middle row
    [6, 7, 8], // bottom row
    [0, 3, 6], // left column
    [1, 4, 7], // middle column
    [2, 5, 8], // right column
    [0, 4, 8], // diagonal top-left to bottom-right
    [2, 4, 6], // diagonal top-right to bottom-left
  ];

  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {
        winner: squares[a],
        line: [a, b, c],
      };
    }
  }

  return null;
}

/**
 * Convert square index (0-8) to 1-based row and column
 * @param index - Square index (0-8)
 * @returns Object with row and col (1-based)
 */
export function getLocation(index: number): { row: number; col: number } {
  return {
    row: Math.floor(index / 3) + 1,
    col: (index % 3) + 1,
  };
}
