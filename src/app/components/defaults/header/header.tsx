import logo from "../../logo"
import Link from "./link"

export default function header() {
    return (
        <div className="bg-zinc-900 w-full h-16 flex not-md:flex-col flex-row p-3 justify-between sticky top-0">
            
            <link rel="stylesheet" href="all.min.css"></link>

            <a className="h-full w-full max-w-[300px] flex flex-row items-center gap-2" href="/">
                <img alt="Yellow Emoji wearing sunglasses impressed" className="h-full max-h-[50px] aspect-square" src={logo.mainLogo}></img>
                <p className="font-bold text-white text-2xl font-gothic">MEMIN <span className="text-amber-400">IT!</span></p>
            </a>
            <nav className="flex flex-row align-middle gap-5 overflow-auto not-md:justify-center not-md:items-center">
                <Link href="/">
                    <i className="fa-icon fa-solid fa-house mr-1"></i>
                    Home</Link>

                <Link href="/tools">
                    <i className="fa-icon fa-solid fa-hammer mr-1"></i>
                    Tools</Link>

                <Link href="/about-us">
                    <i className="fa-icon fa-solid fa-question mr-1"></i>
                    About</Link>

                <Link href="/tools">
                    <i className="fa-icon fa-solid fa-book mr-1"></i>
                    Articles</Link>
            </nav>
        </div>
    )
}