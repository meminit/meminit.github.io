'use client';
import { useState, useEffect, ChangeEvent, useRef } from "react";

export default function tool() {
    const [caption, setCaption] = useState('Caption It 😎')
    const [image, setImage] = useState('/static/images/tools/other/upload.png')
    const [gifDataURI, setGIF] = useState('/static/images/tools/other/upload.png')

    const uploadedImg = useRef<HTMLImageElement>(null)
    const [pendingGIF, setPendingGIF] = useState<null | {canvas: HTMLCanvasElement, gif: any}>(null)

   async function setImageState(event: ChangeEvent<HTMLInputElement>) {
        const reader = new FileReader()
        console.log("Reading File")
        if (event.target.files) reader.readAsDataURL(event.target.files[0])

        reader.addEventListener('load', () => {
            if (reader.result) setImage(reader.result?.toString()) 
            console.log("finished reading image")
            return true;
        })
       
    while (reader.readyState !== 2) {
        await new Promise(resolve => setTimeout(resolve, 10));
    }
    }

    async function loadImage(event: ChangeEvent<HTMLInputElement>) {
        await setImageState(event)

    }

    async function handleImageLoaded() {
        if (image === '/static/images/tools/other/upload.png') return;
        const canvas = document.createElement("canvas")
        const ctx = canvas.getContext("2d");
        if (!uploadedImg.current) return;

        canvas.width = uploadedImg.current.width;
        canvas.height = uploadedImg.current.height;

        ctx?.drawImage(uploadedImg.current, 0, 0, uploadedImg.current.width, uploadedImg.current.height);
        

        if (typeof window !== "undefined") {
            const GIF = (window as any).GIF || (await import('@/app/tools/js/toGif/main')).default;
            var gif = new GIF({
                workers: 2,
                quality: 100,
                workerScript: "/static/js/tools/toGif/gifWorker.js",
                width: uploadedImg.current.width,
                height: uploadedImg.current.height,
            });
            gif.addFrame(canvas);
            gif.on("finished", function (blob: Blob) {
                console.log("finished")
                const url = URL.createObjectURL(blob);
                setGIF(url)
            });
            gif.render();
        }
    }



    return (
        <>
            <div className="flex flex-row gap-10 not-md:flex-col">
                <div className="flex flex-col gap-2">
                    <p className="font-bold">Upload Image</p>
                    <input type="file" accept="image/*" hidden id="imageInput" onChange={(e) => loadImage(e)}></input>
                    <button title="Upload Image" className="bg-zinc-950 p-2 rounded-lg h-[100px] hover:cursor-pointer not-md:w-full text-zinc-600 hover:text-zinc-200 transition-all cursor-pointer" onClick={() => document.getElementById('imageInput')?.click()}>
                        <i className="fa-solid fa-upload"></i>
                    </button>
                    <input className="opacity-0 pointer-events-none" placeholder="e"></input>
                </div>
                <img alt="Export GIF" src={gifDataURI} ref={uploadedImg} className="w-full rounded-lg" ></img>

                <img hidden src={image} ref={uploadedImg} className="w-full hidden rounded-lg" onLoad={handleImageLoaded}></img>

                <script src="/static/js/tools/toGif/main.js"></script>
            </div>
        </>
    )
}