import DefaultBody from "../components/body"
import Header from "@/app/components/defaults/header"
import Footer from "@/app/components/defaults/footer"
import MarkDown from "@/app/components/md/md2html";
import Container from "@/app/components/containers/container"

export default function privacyPolicy() {
    return (
        <>
            <>
                <title>About Us | MeminIt!</title>
            </>
            <DefaultBody className="flex flex-col items-center justify-between min-h-[100vh]">
                <Header></Header>
                <Container className="rounded-2xl">
                    {
                        (async () => {
                            const md = await MarkDown("about-us")
                            await md
                            return md.html;
                        })()
                    }
                </Container>
                <Footer></Footer>

            </DefaultBody>
        </>
    )
}