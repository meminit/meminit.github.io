'use client';
import { useEffect, useState } from "react";
import download from "@/app/tools/js/capture";

function hashCode(str: string) {
    let hash = 0;
    for (let i = 0, len = str.length; i < len; i++) {
        let chr = str.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0;
    }
    return hash;
}

function hashToPercentage(str: string) {
    const hash = hashCode(str);
    const percentage = Math.abs(hash) % 100;
    return percentage;
}

export default function tool() {

    const [firstPerson, setFirstPerson] = useState({ name: 'Peter', face: '' })
    const [secondPerson, setSecondPerson] = useState({ name: 'Luna', face: '' })
    const [matchPercentage, setMatchPercentage] = useState('86%')

    useEffect(() => {
        const percentage = hashToPercentage(firstPerson.name + secondPerson.name);

        setMatchPercentage(`${percentage}%`)
    }, [firstPerson, secondPerson])



    return (
        <>
            <div className="w-full flex flex-row gap-5 not-md:flex-col">
                <div className="flex flex-col gap-2">
                    <p className="text-lg font-bold">Person 1</p>
                    <input className="outline-0 bg-zinc-950 p-2 rounded-lg not-md:w-full" type="text" placeholder="Person 1 Name..." onChange={(e) => setFirstPerson({ name: e.target.value, face: firstPerson.face })}></input>

                    <p className="text-lg font-bold">Person 2</p>
                    <input className="outline-0 bg-zinc-950 p-2 rounded-lg not-md:w-full" type="text" placeholder="Person 2 Name..." onChange={(e) => setSecondPerson({ name: e.target.value, face: secondPerson.face })}></input>
                </div>

                <div className="w-full gap-2 flex flex-col">                <div className="w-full rounded-2xl overflow-clip">
                    <div className="w-full bg-[#FF66B9] aspect-video text-white flex flex-col justify-between items-center gap-2" id="loveResult">
                        <p className="text-center">meminit.github.io</p>

                        <div className="flex flex-row gap-5">
                            <div className="flex flex-col">
                                <p className="text-5xl text-center font-bold">{firstPerson.name}</p>
                            </div>
                            <p className="text-4xl font-bold text-center">❤️</p>
                            <div className="flex flex-col">
                                <p className="text-5xl text-center font-bold">{secondPerson.name}</p>
                            </div>
                        </div>

                        <div className="p-5">
                            <p className="text-center text-2xl font-bold"><span className="text-[#820F41]">{firstPerson.name}</span> and <span className="text-[#820F41]">{secondPerson.name}</span> match <span className="text-[#820F41]">{matchPercentage}</span></p>
                        </div>
                    </div>
                </div>
                    <button className="w-full bg-zinc-950 p-2 rounded-lg text-zinc-600 hover:text-zinc-200 transition-all cursor-pointer" onClick={() => download(document.getElementById('loveResult'))}><i className="fa-solid fa-download"></i> Download</button>
                </div>



            </div>
        </>
    )
}