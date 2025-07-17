import Container from "@/app/components/containers/container"
import Tool from "./tool"
import Markdown from "@/lib/markdown"
import OgTags from "@/app/components/meta/og"

export default function page() {
    return (
        <>
            <>
                <title>Image Deepfry-er | MeminIt!</title>
            
                <OgTags
                    name="Image Deepfry-er"
                    description="Deepfry your images with this online tool. Upload an image and apply the deepfry effect instantly."
                    thumbnail="/static/images/tools/thumbnails/deepfry.webp"
                    card={true}
                />    
            </>
            <Container className="">
                <h1 className="mb-5">Image Deepfry-er</h1>
                <Tool />
            </Container>
            <Container className="">
                {(async () => {
                    const md = await Markdown("deepfry-it/description")
                    await md
                    return md.html;
                })()}
            </Container>
        </>
    )
}