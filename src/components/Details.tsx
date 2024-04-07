import React, { useEffect, useState } from "react";
import Poster from "./Poster";
import { useParams } from "react-router-dom";
import NavDetails from "./NavDetails";
import PrincipalCard from "./PrincipalCard";

interface Content {
  id: number, image: string, titles: any, tipo: string, source: string, episodes: number, status: string, aired: any, duration: string, rating: string, score: number, scored_by: number, rank: number, popularity: number, members: number, favorites: number, synopsis: string, background: string, year: number, broadcast: string, producers: any, licenses: any, genres: any, themes: any, theme: any, external: any, streaming: any, trailer: string, title: string, trailerImage: string
}
interface AnimeDetailsProps {
  data: any,
  type: string
}

export default function Details({ data, type }: AnimeDetailsProps) {
  const [content, setContent] = useState<Content[]>([])
  console.log(type)
  const { id } = useParams()
  useEffect(() => {
    const animeId = Number(id)
    const apiId = `https://api.jikan.moe/v4/${type}/${animeId}/full`
    fetch(apiId)
      .then(res => res.json())
      .then(res => {
        const dato = res.data
        // console.log(dato)
        const detailsData = [{
          id: dato?.mal_id, image: dato?.images?.webp?.image_url, titles: dato?.titles, title: dato?.title, tipo: dato?.type, source: dato?.source, episodes: dato?.episodes, status: dato?.status, aired: dato?.aired, duration: dato?.duration, rating: dato?.rating, score: dato?.score, scored_by: dato?.scored_by, rank: dato?.rank, popularity: dato?.popularity, members: dato?.members, favorites: dato?.favorites, synopsis: dato?.synopsis, background: dato?.background, year: dato?.year, broadcast: dato?.broadcast, producers: dato?.producers, licenses: dato?.licenses, genres: dato?.genres, themes: dato?.themes, theme: dato?.theme, external: dato?.external, streaming: dato?.streaming, trailer: dato?.trailer?.embed_url, trailerImage: dato?.trailer?.images?.maximum_image_url
        }]
        setContent(detailsData)
      })
      .catch(error => {
        console.error('Error fetching AnimeDetails', error)
      })
  }, [id])
  return (
    <section className="pb-8 dark:text-white min-w-screen">
      <NavDetails type={type} />
      {content.map(({ tipo, title, titles, synopsis, image, status, genres, trailer, rank, rating, popularity, favorites, members, score, scored_by, background, streaming, year, source, episodes, external, duration, producers, trailerImage }, index) => (
        <article key={index} className="flex flex-wrap justify-center gap-x-10 lg:flex-nowrap" >
          <div className="absolute h-96 w-full bg-[#2f3237]">
            {trailerImage !== undefined && trailer !== null
              ? <img src={trailerImage} className="object-fill w-screen h-full shadow-md shadow-inset shadow-red" alt="" />
              : ''
            }
          </div>
          <Poster rating={rating} streaming={streaming} producers={producers} external={external} duration={duration} episodes={episodes} titles={titles} image={image} status={status} year={year} />
          <section className="bottom-0 z-10 flex flex-col items-center px-2 lg:block">
            <div className="flex flex-wrap items-center gap-4 mt-8 lg:mt-60">
              <h1 className="max-w-xs text-xl text-black px-8 bg-[#e6edb7] rounded-full ">{title}</h1>
              <h2 className="px-4 bg-orange-500 rounded-full">{tipo}</h2>
              {source && (<h3 className="px-4 bg-orange-500 rounded-full">{source}</h3>)}
              {episodes && (<h4 className="px-4 text-white bg-orange-500 rounded-full">Episodes: {episodes}</h4>)}
            </div>
            <PrincipalCard favorites={favorites} rank={rank} popularity={popularity} members={members} score={score} genres={genres} synopsis={synopsis} trailer={trailer} background={background} scored_by={scored_by} type={type} />
          </section>
        </article>
      ))}
    </section>
  )
}