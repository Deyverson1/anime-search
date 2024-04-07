import React from "react"
import { useEffect, useState } from "react"
import { Heart } from "../icons/Heart"
import { FilledHeart } from "../icons/FilledHeart"
interface SearchArtProps {
  response: any,
  handleLike: any
}
export default function Art({ response, handleLike }: SearchArtProps) {
  return (
    <main className="hidden pt-8 lg:block">
      <h1 className="text-lg font-bold text-gray-800 uppercase">Art explore</h1>
      <section className="flex flex-col flex-wrap items-start justify-center gap-y-4">
        {Array.isArray(response) && response !== null && response.length > 0 && response.map((data: { image: string, artistName: string, artist: string, liked: string }, index) => (
          <article key={index} className="rounded-lg " style={{ backgroundColor: '' }}>
            <div className="text-black"><img src={data.image} className="w-56 h-56 rounded-lg" /></div>
            <div className="px-2 text-center">
              <h1 className="pb-2 text-lg font-bold text-gray-800 ">{data.artistName}</h1>
              <div>
                <a target="blank" href={data.artist}>
                  <button type="button" className="text-white bg-gray-600 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2 text-center inline-flex items-center  me-2 mb-2 gap-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-circle" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" /></svg>
                    Artist
                  </button>
                </a>
                <button onClick={() => handleLike(index)} type="button" className="text-white bg-red-500 hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-2.5 py-2 text-center inline-flex items-center dark:focus:ring-red-400  me-2 mb-2 gap-x-2">
                  {!data.liked
                    ? <Heart />
                    : <FilledHeart />}
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}