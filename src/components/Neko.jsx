import SearchNeko from "./SearchNeko"
export default function NekoPict() {
  return (
    <section className="px-2 py-8 lg:px-40">
      <h1 className="pl-12 pt-12 text-xl font-bold">Art:</h1>
      <main className="flex gap-x-8">
        <div className="py-8">
          <SearchNeko category={'waifu'} title={'Waifu'}  amount={'4'} />
        </div>
        <div className="py-8">
        <SearchNeko category={'neko'} title={'Neko'} amount={'4'} />
        </div>
      </main>
      <SearchNeko category={'kitsune'} title={'Kitsune'} amount={'4'}/>
    </section>
  )
}