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
    <section className="flex items-center rounded-md mb-8 p-2 gap-x-8 border-white border-2">
      <div className="flex flex-col items-center justify-center px-4 pr-6 border-r-2">
        <p className="bg-purple-600 text-lg px-4 rounded-sm">Score</p>
        <p className="flex gap-x-2 items-center"><strong>{score}</strong><Star /> </p>
        <p className="text-sm text-center">{scored_by.toLocaleString('en-US')} users</p>
      </div>
      <div className="flex gap-x-2 gap-y-2 flex-wrap">
        <p className="bg-blue-600 px-3 text-md rounded-sm">Ranked #<strong>{rank}</strong></p>
        <p className="bg-yellow-600 px-3 text-md rounded-sm">Popularity #<strong>{popularity}</strong></p>
        <p className="bg-green-600 px-3 text-md rounded-sm">Members <strong> {members.toLocaleString('en-US')}</strong></p>
        <p className="bg-red-600 px-3 text-md rounded-sm">Favorties {favorites.toLocaleString('en-US')}</p>
      </div>
    </section>
  )
}