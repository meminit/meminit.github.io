import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import './main.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {children}
    </html>
  );
}
