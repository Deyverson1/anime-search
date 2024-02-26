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
        <section className="w-full  ">
          <h1 className="border-b-2 pt-8 border-gray-500 mb-4">Streaming: </h1>
          <main className="flex gap-x-8 flex-wrap">
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
          <h1 className="border-b-2 pt-8 border-gray-500 mb-4">Producers: </h1>
          <main className="flex gap-x-8  flex-wrap">
            {producers.map((king: { url: string, name: string }, index: number) => (
              <a className="hover:underline" target="blank" key={index} href={king.url}><h1>{king.name}</h1></a>
            ))}
          </main>
        </section>
      )}
      {external !== null && external.length > 0 &&(
        <section className="">
          <h1 className="border-b-2 pt-8 border-gray-500 mb-4">External:</h1>
          <main className="flex gap-x-8  flex-wrap">
            {external.map((dey: { url: string, name: string }, index: number) => (
              <a key={index} target="blank" href={dey.url} className="hover:underline"><h1>{dey.name}</h1></a>
            ))}
          </main>
        </section>
      )}
    </section>
  )
}