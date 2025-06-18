# Doom Clone Web App

A simple Doom-style first-person shooter built with Next.js and TypeScript.  
Uses HTML5 Canvas and a basic raycasting engine for rendering.

## Features

- Basic 3D raycasting engine (Wolfenstein/Doom style)
- Keyboard controls (WASD to move, arrows to turn)
- Responsive web app

## Getting Started

1. **Install dependencies:**
    ```bash
    npm install
    ```

2. **Run the development server:**
    ```bash
    npm run dev
    ```

3. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

## Project Structure

- `src/components/DoomGame.tsx` — Main game component (Canvas + logic)
- `src/utils/gameEngine.ts` — Raycasting and game logic
- `pages/index.tsx` — Home page, renders the game
- `styles/globals.css` — Basic styles

## Controls

- **W/A/S/D** — Move forward/left/back/right
- **Left/Right Arrow** — Turn left/right

## License

MIT