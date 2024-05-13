/**
 * The `HeaderContainer` function in TypeScript React fetches anime and manga data based on user input
 * and combines them before setting the data using the provided `setData` function.
 * @param {HeaderProps}  - The code you provided is a React functional component called
 * `HeaderContainer` that receives a prop `setData` of type `any`. Within this component, there is a
 * `handleClick` function that is triggered when a button is clicked. This function fetches data from
 * two different APIs (animeAPI and
 */
import React, { useRef } from "react";
import Header from "../dashboard/Header";
interface HeaderProps {
  setData: any,
}
export default function HeaderContainer({ setData }: HeaderProps) {
  //logic 
  const input = useRef<HTMLInputElement>(null);
  function handleClick(e: { preventDefault: () => void; }) {
    e.preventDefault();
    document.addEventListener('DOMContentLoaded', function () {
      setData('')
    })
    if (input.current && input.current.value.trim() !== "") {
      const value = input.current.value;
      const animeAPI = `https://api.jikan.moe/v4/anime?q=${value}&sfw`;
      const mangaAPI = `https://api.jikan.moe/v4/manga?q=${value}&sfw`;
      Promise.all([fetch(animeAPI), fetch(mangaAPI)]) //hacer ambos fetch al mismo tiempo y juntarles
        .then(responses => Promise.all(responses.map(response => response.json())))
        .then(data => {
          const animeData = data[0].data.map((anime: { title: string, url: string, images: any, mal_id: number, type: string, genres: any }) => ({
            title: anime.title,
            url: anime.url,
            imageUrl: anime.images.jpg.image_url,
            id: anime.mal_id,
            tipo: anime.type,
            genres: anime.genres
          }));

          const mangaData = data[1].data.map((manga: { title: string, url: string, images: any, mal_id: number, type: string, genres: any }) => ({
            title: manga.title,
            url: manga.url,
            imageUrl: manga.images.jpg.image_url,
            id: manga.mal_id,
            tipo: manga.type,
            genres: manga.genres
          }));
          const combinedData = [...animeData, ...mangaData];
          setData(combinedData);
        })
        .catch(error => console.error('Error fetching data:', error));
    }
  }
  return (
    //interface 
    <Header handleClick={handleClick} setData={setData} input={input} />
  )
}