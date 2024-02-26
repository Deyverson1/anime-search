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
    <>
    <h1 className="pt-4">Information:</h1>
    <h1>Rating: {rating}</h1>
    <h1>Year: {year}</h1>
    <h2>Episodes: {episodes}</h2>
    <h2>Duration: {duration}</h2>
    <h3>Titles: </h3>
    {titles.map(( dato: {type: string, title: string}, index: number) => (
      <article key={index}>
        <p><strong>{dato.type}</strong>: {dato.title}</p>
      </article>
    ))}
    </>
  )
}