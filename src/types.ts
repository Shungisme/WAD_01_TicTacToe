// Type definitions for Tic-Tac-Toe game

export type SquareValue = 'X' | 'O' | null;

export interface Location {
  row: number;
  col: number;
}

export interface HistoryEntry {
  squares: SquareValue[];
  location: Location | null; // null for initial state
}

export interface WinnerInfo {
  winner: SquareValue;
  line: number[] | null; // indices of winning squares
}
