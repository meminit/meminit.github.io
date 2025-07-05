'use client';
import React, { useState, ChangeEvent } from "react";

export default function DeepFryTool() {
    const [image, setImage] = useState<string>("");
    const [deepfriedImage, setDeepfriedImage] = useState<string>("");
    const [processing, setProcessing] = useState(false);

    function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (ev) => {
            setImage(ev.target?.result as string);
            setDeepfriedImage("");
        };
        reader.readAsDataURL(file);
    }

    function deepFryImage(imgSrc: string, quality = 0.8, passes = 3, con = 200, sat = 200, cb: (result: string | null) => void) {
        const img = new window.Image();
        img.src = imgSrc;
        img.onload = function () {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            if (!ctx) return cb(null);
            let originalWidth = img.naturalWidth;
            let originalHeight = img.naturalHeight;
            let width = originalWidth;
            let height = originalHeight;
            canvas.width = width;
            canvas.height = height;
            ctx.drawImage(img, 0, 0, width, height);
            let dataUrl = canvas.toDataURL("image/jpeg", quality);
            function compressPass(pass: number) {
                if (pass >= passes) {
                    const img2 = new window.Image();
                    img2.src = dataUrl;
                    img2.onload = function () {
                        canvas.width = originalWidth;
                        canvas.height = originalHeight;
                        if (!ctx) return cb(null);
                        ctx.clearRect(0, 0, originalWidth, originalHeight);
                        ctx.filter = `contrast(${con}%) saturate(${sat}%)`;
                        ctx.drawImage(img2, 0, 0, originalWidth, originalHeight);
                        dataUrl = canvas.toDataURL("image/jpeg", quality);
                        cb(dataUrl);
                    };
                    img2.onerror = function () { cb(null); };
                    return;
                }
                const img2 = new window.Image();
                img2.src = dataUrl;
                img2.onload = function () {
                    width = Math.max(1, width * 0.9);
                    height = Math.max(1, height * 0.9);
                    canvas.width = width;
                    canvas.height = height;
                    if (!ctx) return cb(null);
                    ctx.clearRect(0, 0, width, height);
                    ctx.filter = `contrast(${con}%) saturate(${sat}%)`;
                    ctx.drawImage(img2, 0, 0, width, height);
                    let newQuality = Math.max(quality - 0.1, 0.05);
                    dataUrl = canvas.toDataURL("image/jpeg", newQuality);
                    compressPass(pass + 1);
                };
                img2.onerror = function () { cb(null); };
            }
            compressPass(0);
        };
        img.onerror = function () { cb(null); };
    }

    function handleDeepFry() {
        if (!image) return;
        setProcessing(true);
        deepFryImage(image, 0.8, 3, 200, 200, (result) => {
            setDeepfriedImage(result || "");
            setProcessing(false);
        });
    }

    return (
        <div className="flex flex-row gap-6">
            <div className="flex flex-col gap-2">
                
                <input id="deepfry-upload" type="file" accept="image/*" onChange={handleFileChange} className="opacity-0 pointer-events-none" title="Upload image to deep fry" />
                <button title="Upload Image" className="bg-zinc-950 p-2 rounded-lg h-[100px] hover:cursor-pointer not-md:w-full text-zinc-600 hover:text-zinc-200 transition-all cursor-pointer" onClick={() => document.getElementById('deepfry-upload')?.click()}>
                        <i className="fa-solid fa-upload"></i>
                </button>
                <button className="bg-zinc-950 p-2 rounded-lg text-zinc-600 mt-2" onClick={handleDeepFry} disabled={!image || processing}>
                    {processing ? "Processing..." : "Deep-fry"}
                </button>
            </div>
            <div>
            {image && (
                <div className="flex flex-col gap-2 items-center w-full">
                    <p className="font-bold">Original Image</p>
                    <img src={image} alt="Original" className="max-w-xs rounded-lg" />
                </div>
            )}
            {deepfriedImage && (
                <div className="flex flex-col gap-2 items-center w-full">
                    <p className="font-bold">Deepfried Image</p>
                    <img src={deepfriedImage} alt="Deepfried" className="max-w-xs rounded-lg" />
                </div>
                )}
                </div>
        </div>
    );
}