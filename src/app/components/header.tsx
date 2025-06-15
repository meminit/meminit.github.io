import logo from "./logo"

export default function header() {
    return (
        <div className="bg-zinc-800 w-full h-20 flex not-md:flex-col flex-row p-4 justify-between">
            <link rel="stylesheet" href="/all.min.css"></link>
            <a className="h-full w-full max-w-[300px] flex flex-row items-center gap-2" href="/">
                <img alt="Yellow Emoji wearing sunglasses impressed" className="h-full aspect-square" src={logo.mainLogo}></img>
                <p className="font-bold text-white text-2xl font-gothic">MEMIN <span className="text-amber-400">IT!</span></p>
            </a>
            <nav className="flex flex-row align-middle gap-5">
                <a className="text-white text-lg no-underline flex flex-row items-center" href="/">
                    <i className="fa-icon fa-solid fa-house mr-1"></i>
                    Home</a>

                <a className="text-white text-lg no-underline flex flex-row items-center" href="/tools">
                    <i className="fa-icon fa-solid fa-hammer mr-1"></i>
                    Tools</a>

                <a className="text-white text-lg no-underline flex flex-row items-center" href="/about-us">
                    <i className="fa-icon fa-solid fa-question mr-1"></i>
                    About</a>

                <a className="text-white text-lg no-underline flex flex-row items-center" href="/tools">
                    <i className="fa-icon fa-solid fa-book mr-1"></i>
                    Articles</a>
            </nav>
        </div>
    )
}