import logo from "./logo"
import Link from "next/link"

export default function header() {
    return (
        <div className="bg-zinc-800 w-full min-h-20 flex not-md:flex-col flex-row p-4 justify-between">
            
            <link rel="stylesheet" href="all.min.css"></link>

            <Link className="h-full w-full max-w-[300px] flex flex-row items-center gap-2" href="/">
                <img alt="Yellow Emoji wearing sunglasses impressed" className="h-full max-h-[50px] aspect-square" src={logo.mainLogo}></img>
                <p className="font-bold text-white text-2xl font-gothic">MEMIN <span className="text-amber-400">IT!</span></p>
            </Link>
            <nav className="flex flex-row align-middle gap-5">
                <Link className="text-white text-lg no-underline flex flex-row items-center" href="/">
                    <i className="fa-icon fa-solid fa-house mr-1"></i>
                    Home</Link>

                <Link className="text-white text-lg no-underline flex flex-row items-center" href="/tools">
                    <i className="fa-icon fa-solid fa-hammer mr-1"></i>
                    Tools</Link>

                <Link className="text-white text-lg no-underline flex flex-row items-center" href="/about-us">
                    <i className="fa-icon fa-solid fa-question mr-1"></i>
                    About</Link>

                <Link className="text-white text-lg no-underline flex flex-row items-center" href="/tools">
                    <i className="fa-icon fa-solid fa-book mr-1"></i>
                    Articles</Link>
            </nav>
        </div>
    )
}