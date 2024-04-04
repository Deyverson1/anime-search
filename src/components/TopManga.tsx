import React, { useEffect, useState } from "react"
interface Manga {
  title: string,
  id: string,
  image: string,
  genres: any
}
export default function TopManga() {
  const [topManga, setMangaTop] = useState<Manga[]>([])
  useEffect(() => {
    fetch('https://api.jikan.moe/v4/top/manga')
      .then(res => res.json())
      .then(res => {
        const dato = res.data
        const topData = dato.map((data: { title: string, mal_id: string, images: any, genres: any }) => ({
          title: data.title,
          id: data.mal_id,
          image: data.images.jpg.image_url,
          genres: data.genres
        }))
        setMangaTop(topData)
      })
  }, [])
  return (
    <section className="flex flex-col w-full px-4 mt-10 lg:mt-14 lg:px-0 gap-y-4">
      <h1 className="text-lg font-bold text-gray-800 uppercase dark:text-white">Top Manga</h1>
      {topManga.map((dato, index) => (
        <article key={index} className="flex items-center justify-center text-gray-800 duration-200 cursor-pointer hover:text-orange-300 min-w-80">
          <h1 className="w-full text-base ">{dato.title !== null && dato.title?.length > 25
            ? dato.title.slice(0, 25) + '...'
            : dato.title
          }</h1>
          <div className="flex flex-wrap justify-end w-fit">
            <p className="px-4 text-sm text-white uppercase bg-orange-300 rounded-full w-fit ">Manga</p>
          </div>
        </article>
      ))
      }
    </section>
  )
}