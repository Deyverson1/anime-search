import React from "react"
import { Link } from "react-router-dom"
interface AnimeResultsProps {
  data: { imageUrl: string, title: string, id: number }[] | null,
}

export default function AnimeResults({ data }: AnimeResultsProps) {
  return (
   <>
    {data !== null && data !== undefined && data.length > 0 &&(
      <section className="px-1 py-14">
      {data !== null && data !== undefined && data.length > 3
        ? <h1 className="pb-4 pl-2 text-xl font-bold text-black lg:text-center dark:text-white">Anime Results:</h1>
        : <h1 className="hidden text-black">none</h1>
      }
      <main className="flex flex-col flex-wrap flex-1 w-full px-2 lg:items-center lg:justify-center gap-y-8 gap-x-4 lg:gap-y-1">
        {data !== null && data.map((dato: { imageUrl: string, title: string, id: number }, index: number) => (
          <Link key={index} to={`/anime/${dato.id}`}>
            <article className="flex items-center justify-center flex-1 space-x-0 gap-x-2 md:gap-x-10 group md:space-y-0">
              <div className="flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-300 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
                <img
                  className="object-cover object-top w-16 transition duration-500 aspect-square lg:min-w-16 lg:max-w-16 lg:w-full lg:min-h-22 lg:max-h-22 sm:h-full md:scale-110 md:group-hover:scale-105"
                  src={dato.imageUrl}
                  alt=""
                />
              </div>
              <div className="flex w-full">
                <p className="w-10/12 m-0 text-black dark:text-white lg:min-w-80 lg:w-auto text-md">{dato.title.length < 35 ? dato.title : dato.title.slice(0, 35) + '...'}</p>
              </div>
            </article>
          </Link>
        ))}
      </main>
    </section>
    )}
    </>
  )
} 
