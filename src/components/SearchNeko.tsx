import React from "react"
import { useEffect, useState } from "react"
import { Heart } from "../icons/Heart"
import { FilledHeart } from "../icons/FilledHeart"

interface SearchNekoProps {
  category: string,
  amount: number,
  title: string,
}

interface Response {
  title: string,
  image: string,
  liked?: boolean
}

export default function SearchNeko({category, amount, title}: SearchNekoProps){

  const [response, setResponse] = useState<Response | null>(null)

  useEffect(() => {
    fetch(`https://nekos.best/api/v2/${category}?amount=${amount}`)
      .then(response => response.json())
      .then(res => {
        const data = res.results.map((dato: {url: string, artist_href: string, artist_name: string}) => ({
          image: dato.url,
          artist: dato.artist_href,
          artistName: dato.artist_name
        }))
        setResponse(data)
      })
      .catch(error => console.error('New error in fetch NekoPic', error))
  }, [])

  function handleLike(index: number) {
    setResponse(prevResponse => {
      if(prevResponse === null){
        return null
      }
      const updatedResponse: Response[] = [...prevResponse];
      updatedResponse[index] = {
        ...updatedResponse[index],
        liked: !updatedResponse[index].liked
      };
      return updatedResponse;
    });
  }

  return(
    <main className="hidden lg:block">
      <h1 className="pb-4 text-xl font-bold text-center text-black dark:text-white">{title}</h1>
      <section className="flex flex-col flex-wrap items-center justify-center gap-x-2 gap-y-4">
        {Array.isArray(response) && response !== null && response.length > 0 && response.map((data: {image: string, artistName: string, artist: string, liked: string}, index) => (
          <article key={index} className="rounded-lg " style={{ backgroundColor: '' }}>
            <div className="p-2 text-black"><img src={data.image} className="w-56 h-56 rounded-lg" /></div>
            <div className="px-2 text-center">
              <h1 className="pb-2 text-lg font-bold text-black dark:text-gray-300">{data.artistName}</h1>
              <div>
                <a target="blank" href={data.artist}>
                  <button type="button" className="text-white bg-blue-600 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-blue-400 me-2 mb-2 gap-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-circle" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" /></svg>
                    Artist
                  </button>
                </a>
                <button onClick={() => handleLike(index)} type="button" className="text-white bg-red-500 hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-2.5 py-2 text-center inline-flex items-center dark:focus:ring-red-400 dark:bg-red-500 me-2 mb-2 gap-x-2">
                  {!data.liked
                    ? <Heart />
                    : <FilledHeart />}
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}