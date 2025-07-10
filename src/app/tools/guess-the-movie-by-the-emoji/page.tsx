import Container from "@/app/components/containers/container"
import Tool from "./tool"
import Markdown from "@/lib/markdown"
import ogTags from "@/app/components/meta/og"

export default function page() {
    return (
        <>
            <>
                <title>Guess the Movie By The Emoji Combo | MeminIt!</title>
                {ogTags('Guess the Movie By The Emoji Combo', 'Guess the movie by looking at emojis!', '/static/images/tools/thumbnails/guess-the-movie-by-the-emoji.webp', true)}
            </>
            <Container className="">
                <h1 className="mb-5">Guess the Movie By The Emoji Combo</h1>
                <Tool />
            </Container>
            <Container className="">
                {(async () => {
                    const md = await Markdown("guess-the-movie-by-the-emoji/description")
                    await md
                    return md.html;
                })()}
            </Container>
        </>
    )
}