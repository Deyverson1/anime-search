import React from "react"
import SearchNeko from "./SearchNeko"

export default function NekoPict() {
  return (
    <section className="hidden px-2 pt-10 lg:block ">
      <h1 className="text-lg font-bold text-gray-800 uppercase">Art explore</h1>
      <main className="flex flex-col">
        <div className="py-8">
          <SearchNeko category={'waifu'} title={'Waifu'}  amount={2} />
        </div>
        <div className="py-8">
        <SearchNeko category={'neko'} title={'Neko'} amount={2} />
        </div>
      </main>
      <SearchNeko category={'kitsune'} title={'Kitsune'} amount={2}/>
    </section>
  )
}