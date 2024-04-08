import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Down } from "../icons/Down";
import { Up } from "../icons/Up";
interface Character {
  characterName: string,
  characterImage: string
}
interface CharacterProps {
  type: string
}
export default function Characters({ type }: CharacterProps) {
  const [character, setCharacter] = useState<Character[]>([])
  const [showAll, setShow] = useState(false)
  const { id } = useParams()
  // console.log(character)
  useEffect(() => {
    const fetchDataAfterDelay = () => {
      const animeId = Number(id);
      const apiId = `https://api.jikan.moe/v4/${type}/${animeId}/characters`;
      fetch(apiId)
        .then(res => res.json())
        .then(res => {
          const dato = res.data;
          const characterDetails = dato.map((dato: { character: any, name: string, images: any, webp: any, image_url: string }) => ({
            characterName: dato?.character?.name,
            characterImage: dato?.character?.images?.webp?.image_url
          }));
          setCharacter(characterDetails);
        })
        .catch(error => {
          console.error('Error fetching AnimeDetails', error);
        });
    };
    const delayInMilliseconds = 1000;
    const timeoutId = setTimeout(fetchDataAfterDelay, delayInMilliseconds);
    return () => clearTimeout(timeoutId);
  }, [id])
  function handleShow() {
    setShow(!showAll)
  }
  const characterShow = showAll ? character : character.slice(0, 16);
  return (
    <>
      {character !== undefined && character && character !== null && Object.keys(character).length !== 0 && (
        <section>
          <h1 className="pt-2 mb-4 text-lg font-bold text-gray-800 uppercase">Characters</h1>
          <main className="flex flex-wrap justify-start gap-x-2 gap-y-4">
            {characterShow.map((dato, index) => (
              <article key={index} className="flex flex-col gap-1 w-fit">
                <div >
                  <img src={dato.characterImage} alt={`Extracted from ${dato.characterName}`} className="w-20 rounded-sm h-28 hover:scale-95" />
                </div>
                <h1 className="w-20 text-sm ">{dato.characterName}</h1>
              </article>
            ))}
          </main>
          <footer className="flex justify-center pt-8">
            <div className="flex justify-center cursor-pointer w-fit" onClick={handleShow}>
              {showAll
                ? <Up />
                : <Down />
              }
            </div>
          </footer>
        </section>
      )}
    </>

  )
}