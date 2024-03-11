import React, { useEffect, useState } from "react";
import Poster from "./Poster";
import { useParams } from "react-router-dom";
import NavDetails from "./NavDetails";
import PrincipalCard from "./PrincipalCard";

interface Content {
  id: number, image: string, titles: any, type: string, source: string, episodes: number, status: string, aired: any, duration: string, rating: string, score: number, scored_by: number, rank: number, popularity: number, members: number, favorites: number, synopsis: string, background: string, year: number, broadcast: string, producers: any, licenses: any, genres: any, themes: any, theme: any, external: any, streaming: any, trailer: string, title: string,
}
interface AnimeDetailsProps {
  data: any,
}

export default function AnimeDetails({ data }: AnimeDetailsProps) {
  const [content, setContent] = useState<Content[]>([])
  const { id } = useParams()
  useEffect(() => {
    const animeId = Number(id)
    const apiId = `https://api.jikan.moe/v4/anime/${animeId}/full`
    fetch(apiId)
      .then(res => res.json())
      .then(res => {
        const dato = res.data
        const detailsData = [{
          id: dato.mal_id, image: dato.images.webp.image_url, titles: dato.titles, title: dato.title, type: dato.type, source: dato.source, episodes: dato.episodes, status: dato.status, aired: dato.aired, duration: dato.duration, rating: dato.rating, score: dato.score, scored_by: dato.scored_by, rank: dato.rank, popularity: dato.popularity, members: dato.members, favorites: dato.favorites, synopsis: dato.synopsis, background: dato.background, year: dato.year, broadcast: dato.broadcast, producers: dato.producers, licenses: dato.licenses, genres: dato.genres, themes: dato.themes, theme: dato.theme, external: dato.external, streaming: dato.streaming, trailer: dato.trailer.embed_url,
        }]
        setContent(detailsData)
    

      })
      .catch(error => {
        console.error('Error fetching AnimeDetails', error)
      })
  }, [id])
  return (
    <section className="pb-8 text-black dark:text-white min-w-screen">
          <NavDetails />
          {content.map(({ type, title, titles, synopsis, image, status, genres, trailer, rank, rating, popularity, favorites, members, score, scored_by, background, streaming, year, source, episodes, external, duration, producers }, index) => (
            <article key={index} className="flex flex-wrap justify-center gap-x-10 lg:flex-nowrap" >
              <Poster rating={rating} duration={duration} episodes={episodes} titles={titles} image={image} status={status} year={year} />
              <section className="bottom-0 flex flex-col items-center px-2 lg:block">
                <div className="flex flex-wrap items-center gap-4 mt-8 lg:mt-60">
                  <h1 className="max-w-md text-2xl">{title}</h1>
                  <h2 className="px-4 bg-orange-500 rounded-md">{type}</h2>
                  <h3 className="px-4 bg-pink-500 rounded-md">{source}</h3>
                  <h4 className="px-4 text-black bg-white rounded-md">Episodes: {episodes}</h4>
                </div>
                <PrincipalCard favorites={favorites} rank={rank} popularity={popularity} members={members} score={score} genres={genres} synopsis={synopsis} trailer={trailer} background={background} streaming={streaming} producers={producers} scored_by={scored_by} external={external} />
              </section>
            </article>
          ))}
    </section>
  )
}