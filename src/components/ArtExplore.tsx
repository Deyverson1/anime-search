import React from "react"
import SearchArt from "./SearchArt"

export default function NekoPict() {
  return (
    <section className="hidden px-2 pt-10 lg:block ">
      <h1 className="text-lg font-bold text-gray-800 uppercase">Art explore</h1>
      <main className="flex flex-col">
        <div className="py-8">
          <SearchArt category={'waifu'} title={'Waifu'}  amount={2} />
        </div>
        <div className="py-8">
        <SearchArt category={'neko'} title={'Neko'} amount={2} />
        </div>
      </main>
      <SearchArt category={'kitsune'} title={'Kitsune'} amount={2}/>
    </section>
  )
}