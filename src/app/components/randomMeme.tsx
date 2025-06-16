'use client';
import { useEffect, useState } from "react";

export default function MemeInfo() {

try {
    const [meme, setMeme] = useState<any>(null);

    useEffect(() => {
        fetch("https://meme-api.com/gimme/memes/1")
            .then(res => res.json())
            .then(data => setMeme(data.memes?.[0] ?? null));
    }, []);

    if (!meme) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex flex-col">
            <img src={meme.url} alt={meme.title} />
        </div>
    );
} catch (err) {
    return (
        <div className="flex flex-col">
            <p className="text-red-500 font-bold">An error occured trying to get the meme :(</p>    
        </div>
     )
}
}