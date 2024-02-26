import React from "react";
import Rank from "./Rank";
import AdditionalInfo from "./AdditionalInfo";
interface PrincipalCard{
  favorites: number,
  rank: number,
  trailer: string,
  score: number,
  members: number,
  popularity: number,
  genres: any,
  synopsis: string,
  background: string,
  streaming: any,
  producers: any,
  scored_by: number,
  external: any, 
}
export default function PrincipalCard({ favorites, rank, popularity, members, score, genres, synopsis, trailer, background, streaming, producers, scored_by, external }: PrincipalCard) {
  return (
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
        {trailer !== null && (
          <iframe
            title="YouTube Video Player"
            width="560"
            height="315"
            src={trailer}
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
      <section>
        {background !== null && (
          <div>
            <h1 className="border-b-2 border-gray-500 mb-4">Background:</h1>
            <p>{background}</p>
          </div>
        )}
      </section>
      <AdditionalInfo streaming={streaming} producers={producers} external={external} />
    </section>
  )
}