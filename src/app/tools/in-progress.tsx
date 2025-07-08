import Image from "next/image"

export default function inProgressPage() {
    return (
            <div className="text-center p-10 bg-zinc-900 flex flex-col items-center rounded-2xl m-2">
                <Image alt="Rjumen emoji with red lips and smirk" src="/static/images/other/woman.png" className="rounded-2xl mb-3" width={256} height={256}></Image>
                <p className="text-8xl text-lime-300 font-bold">We're working on it.</p>
                <p>You've lost yourself, let's get you back to the <a href="/" className="font-bold">home page</a>.</p>
                </div>
    )
}