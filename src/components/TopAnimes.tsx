import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
interface Top {
  title: string,
  id: string,
  image: string
}
export default function TopAnimes() {
  const [topAnime, setTopAnime] = useState<Top[]>([])
  useEffect(() => {
    fetch('https://api.jikan.moe/v4/top/anime')
      .then(res => res.json())
      .then(res => {
        const dato = res.data
        const topData = dato.map((data: { title: string, mal_id: string, images: any }) => ({
          title: data.title,
          id: data.mal_id,
          image: data.images.jpg.image_url
        }))
        setTopAnime(topData)
      })
  }, [])
  return (
    <main className="px-4 lg:px-0">
      <h1 className="pb-4 text-xl font-bold text-black lg:pl-6">Top Anime: </h1>
      <section className="flex flex-col items-center justify-center">
        <section className="flex flex-col flex-1 gap-4 lg:flex-row lg:flex-wrap lg:justify-center ">
          {topAnime.map((data, index) => (
           <Link  key={index} to={`/anime/${data.id}`}>
            <article className="flex items-center gap-4 lg:flex-col gap-y-1">
              <img className="object-cover transition-transform rounded-full w-14 h-14 lg:rounded-lg lg:w-full lg:h-56 md:group-hover:scale-1 hover:md:scale-105" src={data.image} alt="" />
              <h1 className="w-10/12 font-bold text-black lg:text-center text-md lg:min-w-52 lg:max-w-52">{data.title}</h1>
            </article>
            </Link>
          ))}
        </section>
      </section>
    </main>
  )
}