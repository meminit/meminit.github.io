import Container from "@/app/components/containers/container"
import Tool from "./tool"
import Markdown from "@/lib/markdown"

export default function page() {
    return (
        <>
            <Container className="">
                <h1 className="mb-5">Image to GIF Converter</h1>
                <Tool />
            </Container>
            <Container className="">
                {(async () => {
                    const md = await Markdown("gif-converter/description")
                    await md
                    return md.html;
                })()}
            </Container>
        </>
    )
}