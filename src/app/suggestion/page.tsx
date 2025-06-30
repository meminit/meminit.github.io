import DefaultBody from "../components/body"
import Header from "@/app/components/defaults/header"
import Footer from "@/app/components/defaults/footer"
import MarkDown from "@/app/components/md/md2html";
import Container from "@/app/components/containers/container"

export default function privacyPolicy() {
    return (
        <>
            <>
                <title>Suggest | MeminIt!</title>
            </>
            <DefaultBody className="flex flex-col items-center gap-5">
                <Header></Header>
                <Container className="rounded-2xl">
                    <h1>Suggest a feature for MeminIt</h1>
                    <iframe title="Google Forms Embed" src="https://docs.google.com/forms/d/e/1FAIpQLSe5OnEv27YdOcgWK6RBoHMN55sHJnTF4mrcjaSCb_TY-KtwGg/viewform?embedded=true" width="1000" height="1312">Loading…</iframe>
                </Container>
                <Footer></Footer>

            </DefaultBody>
        </>
    )
}