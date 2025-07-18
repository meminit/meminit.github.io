'use client'

import { useState, useEffect } from "react"
import textFilter from "./text"

interface fontType {
    syntax: string,
    filters: Record<string, string>
}

export default function tool() {

    const [plainUsername, setPlainUsername] = useState<string>("Peter")
    const [styledUsername, setStyledUsername] = useState<string>('𝕻𝖊𝖙𝖊𝖗')
    const [fontCode, setFontCode] = useState<string>('gothic')
    const [filters, setFilters] = useState<Record<string, fontType>>({})

    useEffect(() => {
        fetch('/static/json/text-filters/main.json')
            .then(res => res.json())
            .then((json: Record<string, fontType>) => { console.log(json); setFilters(json) })
            .catch(console.error)
        console.log('Fetched Data')
    }, [])

    useEffect(() => {

        if (!filters || Object.keys(filters).length === 0) return

        const fancyText = textFilter(plainUsername, fontCode, filters)

        setStyledUsername(fancyText)
    }, [fontCode, plainUsername])

    return (<>
        <div className="flex flex-row not-md:flex-col gap-5">
            <div className="w-1/2 not-md:w-full flex flex-col gap-2">
                <label className="font-bold">Name Font:</label>
                <select title="Name Font" className="outline-0 bg-zinc-950 p-2 w-full rounded-lg not-md:w-full" onChange={(e) => setFontCode(e.target.value)}>
                    <option value={"gothic"}>𝕲𝖔𝖙𝖍𝖎𝖈</option>
                    <option value={"ancient"}>𝕊𝕥𝕒𝕞𝕡</option>
                    <option value={"fancyitalic"}>𝓡𝓸𝔂𝓪𝓵</option>
                    <option value={"glitch"}>H̸͈̘̭̻̗̬̤̍͆̄̓̆̈͘͝ȁ̶̢̗͍̮͙͙̿̔c̷̥̗̻̖̖̣̰͔͈̘̔͐͐͒̊͠k̷̡͇̥͚̥̓̽̽̿̅̄̕͠͝ȩ̵̫̙̺͖̪̳̣̘̉̉̃r̷̳̠̮͇͓̙̘̭̍͆̎͆͠</option>
                    <option value={"bubblecaps"}>🅱🆄🅱🅱🅻🅴</option>
                    <option value={"italic"}>𝘐𝘵𝘢𝘭𝘪𝘤</option>
                </select>
                <input className="outline-0 bg-zinc-950 p-2 w-full rounded-lg not-md:w-full" type="text" placeholder="Your Username..." onChange={(e) => setPlainUsername(e.target.value)} />
                <div></div>
            </div>
            <div className="w-full min-h-50 not-md:min-h-0 not-md:p-5 p-2 box-border rounded-2xl flex flex-col items-center justify-center" style={{ backgroundColor: 'rgb(18, 18, 20)' }}>
                <div className="w-full flex flex-row gap-2">
                    <img src="/static/images/other/confusedbean.jpg" alt="Confused Old Character Meme" className="aspect-square w-15 bg-black rounded-4xl" />
                    <div className="h-full flex flex-col justify-center">
                        <p className="text-lg text-pink-400 font-bold hover:underline">{styledUsername}</p>
                        <p>I like food</p>
                    </div>
                </div>
            </div>

        </div>
    </>)
}