import React, { useEffect, useState } from "react";
import { Refresh } from "../icons/Refresh";

export default function Character() {
  interface Quote {
    character: string;
    anime: string;
    quote: string;
  }
  interface Response {
    title: string,
    image: string,
  }
  const [response, setResponse] = useState<Response | null>(null);
  const [quote, setQuote] = useState<Quote | null>(null);
  const [refresh, setRefresh] = useState(false);

  function handleRefresh() {
    setRefresh(!refresh);
  }

  useEffect(() => {
    fetch("https://animechan.xyz/api/random")
      .then((res) => res.json())
      .then((res) => setQuote(res))
      .catch((error) => console.error("Error fetching quotes:", error));
  }, [refresh]);

  useEffect(() => {
    if (!quote) return;
    fetch(`https://api.jikan.moe/v4/characters?q=${quote.character}`)
      .then((response) => response.json())
      .then((response) => {
        const characters = response.data.map((info: { name: string, images: any, jpg: string, image_url: string }) => ({
          title: info.name,
          image: info.images.jpg.image_url
        }));
        setResponse(characters);
      })
      .catch((error) =>
        console.error("Error fetching character details:", error)
      );
  }, [quote]);

  return (
    <section className="px-2 py-8 lg:px-40">
      <header className="flex items-center justify-between w-full px-32 pb-8">
        <h1 className="text-xl font-bold text-center ">Quote:</h1>
        <div onClick={handleRefresh} className="flex items-end justify-end">
          <Refresh />
        </div>
      </header>
      {quote !== null && response !== null && Array.isArray(response) && response.length > 0 && (
        <section className="flex flex-wrap justify-center gap-x-8">
          <div>
            <h1 className="text-xl font-bold text-black">{quote.character}</h1>
            <h2 className="text-yellow-600">{quote.anime}</h2>
            <p className="italic text-black max-w-96">"{quote.quote}"</p>
          </div>
          <div>
            <img
              src={response[0].image}
              alt={`Image of ${response[0].title}`}
              style={{
                minHeight: "350px",
                maxHeight: "350px",
                minWidth: "225px",
                maxWidth: "225px"
              }}
              className="rounded-3xl"
            />
          </div>
        </section>
      )}


    </section>
  );
}
