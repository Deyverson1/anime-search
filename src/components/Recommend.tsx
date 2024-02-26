import React from "react";
import { dataBase } from "../database/database";
import { Link } from "react-router-dom";
function Recommend() {
  return (
    <section className="px-2 py-8 lg:px-24">
      <h1 className="text-xl font-bold pb-4">Recommended:</h1>
      <section className="flex flex-wrap  flex-1 gap-y-16 gap-x-8">
    {
      dataBase.map(({ title, image, subTitle, id }) => (
       <Link key={title} to={`/anime/${id}`}>
        <article  className="flex flex-col flex-1 md:gap-x-10  space-x-0 space-y-8 group md:space-y-0 h-72">
          <div className=" flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
            <img
              className="object-cover object-top min-w-40 w-full min-h-72 max-h-72 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
              src={image}
              alt=""
            />
          </div>
          <div className="">
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