import React, { useEffect, useState } from "react";

import Poster from "./Poster";
import Rank from "./Rank";
import { useParams } from "react-router-dom";

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
}
interface AnimeDetailsProps {
  data: any,
}

export default function AnimeDetails({ data }: AnimeDetailsProps) {
  const [content, setContent] = useState<Content[]>([])
  console.log(data)
  const  {id}  = useParams()
  useEffect(() => {
    const animeId = Number(id)
    console.log(id)
    const apiId = `https://api.jikan.moe/v4/anime/${animeId}/full`
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
        }]
        setContent(detailsData)
      })
      .catch(error => console.error('Error fetching AnimeDetails', error))
  }, [])
  console.log(content)
  return (
    <section >
      {content.map(({ type, id, titles, synopsis, image, status, genres, trailer, rank, rating, popularity, favorites, members, score, scored_by, background, streaming, year, source, episodes, external, duration, producers }, index) => (
        <article key={index} className="flex gap-x-10 flex-wrap lg:flex-nowrap" >
          <Poster rating={rating} duration={duration} episodes={episodes} titles={titles} image={image} status={status} year={year} />
          <section className=" bottom-0">
            <div className="mt-80 gap-4 flex">
              {/* <h1>{title}</h1> */}
              <h2 className="bg-orange-500 px-4 rounded-md">{type}</h2>
              <h3 className="bg-pink-500 px-4 rounded-md">{source}</h3>
              <h4 className="bg-white text-black px-4 rounded-md">Episodes: {episodes}</h4>
            </div>
            <section className=" p-4 bg-neutral-900 rounded-lg w-10/12 mt-6 mr- z-1 text-white">
              <Rank favorites={favorites} rank={rank} popularity={popularity} members={members} score={score} scored_by={scored_by} />
              <h1 className="border-b-2 border-gray-500 mb-4">Synopsis:</h1>
              <div className="flex gap-2 my-4">
                {genres.map((date: { name: string }, index: number) => (
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

              <section className="w-full ">
                <h1 className="border-b-2 pt-8 border-gray-500 mb-4">Streaming: </h1>
                <main className="flex gap-x-8">
                  {streaming.map((val: { url: string, name: string }, index: number) => (
                    <section key={index}>
                      <a target="blank" href={val.url} className="hover:underline">{val.name}</a>
                    </section>
                  ))}
                </main>
              </section>
              <section className="w-full">
                <h1 className="border-b-2 pt-8 border-gray-500 mb-4">Producers: </h1>
                <main className="flex gap-x-8">
                  {producers.map((king: { url: string, name: string }, index: number) => (
                    <a className="hover:underline" target="blank" key={index} href={king.url}><h1>{king.name}</h1></a>
                  ))}
                </main>
              </section>

              <section>
                <h1 className="border-b-2 pt-8 border-gray-500 mb-4">External:</h1>
                <main className="flex gap-x-8">
                  {external.map((dey: { url: string, name: string }, index: number) => (
                    <a key={index} target="blank" href={dey.url} className="hover:underline"><h1>{dey.name}</h1></a>
                  ))}
                </main>
              </section>
            </section>
          </section>
        </article>
      ))}
    </section>
  )
}