import React from "react";
import { useRef } from "react"
import { Link } from "react-router-dom";
interface HomeProps {
  setData: any,
}
export default function Header({ setData }: HomeProps) {
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

      Promise.all([fetch(animeAPI), fetch(mangaAPI)])
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
    <>
      <section className="top-0 flex flex-col w-full px-2 py-3 bg-cover bg-[#1d1e20] lg:px-40 "
      >
        <header className="flex flex-col items-center justify-between w-full lg:flex-row">
          <Link to="/" className="flex">
            <div className="flex items-center justify-center gap-x-2 lg:w-full">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="60" viewBox="0 0 100 100">
                <circle cx="77" cy="13" r="1" fill="#f1bc19"></circle><circle cx="50" cy="50" r="37" fill="#e6edb7"></circle><circle cx="83" cy="15" r="4" fill="#f1bc19"></circle><circle cx="87" cy="24" r="2" fill="#9f8066"></circle><circle cx="81" cy="76" r="2" fill="#fbcd59"></circle><circle cx="15" cy="63" r="4" fill="#fbcd59"></circle><circle cx="25" cy="87" r="2" fill="#9f8066"></circle><circle cx="19.5" cy="43.5" r="2.5" fill="#fff"></circle><circle cx="79.5" cy="33.5" r="1.5" fill="#fff"></circle><g><path fill="#ec795a" d="M32,53.5C32,41.626,41.626,32,53.5,32c9.755,0,17.981,6.502,20.61,15.405 C72.815,35.233,62.516,25.75,50,25.75c-13.393,0-24.25,10.857-24.25,24.25c0,12.516,9.483,22.815,21.655,24.11 C38.502,71.481,32,63.255,32,53.5z"></path><path fill="#472b29" d="M47.406,74.811c-0.024,0-0.049-0.001-0.075-0.004C34.629,73.454,25.05,62.79,25.05,50 c0-13.758,11.193-24.95,24.95-24.95c12.79,0,23.455,9.579,24.807,22.281c0.038,0.36-0.205,0.69-0.56,0.761 c-0.354,0.063-0.706-0.141-0.808-0.488C70.848,38.828,62.648,32.7,53.5,32.7c-11.469,0-20.8,9.331-20.8,20.8 c0,9.147,6.128,17.347,14.903,19.939c0.347,0.103,0.559,0.452,0.488,0.808C48.026,74.577,47.736,74.811,47.406,74.811z M50,26.45 c-12.985,0-23.55,10.564-23.55,23.55c0,9.717,5.856,18.133,14.393,21.713C35.01,67.633,31.3,60.854,31.3,53.5 c0-12.241,9.959-22.2,22.2-22.2c7.354,0,14.133,3.711,18.213,9.543C68.133,32.307,59.717,26.45,50,26.45z"></path></g><g><path fill="#ec795a" d="M55,72.3c-9.34,0-16.934-7.306-17.287-16.632c-0.176-4.636,1.523-9.083,4.784-12.523 c3.256-3.437,7.599-5.369,12.228-5.442l0.271-0.002c2.424,0,4.777,0.5,6.994,1.486c0.106,0.047,0.135,0.135,0.14,0.2 c0.003,0.041,0.003,0.179-0.132,0.268c-2.8,1.842-4.188,5.179-3.535,8.5c0.628,3.199,3.204,5.767,6.408,6.388 c0.542,0.104,1.09,0.158,1.63,0.158c1.898,0,3.749-0.667,5.211-1.879c0.06-0.049,0.124-0.074,0.192-0.074 c0.09,0,0.25,0.053,0.273,0.251c0.336,2.764-0.006,5.38-1.045,8.001c-2.636,6.65-8.755,11.083-15.588,11.293 C55.361,72.297,55.181,72.3,55,72.3z"></path><path fill="#472b29" d="M55,38.4L55,38.4c2.062,0,4.071,0.378,5.983,1.124c-2.613,2.063-3.864,5.421-3.207,8.765 c0.683,3.476,3.48,6.265,6.961,6.94c0.585,0.113,1.178,0.171,1.763,0.171c1.808,0,3.576-0.557,5.055-1.582 c0.182,2.375-0.172,4.647-1.074,6.923c-2.533,6.391-8.405,10.65-14.959,10.851C55.347,71.597,55.174,71.6,55,71.6 c-8.962,0-16.249-7.01-16.588-15.959c-0.168-4.445,1.462-8.713,4.592-12.015c3.126-3.298,7.292-5.153,11.73-5.224L55,38.4 M72.159,53.361h0.005H72.159 M55,37c-0.096,0-0.191,0.001-0.287,0.002c-9.973,0.158-18.078,8.725-17.7,18.692 C37.378,65.313,45.292,73,55,73c0.188,0,0.376-0.003,0.566-0.009c7.231-0.222,13.552-5.009,16.218-11.734 c1.161-2.93,1.408-5.722,1.089-8.343c-0.065-0.534-0.503-0.867-0.968-0.867c-0.219,0-0.444,0.074-0.638,0.235 C69.971,53.354,68.312,54,66.5,54c-0.489,0-0.989-0.047-1.497-0.145c-2.922-0.566-5.281-2.914-5.854-5.835 c-0.635-3.233,0.81-6.187,3.233-7.78c0.637-0.419,0.589-1.383-0.108-1.693C60.05,37.557,57.592,37,55,37L55,37z"></path></g><g><path fill="#472b29" d="M55,69.75c-7.261,0-13.382-5.192-14.555-12.346c-0.022-0.136,0.07-0.265,0.206-0.287 c0.134-0.023,0.265,0.07,0.287,0.207C42.071,64.234,47.985,69.25,55,69.25c6.299,0,11.774-4.042,13.624-10.058 c0.04-0.132,0.18-0.203,0.312-0.166c0.132,0.041,0.206,0.181,0.166,0.313C67.188,65.566,61.521,69.75,55,69.75z"></path></g><g><path fill="#472b29" d="M47.751,42.689c-0.086,0-0.17-0.045-0.216-0.125c-0.069-0.119-0.028-0.272,0.091-0.342 c2.231-1.29,4.781-1.973,7.374-1.973c0.138,0,0.25,0.112,0.25,0.25s-0.112,0.25-0.25,0.25c-2.505,0-4.968,0.659-7.124,1.906 C47.837,42.679,47.793,42.689,47.751,42.689z"></path></g><g><path fill="#472b29" d="M40.5,55.25c-0.138,0-0.25-0.112-0.25-0.25c0-4.395,1.939-8.528,5.319-11.342 c0.106-0.089,0.263-0.074,0.353,0.032c0.088,0.106,0.074,0.264-0.032,0.353c-3.267,2.718-5.14,6.712-5.14,10.957 C40.75,55.138,40.638,55.25,40.5,55.25z"></path></g><g><path fill="#472b29" d="M29.989,59.316c-0.101,0-0.195-0.061-0.233-0.16C28.757,56.555,28.25,53.811,28.25,51 c0-3.851,0.979-7.654,2.833-11.002c0.067-0.12,0.219-0.165,0.34-0.098c0.121,0.067,0.165,0.219,0.098,0.34 c-1.812,3.273-2.77,6.994-2.77,10.76c0,2.749,0.496,5.434,1.473,7.977c0.049,0.129-0.015,0.273-0.144,0.323 C30.049,59.312,30.019,59.316,29.989,59.316z"></path></g><g><path fill="#472b29" d="M60.001,30.623c-0.034,0-0.067-0.007-0.1-0.021C57.09,29.373,54.095,28.75,51,28.75 c-0.138,0-0.25-0.112-0.25-0.25s0.112-0.25,0.25-0.25c3.165,0,6.227,0.638,9.101,1.894c0.126,0.056,0.184,0.203,0.129,0.33 C60.189,30.567,60.097,30.623,60.001,30.623z"></path></g><g><path fill="#472b29" d="M32.501,38.438c-0.049,0-0.099-0.015-0.143-0.045c-0.113-0.078-0.142-0.234-0.063-0.348 c3.607-5.199,9.252-8.688,15.486-9.569c0.14-0.025,0.263,0.075,0.283,0.212s-0.076,0.264-0.212,0.282 c-6.097,0.864-11.617,4.275-15.146,9.36C32.658,38.401,32.581,38.438,32.501,38.438z"></path></g>
              </svg>
              <h1 className="text-xl italic font-bold text-gray-300">Animatic</h1>
            </div>
          </Link>
          <section className="flex justify-end w-10/12 gap-8">
            <div className="items-center justify-end hidden lg:flex ">
              <Link to="/" className="text-sm uppercase text-white rounded-lg px-4 py-2 bg-[#2f3237] hover:bg-[#43474d] hover:transition-all duration-300">Home</Link>
            </div>
            <form className="w-full lg:w-5/12">
              <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
              <div className="relative">
                <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
                  {/* <svg className="w-4 h-4 text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg> */}
                </div>
                <input ref={input} type="search" id="default-search" className="block w-full p-4 text-sm text-gray-200 bg-[#2f3237] rounded-full ps-10  placeholder-gray-200 " placeholder="Search Animes, Manga..." required />
                <div onClick={handleClick}>
                  <Link to="/results" className="text-gray-700 absolute end-2.5 bottom-2.5">
                    <button type="submit" className="px-4 py-2 text-sm font-medium bg-[#2f3237] rounded-lg hover:bg-[#43474d] focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                      <svg className="w-4 h-4 text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </form>
          </section>
        </header>
      </section>
    </>

  )
}