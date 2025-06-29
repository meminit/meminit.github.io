"use client";

import { Html } from "next/document";
import Capture from "./html2canvas";

export default function download(element) {
  Capture(element).then((canvas) => {
    const link = document.createElement("a");
    link.download = "meminit.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
}
