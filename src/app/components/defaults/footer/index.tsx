import logo from '../../logo'

export default function footer() {
    return (<>
        <footer className="bg-zinc-900 min-h-[300px] mt-10 box-border p-10 w-full flex flex-row not-md:flex-col not-md:gap-10 justify-between not-md:min-h-auto">

            <div className='flex flex-col'>
                <a className=" w-full max-w-[300px] flex flex-row items-center gap-2" href="/">
                    <img alt="Yellow Emoji wearing sunglasses impressed" className="h-full max-h-[50px] aspect-square" src={logo.mainLogo}></img>

                    <div>
                        <p className="font-bold text-white text-2xl font-gothic">MEMIN <span className="text-amber-400">IT!</span></p>
                        <p className='max-w-[300px]'>Your go-to hub to create memes, laughing together, forever.</p>
                    </div>
                </a>
            </div>
            <div className='flex flex-row-reverse gap-10 not-md:w-full not-md:grid not-md:grid-cols-2'>
                <div className='flex flex-col not-md:w-full'>
                    <p className='font-bold text-2xl text-right mb-2 not-md:text-center'>About</p>
                    <a href="/about-us" className='text-right not-md:text-center'>About Us</a>
                    <a href="/privacy-policy" className='text-right not-md:text-center'>Privacy Policy</a>
                    <a href="/contact-us" className='text-right not-md:text-center'>Contact Us</a>
                </div>
                <div className='flex flex-col not-md:w-full not-md:text-center'>
                    <p className='font-bold text-2xl text-right mb-2 not-md:w-full not-md:text-center'>Socials</p>
                    <a href="https://github.com/meminit/meminit.github.io" rel="noopener" target='_blank' className='text-right not-md:text-center'>Github</a>
                    <a href="https://discord.gg/gRtt6Srw65" rel="noopener" target='_blank' className='text-right not-md:text-center'>Discord</a>
                </div>
            </div>

        </footer>
    </>)
}