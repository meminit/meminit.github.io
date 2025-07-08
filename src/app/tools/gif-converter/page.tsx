import Container from "@/app/components/containers/container"
import Tool from "./tool"
import Markdown from "@/lib/markdown"
import ogTags from "@/app/components/meta/og"

export default function page() {
    return (
        <>
            <>
                <title>Image to GIF Converter | MeminIt!</title>
                {ogTags('Image to GIF Converter', 'Convert images to GIFs easily with our online tool. Upload your image and get a GIF instantly!', '/static/images/tools/thumbnails/gif-converter.webp', true)}
            </>
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