import React from "react";
import { dataBase } from "../../database/database";
import { Link } from "react-router-dom";
function Recommend() {
  return (
    <section className="px-2 py-8 ">
      <h1 className="pb-6 text-xl font-bold text-center text-gray-800 uppercase ">Recommended</h1>
      <section className="flex flex-wrap justify-center flex-1 gap-y-8 lg:gap-y-8 gap-x-1 lg:gap-x-2">
        {
          dataBase.map(({ title, image, subTitle, id }) => (
            <Link key={title} to={`/anime/${id}`}>
              <article className="flex flex-col flex-1 space-x-0 space-y-2 md:gap-x-4 lg:space-y-1 group md:space-y-0 lg:h-80">
                <div className="flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
                  <img
                    className="object-cover object-top transition duration-500 max-w-44 lg:min-w-52 lg:w-full min-h-72 max-h-72 sm:h-full md:scale-110 md:group-hover:scale-105"
                    src={image}
                    alt=""
                  />
                </div>
                <div>
                  <p className="font-bold text-gray-800 text-md">{title}</p>
                  <p className="text-gray-700">{subTitle}</p>
                </div>
              </article>
            </Link>
          ))
        }
      </section>
    </section>
  )
}
export default Recommend;