"use client";

import Capture from "./html2canvas";

export default function download(element: HTMLElement) {
  Capture(element).then((canvas: HTMLCanvasElement) => {
    const link = document.createElement("a");
    link.download = "meminit.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
}