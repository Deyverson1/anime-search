import React from "react"
import TopAnimes from "./TopAnimes"
import Recommend from "./Recommend"
import TopManga from "./TopManga"
import AnimeResults from "./AnimeResults"
interface TopProps{
  data: any
}

export default function Top({data}: TopProps) {
  return (
    <article className="flex flex-col gap-0 lg:gap-8 lg:flex-row lg:px-20">
      <section>
        <TopManga/>
      </section>
      <section>
      <AnimeResults data={data} />
      <TopAnimes />
      <Recommend />
      </section>
    </article>
  )
}