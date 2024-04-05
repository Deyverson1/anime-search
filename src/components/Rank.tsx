import React from "react";
import { Star } from "../icons/Star";
interface RankProps {
  rank: number,
  popularity: number,
  members: number,
  score: number,
  scored_by: number,
  favorites: number
}
export default function Rank({ rank, popularity, members, score, scored_by, favorites }: RankProps) {
  return (
    <section className="flex items-center p-2 mb-8 rounded-md md:gap-x-8">
      <div className="flex flex-col items-center justify-center px-4 pr-6 border-r-2">
        {score && (<p className="flex items-center gap-x-2"><strong>{score}</strong><Star /> </p>)}
      </div>
      <div className="flex flex-wrap text-gray-100 gap-x-2 gap-y-2">
        <p className="px-3 bg-blue-500 rounded-full text-md">Ranked #<strong>{rank}</strong></p>
        <p className="px-3 bg-blue-500 rounded-full text-md">Popularity #<strong>{popularity}</strong></p>
        <p className="px-3 bg-blue-500 rounded-full text-md">Members <strong> {members.toLocaleString('en-US')}</strong></p>
        {favorites && (<p className="px-3 bg-blue-500 rounded-full text-md">Favorties {favorites.toLocaleString('en-US')}</p>)}
      </div>
    </section>
  )
}