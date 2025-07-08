import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import '@/app/main.css'
import Header from "@/app/components/defaults/header"
import Footer from "@/app/components/defaults/footer"
import Body from "@/app/components/body"

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Body className="flex flex-col items-center gap-10 justify-between min-h-[100vh]">
                <Header />
                {children}
                <Footer />
            </Body>
        </>
    );
}
