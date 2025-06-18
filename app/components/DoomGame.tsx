"use client";
import React, { useRef, useEffect } from "react";
import { runGame } from "../utils/gameEngine";

const DoomGame: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      runGame(canvasRef.current);
    }
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <canvas
        ref={canvasRef}
        width={480}
        height={320}
        style={{
          border: "2px solid #222",
          background: "#000",
          marginTop: "2rem",
        }}
        tabIndex={0}
      />
      <div style={{ color: "#fff", marginTop: "1rem" }}>
        <strong>Controls:</strong> W/A/S/D to move, Left/Right arrows to turn
      </div>
    </div>
  );
};

export default DoomGame;