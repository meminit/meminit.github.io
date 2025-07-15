'use client'
import { useEffect, useState } from "react"

export default function Alert() {

    const [adBlockerPresent, setAdblockerPresent] = useState<boolean>(false)

    useEffect(() => {
        try {
            fetch('https://static.cloudflareinsights.com/beacon.min.js').then((res) => {
                console.log(res.ok)
                if (!res.ok) {
                    setAdblockerPresent(true)
                }
            })
        } catch (err) {
            console.log(`err is ${err}`)
            setAdblockerPresent(true)
        }
    }, [])

    return (
        <div className={`w-full flex flex-row justify-center p-5 ${adBlockerPresent ? 'block': 'hidden'}`} >
            <div className="w-full rounded-2xl h-20 bg-red-alert border-red-900 border-1 box-border p-2 flex flex-row gap-5">
                <img src="/static/images/other/sadDude.png" alt="Sad Dude Emoji" className="h-full aspect-square" />
                <div className="flex flex-col">
                    <p className="font-bold">Could you turn off your adblocker :(</p>
                    <p>Ads help fund MeminIt, without it you might not be able to create good memes!</p>
                </div>
            </div>
        </div>
    )
}