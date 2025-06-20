'use client'
import { use, useEffect } from "react"

const AdBanner = () => {

    useEffect(() => {

        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
    }, [])

    return (

        <div className="bg-zinc-900 w-full h-10 rounded-lg flex flex-col items-center justify-center">


            <ins className="adsbygoogle"
                style={{ display: 'block', height: '100%', width: '100%' }}
                data-ad-client="ca-pub-9758035810696915"
                data-ad-slot="3103664696"
                data-ad-format="auto"
                data-full-width-responsive="true"></ins>
        </div>
    )
}

export default AdBanner