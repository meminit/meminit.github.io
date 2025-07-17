import DefaultBody from "@/app/components/body"
import Header from "@/app/components/defaults/header"
import Footer from "@/app/components/defaults/footer"
import OgTags from "@/app/components/meta/og"
import Markdown from "../../../lib/markdown"
import DefaultContainer from "@/app/components/containers/container"
import Tool from "./caption"
import Ad from "@/app/components/adComponents/banner"


export default function captionIt() {
    return (
        <>
            <>
                <title>Would You Rather Poster Maker | MeminIt!</title> 
                <OgTags
                    name="Would You Rather Poster Maker"
                    description="Make a Would You Rather poster online for free!"
                    thumbnail="/static/images/tools/thumbnails/wouldyourather.webp"
                    card={ true }
                />
            </>
            <DefaultContainer className="">
                    <h1 className="mb-10">Would You Rather Poster Maker</h1>
                    <Tool />
            </DefaultContainer>
            <Ad className="max-w-[1000px] w-9/10"></Ad>
                <DefaultContainer className="flex flex-col gap-10 rounded-2xl list-disc">
                    {(async () => {
                        const md = await Markdown("caption-it/description")
                        await md
                        return md.html;
                    })()}
                </DefaultContainer>
        </>
    )
}