"use client";
import React, { useEffect, useRef } from "react";
import { Dos } from "js-dos";

const DoomReal: React.FC = () => {
  const dosRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let dos: any;
    if (dosRef.current) {
      import("js-dos").then(({ Dos }) => {
        dos = Dos(dosRef.current!, {
          wdosboxUrl: "https://js-dos.com/6.22/current/wdosbox.js",
        });
        dos.ready((fs: any, main: any) => {
          // Mount the doom files from public/doom
          fs.extract("/doom/doom.exe", "/doom.exe");
          fs.extract("/doom/doom1.wad", "/doom1.wad");
          main(["doom.exe"]);
        });
      });
    }
    return () => {
      if (dos) dos.exit();
    };
  }, []);

  return <div ref={dosRef} style={{ width: 640, height: 480 }} />;
};

export default DoomReal;