import React from "react";
import { useRef } from "react"

interface HomeProps {
  setData: any,
}

export default function Home({ setData }: HomeProps) {
  const input = useRef<HTMLInputElement>(null);
  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    document.addEventListener('DOMContentLoaded', function(){
      setData('')
    })
    if (input.current && input.current.value.trim() !== "") {
      const value = input.current.value;
      const API = `https://api.jikan.moe/v4/anime?q=${value}&sfw`;
      fetch(API)
        .then(response => response.json())
        .then(data => {
          console.log(data.data)
          const animeData = data.data.map((anime: { title: string, url: string, images: any, mal_id: number }) => ({
            title: anime.title,
            url: anime.url,
            imageUrl: anime.images.jpg.image_url,
            id: anime.mal_id
          }));
          setData(animeData);
        })
        .catch(error => console.error('Error fetching data:', error));
    }

  }
  return (
    <>
      <section className="top-0 flex flex-col w-full px-2 py-4 bg-cover lg:px-40" style={{backgroundImage: "url('https://cdna.artstation.com/p/assets/images/images/041/571/736/large/leys-1.jpg?1632086359')"}}
      >
        <header className="flex flex-col items-center justify-between w-full lg:flex-row">
          <div className="flex pb-2 lg:w-2/12">
              <h1 className="w-full text-2xl font-semibold">このはアニメ</h1>
          </div>
          <section className="flex justify-end w-full gap-8">
          <div className="items-center justify-end hidden lg:flex">
            <a href="/" className="text-lg text-gray-300">Home</a>
          </div>
          <form className="w-full lg:w-5/12">
            <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
              <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input ref={input} type="search" id="default-search" className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg ps-10 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Animes..." required />
              <button onClick={handleClick} type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
          </form>
          </section>
        </header>
      </section>
    </>

  )
}