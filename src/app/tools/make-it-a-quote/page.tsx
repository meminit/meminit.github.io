import Container from "@/app/components/containers/container"
import Markdown from "@/lib/markdown"
import Tool from "./tool"
import Ad from "@/app/components/adComponents/banner"
import OgTags from "@/app/components/meta/og"

export default function page() {
    return (
        <>
            <>
                <title>Quote It | MeminIt!</title>
                
                <OgTags
                    name="Online Quote It Tool"
                    description="Quote messages and real life quotes digitally with this amazing tool!"
                    thumbnail="/static/images/tools/thumbnails/quoteit.webp"
                    card={true}
                />
            </>
            <Container className="">
                <h1 className="mb-10">Online Quote It Tool</h1>
                <Tool />
            </Container>
            <Ad className="max-w-[1000px] w-9/10"></Ad>
            <Container className="flex flex-col gap-10 rounded-2xl list-disc">
                {(async () => {
                    const md = await Markdown("make-it-a-quote/description")
                    await md
                    return md.html;
                })()}
            </Container>
        </>
    )
}