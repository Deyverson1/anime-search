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
    <main className="">
      <h1 className="text-center text-xl font-bold pb-4">{title}</h1>
      <section className="flex gap-x-2 gap-y-8 justify-center flex-wrap">
        {Array.isArray(response) && response !== null && response.length > 0 && response.map((data: {image: string, artistName: string, artist: string, liked: string}, index) => (
          <article key={index} className=" rounded-lg hover:bg-[#1a1a1a]" style={{ backgroundColor: '' }}>
            <div className="p-2"><img src={data.image} className="h-56 rounded-lg w-56" /></div>
            <div className="px-2 text-center">
              <h1 className="font-bold pt-2 pb-2 text-lg">{data.artistName}</h1>
              <div>
                <a target="blank" href={data.artist}>
                  <button type="button" className="text-white bg-[#222222] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2 gap-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-circle" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" /></svg>
                    Artist
                  </button>
                </a>
                <button onClick={() => handleLike(index)} type="button" className="text-white bg-[#222222] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-2.5 py-2 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2 gap-x-2">
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