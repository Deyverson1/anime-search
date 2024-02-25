import React from "react"
import { Link } from "react-router-dom"
interface AnimeResultsProps {
  data: { imageUrl: string, title: string, id: number }[] | null,
}

export default function AnimeResults({ data }: AnimeResultsProps) {
  return (
    <section className="px-1 lg:pt-20 lg:px-40">
      {data ? <h1 className="hidden"></h1> : <h1>Results</h1>}
      <main className=" flex justify-center w-full gap-y-4 gap-x-2 lg:gap-x-4 lg:gap-y-4  flex-wrap flex-1">
        {data !== null && data.map((dato: { imageUrl: string, title: string, id: number }, index: number) => (
          <Link key={index} to={`/anime/${dato.id}`}>
            <article  className="flex flex-col flex-1 md:gap-x-10  space-x-0 lg:space-y-4 group md:space-y-0 lg:h-72 max-w-36">
            <div className=" flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
              <img
                className="object-cover object-top min-w-32 w-full min-h-52 max-h-52 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
                src={dato.imageUrl}
                alt=""
              />
            </div>
            <div className="">
              <p className="text-xs font-bold">{dato.title.length < 60 ? dato.title : dato.title.slice(0, 60) + '...'}</p>
            </div>
          </article>
          </Link>
        ))}
      </main>
    </section>
  )
} 
