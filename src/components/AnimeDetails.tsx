import React, { useEffect, useState } from "react";

import Poster from "./Poster";
import Rank from "./Rank";

interface Content {
  id: number,
  image: string,
  titles: any,
  type: string,
  source: string,
  episodes: number,
  status: string,
  aired: any,
  duration: string,
  rating: string,
  score: number,
  scored_by: number,
  rank: number,
  popularity: number,
  members: number,
  favorites: number,
  synopsis: string,
  background: string,
  year: number,
  broadcast: string,
  producers: any,
  licenses: any,
  genres: any,
  themes: any,
  theme: any,
  external: any,
  streaming: any,
  trailer: string,
  background_image: string
}
interface AnimeDetailsProps {
  data: any,
}

export default function AnimeDetails({ data }: AnimeDetailsProps) {
  const [content, setContent] = useState<Content[]>([])
  console.log(data)
  useEffect(() => {
    const id = '40748'
    const apiId = `https://api.jikan.moe/v4/anime/${id}/full`
    fetch(apiId)
      .then(res => res.json())
      .then(res => {
        console.log(res.data)
        const dato = res.data
        const detailsData = [{
          id: dato.mal_id,
          image: dato.images.webp.image_url,
          titles: dato.titles,
          type: dato.type,
          source: dato.source,
          episodes: dato.episodes,
          status: dato.status,
          aired: dato.aired,
          duration: dato.duration,
          rating: dato.rating,
          score: dato.score,
          scored_by: dato.scored_by,
          rank: dato.rank,
          popularity: dato.popularity,
          members: dato.members,
          favorites: dato.favorites,
          synopsis: dato.synopsis,
          background: dato.background,
          year: dato.year,
          broadcast: dato.broadcast,
          producers: dato.producers,
          licenses: dato.licenses,
          genres: dato.genres,
          themes: dato.themes,
          theme: dato.theme,
          external: dato.external,
          streaming: dato.streaming,
          trailer: dato.trailer.embed_url,
          background_image: dato.trailer.images.maximum_image_url
        }]
        setContent(detailsData)
      })
      .catch(error => console.error('Error fetching AnimeDetails', error))
  }, [])
  console.log(content)
  return (
    <section>
      {content.map(({ id, titles, synopsis, image, status, genres, trailer, background_image, rank, rating, popularity, favorites, members, score, scored_by, background, streaming }, index) => (
        <article key={index} >
          <div className="h-full">
            <img className="w-full h-96" src={background_image} alt="" />
          </div>
          <Poster titles={titles} image={image} status={status} />
          <section className="absolute top-2/4 bg-neutral-950 bottom-0">
            <section className="relative p-4 bg-neutral-900 rounded-lg w-7/12 top-8 left-1/4 ml-24 z-1 text-white">
              <Rank favorites={favorites} rank={rank} popularity={popularity} members={members} score={score} scored_by={scored_by}/>
              <h1 className="border-b-2 border-gray-500 mb-4">Synopsis:</h1>
              <div className="flex gap-2 my-4">
                {genres.map((date: {name: string}, index: number) => (
                  <p key={index} className="rounded-full bg-neutral-700 px-4 hover:bg-neutral-600 cursor-pointer">{date.name}</p>
                ))}
              </div>
              <p className="w-full text-sm">{synopsis}</p>
              <div className="flex justify-center py-8">
                <iframe
                  title="YouTube Video Player"
                  width="560"
                  height="315"
                  src={trailer}
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <section>
                <h1 className="border-b-2 border-gray-500 mb-4">Background:</h1>
                {background}
              </section>
              <section>
                {/* {streaming} */}
              </section>
            </section>
          </section>
        </article>
      ))}
    </section>
  )
}