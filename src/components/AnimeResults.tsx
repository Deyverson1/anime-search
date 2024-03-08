import React from "react"
import { Link } from "react-router-dom"
interface AnimeResultsProps {
  data: { imageUrl: string, title: string, id: number }[] | null,
}

export default function AnimeResults({ data }: AnimeResultsProps) {
  return (
    <section className="px-1 mt-20">
      {data !== null && data !== undefined && data.length > 3
        ? <h1 className="pb-4 pl-6 text-xl font-bold text-black">Anime Results:</h1>
        : <h1 className="hidden text-black">none</h1>
      }
      <main className="flex flex-wrap justify-center flex-1 w-full px-2 gap-y-4 gap-x-4 lg:gap-y-4">
        {data !== null && data.map((dato: { imageUrl: string, title: string, id: number }, index: number) => (
          <Link key={index} to={`/anime/${dato.id}`}>
            <article className="flex flex-col flex-1 space-x-0 md:gap-x-10 lg:space-y-4 group md:space-y-0 lg:h-72 max-w-52 min-w-52">
              <div className="flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-300 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
                <img
                  className="object-cover object-top w-full transition duration-500 min-w-32 min-h-52 max-h-52 sm:h-full md:scale-110 md:group-hover:scale-105"
                  src={dato.imageUrl}
                  alt=""
                />
              </div>
              <div className="">
                <p className="font-bold text-black text-md">{dato.title.length < 60 ? dato.title : dato.title.slice(0, 60) + '...'}</p>
              </div>
            </article>
          </Link>
        ))}
      </main>
    </section>
  )
} 
