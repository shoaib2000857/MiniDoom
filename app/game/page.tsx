'use client';

import { useEffect, useRef } from 'react';
import Head from 'next/head';

// --- Type definitions ---
type DosboxInstance = {
  run: (zipUrl: string, exePath: string) => void;
  exit?: () => void;
  requestFullScreen?: () => void;
};

type DosboxConstructor = new (options: {
  id: string;
  onload: (instance: DosboxInstance) => void;
  onrun?: (instance: DosboxInstance, app: string) => void;
}) => DosboxInstance;

declare global {
  interface Window {
    Dosbox?: DosboxConstructor;
    dosbox?: DosboxInstance;
  }
}

export default function DoomPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    if (document.getElementById('js-dos-api')) return;

    const script = document.createElement('script');
    script.src = 'https://js-dos.com/cdn/js-dos-api.js';
    script.id = 'js-dos-api';
    script.async = true;
    script.onload = () => {
      if (window.Dosbox) {
        const dosbox = new window.Dosbox({
          id: 'dosbox',
          onload: function (dosboxInstance: DosboxInstance) {
            dosboxInstance.run(
              "https://thedoggybrad.github.io/doom_on_js-dos/DOOM-@evilution.zip",
              "./DOOM/DOOM.EXE"
            );
            setTimeout(() => {
              const canvas = document.querySelector('.dosbox-container canvas') as HTMLCanvasElement;
              if (canvas) canvas.focus();
            }, 2000);
          },
          onrun: function (_: DosboxInstance, app: string) {
            console.log(`Running: ${app}`);
          },
        });
        window.dosbox = dosbox;
      } else {
        alert('Failed to load js-dos. Please try again.');
      }
    };
    script.onerror = () => {
      alert('Failed to load js-dos script.');
    };
    document.body.appendChild(script);
    scriptRef.current = script;

    return () => {
      if (scriptRef.current) {
        document.body.removeChild(scriptRef.current);
      }
      if (window.dosbox && typeof window.dosbox.exit === 'function') {
        window.dosbox.exit();
      }
    };
  }, []);

  return (
    <>
      <Head>
        <title>DOOM Classic</title>
        <style>{`
          .dosbox-outer {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            background: #1a1a1a;
          }
          .dosbox-container {
            width: 800px;
            height: 600px;
            aspect-ratio: 4 / 3;
            margin: 0 auto;
            border: 6px solid #ffcc00;
            background: #000;
            box-shadow: 0 0 32px #900a, 0 0 0 8px #222 inset;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
          }
          .dosbox-container canvas {
            width: 100% !important;
            height: 100% !important;
            object-fit: contain;
            display: block;
            margin: 0 auto;
            background: #000;
          }
          .dosbox-container > .dosbox-overlay {
            background: url(https://js-dos.com/cdn/DOOM.png);
          }
        `}</style>
      </Head>

      <div className="dosbox-outer py-8">
        <h1 className="doom-title">DOOM Classic</h1>
        <div
          ref={containerRef}
          id="dosbox"
          className="dosbox-container"
        ></div>
        <button
          aria-label="Enter fullscreen"
          onClick={() => window.dosbox?.requestFullScreen?.()}
          className="doom-btn"
        >
          Fullscreen
        </button>
        <p className="text-[#ffcc00] mt-4 text-center">
          Click inside the game window to enable controls.<br />
          Use arrow keys, Ctrl, Alt, and Space as in classic DOOM.
        </p>
      </div>
    </>
  );
}