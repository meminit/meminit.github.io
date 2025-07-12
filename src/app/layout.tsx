import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import './main.css'
import AnalyticsScripts from './components/scripts/analytics'
import AdScripts from './components/scripts/ads'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-9758035810696915"></meta>
        <AnalyticsScripts />
        <AdScripts />
        </head>
      {children}
    </html>
  );
}
