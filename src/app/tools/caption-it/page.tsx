import DefaultBody from "@/app/components/body"
import Header from "@/app/components/defaults/header"
import Footer from "@/app/components/defaults/footer"
import ogTags from "@/app/components/meta/og"
import Markdown from "../../../lib/markdown"
import DefaultContainer from "@/app/components/containers/container"
import Tool from "./caption"

import Capture from "@/app/tools/js/capture"



export default function captionIt() {
    return (
        <>
            <>
                <title>Caption It | MeminIt!</title>
                {ogTags('Caption It', 'Caption any image you can imagine!', '/static/images/tools/thumbnails/meminit247.webp', true)}
            </>
            <DefaultContainer className="">
                    <h1 className="mb-10">Free Online Image Caption-er</h1>
                    <Tool />
                </DefaultContainer>
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