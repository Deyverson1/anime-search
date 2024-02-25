import React from "react";
import { FilledHeart } from "../icons/FilledHeart";
import { Check } from "../icons/Check";

interface PosterProps{
  titles: string,
  image: string,
  status: string
}

export default function Poster({titles, image, status}: PosterProps){
  return(
    <main className="absolute z-10 top-1/4 left-40">
    <div className="rounded-md p-1 bg-white">
      <img src={image} alt={`Image from ${titles}`} className="rounded-md w-64" />
    </div>
    <p className="my-4 text-center py-2 rounded-md bg-red-600 uppercase">{status}</p>
    <section className="flex justify-between gap-x-4 box-border w-64 flex-1">
      <button className="w-full p-2 rounded-md bg-white text-black justify-center gap-x-2 flex items-center">
        <div className="rounded-full p-1 bg-red-600"><FilledHeart /></div>
        <div className="text-xs leading-3"> <strong className="uppercase text-sm">agregar</strong> a favoritos </div>
      </button>
      <button className="w-full p-2 rounded-md bg-white text-black justify-center gap-x-2 flex items-center">
        <div className="rounded-full p-1 bg-blue-600"><Check /></div>
        <div className="text-xs leading-3"> <strong className="uppercase text-sm">seguir</strong> Anime </div>
      </button>
    </section>
  </main>
  )
}