export default {
    largeCard: function (name: string, shortDescription: string, href: string, thumbnail: string) {
        return (
            <a className="w-full aspect-[3/2] bg-zinc-800 rounded-lg" href={href}>
                <img src={thumbnail} alt={name} className="w-full h-7/8 object-cover rounded-t-lg" />
                <div className="p-2">
                    <h2 className="text-lg font-bold">{name}</h2>
                    <p className="text-sm text-zinc-300">{shortDescription}</p>
                </div>
            </a>
        )

    },
    gridCard: function (name: string, shortDescription: string, href: string, thumbnail: string, identifier: string) {
        return (
            <a className="w-[90%] aspect-[2/1] box-border bg-zinc-800 rounded-lg" key={identifier} href={href}>
                <img src={thumbnail} alt={name} className="w-full h-7/8 object-cover rounded-t-lg" />
                <div className="p-2">
                    <h2 className="text-lg font-bold">{name}</h2>
                    <p className="text-sm text-zinc-300">{shortDescription}</p>
                </div>
            </a>
        )
    }
}