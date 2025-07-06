'use client';
import { useState, useEffect, useRef, ChangeEvent } from "react";
import download from "@/app/tools/js/capture";


export default function load() {
    const [firstOption, setFirstOption] = useState('Speed')
    const [secondOption, setSecondOption] = useState('Money')
    const [image, setImage] = useState('')
    const [bgColor, setBackgroundColor] = useState('#cc5500')

    const imageInput = useRef(null)

    function loadImage(event: ChangeEvent<HTMLInputElement>) {
        const reader = new FileReader()

        if (event.target.files) reader.readAsDataURL(event.target.files[0])

        reader.addEventListener('load', () => { if (reader.result) setImage(reader.result?.toString()) })
    }

    return (
        <>
            <div className="flex flex-row gap-10 not-md:flex-col">
                <div className="flex flex-col gap-2">
                    <input type="file" accept="image/*" hidden id="imageInput" ref={imageInput} onChange={(e) => loadImage(e)}></input>
                    <button title="Upload Image" className="bg-zinc-950 p-2 rounded-lg h-[100px] hover:cursor-pointer not-md:w-full text-zinc-600 hover:text-zinc-200 transition-all cursor-pointer" onClick={() => document.getElementById('imageInput')?.click()}>
                        <i className="fa-solid fa-upload"></i>
                    </button>
                    <input type="color" id="color" onChange={(e) => setBackgroundColor(e.target.value)}  title="Color" className="hidden bg-zinc-950 p-2 rounded-lg hover:cursor-pointer not-md:w-full text-zinc-600 hover:text-zinc-200 transition-all cursor-pointer"></input>
                    <button className="bg-zinc-950 p-2 rounded-lg hover:cursor-pointer not-md:w-full text-zinc-600 hover:text-zinc-200 transition-all cursor-pointer flex flex-row gap-2" onClick={() => document.getElementById('color')?.click()}><div className={`h-full rounded-lg aspect-square`} style={{backgroundColor:  bgColor}} ></div> Background Color</button>

                    <input className="outline-0 bg-zinc-950 p-2 rounded-lg not-md:w-full" type="text" placeholder="First Option..." onChange={(e) => setFirstOption(e.target.value)}></input>
                      <input className="outline-0 bg-zinc-950 p-2 rounded-lg not-md:w-full" type="text" placeholder="Second Option..." onChange={(e) => setSecondOption(e.target.value)}></input>
                </div>
                <div className="w-full flex flex-col gap-2">
                    <div
                        aria-hidden
                        className="w-full aspect-video bg-no-repeat bg-center bg-cover flex flex-col items-center justify-center"
                        id="poster"
                        style={{ backgroundImage: `url(${image})`, backgroundColor: bgColor }}>
                        <p className="text-6xl text-center">Would You Rather</p>
                        <div className="flex flex-row gap-5 text-4xl w-full items-center justify-center">
                            <p>{firstOption}</p>
                            OR
                            <p>{secondOption}</p>
                        </div>
                    </div>
                    <button className="w-full bg-zinc-950 p-2 rounded-lg text-zinc-600 hover:text-zinc-200 transition-all cursor-pointer" onClick={() => download(document.getElementById('poster') as HTMLElement)}><i className="fa-solid fa-download"></i> Download</button>
                </div>
            </div>
        </>
    )
}