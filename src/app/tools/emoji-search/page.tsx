import Tool from "./tool"
import Container from "@/app/components/containers/container"
import Markdown from "@/lib/markdown"
import ogTags from "@/app/components/meta/og"

export default function emojiSearch() {
    return (
        <>
            <>
                <title>Emoji Search | MeminIt!</title>
                {ogTags('Emoji Search', 'Search for emojis by name or description. Find the perfect emoji for your message!', '/static/images/tools/thumbnails/emoji-search.webp', true)}
            </>
        <Tool />
        <Container className="flex flex-col gap-10 rounded-2xl list-disc">
                {(async () => {
                    const md = await Markdown("emoji-search/description")
                    await md
                    return md.html;
                })()}
        </Container>
        </>
    )
}