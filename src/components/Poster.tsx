import React from "react";
import { FilledHeart } from "../icons/FilledHeart";
import { Check } from "../icons/Check";
import Info from "./Info";

interface PosterProps{
  titles: string,
  image: string,
  status: string,
  year: number,
  episodes: number, 
  duration: string,
  rating: string
}

export default function Poster({titles, image, status, year, episodes, duration, rating}: PosterProps){
  return(
    <main className="pt-20  lg:pl-40">
    <div className="w-64 p-1 bg-white rounded-md">
      <img src={image} alt={`Image from ${titles}`} className="w-64 rounded-md aspect-auto" />
    </div>
    <p className="py-2 my-4 text-center uppercase bg-red-600 rounded-md">{status}</p>
    <section className="box-border flex justify-between flex-1 w-64 gap-x-4">
      <button className="flex items-center justify-center p-2 text-black bg-white rounded-md  gap-x-2">
        <div className="p-1 bg-red-600 rounded-full"><FilledHeart /></div>
        <div className="text-xs leading-3"> <strong className="text-sm uppercase">agregar</strong> a favoritos </div>
      </button>
      <button className="flex items-center justify-center p-2 text-black bg-white rounded-md  gap-x-2">
        <div className="p-1 bg-blue-600 rounded-full"><Check /></div>
        <div className="text-xs leading-3"> <strong className="text-sm uppercase">seguir</strong> Anime </div>
      </button>
    </section>
    <Info rating={rating} year={year} titles={titles} duration={duration} episodes={episodes}/>
  </main>
  )
}