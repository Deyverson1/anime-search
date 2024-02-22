import { useEffect, useState } from "react";
import { Refresh } from "../icons/Refresh";
export default function Character() {
  const [response, setResponse] = useState(null);
  const [quote, setQuote] = useState(null);
  const [refresh, setRefresh] = useState(false)
  function handleRefresh(){
   if(!refresh){
    setRefresh(true)
   } else {
    setRefresh(false)
   }
  }
  useEffect(() => {
    fetch("https://animechan.xyz/api/random")
      .then(res => res.json())
      .then(res => setQuote(res))
      .catch(error => console.error("Error fetching quotes:", error));
  }, [refresh]);

  useEffect(() => {
    if (!quote) return;
    fetch(`https://api.jikan.moe/v4/characters?q=${quote.character}`)
      .then(response => response.json())
      .then(response => {
        const characters = response.data.map((info) => ({
          title: info.name,
          image: info.images.jpg.image_url
        }));
        setResponse(characters);
      })
      .catch(error => console.error("Error fetching character details:", error));
  }, [quote]);

  return (
    <section className="px-2 py-8 lg:px-40">
      <header className="flex px-32 justify-between w-full items-center pb-8">
        <h1 className="text-xl text-center font-bold ">Quote:</h1>
        <div onClick={handleRefresh} className="flex justify-end items-end">
          <Refresh className="hover:stroke-red-500"/>
        </div>
      </header>
      {response && response.length > 0 && (
        <section className="flex justify-center gap-x-8">
          <div>
            <h1 className="text-xl font-bold">{quote.character}</h1>
            <h2 className="text-yellow-600">{quote.anime}</h2>
            <p className="max-w-96 italic">"{quote.quote}"</p>
          </div>
          <div>
            <img src={response[0].image} alt={`Image of ${response[0].title}`} style={{ minHeight: '350px', maxHeight: '350px', minWidth: '225px', maxWidth: '225px' }} className="rounded-3xl" />
          </div>
        </section>
      )}

    </section>
  );
}
