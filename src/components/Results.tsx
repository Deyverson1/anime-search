import React, { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { Filter } from "../icons/Filter";
import { Refresh } from "../icons/Refresh";
import { GokuIcon } from "../icons/Goku";
import { NotFound } from "../icons/NotFound";
import FilterOptions from "./FilterOptions";
interface AnimeData {
  imageUrl: string;
  title: string;
  id: number;
  tipo: string;
  genres: any
}

interface AnimeResultsProps {
  data: AnimeData[] | null;
}
export default function AnimeResults({ data }: AnimeResultsProps) {
  const [filteredData, setFilterData] = useState<AnimeData[] | null>(null)
  const [count, setCount] = useState(20)
  const selectTypeRef = useRef<HTMLSelectElement>(null);
  const selectGeneroRef = useRef<HTMLSelectElement>(null);

  console.log(filteredData)


  useEffect(() => {
    if (data) {
      setFilterData(data);
    }
  }, [data]);
  useEffect(() => {
    if (data) {
      const mount = filteredData ? Object.keys(filteredData).length : 0;
      setCount(mount)
    }
  }, [filteredData])

  return (
    <>
      <div className="flex items-center px-4 pb-6 md:px-32 pt-7 gap-x-4">
        <GokuIcon />
        <h1 className="text-xl font-light text-center text-gray-800 md:text-2xl">Complete list of animes</h1>
      </div>
      <FilterOptions selectGeneroRef={selectGeneroRef} selectTypeRef={selectTypeRef} setFilterData={setFilterData} data={data} />
      {count < 1 && ( //para validar ningún resultado 
        <div className="flex flex-col items-center justify-center px-2 py-10 text-gray-800">
          <main className="flex flex-col items-center justify-center py-10 border border-gray-500 shadow-2xl cursor-default w-fit rounded-xl">
            <h1 className="text-3xl font-bold md:text-5xl hover:text-orange-400">No Results Found</h1>
            <h2 className="w-7/12 text-center">The requested anime could not be found. Try adjusting the filter or perform a new search.</h2>
            <div className="duration-1000 cursor-pointer hover:scale-110">
              <NotFound />
            </div>
          </main>
        </div>
      )}
      {data !== null && data !== undefined && data.length > 0 && (
        <section className="px-1 py-4">
          <main className="flex flex-wrap flex-1 w-full px-2 md:px-28 lg:justify-center gap-y-8 gap-x-4 lg:gap-y-4">
            {data !== null && filteredData !== null && filteredData.map((dato: { imageUrl: string, title: string, id: number, tipo: string }, index: number) => (
              <Link key={index} to={`/${['TV', 'Movie', 'Special', 'PV', 'ONA', 'OVA'].includes(dato.tipo) ? 'anime' : 'manga'
                }/${dato.id}`}>
                <article className="flex flex-col gap-y-2">
                  <section className="bg-gray-200 rounded-md">
                    <div className="flex items-end m-1 bg-cover rounded-md hover:scale-95 hover:duration-100 h-60 w-44" style={{ backgroundImage: `url(${dato.imageUrl})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                      {/* <img src={dato.imageUrl} alt="" className="p-1 duration-500 rounded-lg w-44 h-60 hover:scale-105" /> */}
                      {dato.tipo && dato.tipo.length > 0 && (
                        <p className={`text-white mb-2 w-fit ml-2 uppercase px-3 rounded-full bg-${dato.tipo === "OVA" ? "orange-500" : dato.tipo === 'Movie' ? 'red-600' : dato.tipo === 'To' ? "green-600" : dato.tipo === 'PV' ? 'green-600' : 'blue-500'} text-xs`}>{dato.tipo}</p>
                      )}
                    </div>
                  </section>
                  <div className="flex flex-wrap justify-center w-full">
                    {/* <p className="w-2/12 m-0 text-base tracking-tighter text-black dark:text-white lg:min-w-80 lg:w-auto text-md">{dato.title.length < 35 ? dato.title : dato.title.slice(0, 35) + '...'}</p> */}
                    <p className="text-center text-black max-w-44" style={{ lineHeight: '17px' }}>{dato.title}</p>
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
