import React from "react";

interface InfoProps{
  year: number,
  titles: any,
  episodes: number,
  duration: string,
  rating: string,
}

export default function Info({year, titles, episodes, duration, rating}: InfoProps){
  return(
    <section className="text-gray-900 max-w-64">
    <h1 className="pt-4 mb-4 uppercase border-b-2 text-md border-b-white">Information:</h1>
    <h1 className="py-1"><strong>Rating:</strong> {rating}</h1>
    <h1 className="py-1"><strong>Year:</strong> {year}</h1>
    <h2 className="py-1"><strong>Episodes:</strong> {episodes}</h2>
    <h2 className="py-1"><strong>Duration:</strong> {duration}</h2>
    <h3  className="pt-4 mb-4 uppercase border-b-2 text-md border-b-white">Titles: </h3>
    {titles.map(( dato: {type: string, title: string}, index: number) => (
      <article key={index}>
        <p className="py-1"><strong>{dato.type}</strong>: {dato.title}</p>
      </article>
    ))}
    </section>
  )
}