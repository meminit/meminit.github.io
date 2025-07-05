import Container from "@/app/components/containers/container"
import Tool from "./tool"
import Markdown from "@/lib/markdown"
import ogTags from "@/app/components/meta/og"
export const metadata = ogTags("Image Deepfry-er"
    , "Deepfry your images with this online tool. Upload an image and apply the deepfry effect instantly.",
    "/static/images/tools/thumbnails/deepfry.webp",
    true,
);
export default function page() {
    return (
        <>
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