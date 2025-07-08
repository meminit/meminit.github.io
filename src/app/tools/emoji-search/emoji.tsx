import Copy from "./copy"

interface emoji {
    emoji:string
}

export default function emoji({ emoji }: emoji) {
    return (
        <div className="w-full aspect-square flex flex-col items-center justify-between p-5 box-border rounded-2xl bg-zinc-900">
            <p className="text-7xl">{ emoji }</p>
            <Copy emoji={emoji} />
        
        </div>
    )    
}