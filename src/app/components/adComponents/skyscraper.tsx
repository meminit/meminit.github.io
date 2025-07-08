'use client'
import { use, useEffect } from "react"

type props = {className?: string}

const Skyscraper = ({className=""}: props) => {

    useEffect(() => {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
    }, [])

    return (
        <div className={"bg-zinc-900 h-[700px] grow rounded-lg flex flex-col items-center justify-center sticky top-0" + className}>
            <ins className="adsbygoogle"
                style={{ display: 'block', height: '700px', width: '200px' }}
                data-ad-client="ca-pub-9758035810696915"
                data-ad-slot="3084975057"
                data-ad-format="auto"
                data-full-width-responsive="true"></ins>
        </div>
    )
}

export default Skyscraper