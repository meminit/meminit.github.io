'use client'
import { JSX, useEffect, useState } from "react"
import Skyscraper from "@/app/components/adComponents/skyscraper"
import Search from "./search"

interface emojisList {
    [key: string]: Array<string>
}

export default function Tool() {
    const [query, setQuery] = useState<string>("")
    const [emojiNodes, setEmojiNodes] = useState<JSX.Element>()
    const [defaultEmojis, setDefaultEmojis] = useState<emojisList | null>(null)
    const [emojis, setEmojis] = useState<emojisList | null>(null)

    useEffect(() => {
        // Load emojis on mount
        const loadEmojis = async () => {
            const [defaultResp, emojisResp] = await Promise.all([
                fetch('/static/json/emoji-search/defaultemojis.json'),
                fetch('/static/json/emoji-search/emojis.json'),
            ])

            const defaultJson = await defaultResp.json()
            const emojisJson = await emojisResp.json()

            setDefaultEmojis(defaultJson)
            setEmojis(emojisJson)
        }

        loadEmojis()
    }, [])


    return (
        <div className="w-full flex flex-col items-center px-2 box-border grow overflow-hidden">
            <div className="bg-zinc-900 p-4 box-border w-full rounded-2xl flex flex-row items-center gap-2 text-lg text-zinc-400">
                <i className="fa-solid fa-search"></i>
                <input
                    className="grow outline-none"
                    placeholder="Search..."
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>

            
            <div className="flex flex-row grow not-md:flex-col w-full max-h-full mt-4">
                <Skyscraper className="not-md:hidden mb-4" />
                <div className="w-full grow grid grid-cols-7 overflow-y-auto not-md:grid-cols-2 gap-4 px-6 max-h-[calc(100vh-15rem)]" style={{scrollbarColor: "#1b1718 transparent"}}>
                    <Search query={query} data={[defaultEmojis || {}, emojis || {}]} />
                </div>
                <Skyscraper className="not-md:hidden mb-4" />
                </div>
        </div>
    )
}
