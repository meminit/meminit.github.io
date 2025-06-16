import Image from "next/image"

export default {
    largeCard: function (name: string, shortDescription: string, href: string, thumbnail: string) {
        return (
            <a className="w-full min-h-full bg-zinc-800 rounded-lg" href={href}>
                <Image src={thumbnail} alt={name} className="w-full h-7/8 object-cover rounded-t-lg" width={940} height={550} />
                <div className="p-2">
                    <h2 className="text-lg font-bold">{name}</h2>
                    <p className="text-sm text-zinc-300">{shortDescription}</p>
                </div>
            </a>
        )

    },
    gridCard: function (name: string, shortDescription: string, href: string, thumbnail: string, identifier: string) {
        return (
            <a className="w-[100%] h-full box-border bg-zinc-800 rounded-lg" key={identifier} href={href}>
                <Image src={thumbnail} alt={name} className="w-full h-6/8 object-cover rounded-t-lg" width={425} height={185} />
                <div className="p-2">
                    <h2 className="text-lg font-bold">{name}</h2>
                    <p className="text-sm text-zinc-300">{shortDescription}</p>
                </div>
            </a>
        )
    }
}