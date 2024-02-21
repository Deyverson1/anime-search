// import { useState } from "react"
import { useRef } from "react"
import { Link } from "react-router-dom";
import Recommend from "./Recommend";
// import { Github } from "../icons/Github"
export default function Home({ setData }) {
  const input = useRef();
  function handleClick(e) {
    e.preventDefault();
    const value = input.current.value;
    const API = `https://api.jikan.moe/v4/anime?q=${value}&sfw`;
    fetch(API)
      .then(response => response.json())
      .then(data => {
        const animeData = data.data.map(anime => ({
          title: anime.title,
          url: anime.url,
          imageUrl: anime.images.jpg.image_url
        }));
        setData(animeData);
      })
      .catch(error => console.error('Error fetching data:', error));
  }
  // https://images5.alphacoders.com/133/1339874.png
  // style={{
  // backgroundImage: 'url("https://a-static.besthdwallpaper.com/mikasa-ackerman-4-wallpaper-1920x1080-83559_48.jpg")',
  // backgroundSize: '210vh 100vh'}}
  return (
    <>
      <section className="flex flex-col top-0 w-full bg bg-cover"
      >
        <header className="w-full flex flex-col pt-8 items-center">
          <form className="w-8/12 pb-4">
            <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input ref={input} type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Animes..." required />

              <button onClick={handleClick} type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>

            </div>
          </form>
        </header>
      </section>
    </>

  )
}