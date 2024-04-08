import React, { useState } from "react";
import { Up } from "../icons/Up";
import { Down } from "../icons/Down";
interface ThemesProps {
  themes: any
}
export default function Themes({ themes }: ThemesProps) {
  const [showAll, setShowAll] = useState(false)
  function handleShowRelation() {
    setShowAll(!showAll)
  }
  const ThemesOpening = showAll ? themes?.openings : themes.openings?.slice(0, 5);
  const ThemesEnding = showAll ? themes?.endings : themes.endings?.slice(0, 5);

  return (
    <section className="py-5">
      {Themes && Themes !== null && (
        <main className="flex flex-col gap-y-4">
          <div>
            <h1 className="mb-2 text-base font-bold text-gray-800 uppercase">Openings</h1>
            {ThemesOpening?.map((opening: string, index: number) => (
              <h1 key={index}>{opening}"</h1>
            ))}
          </div>
          <div>
            <h1 className="mb-2 text-base font-bold text-gray-800 uppercase">Endings</h1>
            {ThemesEnding?.map((end: string, index: number) => (
              <h1 key={index}>{end}"</h1>
            ))}
          </div>
          <section className="flex justify-center">
            <div onClick={handleShowRelation} className="flex justify-center cursor-pointer w-fit">
              {showAll
                ? <Up />
                : <Down />
              }
            </div>
          </section>
        </main>

      )}
    </section>
  )
}