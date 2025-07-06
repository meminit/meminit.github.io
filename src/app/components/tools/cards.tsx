import Image from "next/image"

interface props {
    name: string, shortDescription: string, href: string, thumbnail: string, identifier: string
}

export default {
    largeCard: function ({name, shortDescription, href, thumbnail, identifier}: props) {
        return (
            <a className="w-full min-h-full bg-zinc-900 rounded-lg flex flex-col" href={href}>
                <Image src={thumbnail} alt={name} className="w-full h-7/8 not-md:max-h-6/8 object-cover rounded-t-lg" width={940} height={550} />
                <div className="p-2">
                    <p className="text-lg font-bold text-ellipsis">{name}</p>
                    <p className="text-sm text-zinc-300 text-ellipsis h-full">{shortDescription}</p>
                </div>
            </a>
        )

    },
    gridCard: function ({name, shortDescription, href, thumbnail, identifier}: props) {
        return (
            <a className="w-[100%] h-full box-border bg-zinc-900 rounded-lg" key={identifier} href={href}>
                <Image src={thumbnail} alt={name} className="w-full max-h-6/8 object-cover rounded-t-lg" width={425} height={185} />
                <div className="p-2">
                    <p className="text-lg font-bold">{name}</p>
                    <p className="text-sm text-zinc-300">{shortDescription}</p>
                </div>
            </a>
        )
    },
    secondaryGridCard: function ({name, shortDescription, href, thumbnail, identifier}: props) {
                return (
            <a className="w-[100%] box-border bg-zinc-900 rounded-lg" key={identifier} href={href}>
                <Image src={thumbnail} alt={name} className="w-full max-h-6/8 object-cover rounded-t-lg" width={425} height={185} />
                <div className="p-2">
                    <p className="text-lg font-bold">{name}</p>
                    <p className="text-sm text-zinc-300">{shortDescription}</p>
                </div>
            </a>
        )
    }
}