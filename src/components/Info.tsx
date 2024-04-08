import React from "react";

interface InfoProps {
  year: number,
  titles: any,
  episodes: number,
  duration: string,
  rating: string,
}

export default function Info({ year, titles, episodes, duration, rating }: InfoProps) {
  return (
    <section className="w-full text-gray-900 md:max-w-64">
      <h1 className="pt-4 mb-2 text-lg font-bold text-gray-800 uppercase">Information</h1>
      {rating && (<h1><strong>Rating:</strong> {rating}</h1>)}
      {year && (<h1><strong>Year:</strong> {year}</h1>)}
      {episodes && (<h2><strong>Episodes:</strong> {episodes}</h2>)}
      {duration && (<h2><strong>Duration:</strong> {duration}</h2>)}
      {rating && year && episodes && duration
        ? ''
        : <h1>Information no disponible</h1>
      }
      <h3 className="pt-4 mb-2 text-lg font-bold text-gray-800 uppercase">Titles </h3>
      {titles && titles.map((dato: { type: string, title: string }, index: number) => (
        <article key={index}>
          <p><strong>{dato.type}</strong>: {dato.title}</p>
        </article>
      ))}
    </section>
  )
}