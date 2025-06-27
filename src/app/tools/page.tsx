import DefaultBody from "@/app/components/body"
import Header from "@/app/components/defaults/header"
import Footer from "@/app/components/defaults/footer"
import toolsList from "@/app/tools"
import Cards from "@/app/components/tools/cards"
import ogTags from "@/app/components/meta/og"

export default function toolPage() {
    return (
        <>
            <>
                <title>Tools | MeminIt!</title>
                {ogTags('Tools | MeminIt!', 'Welcome to MeminIt, your go-to site for fun and creative online tools! From fancy text generators and "would you rather" poster generators, to deepfrying images, love calculators, and more, Meminit makes it easy to create, customize, and share awesome creations with friends. Perfect for making memes, spicing up your posts, or just having a laugh online. Have fun!', '\static\images\brand\cooldude.webp', true)}
            </>
                <div className="flex flex-col">
                    <h1 className="w-9/10 max-w-[1000px] text-left m-0">All Tools</h1>
                    <p className="w-9/10 max-w-[1000px] text-left m-0">Welcome to MeminIt, your go-to site for fun and creative online tools! From fancy text generators and "would you rather" poster generators, to deepfrying images, love calculators, and more, Meminit makes it easy to create, customize, and share awesome creations with friends. Perfect for making memes, spicing up your posts, or just having a laugh online. Have fun!</p>
                </div>
                <div className="grid grid-cols-2 w-9/10 max-w-[1000px] gap-10 not-md:grid-cols-1">
                    {toolsList.all.map((game, index: number) => {
                        return Cards.gridCard(game.name, game.shortDescription, game.href, game.thumbnail, game.identifier)
                    })}
                </div>
                <div className="w-9/10 max-w-[1000px] text-left m-0">
                    <p className="text-lg">Have an idea for a new tool?</p>
                    <p>If you have an idea, feel free to send an email to <a href="mailto:itsprobablyjackson@proton.me" className="font-semibold hover:underline" target="_blank" rel="noopener">itsprobablyjackson@proton.me</a>, join the <a href="https://discord.gg/gRtt6Srw65" target="_blank" rel="noopener" className="font-semibold hover:underline">discord</a>, or fill out the <a href="https://docs.google.com/forms/d/e/1FAIpQLSe5OnEv27YdOcgWK6RBoHMN55sHJnTF4mrcjaSCb_TY-KtwGg/viewform?usp=sharing&ouid=117062711540555590382" className="font-semibold hover:underline" target="_blank" rel="noopener">form</a>!</p>
                </div>
        </>
    )
}