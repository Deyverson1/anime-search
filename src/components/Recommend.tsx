import React from "react";
import { dataBase } from "../database/database";
import { Link } from "react-router-dom";
function Recommend() {
  return (
    <section className="px-2 py-8 lg:px-24">
      <h1 className="text-xl pl-4 lg:pl-16 font-bold pb-4">Recommended:</h1>
      <section className="flex flex-wrap justify-center flex-1 gap-y-8 lg:gap-y-16   gap-x-1 lg:gap-x-8">
    {
      dataBase.map(({ title, image, subTitle, id }) => (
       <Link key={title} to={`/anime/${id}`}>
        <article  className="flex flex-col flex-1 md:gap-x-10  space-x-0 space-y-2 lg:space-y-8 group md:space-y-0 lg:h-80">
          <div className=" flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
            <img
              className="object-cover object-top max-w-44 lg:min-w-52 lg:w-full min-h-72 max-h-72 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
              src={image}
              alt=""
            />
          </div>
          <div>
            <p className="text-sm font-bold">{title}</p>
            <p className="text-gray-400">{subTitle}</p>
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