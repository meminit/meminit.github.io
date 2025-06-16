import Image from "next/image";
import Header from "./components/header"
import toolsList from "./tools"
import Cards from "./components/cards"
import AdBanner from "./components/adComponents/banner"
import Meme from "./components/randomMeme"

export default function Home() {
  return (
    <body className="bg-zinc-950">
      <Header />
      <div className="grid grid-cols-2 not-md:grid-cols-1 box-border w-full p-5 gap-10">
        {
          Cards.largeCard(toolsList.newest.name, toolsList.newest.shortDescription, toolsList.newest.href, toolsList.newest.thumbnail)
        }
        <div className="grid grid-cols-2 box-border h-full justify-items-center content-evenly gap-10 not-md:grid-cols-1">
          {toolsList.popular.map((game, index: number) => {
            return Cards.gridCard(game.name, game.shortDescription, game.href, game.thumbnail, game.identifier)
          })}
        </div>
      </div>
      <div className="grid grid-cols-2 not-md:grid-cols-1 box-border w-full px-5 gap-10">
        <div className="w-full grid grid-cols-1 gap-5 ">

          <div className="w-full box-border p-5 bg-zinc-800 rounded-lg flex flex-col gap-5">

            <h1 id="about-us" className="text-4xl font-bold">About Us</h1>
            <p><strong className="meminitbold">MeminIt</strong> is your go-to hub for creating awesome <strong>memes</strong>. From tools like
              <a href="/tools/captionit"><strong>Caption It!</strong></a> to the <a href="/tools/deepfry"><strong>Image Deep Fryer</strong></a>, we make your
              memes <strong>twice as funny</strong> — and way easier to make.</p>
            <p>We also offer just-for-fun tools like the <a href="/tools/lovecalculator"><strong>Love Calculator</strong></a>, perfect
              for sharing laughs with your friends 😂.</p>
            <p><strong className="meminitbold">MeminIt</strong> was created by <strong>@itsprobablyjackson</strong>, with thumbnail designs by
              <strong>@shepeleigh</strong> — built for all types of <strong>memers</strong>. Whether you’re making
              content for your <strong>friends</strong> or your <strong>followers</strong>, there’s something here for
              everyone.</p>
            <p>Got an idea or feature request? Hit up the <a href="/suggestions"><strong>Suggestions</strong></a> page,
              send me an <a href="mailto:itsprobablyjackson@proton.me"><strong>email</strong></a>, or join the <a href="https://discord.gg/meminit"><strong>Discord server</strong></a>!</p>
            <p>If you’re experiencing any issues or have feedback, feel free to reach out — I’m available based on the
              AEST time zone 🙂</p>
            <p>Whether you’re here to make people laugh or spice up your social media feed, <strong>MeminIt</strong> is
              the perfect place to create and share memes.</p>



          </div>
          <AdBanner />

        </div>
        <div className="flex flex-col gap-5">
          <AdBanner />

          <div className="w-full bg-zinc-800 rounded-lg flex flex-col gap-5 p-10 box-border">
            <p className="text-4xl font-bold">Random Meme</p>
            <Meme />
          </div>
        </div>


      </div>


    </body>
  );
}
