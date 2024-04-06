import React from "react";
interface AdditionalInfo {
  streaming: any,
  producers: any,
  external: any
}
export default function AdditionalInfo({ streaming, producers, external }: AdditionalInfo) {
  return (
    <section>
      {streaming !== null && streaming.length > 0 && (
        <section className="w-full ">
          <h1 className="pt-8 mb-4 border-b-2 border-gray-500">Streaming: </h1>
          <main className="flex flex-wrap gap-x-8">
            {streaming.map((val: { url: string, name: string }, index: number) => (
              <section key={index}>
                <a target="blank" href={val.url} className="hover:underline">{val.name}</a>
              </section>
            ))}
          </main>
        </section>
      )}
      {producers !== null && producers.length > 0 && (
        <section className="w-full">
          <h1 className="pt-8 mb-4 border-b-2 border-gray-500">Producers: </h1>
          <main className="flex flex-wrap gap-x-8">
            {producers.map((king: { url: string, name: string }, index: number) => (
              <a className="hover:underline" target="blank" key={index} href={king.url}><h1>{king.name}</h1></a>
            ))}
          </main>
        </section>
      )}
      {external !== null && external.length > 0 &&(
        <section className="">
          <h1 className="pt-8 mb-4 border-b-2 border-gray-500">External:</h1>
          <main className="flex flex-wrap gap-x-8">
            {external.map((dey: { url: string, name: string }, index: number) => (
              <a key={index} target="blank" href={dey.url} className="hover:underline"><h1>{dey.name}</h1></a>
            ))}
          </main>
        </section>
      )}
    </section>
  )
}