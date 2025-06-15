import Image from "next/image";
import Header from "./components/header"
import toolsList from "./tools"
import Cards from "./components/cards"

export default function Home() {
  return (
    <body className="bg-zinc-950">
      <Header />
      <div className="grid grid-cols-2 not-md:grid-cols-1 box-border w-full p-5">
        {
          Cards.largeCard(toolsList.newest.name, toolsList.newest.shortDescription, toolsList.newest.href, toolsList.newest.thumbnail)
        }
        <div className="grid grid-cols-2 box-border h-full justify-items-center content-evenly">
          {toolsList.popular.map((game, index) => { 
              return Cards.gridCard(game.name, game.shortDescription, game.href, game.thumbnail, game.identifier)
            })}
        </div>
      </div>


    </body>
  );
}
