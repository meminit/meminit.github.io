'use client'

import Script from 'next/script';

export default function AnalyticScripts() {
    return (
        <>
            <Script
                strategy="afterInteractive"
                src="https://static.cloudflareinsights.com/beacon.min.js"
                data-cf-beacon='{"token": "5c2bff58f4d947fbbcf28b588c074de6"}'
            />
            <Script defer src="https://umami-fawn-alpha.vercel.app/script.js" data-website-id="f8c7d385-6727-4a68-88ed-fe9032feb4dd" strategy='afterInteractive'/>
        </>
    );
}