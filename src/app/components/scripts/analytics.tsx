'use client'

import Script from 'next/script';

export default function AnalyticScripts() {
    return (
        <Script
            strategy="afterInteractive"
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon='{"token": "5c2bff58f4d947fbbcf28b588c074de6"}'
        />
    );
}