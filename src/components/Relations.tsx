import React, { useState } from "react";
import { Up } from "../icons/Up";
import { Down } from "../icons/Down";
import { Link } from "react-router-dom";
interface RelationsProps {
  relation: any
}
export default function Relations({ relation }: RelationsProps) {
  const [showAll, setShowAll] = useState(false)
  function handleShowRelation() {
    setShowAll(!showAll)
  }
  const Relations = showAll ? relation : relation.slice(0, 2);
  return (
    <section className="text-gray-800">
      <h1 className="pt-8 mb-2 text-lg font-bold text-gray-800 uppercase">Relations</h1>
      <main className="flex flex-col gap-y-4">
        {Relations && Relations !== null && Relations.map((dato: { relation: string, entry: any }, index: number) => (
          <div key={index}>
            {dato.relation && (<h1><strong>Relation:</strong> {dato.relation}</h1>)}
            {dato.entry && dato.entry.map((data: { type: string, name: string, mal_id: number }, index: number) => (
              <div key={index}>
                <h1><strong>Type:</strong> {data.type}</h1>
                <Link to={`/${data.type}/${data.mal_id}`}>
                  <h1 className="font-bold">Name:<span className="ml-1 font-normal underline">{data.name}</span></h1>
                </Link>
              </div>
            ))}
          </div>
        ))}
        <section className="flex justify-center">
          <div onClick={handleShowRelation} className="flex justify-center cursor-pointer w-fit">
            {showAll
              ? <Up />
              : <Down />
            }
          </div>
        </section>
      </main>
    </section>
  )
}