import Header from "./components/defaults/header"
import Footer from "@/app/components/defaults/footer"
import Image from "next/image"

export default function Code404() {
    return (
        <body className="h-[100vh] flex flex-col items-center justify-between">
            <Header></Header>
            <div className="text-center p-10 bg-zinc-900 flex flex-col items-center rounded-2xl m-2">
                <Image alt="Mr Bean Awfully Confused" src="/static/images/other/confusedbean.jpg" className="rounded-2xl mb-3" width={256} height={256}></Image>
                <p className="text-8xl text-amber-400 font-bold">404</p>
                <p>You've lost yourself, let's get you back to the <a href="/" className="font-bold">home page</a>.</p>
                </div>
            <Footer></Footer>
        </body>
    )
}