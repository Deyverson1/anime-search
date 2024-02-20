import { useState } from "react"
import { useRef } from "react"
import { Github } from "../icons/Github"
export default function Home() {
  const [data, setData] = useState([])
  const input = useRef()
  function handleClick(e) {
    console.log(input.current.value)
    e.preventDefault();
    const value = input.current.value
    const API = `https://api.jikan.moe/v4/anime?q=${value}&sfw`;
    fetch(API)
      .then(response => response.json())
      .then(data => {
        const animeData = data.data.map(anime => ({
          title: anime.title,
          url: anime.url,
          imageUrl: anime.images.jpg.image_url
        }));
        setData(animeData)
      })
      .catch(error => console.error('Error fetching data:', error));
  }
  return (
    <section className="flex  w-full bg min-h-screen pt-12 " >
      <section className="w-full flex-col items-center flex rounded-xl bg-cover" >
        <section className="w-full justify-center text-black dark:text-white flex gap-x-16">
          <div>
            <h1 className="text-xl text-yellow-600">Bienvenidos a Anime Search!</h1>
            <p >Pagina web dedicada a la búsqueda de animes</p>
            <h4 >Realizada como Project for Learning </h4>
            <h5 >Esta basada en <a href="https://jikan.moe/" target="blank"><strong className="text-yellow-600 underline">Jikan API</strong></a></h5>
          </div>
          <div className="flex items-center justify-center">
            <a href="https://github.com/Deyverson1" target="blank"> <div className="flex items-center gap-2 underline"><Github /> Deyverson1</div></a>
          </div>

        </section>
        <section className="w-full p-4 flex flex-col">
          <header className="w-full flex flex-col items-center">
            <h1 className='text-xl text-center py-8 text-black dark:text-yellow-600'>Anime Search!</h1>
            <form className="w-6/12 pb-4">
              <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </div>
                <input ref={input} type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                <button onClick={handleClick} type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
              </div>
            </form>
          </header>
          <main className=" flex pt-8 justify-center w-full gap-x-4 gap-y-8 max-h-screen flex-wrap flex-1">
            {data.map((dato, index) => (
              <article key={index} className="flex p-2 flex-col bg-gray-800 rounded-lg justify-start items-center">
                <div className="rounded-lg">
                  <img src={dato.imageUrl} alt={`Picture from ${dato.title}`} className="p-1 rounded-lg w-56 h-72 object-cover" />
                </div>
                <h1 className="text-sm font-bold py-2 text-white max-w-48" >{dato.title.length < 80 ? dato.title : dato.title.slice(0, 80) + '...'}</h1>
              </article>
            ))}
          </main>
        </section>
      </section>

    </section>
  )
}