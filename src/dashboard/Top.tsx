import React from "react"
import TopAnimes from "../components/Anime/TopAnimes"
import Recommend from "../components/Anime/Recommend"
import TopManga from "../components/Manga/TopManga"
import Quote from "../components/Quote"
import ArtContainer from "../Container/ArtContainer"
interface TopProps {
  data: any
}

export default function Top({ data }: TopProps) {
  return (
    <article className="flex flex-col-reverse gap-0 lg:gap-20 lg:flex-row lg:px-20">
      <section>
        <TopManga />
        <ArtContainer />
      </section>
      <section>
        <div className="p-4 m-2 mt-4 tracking-tighter text-center text-gray-800 bg-gray-300 rounded-lg text-md" role="alert">
          <span className="font-medium">Welcome to Anime Manga and Art Explorer!</span> Web page dedicated to the consumption of APIs by
          <a href="https://github.com/Deyverson1" target="blank"> <span className="text-orange-400 underline">@Deyverson</span></a>,
          for more information click
          <a href="https://github.com/Deyverson1/anime-search" target="blank"> <span className="text-orange-400 underline">here</span> </a>
        </div>
        <TopAnimes />
        <Recommend />
        <Quote />
      </section>
    </article>
  )
}