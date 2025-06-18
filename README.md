# DOOM on the Web

A tribute to the classic DOOM, playable right in your browser!  
Built with Next.js and TypeScript, this site features a DOOM-themed interface and runs the original DOOM shareware using [js-dos](https://js-dos.com/).

## Features

- **Play the real DOOM shareware** in your browser (via DOSBox emulation)
- DOOM-inspired UI and styling throughout the site
- Large, centered game area with fullscreen support
- Keyboard controls (just like the original DOOM)
- No downloads required

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

- `app/page.tsx` — Home page (DOOM-themed landing page)
- `app/game/page.tsx` — Main DOOM game area (js-dos embed)
- `styles/globals.css` — Global DOOM-inspired styles

## Controls

- **Click inside the game window to enable controls**
- **Arrow keys** — Move/turn
- **Ctrl, Alt, Space** — Fire, open doors, etc. (as in classic DOOM)

## Credits

- [js-dos](https://js-dos.com/) for DOSBox emulation in the browser
- [id Software](https://www.idsoftware.com/) for the original DOOM

## License

MIT

> **Not affiliated with id Software. DOOM is © id Software. This project is for educational and