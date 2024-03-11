import React from "react";
import Rank from "./Rank";
import AdditionalInfo from "./AdditionalInfo";
interface PrincipalCard {
  favorites: number, rank: number, trailer: string, score: number, members: number, popularity: number, genres: any, synopsis: string, background: string, streaming: any, producers: any, scored_by: number, external: any,
}
export default function PrincipalCard({ favorites, rank, popularity, members, score, genres, synopsis, trailer, background, streaming, producers, scored_by, external }: PrincipalCard) {
  return ( 
    <section className="w-full p-1 mt-6 text-black dark:text-white bg-gray-300 rounded-lg dark:bg-[#333333] lg:p-4 lg:min-w-10/12 lg:w-10/12 min-x-10/12 mr- z-1">
      <Rank favorites={favorites} rank={rank} popularity={popularity} members={members} score={score} scored_by={scored_by} />
      <h1 className="mb-4 uppercase border-b-2 border-gray-500 text-md">Synopsis:</h1>
      <div className="flex flex-wrap gap-2 my-4 lg:flex-nowrap">
        {genres.map((date: { name: string }, index: number) => (
          <p key={index} className="px-4 rounded-full cursor-pointer bg-neutral-700 hover:bg-neutral-600">{date.name}</p>
        ))}
      </div>
      <p className="w-full text-sm">{synopsis}</p>
      <div className="flex justify-center w-full py-8">
        {trailer !== null && (
          <iframe
            title="YouTube Video Player"
            className="aspect-video"
            src={`${trailer}?autoplay=0`}
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
      <section>
        {background !== null && (
          <div>
            <h1 className="mb-4 border-b-2 border-gray-500">Background:</h1>
            <p>{background}</p>
          </div>
        )}
      </section>
      <AdditionalInfo streaming={streaming} producers={producers} external={external} />
    </section>
  )
}