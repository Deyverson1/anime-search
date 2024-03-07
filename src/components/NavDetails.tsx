import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { HomeIcon } from "../icons/HomeIcon";

interface Response { imageUrl: string, title: string, id: number }

export default function NavDetails() {
  const [responseFetch, setResponseFetch] = useState<Response[]>([])
  const [value, setValueInput] = useState<string>()
  const inputChange = useRef<HTMLInputElement>(null)
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault()
    const inputValue = inputChange.current?.value
    setValueInput(inputValue)
    const API = `https://api.jikan.moe/v4/anime?q=${inputValue}&sfw`
    if (inputChange.current && inputChange.current.value.trim() !== "" && inputValue !== undefined && inputValue?.length >= 3) {
      fetch(API)
        .then(res => res.json())
        .then(res => {
          const dataAnime = res.data.map((anime: { title: string, url: string, images: any, mal_id: number }) => ({
            title: anime.title,
            url: anime.url,
            imageUrl: anime.images.jpg.image_url,
            id: anime.mal_id
          }));
          setResponseFetch(dataAnime);
        }
        )
    }
  }
  function handleCleanInput() {
    setResponseFetch([])
    setValueInput('')
  }
  return (
    <section className="flex flex-col lg:flex-row">
      <nav className=" w-fit">
        <Link to={'/'}>
          <div className="flex items-center justify-center">
            <img className="w-1/2" src="/images/image.png" alt="" />
          </div>
        </Link>
      </nav>
      <section className="top-0 flex flex-col items-center justify-center w-full bg-cover lg:items-stretch "
      >
        <header className="flex flex-col items-center ">
          <form className="w-full pb-4 lg:w-8/12">
            <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
              <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input value={value} onChange={handleChange} ref={inputChange} type="search" id="default-search" className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg ps-10 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Animes..." required />
            </div>
          </form>
          <section className="justify- w-12/12 z-1 lg:right-24 lg:w-8/12">
          {responseFetch && value != '' && value != undefined && (
            <main className="z-10 flex-col items-center w-full px-2 py-2 overflow-y-scroll bg-neutral-900 lg:right-20 w-12/12 gap-x-2 lg:gap-x-4 max-h-56">
              {responseFetch !== null && responseFetch.map((dato: { imageUrl: string, title: string, id: number }, index: number) => (
                <Link key={index} to={`/anime/${dato.id}`}>
                  <article onClick={handleCleanInput} className="flex flex-1 max-w-full gap-1 space-x-0 over md:gap-x-10 lg:space-y-4 group md:space-y-0 lg:h-12">
                    <div className="flex flex-col col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform rounded-lg shadow-xl overflow-clip sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
                      <img
                        className="object-cover object-top transition duration-500 min-w-12 max-w-12 min-h-12 max-h-12 sm:h-full md:scale-110 md:group-hover:scale-105"
                        src={dato.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="hidden lg:block">
                      <p className="text-xs font-bold">{dato.title.length < 60 ? dato.title : dato.title.slice(0, 60) + '...'}</p>
                    </div>
                    <div className="block lg:hidden">
                      <p className="text-xs font-bold">{dato.title.length < 30 ? dato.title : dato.title.slice(0, 30) + '...'}</p>
                    </div>
                  </article>
                </Link>
              ))}
            </main>
          )}
        </section>
        </header>
        
      </section>

    </section>
  )
}