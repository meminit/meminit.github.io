import Container from "@/app/components/containers/container"
import Tool from "./tool"
import Markdown from "@/lib/markdown"
import OgTags from "@/app/components/meta/og"

export default function page() {
    return (
        <>
            <>
                <title>Guess the Movie By The Emoji Combo | MeminIt!</title>
           
                <OgTags
                    name="Guess the Movie By The Emoji Combo"
                    description="Guess the movie by looking at emojis!"
                    thumbnail="/static/images/tools/thumbnails/guess-the-movie-by-the-emoji.webp"
                    card={true}
                />   
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