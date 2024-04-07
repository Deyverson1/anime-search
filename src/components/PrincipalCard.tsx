import React from "react";
import Rank from "./Rank";
import Characters from "./Characters";
interface PrincipalCard {
  type: string, favorites: number, rank: number, trailer: string, score: number, members: number, popularity: number, genres: any, synopsis: string, background: string, scored_by: number,
}
export default function PrincipalCard({ type, favorites, rank, popularity, members, score, genres, synopsis, trailer, background, scored_by }: PrincipalCard) {
  // console.log(type)
  return (
    <section className="w-full p-1 mt-6 text-black bg-gray-100 rounded-md shadow-md shadow-current lg:p-4 lg:min-w-10/12 lg:w-10/12 min-x-10/12 mr- z-1">
      <Rank favorites={favorites} rank={rank} popularity={popularity} members={members} score={score} scored_by={scored_by} />
      <h1 className="mb-4 text-lg font-bold text-gray-800">Synopsis</h1>
      <div className="flex flex-wrap gap-2 my-4 lg:flex-nowrap">
        {genres && genres.map((date: { name: string }, index: number) => (
          <p key={index} className="px-4 bg-[#2f3237] text-gray-100 rounded-full cursor-pointer hover:bg-[#43474d]">{date.name}</p>
        ))}
      </div>
      <p className="w-full text-sm">{synopsis}</p>
      <div className="flex justify-center w-full py-8">
        {trailer && trailer !== null && (
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
            <h1 className="mb-4 text-lg font-bold text-gray-800">Background</h1>
            <p>{background}</p>
          </div>
        )}
      </section>
      <Characters type={type} />
    </section>
  )
}