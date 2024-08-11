/* The code you provided is a React functional component named `Recommend`. Here's a breakdown of what
the code is doing: */

import React from "react";
import { dataBase } from "../../database/database";
import { Link } from "react-router-dom";
function Recommend() {
  return (
    <section className="flex flex-col py-8 mt-10">
      <h1 className="pb-6 text-xl font-bold text-center text-gray-800 uppercase ">Recommended</h1>
      <section className="flex flex-col flex-1 m-2 md:m-auto md: gap-y-8 lg:gap-y-8 gap-x-1 lg:gap-x-2">
        {
          dataBase.map(({ title, image, subTitle, id }) => (
            <Link key={title} to={`/anime/${id}`}>
              <article className="flex flex-1 gap-4 space-x-0 md:space-y-2 md:flex-col md:gap-x-0 lg:space-y-1 group lg:h-80">
                <div className="flex flex-col items-center gap-8 transition duration-500 ease-in-out transform md:shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:hover:bg-gray-800/50 ">
                  <img
                    className="object-cover transition-transform rounded-full w-14 h-14 md:w-auto lg:rounded-lg lg:w-50 lg:h-56 md:group-hover:scale-1 hover:md:scale-105"
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