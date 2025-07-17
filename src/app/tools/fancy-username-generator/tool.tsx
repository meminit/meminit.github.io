'use client'

import { useState } from "react"

export default function tool() {

    const [plainUsername, setPlainUsername] = useState<string>("Peter")
    const [styledUsername, setStyledUsername] = useState<string>()

    return (<>
        <div className="flex flex-row not-md:flex-col gap-5">
            <div className="w-1/2 flex flex-col gap-2">
                <label className="font-bold">Name Font:</label>
                <select title="Name Font" className="outline-0 bg-zinc-950 p-2 w-full rounded-lg not-md:w-full">
                    
                </select>
                <input className="outline-0 bg-zinc-950 p-2 w-full rounded-lg not-md:w-full" type="text" placeholder="Your Username..." onChange={(e) => setPlainUsername(e.target.value)} />
            </div>
            <div className="w-full min-h-50 rounded-2xl" style={{backgroundColor: 'rgb(18, 18, 20)'}}>
                
            </div>
            
        </div>
    </>)
}