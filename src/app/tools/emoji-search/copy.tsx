'use client';
import {
    useEffect, useState
 } from 'react';

interface EmojiProps {
    emoji: string;
}

export default function Copy({ emoji }: EmojiProps) {
    const [prompt, setPrompt] = useState<string>("Loading...");
    const [copied, setCopied] = useState<boolean>(false);

    function togglePrompt(prompt: string) {
        setPrompt(prompt);
        setTimeout(() => {
            setCopied(false);
            setPrompt("Copy");
        }, 2000);
    }

    return (
        <button
            className="bg-zinc-950 w-full text-center text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200 rounded-lg px-4 py-2 text-sm flex items-center gap-2 transition-all hover:cursor-pointer"
            onClick={() => {
                try {
                    navigator.clipboard.writeText(emoji);
                    setCopied(true);
                    togglePrompt("Copied!");
                } catch (error) {
                    togglePrompt("Failed to copy");
                    console.error("Failed to copy emoji:", error);
                }
            }}
        >
            <i className='fa-solid fa-copy'></i>
            {copied ? prompt : "Copy"}
        </button>
    )

}