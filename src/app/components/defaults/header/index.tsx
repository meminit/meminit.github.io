'use client';
import { useState } from "react"
import logo from "../../logo"
import Link from "./link"

export default function header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen((prev) => !prev);
    };

    return (
        <div className="bg-zinc-900 w-full m-h-16 flex not-md:flex-col flex-row p-3 justify-between sticky top-0 z-10" >
            <link rel="stylesheet" href="/all.min.css"></link>
            <div className="not-md:flex not-md:flex-row not-md:justify-between">
                <a className="h-full w-full max-w-[300px] flex flex-row items-center gap-2" href="/">
                    <img alt="Yellow Emoji wearing sunglasses impressed" className="h-full max-h-[50px] aspect-square" src={logo.mainLogo}></img>
                    <p className="font-bold text-white text-2xl font-gothic">MEMIN <span className="text-amber-400">IT!</span></p>
                </a>
                <button title="Menu" id="menuToggle" className={`md:hidden w-20 transition-all duration-300 ${menuOpen ? 'rotate-90': 'rotate-0'}`} onClick={handleMenuToggle}>
                    <i className="fa-solid fa-bars"></i>
                </button>
            </div>
            <nav className={`flex flex-row align-middle gap-5 overflow-auto not-md:justify-center not-md:items-center not-md:flex-col transition-all duration-300 ${menuOpen ? 'not-md:bottom-0' : 'not-md:bottom-10/10 '} not-md:fixed not-md:w-full not-md:bg-zinc-900 not-md:overflow-hidden not-md:left-0 not-md:h-[100vh] not-md:z-[-1]`}>
                <Link href="/">
                    <i className="fa-icon fa-solid fa-house mr-1"></i>
                    Home</Link>

                <Link href="/tools">
                    <i className="fa-icon fa-solid fa-hammer mr-1"></i>
                    Tools</Link>

                <Link href="/about-us">
                    <i className="fa-icon fa-solid fa-question mr-1"></i>
                    About</Link>

                <Link href="/articles">
                    <i className="fa-icon fa-solid fa-book mr-1"></i>
                    Articles</Link>
            </nav>
        </div>
    )
}