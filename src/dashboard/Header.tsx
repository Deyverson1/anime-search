import React from "react";
import { Link } from "react-router-dom";
import { SearchSmall } from "../icons/SearchSmall";
import { LogoIcon } from "../icons/LogoIcon";
interface HomeProps {
  setData: any,
  handleClick: any,
  input: any
}
export default function Header({ setData, handleClick, input }: HomeProps) {
  return (
    <section className="top-0 flex flex-col w-full px-2 py-3 bg-cover bg-[#1d1e20] lg:px-40 ">
      <header className="flex flex-col items-center justify-between w-full lg:flex-row">
        <Link to="/" className="flex">
          <div className="flex items-center justify-center gap-x-2 lg:w-full">
            <LogoIcon />
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
              </div>
              <input ref={input} type="search" id="default-search" className="block w-full p-4 text-sm text-gray-200 bg-[#2f3237] rounded-full ps-10  placeholder-gray-200 " placeholder="Search Animes, Manga..." required />
              <div onClick={handleClick}>
                <Link to="/results" className="text-gray-700 absolute end-2.5 bottom-2.5">
                  <button type="submit" className="px-4 py-2 text-sm font-medium bg-[#2f3237] rounded-lg hover:bg-[#43474d] focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                    <SearchSmall />
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </section>
      </header>
    </section>
  )
}