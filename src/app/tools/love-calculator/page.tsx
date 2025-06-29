'use client';

import Container from "@/app/components/containers/container"
import Markdown from "@/lib/markdown"

export default function page() {
    return (
        <>
            <Container className="">
                <div></div>
            </Container>
            <Container className="flex flex-col gap-10 rounded-2xl list-disc">
                {(async () => {
                    const md = await Markdown("fancy-text-generator/description")
                    await md
                    return md.html;
                })()}
            </Container>
        </>
    )
}