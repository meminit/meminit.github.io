import logo from '../../logo'

export default function footer() {
    return (<>
        <footer className="bg-zinc-900 h-[300px] mt-10 box-border p-10 w-full flex flex-row justify-between">

            <div className='flex flex-col'>
                <a className=" w-full max-w-[300px] flex flex-row items-center gap-2" href="/">
                    <img alt="Yellow Emoji wearing sunglasses impressed" className="h-full max-h-[50px] aspect-square" src={logo.mainLogo}></img>

                    <div>
                        <p className="font-bold text-white text-2xl font-gothic">MEMIN <span className="text-amber-400">IT!</span></p>
                        <p className='max-w-[300px]'>Your go-to hub to create memes, laughing together, forever.</p>
                    </div>
                </a>
            </div>
            <div>
                <div className='flex flex-col'>
                    <p className='font-bold text-2xl text-right mb-2'>About</p>
                    <a href="/about-us" className='text-right'>About Us</a>
                    <a href="/privacy-policy" className='text-right'>Privacy Policy</a>
                </div>
            </div>

        </footer>
    </>)
}