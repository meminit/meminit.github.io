'use client'
import React from "react"

const AdBanner = () => {
    return (

        <div className="bg-zinc-900 w-full h-10 rounded-lg flex flex-col items-center justify-center">
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9758035810696915"
                crossOrigin="anonymous"></script>
            <ins className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client="ca-pub-9758035810696915"
                data-ad-slot="3103664696"
                data-ad-format="auto"
                data-full-width-responsive="true"></ins>
            <script>
                (adsbygoogle = window.adsbygoogle || []).push({ });
            </script>
        </div>
    )
}

export default AdBanner