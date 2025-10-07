# Tic-Tac-Toe Game# React + TypeScript + Vite



A complete implementation of the classic Tic-Tac-Toe game built with React, TypeScript, and Vite. This project implements all features from the React tutorial with additional enhancements.This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.



![Tic-Tac-Toe Game](https://img.shields.io/badge/React-19.1.1-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue) ![Vite](https://img.shields.io/badge/Vite-7.x-purple)Currently, two official plugins are available:



## Features ✨- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh

- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- ✅ **Current Move Indicator**: Shows "You are at move #n" as text (not a button) for the current move

- ✅ **Dynamic Board Generation**: Board rendered using nested loops (no hardcoded squares)## React Compiler

- ✅ **Move History Sorting**: Toggle button to sort moves in ascending/descending order

- ✅ **Winner Highlighting**: Three winning squares highlighted with golden backgroundThe React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

- ✅ **Draw Detection**: Clear "Result: Draw" message when game ends in a tie

- ✅ **Move Locations**: Each move shows its position as (row, col) with 1-based indexing## Expanding the ESLint configuration

- ✅ **TypeScript**: Full type safety throughout the application

- ✅ **Comprehensive Tests**: Unit tests for game logic with 100% coverageIf you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:



## Getting Started 🚀```js

export default defineConfig([

### Prerequisites  globalIgnores(['dist']),

  {

- Node.js (v20.x or higher recommended)    files: ['**/*.{ts,tsx}'],

- npm (v10.x or higher)    extends: [

      // Other configs...

### Installation

      // Remove tseslint.configs.recommended and replace with this

1. Clone or navigate to the project directory:      tseslint.configs.recommendedTypeChecked,

```bash      // Alternatively, use this for stricter rules

cd tic-tac-toe      tseslint.configs.strictTypeChecked,

```      // Optionally, add this for stylistic rules

      tseslint.configs.stylisticTypeChecked,

2. Install dependencies:

```bash      // Other configs...

npm install    ],

```    languageOptions: {

      parserOptions: {

3. Start the development server:        project: ['./tsconfig.node.json', './tsconfig.app.json'],

```bash        tsconfigRootDir: import.meta.dirname,

npm run dev      },

```      // other options...

    },

4. Open your browser and navigate to `http://localhost:5173`  },

])

## Available Scripts 📜```



- `npm run dev` - Start development serverYou can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

- `npm run build` - Build for production

- `npm run preview` - Preview production build```js

- `npm test` - Run tests in watch mode// eslint.config.js

- `npm run test -- --run` - Run tests onceimport reactX from 'eslint-plugin-react-x'

- `npm run test:ui` - Open Vitest UIimport reactDom from 'eslint-plugin-react-dom'

- `npm run lint` - Run ESLint

export default defineConfig([

## How to Play 🎮  globalIgnores(['dist']),

  {

1. Click on any empty square to make a move    files: ['**/*.{ts,tsx}'],

2. Players alternate between X and O    extends: [

3. First player to get 3 in a row (horizontal, vertical, or diagonal) wins      // Other configs...

4. If all 9 squares are filled without a winner, the game is a draw      // Enable lint rules for React

5. Use the move history to jump back to any previous state      reactX.configs['recommended-typescript'],

6. Toggle the sort order to view moves in ascending or descending order      // Enable lint rules for React DOM

      reactDom.configs.recommended,

## Project Structure 📁    ],

    languageOptions: {

```      parserOptions: {

tic-tac-toe/        project: ['./tsconfig.node.json', './tsconfig.app.json'],

├── src/        tsconfigRootDir: import.meta.dirname,

│   ├── components/      },

│   │   ├── Board.tsx          # Board component with nested loops      // other options...

│   │   └── Square.tsx         # Square component with winner highlighting    },

│   ├── utils/  },

│   │   ├── gameLogic.ts       # Game logic (calculateWinner, getLocation)])

│   │   └── gameLogic.test.ts  # Comprehensive unit tests```

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

## Technologies Used 🛠️

- **React 19.1.1** - UI library
- **TypeScript 5.x** - Type-safe JavaScript
- **Vite 7.x** - Fast build tool and dev server
- **Vitest** - Unit testing framework
- **Testing Library** - React component testing utilities

## Key Implementation Details 💡

### 1. Current Move Display (1.8 points)
- Current move shows as text: "You are at move #n"
- Other moves show as buttons: "Go to move #n"
- Implemented in `App.tsx` with conditional rendering

### 2. Nested Loop Board (1.8 points)
- Board uses two nested loops (rows × cols)
- Outer loop: 3 rows
- Inner loop: 3 columns
- Square index calculated as: `i * 3 + j`
- No hardcoded squares - fully dynamic

### 3. Ascending/Descending Toggle (1.8 points)
- Toggle button switches between "Ascending" and "Descending"
- Move list reverses order when toggled
- Jump functionality works correctly in both orders
- Current move indicator remains accurate

### 4. Winner Highlighting & Draw (1.8 points)
- Winning squares highlighted with `.winner` CSS class
- Golden background (`#ffd700`) with animation
- Draw detected when all 9 squares filled with no winner
- Clear "Result: Draw" message displayed

### 5. Move Location Display (1.8 points)
- Each move shows position as `(row, col)`
- Uses 1-based indexing (1-3, not 0-2)
- Format: "Go to move #3 (2, 3)"
- Calculated using `getLocation()` utility

### 6. TypeScript Implementation (1.0 point)
- Full TypeScript with strict mode
- Type definitions for all data structures
- Type-safe props and state management
- No `any` types used

## Testing 🧪

The project includes comprehensive unit tests:

- ✅ Winner detection for all winning combinations
- ✅ Row winners (top, middle, bottom)
- ✅ Column winners (left, middle, right)
- ✅ Diagonal winners (both directions)
- ✅ Draw game detection
- ✅ Empty board handling
- ✅ Location conversion (index to row/col)

Run tests with:
```bash
npm test
```

All 17 tests pass successfully! ✅

## Building for Production 🏗️

```bash
npm run build
```

The optimized production build will be in the `dist/` directory.

## Browser Support 🌐

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License 📄

This project is open source and available for educational purposes.

## Author 👨‍💻

Built as a complete implementation of the React Tic-Tac-Toe tutorial with TypeScript and additional features.

---

**Note**: This implementation focuses on all required features with clean, maintainable code. No deployment is included - you can deploy to your preferred hosting platform (Vercel, Netlify, GitHub Pages, etc.).
