# Tic-Tac-Toe Game

A complete implementation of the classic Tic-Tac-Toe game built with React, TypeScript, and Vite. This project implements all features from the React tutorial with additional enhancements.

## Features

- **Current Move Indicator**: Shows "You are at move #n" as text (not a button) for the current move
- **Dynamic Board Generation**: Board rendered using nested loops (no hardcoded squares)
- **Move History Sorting**: Toggle button to sort moves in ascending/descending order
- **Winner Highlighting**: Three winning squares highlighted with golden background
- **Draw Detection**: Clear "Result: Draw" message when game ends in a tie
- **Move Locations**: Each move shows its position as (row, col) with 1-based indexing
- **TypeScript**: Full type safety throughout the application
- **Comprehensive Tests**: Unit tests for game logic with 100% coverage

## Getting Started

### Prerequisites

- Node.js (v20.x or higher recommended)
- npm (v10.x or higher)

### Installation

1. Clone or navigate to the project directory:

```bash
cd tic-tac-toe
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm test` - Run tests in watch mode
- `npm run test -- --run` - Run tests once
- `npm run test:ui` - Open Vitest UI
- `npm run lint` - Run ESLint

## How to Play

1. Click on any empty square to make a move
2. Players alternate between X and O
3. First player to get 3 in a row (horizontal, vertical, or diagonal) wins
4. If all 9 squares are filled without a winner, the game is a draw
5. Use the move history to jump back to any previous state
6. Toggle the sort order to view moves in ascending or descending order

## Project Structure

    languageOptions: {

```parserOptions:

tic-tac-toe/        project: ['./tsconfig.node.json', './tsconfig.app.json'],

├── src/        tsconfigRootDir: import.meta.dirname,

│   ├── components/      },

│   │   ├── Board.tsx          # Board component with nested loops      // other options...

│   │   └── Square.tsx         # Square component with winner highlighting
│   ├── utils/
│   │   ├── gameLogic.ts       # Game logic (calculateWinner, getLocation)
│   │   └── gameLogic.test.ts  # Comprehensive unit tests
│   ├── test/
│   │   └── setup.ts           # Test configuration
│   ├── types.ts               # TypeScript type definitions
│   ├── App.tsx                # Main Game component
│   ├── App.css                # Game styles
│   ├── index.css              # Global styles
│   └── main.tsx               # Application entry point
├── package.json
├── vite.config.ts
├── tsconfig.json
├── README.md                  # This file
└── EXPLANATION.md             # Detailed implementation explanation
```

## Technologies Used

- **React 19.1.1** - UI library
- **TypeScript 5.x** - Type-safe JavaScript
- **Vite 7.x** - Fast build tool and dev server
- **Vitest** - Unit testing framework
- **Testing Library** - React component testing utilities

## Key Implementation Details

### 1. Current Move Display

- Current move shows as text: "You are at move #n"
- Other moves show as buttons: "Go to move #n"
- Implemented in `App.tsx` with conditional rendering

### 2. Nested Loop Board

- Board uses two nested loops (rows × cols)
- Outer loop: 3 rows
- Inner loop: 3 columns
- Square index calculated as: `i * 3 + j`
- No hardcoded squares - fully dynamic

### 3. Ascending/Descending Toggle

- Toggle button switches between "Ascending" and "Descending"
- Move list reverses order when toggled
- Jump functionality works correctly in both orders
- Current move indicator remains accurate

### 4. Winner Highlighting & Draw

- Winning squares highlighted with `.winner` CSS class
- Golden background (`#ffd700`) with animation
- Draw detected when all 9 squares filled with no winner
- Clear "Result: Draw" message displayed

### 5. Move Location Display

- Each move shows position as `(row, col)`
- Uses 1-based indexing (1-3, not 0-2)
- Format: "Go to move #3 (2, 3)"
- Calculated using `getLocation()` utility

### Testing

The project includes comprehensive unit tests:

- Winner detection for all winning combinations
- Row winners (top, middle, bottom)
- Column winners (left, middle, right)
- Diagonal winners (both directions)
- Draw game detection
- Empty board handling
- Location conversion (index to row/col)

Run tests with:

```bash
npm test
```

All 17 tests pass successfully!

## Building for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` directory.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for educational purposes.

## Author

Vong Sau Hung - 22120118 HCMUS
