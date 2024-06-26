import React from "react";
import { FilledHeart } from "../icons/FilledHeart";
import { Check } from "../icons/Check";
import Info from "./Info";
import MoreInfo from "./MoreInfo";
import RelationsContainer from "../Container/RelationsContainer";

interface PosterProps {
  titles: string,
  image: string,
  status: string,
  year: number,
  episodes: number,
  duration: string,
  rating: string,
  external: string
  streaming: string
  producers: string
  type: string
}

export default function Poster({ type, titles, image, status, year, episodes, duration, rating, external, streaming, producers }: PosterProps) {
  return (
    <main className="px-2 pt-20  lg:pl-40">
      <div className="flex flex-col items-center justify-center">
        <div className="relative w-64 p-1 bg-white rounded-md">
          <img src={image} alt={`Image from ${titles}`} className="z-50 w-64 rounded-md aspect-auto" />
        </div>
        <p className="px-2 py-2 my-4 text-center uppercase bg-red-600 rounded-md w-fit">{status}</p>
      </div>
    
      {/* <section className="box-border flex justify-between flex-1 w-64 gap-x-4">
      <button className="flex items-center justify-center p-2 text-black bg-white rounded-md gap-x-2">
        <div className="p-1 bg-red-600 rounded-full"><FilledHeart /></div>
        <div className="text-xs leading-3"> <strong className="text-sm uppercase">agregar</strong> a favoritos </div>
      </button>
      <button className="flex items-center justify-center p-2 text-black bg-white rounded-md gap-x-2">
        <div className="p-1 bg-blue-600 rounded-full"><Check /></div>
        <div className="text-xs leading-3"> <strong className="text-sm uppercase">seguir</strong> Anime </div>
      </button>
    </section> */}
      <Info rating={rating} year={year} titles={titles} duration={duration} episodes={episodes} />
      <MoreInfo streaming={streaming} producers={producers} external={external} />
      <RelationsContainer type={type} /> //relations
    </main>
  )
}