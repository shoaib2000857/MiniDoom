import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#1a1a1a] py-8">
      <h1 className="doom-title">DOOM on the Web</h1>
      <div className="doom-panel max-w-xl text-lg text-[#ffcc00] text-center">
        <p>
          Welcome to the ultimate browser-based DOOM experience!<br />
          Play the classic DOOM right in your browser, no downloads needed.
        </p>
        <Link href="/game">
          <button className="doom-btn">Play DOOM Now</button>
        </Link>
      </div>
      <footer className="mt-8 text-[#ffcc00] text-sm opacity-80">
        &copy; {new Date().getFullYear()} DOOM Web Tribute &mdash; Not affiliated with id Software
      </footer>
    </div>
  );
}