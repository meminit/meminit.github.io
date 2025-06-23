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
            <DefaultBody className="items-center flex flex-col gap-10">
                <Header></Header>
                <div className="flex flex-col items-center">
                    <h1 className="w-9/10 max-w-[1000px] text-left m-0">All Tools</h1>
                    <p className="w-9/10 max-w-[1000px] text-left m-0">Welcome to MeminIt, your go-to site for fun and creative online tools! From fancy text generators and "would you rather" poster generators, to deepfrying images, love calculators, and more, Meminit makes it easy to create, customize, and share awesome creations with friends. Perfect for making memes, spicing up your posts, or just having a laugh online. Have fun!</p>
                </div>
                <div className="grid grid-cols-2 w-9/10 max-w-[1000px] gap-10 not-md:grid-cols-1">
                    {toolsList.all.map((game, index: number) => {
                        return Cards.gridCard(game.name, game.shortDescription, game.href, game.thumbnail, game.identifier)
                    })}
                </div>
                <Footer></Footer>
            </DefaultBody>
        </>
    )
}