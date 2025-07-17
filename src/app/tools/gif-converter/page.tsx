import Container from "@/app/components/containers/container"
import Tool from "./tool"
import Markdown from "@/lib/markdown"
import OgTags from "@/app/components/meta/og"

export default function page() {
    return (
        <>
            <>
                <title>Image to GIF Converter | MeminIt!</title>

                <OgTags
                    name="Image to GIF Converter"
                    description="Convert images to GIFs easily with our online tool. Upload your image and get a GIF instantly!"
                    thumbnail="/static/images/tools/thumbnails/gif-converter.webp"
                    card={true} />
            </>
            <Container className="">
                <h1 className="mb-5">Image to GIF Convert-er</h1>
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