'use client'
import Emoji from "./emoji";
import { JSX, useEffect, useState } from "react";

interface emojisList {
    [key: string]: Array<string>
}

interface searchQuery {
    query: string,
    data: Array<emojisList>
}

export default function Search({ query, data }: searchQuery) {
    const [emojiNodes, setEmojiNodes] = useState<JSX.Element[]>([]);

    useEffect(() => {
        const lowercaseValue = query.toLowerCase();
        const firstEmojiList = Object.keys(data[0])
            .filter((key) => key.includes(lowercaseValue))
            .flatMap((key) => data[0][key]);

        const secondEmojiList = Object.keys(data[1])
            .filter((key) => key.includes(lowercaseValue))
            .flatMap((key) => data[1][key]);

        const emojiSet = new Set<string>();
        const nodes: JSX.Element[] = [];

        for (const emoji of firstEmojiList) {
            if (!emojiSet.has(emoji)) {
                emojiSet.add(emoji);
                nodes.push(<Emoji emoji={emoji} key={emoji} />);
            }
        }

        for (const emoji of secondEmojiList) {
            if (!emojiSet.has(emoji)) {
                emojiSet.add(emoji);
                nodes.push(<Emoji emoji={emoji} key={emoji} />);
            }
        }

        setEmojiNodes(nodes);
    }, [query, data]);

    return <>{emojiNodes}</>;
}