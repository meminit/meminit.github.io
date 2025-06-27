import Image from "next/image";
import Header from "./components/defaults/header"
import toolsList from "./tools"
import Cards from "./components/tools/cards"
import AdBanner from "./components/adComponents/banner"
import MarkDown from "./components/md/md2html"
import Footer from "./components/defaults/footer"
import ogTags from "@/app/components/meta/og";

import dynamic from "next/dynamic";

export default function Home() {
  return (
    <>
      <>
        <title>Home | MeminIt!</title>
        <meta name="description" content="Welcome to MeminIt! Discover the latest and most popular tools." />
        {ogTags('Home | MeminIt!', 'Welcome to MeminIt, your go-to site for fun and creative online tools! From fancy text generators and "would you rather" poster generators, to deepfrying images, love calculators, and more, Meminit makes it easy to create, customize, and share awesome creations with friends. Perfect for making memes, spicing up your posts, or just having a laugh online. Have fun!', '\static\images\brand\cooldude.webp', true)}
      </>
      <body className="bg-zinc-900">
        <Header />
        <div className="grid grid-cols-2 not-md:grid-cols-1 box-border w-full p-5 gap-10">
          {
            Cards.largeCard(toolsList.newest.name, toolsList.newest.shortDescription, toolsList.newest.href, toolsList.newest.thumbnail)
          }
          <div className="grid grid-cols-2 box-border h-full justify-items-center content-evenly gap-[20px] not-md:gap-10 not-md:grid-cols-1">
            {toolsList.popular.map((game, index: number) => {
              return Cards.gridCard(game.name, game.shortDescription, game.href, game.thumbnail, game.identifier)
            })}
          </div>
        </div>
        <div className="grid grid-cols-2 not-md:grid-cols-1 box-border w-full px-5 gap-10">
          <div className="w-full grid grid-cols-1 gap-5 ">

            <div className="w-full box-border p-5 bg-zinc-900 rounded-lg flex flex-col gap-5">

              {
                (async () => {
                  const md = await MarkDown("about-us")
                  await md
                  return md.html;
                })()
              }

            </div>
            <AdBanner />


          </div>
          <div className="flex flex-col gap-5">
            <AdBanner />


            <div className="grid grid-cols-2 box-border h-full justify-items-center content-evenly gap-[20px] not-md:gap-10 not-md:grid-cols-1">
              {toolsList.etc.map((game, index: number) => {
                return Cards.gridCard(game.name, game.shortDescription, game.href, game.thumbnail, game.identifier)
              })}
            </div>
          </div>


        </div>

        <Footer></Footer>




      </body>
    </>
  );
}
