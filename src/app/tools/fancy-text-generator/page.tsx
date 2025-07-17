import DefaultBody from "@/app/components/body"
import Header from "@/app/components/defaults/header"
import Footer from "@/app/components/defaults/footer"
import OgTags from "@/app/components/meta/og"
import Markdown from "../../../lib/markdown"
import DefaultContainer from "@/app/components/containers/container"
import FancyText from "./text"
import Ad from "@/app/components/adComponents/banner"

import Script from "next/script"

export default function captionIt() {
    return (
        <>
            <>
                <title>Fancy Text | MeminIt!</title>
                <OgTags name="Fancy Text Generator" description="Make your messages and bio have some fancy bling ✨" thumbnail="/static/images/tools/thumbnails/fancytext.webp" card={true} />
            </>
            <DefaultContainer className="flex flex-col gap-10 rounded-2xl">
                <FancyText></FancyText>
            </DefaultContainer>
            <Ad className="max-w-[1000px] w-9/10" />
            <DefaultContainer className="flex flex-col gap-10 rounded-2xl list-disc">
                {(async () => {
                    const md = await Markdown("fancy-text-generator/description")
                    await md
                    return md.html;
                })()}
            </DefaultContainer>
        </>
    )
}