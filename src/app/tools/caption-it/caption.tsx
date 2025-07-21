'use client';
import { useState, useEffect, useRef, ChangeEvent } from "react";
import download from "@/app/tools/js/capture";


export default function load() {
    const [caption, setCaption] = useState('Caption It 😎')
    const [image, setImage] = useState('/static/images/tools/other/upload.png')
    const [imageFile, setImageFile] = useState()

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
                    <input className="outline-0 bg-zinc-950 p-2 rounded-lg not-md:w-full" type="text" placeholder="Caption..." onChange={(e) => setCaption(e.target.value)}></input>
                </div>
                <div className="w-full flex flex-col gap-2">
                    <div className="w-full" id="captioned">
                        <div className="w-full bg-white font-bold p-2">
                            <p className="text-black text-center text-5xl text-ellipsis">{caption}</p>
                        </div>
                        <img src={image} alt="Upload Image Placeholder"></img>
                    </div>
                    <button className="w-full bg-zinc-950 p-2 rounded-lg text-zinc-600 hover:text-zinc-200 transition-all cursor-pointer" onClick={() => download(document.getElementById('captioned') as HTMLElement)}><i className="fa-solid fa-download"></i> Download</button>
                </div>
            </div>
        </>
    )
}