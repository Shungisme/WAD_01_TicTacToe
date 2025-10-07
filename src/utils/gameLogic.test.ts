import { describe, it, expect } from 'vitest';
import { calculateWinner, getLocation } from '../utils/gameLogic';
import type { SquareValue } from '../types';

describe('calculateWinner', () => {
  it('should return null for empty board', () => {
    const squares: SquareValue[] = Array(9).fill(null);
    const result = calculateWinner(squares);
    expect(result).toBeNull();
  });

  it('should detect winner in top row', () => {
    const squares: SquareValue[] = ['X', 'X', 'X', null, 'O', null, null, 'O', null];
    const result = calculateWinner(squares);
    expect(result).not.toBeNull();
    expect(result?.winner).toBe('X');
    expect(result?.line).toEqual([0, 1, 2]);
  });

  it('should detect winner in middle row', () => {
    const squares: SquareValue[] = [null, 'X', null, 'O', 'O', 'O', null, 'X', null];
    const result = calculateWinner(squares);
    expect(result).not.toBeNull();
    expect(result?.winner).toBe('O');
    expect(result?.line).toEqual([3, 4, 5]);
  });

  it('should detect winner in bottom row', () => {
    const squares: SquareValue[] = ['O', 'X', null, 'O', 'X', null, 'X', 'X', 'X'];
    const result = calculateWinner(squares);
    expect(result).not.toBeNull();
    expect(result?.winner).toBe('X');
    expect(result?.line).toEqual([6, 7, 8]);
  });

  it('should detect winner in left column', () => {
    const squares: SquareValue[] = ['O', 'X', null, 'O', 'X', null, 'O', null, 'X'];
    const result = calculateWinner(squares);
    expect(result).not.toBeNull();
    expect(result?.winner).toBe('O');
    expect(result?.line).toEqual([0, 3, 6]);
  });

  it('should detect winner in middle column', () => {
    const squares: SquareValue[] = ['X', 'O', null, 'X', 'O', null, null, 'O', 'X'];
    const result = calculateWinner(squares);
    expect(result).not.toBeNull();
    expect(result?.winner).toBe('O');
    expect(result?.line).toEqual([1, 4, 7]);
  });

  it('should detect winner in right column', () => {
    const squares: SquareValue[] = ['X', 'O', 'X', null, 'O', 'X', null, null, 'X'];
    const result = calculateWinner(squares);
    expect(result).not.toBeNull();
    expect(result?.winner).toBe('X');
    expect(result?.line).toEqual([2, 5, 8]);
  });

  it('should detect winner in diagonal (top-left to bottom-right)', () => {
    const squares: SquareValue[] = ['O', 'X', null, null, 'O', 'X', null, 'X', 'O'];
    const result = calculateWinner(squares);
    expect(result).not.toBeNull();
    expect(result?.winner).toBe('O');
    expect(result?.line).toEqual([0, 4, 8]);
  });

  it('should detect winner in diagonal (top-right to bottom-left)', () => {
    const squares: SquareValue[] = ['X', 'O', 'X', null, 'X', 'O', 'X', 'O', null];
    const result = calculateWinner(squares);
    expect(result).not.toBeNull();
    expect(result?.winner).toBe('X');
    expect(result?.line).toEqual([2, 4, 6]);
  });

  it('should return null for draw game', () => {
    const squares: SquareValue[] = ['X', 'O', 'X', 'X', 'O', 'O', 'O', 'X', 'X'];
    const result = calculateWinner(squares);
    expect(result).toBeNull();
  });

  it('should return null for incomplete game', () => {
    const squares: SquareValue[] = ['X', 'O', 'X', null, 'O', null, null, null, null];
    const result = calculateWinner(squares);
    expect(result).toBeNull();
  });
});

describe('getLocation', () => {
  it('should return correct location for index 0', () => {
    expect(getLocation(0)).toEqual({ row: 1, col: 1 });
  });

  it('should return correct location for index 4 (center)', () => {
    expect(getLocation(4)).toEqual({ row: 2, col: 2 });
  });

  it('should return correct location for index 8', () => {
    expect(getLocation(8)).toEqual({ row: 3, col: 3 });
  });

  it('should return correct location for index 2', () => {
    expect(getLocation(2)).toEqual({ row: 1, col: 3 });
  });

  it('should return correct location for index 6', () => {
    expect(getLocation(6)).toEqual({ row: 3, col: 1 });
  });

  it('should return correct locations for all indices', () => {
    const expected = [
      { row: 1, col: 1 }, // 0
      { row: 1, col: 2 }, // 1
      { row: 1, col: 3 }, // 2
      { row: 2, col: 1 }, // 3
      { row: 2, col: 2 }, // 4
      { row: 2, col: 3 }, // 5
      { row: 3, col: 1 }, // 6
      { row: 3, col: 2 }, // 7
      { row: 3, col: 3 }, // 8
    ];

    for (let i = 0; i < 9; i++) {
      expect(getLocation(i)).toEqual(expected[i]);
    }
  });
});
