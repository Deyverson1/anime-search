import React from "react"
import { Link } from "react-router-dom"
interface AnimeResultsProps {
  data: { imageUrl: string, title: string, id: number, genres: any }[] | null,
}

export default function AnimeResults({ data }: AnimeResultsProps) {
  return (
    <>
      {data !== null && data !== undefined && data.length > 0 && (
        <section className="px-1 py-7">
          <div className="flex items-center px-4 pb-8 md:px-36 gap-x-4">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
              <linearGradient id="9LDYQz02nRtMJxX0S4_zJa_CrFauNzzVBcJ_gr1" x1="24" x2="24" y1="34.595" y2="8.937" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2a373e"></stop><stop offset="1" stop-color="#636f75"></stop></linearGradient><path fill="url(#9LDYQz02nRtMJxX0S4_zJa_CrFauNzzVBcJ_gr1)" d="M17,37L0,32c0,0,5-3,9-3c-2-2-9-4-9-4s4-4,11-4c0,0-4-3-8-4c2-1,4-2,7-2c0,0-3-6-10-8	c6-3,17-2,22,4c0,0,1-7-3-11c8,1,14,7,13,14c4,0,6,4,6,4l10-3l-5,6l5,2l-9,7l8,2l-9,4l3,3c0,0-5,0-9,2S17,37,17,37z"></path><linearGradient id="9LDYQz02nRtMJxX0S4_zJb_CrFauNzzVBcJ_gr2" x1="24.5" x2="24.5" y1="29.553" y2="43.961" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#eeb597"></stop><stop offset="1" stop-color="#ffd0ad"></stop></linearGradient><path fill="url(#9LDYQz02nRtMJxX0S4_zJb_CrFauNzzVBcJ_gr2)" d="M37.027,29.217L34,33c0,0,0-2-1-6	c0,0-5,4-8,6c2-4,1-8,1-8s-5,3-6,7c-2-3-1-7-1-7s-3,4-3,9c-1.169-0.39-2.638-2.299-3.586-4.719C11.75,29.016,10.966,29.486,11,31	v3.892c0,0.687,0.361,1.325,0.95,1.678l3.327,1.996l0.547,2.599c0.113,0.537,0.423,1.011,0.87,1.33l5.881,4.201	C22.851,46.894,23.183,47,23.522,47h0.861h0.478H25v-0.022c0.289-0.025,0.57-0.112,0.808-0.282l5.881-4.201	c0.446-0.319,0.757-0.794,0.87-1.33l0.458-2.175l4.033-2.42c0.589-0.353,0.95-0.991,0.95-1.678V31	C38.026,29.817,37.552,29.275,37.027,29.217z"></path><polygon fill="#f5e9e8" points="18,32 17,33 18,37 22,37 22,35"></polygon><circle cx="21" cy="35" r="1" fill="#212121"></circle><polygon fill="#405056" points="23,35 22,35 17,32 15,33 16,30 18,31"></polygon><polygon fill="#f5e9e8" points="30,32 31,33 30,37 26,37 26,35"></polygon><circle cx="27" cy="35" r="1" fill="#212121"></circle><polygon fill="#405056" points="25,35 26,35 31,32 33,33 32,30 30,31"></polygon><polygon fill="#bc8771" points="12,32 13,36 14,37 15.021,36.926 14,34"></polygon><polygon fill="#bc8771" points="37,32 36,36 35,37 33.979,36.926 35,34"></polygon><path fill="#bc8771" d="M22.053,39h4c0,0-1,2-2,2S22.053,39,22.053,39z"></path><path fill="#bc8771" d="M26,37h6c0,0-1.5,2-3,2S26,37,26,37z"></path><path fill="#bc8771" d="M16.053,37H22c0,0-1.487,2-2.973,2S16.053,37,16.053,37z"></path><path fill="#bc8771" d="M21,42c0.536,1.179,1.673,2,3,2c1.327,0,2.464-0.821,3-2H21z"></path>
            </svg>
            <h1 className="font-light text-center text-gray-700 md:text-2xl dark:text-white">Complete list of animes</h1>
          </div>
          <main className="flex flex-wrap flex-1 w-full px-2 md:px-28 lg:justify-center gap-y-8 gap-x-4 lg:gap-y-4">
            {data !== null && data.map((dato: { imageUrl: string, title: string, id: number, genres: string }, index: number) => (
              <Link key={index} to={`/anime/${dato.id}`}>
                <article className="flex flex-col gap-y-2">
                  <section className="bg-gray-200 rounded-md">
                    <div className="flex items-end m-1 bg-cover rounded-md hover:scale-95 hover:duration-100 h-60 w-44" style={{ backgroundImage: `url(${dato.imageUrl})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                      {/* <img src={dato.imageUrl} alt="" className="p-1 duration-500 rounded-lg w-44 h-60 hover:scale-105" /> */}
                      {dato.genres && dato.genres.length > 0 && (
                        <p className={`text-white mb-2 w-fit ml-2 uppercase px-3 rounded-full bg-${dato.genres === "OVA" ? "orange-500" : dato.genres === 'Movie' ? 'red-600' : dato.genres === 'TV Special' ? 'pink-500'  : dato.genres === 'PV' ? 'green-600' : 'blue-500'} text-xs`}>{dato.genres}</p>
                      )}
                    </div>
                  </section>
                  <div className="flex flex-wrap justify-center w-full">
                    {/* <p className="w-2/12 m-0 text-base tracking-tighter text-black dark:text-white lg:min-w-80 lg:w-auto text-md">{dato.title.length < 35 ? dato.title : dato.title.slice(0, 35) + '...'}</p> */}
                    <p className="text-center text-black max-w-44" style={{lineHeight: '17px'}}>{dato.title}</p>
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
