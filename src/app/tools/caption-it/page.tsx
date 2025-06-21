import DefaultBody from "@/app/components/body"
import Header from "@/app/components/defaults/header"
import Footer from "@/app/components/defaults/footer"
import ogTags from "@/app/components/meta/og"
import DescriptionMarkdown from "@/app/components/md/md2html"
import DefaultContainer from "@/app/components/containers/container"

export default function captionIt() {
    return (
        <>
            <>
                <title>Caption It | MeminIt!</title>
                {ogTags('Caption It', 'Caption any image you can imagine!', '/static/images/tools/thumbnails/meminit247.webp', true)}
            </>
            <DefaultBody className="items-center">
                <Header></Header>
                <DefaultContainer className="flex flex-col gap-10">
                    {(async () => {
                        const md = await DescriptionMarkdown("tools/caption-it")
                        await md
                        return md.html;
                    })()}
                </DefaultContainer>
                <Footer></Footer>

            </DefaultBody>
        </>
    )
}