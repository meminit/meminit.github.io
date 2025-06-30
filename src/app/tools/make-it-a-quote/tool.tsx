'use client';
import { ChangeEvent, useEffect, useState } from "react";
import download from "@/app/tools/js/capture";



export default function tool() {

    const [quote, setQuote] = useState('Create a quote!')
    const [username, setUsername] = useState('quotemaker')
    const [displayName, setDisplayName] = useState('Quote Maker')
    const [image, setImage] = useState('/static/images/other/confusedbean.jpg')

    function loadImage(event: ChangeEvent<HTMLInputElement>) {
        const reader = new FileReader()

        if (event.target.files) reader.readAsDataURL(event.target.files[0])

        reader.addEventListener('load', () => { if (reader.result) setImage(reader.result?.toString()) })
    }

    return (
        <>
            <div className="w-full flex flex-row gap-5 not-md:flex-col">
                <div className="flex flex-col gap-2">
                    <p className="text-lg font-bold">Person</p>
                    <input type="file" accept="image/*" hidden id="imageInput" onChange={(e) => loadImage(e)}></input>
                    <button title="Upload Image" className="bg-zinc-950 p-2 rounded-lg h-[100px] hover:cursor-pointer not-md:w-full text-zinc-600 hover:text-zinc-200 transition-all cursor-pointer" onClick={() => document.getElementById('imageInput')?.click()}>
                        <i className="fa-solid fa-upload"></i>
                    </button>
                    <input className="outline-0 bg-zinc-950 p-2 rounded-lg not-md:w-full" placeholder="Person Display Name..." onChange={(e) => setDisplayName(e.target.value)}></input>
                    <input className="outline-0 bg-zinc-950 p-2 rounded-lg not-md:w-full" type="text" placeholder="Person Username..." onChange={(e) => setUsername(e.target.value)}></input>

                    <p className="text-lg font-bold">Quote:</p>
                    <input className="outline-0 bg-zinc-950 p-2 rounded-lg not-md:w-full" type="text" placeholder="Quote..." onChange={(e) => setQuote(e.target.value)}></input>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="w-full rounded-2xl overflow-clip [aspect-ratio:16/9]">
                        <div className="flex flex-row w-[700px] max-w-full h-full relative overflow-hidden bg-[black]" id="quotedMessage">
                            <img alt="Profile Picture" src={image} className="grayscale aspect-square object-cover"></img>
                            <img alt="Gradient" src="/static/images/tools/other/gradient.png" className="absolute left-[56.5%] top-[0] w-full h-full rotate-90  origin-top-left"></img>
                            <div className="relative grow h-full flex flex-col justify-center items-center">
                                <p className="text-4xl text-center not-md:text-sm">{quote}</p>
                                <p className="text-2xl text-center not-md:text-xs"><i>- {displayName}</i></p>
                                <p className="text-m text-center text-[#46423d] not-md:text-xs">@{username}</p>
                                <p className="text-m text-center text-[#46423d] not-md:text-xs absolute bottom-0 right-0">meminit.github.io</p>
                            </div>
                        </div>
                    </div>
                <button className="w-full bg-zinc-950 p-2 rounded-lg text-zinc-600 hover:text-zinc-200 transition-all cursor-pointer" onClick={() => download(document.getElementById('quotedMessage') as HTMLElement)}><i className="fa-solid fa-download"></i> Download</button>
                </div>





            </div>
        </>
    )
}