import Container from "@/app/components/containers/container"
import Markdown from "@/lib/markdown"
import Tool from "./tool"
import Ad from "@/app/components/adComponents/banner"
import OgTags from "@/app/components/meta/og"

export default function page() {
    return (
        <>
            <>
                <title>Online Love Calculator | MeminIt!</title>
                <OgTags name="Fancy Username Generator" description="Type any name and put it in a custom font to add to your social media username!" thumbnail="/static/images/tools/thumbnails/fancy-username.webp" card={ true } />
            </>
            <Container className="">
                <h1 className="mb-10">Free Online Fancy Username Generator</h1>
                <Tool />
            </Container>
            <Ad className="max-w-[1000px] w-9/10"></Ad>
            <Container className="flex flex-col gap-10 rounded-2xl list-disc">
                {(async () => {
                    const md = await Markdown("fancy-username-generator/description")
                    await md
                    return md.html;
                })()}
            </Container>
        </>
    )
}