import Container from "@/app/components/containers/container"
import Markdown from "@/lib/markdown"
import Tool from "./tool"
import Ad from "@/app/components/adComponents/banner"
import ogTags from "@/app/components/meta/og"

export default function page() {
    return (
        <>
            <>
                <title>Online Love Calculator | MeminIt!</title>
                {ogTags('Free Online Love Calculator', 'Check for matches with people online for free!', '/static/images/tools/thumbnails/ship.webp', true)}
            </>
            <Container className="">
                <h1 className="mb-10">Free Online Love Calculator Filter</h1>
                <Tool />
            </Container>
            <Ad className="max-w-[1000px] w-9/10"></Ad>
            <Container className="flex flex-col gap-10 rounded-2xl list-disc">
                {(async () => {
                    const md = await Markdown("love-calculator/description")
                    await md
                    return md.html;
                })()}
            </Container>
        </>
    )
}