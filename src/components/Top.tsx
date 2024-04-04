import React from "react"
import TopAnimes from "./TopAnimes"
import Recommend from "./Recommend"
import TopManga from "./TopManga"
import AnimeResults from "./AnimeResults"
import NekoPict from "./Neko"
import Character from "./Character"
interface TopProps {
  data: any
}

export default function Top({ data }: TopProps) {
  return (
    <article className="flex flex-col-reverse gap-0 lg:gap-20 lg:flex-row lg:px-20">
      <section>
        <TopManga />
        <NekoPict />
      </section>
      <section>
        <div className="p-4 m-2 mt-4 tracking-tighter text-gray-800 bg-gray-300 rounded-lg text-md dark:bg-blue-500 dark:text-white" role="alert">
          <span className="font-medium">Welcome to Anime Search!</span> Web page dedicated to the consumption of APIs by 
          <a href="https://github.com/Deyverson1" target="blank"> <span className="text-orange-400 underline">@Deyverson</span></a>,
          for more information click
          <a href="https://github.com/Deyverson1/anime-search" target="blank"> <span className="text-orange-400 underline">here</span> </a>
        </div>
        {/* <AnimeResults data={data} /> */}
        <TopAnimes />
        <Recommend />
        <Character />
      </section>
    </article>
  )
}