import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DOOM on the Web",
  description: "Play DOOM in your browser!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}