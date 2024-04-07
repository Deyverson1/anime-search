import React, { useEffect, useState } from "react";
import Art from "../components/Art";
interface Response {
  title: string,
  image: string,
  liked?: boolean
}
export default function ArtContainer() {
  const [response, setResponse] = useState<any[]>([])

  useEffect(() => {
    const waifuApi = 'https://nekos.best/api/v2/waifu?amount=2'
    const nekoApi = 'https://nekos.best/api/v2/neko?amount=2'
    const kitsuneApi = 'https://nekos.best/api/v2/kitsune?amount=2'
    Promise.all([fetch(waifuApi), fetch(nekoApi), fetch(kitsuneApi)]) //hacer todos los fetch al mismo tiempo y juntarles
      .then(responses => Promise.all(responses.map(response => response.json())))
      .then(data => {
        const waifuData = data[0].results.map((waifu: { url: string, artist_href: string, artist_name: string }) => ({
          image: waifu.url,
          artist: waifu.artist_href,
          artistName: waifu.artist_name
        }))

        const nekoData = data[1].results.map((neko: { url: string, artist_href: string, artist_name: string }) => ({
          image: neko.url,
          artist: neko.artist_href,
          artistName: neko.artist_name
        }))

        const kitsuneData = data[2].results.map((kitsune: { url: string, artist_href: string, artist_name: string }) => ({
          image: kitsune.url,
          artist: kitsune.artist_href,
          artistName: kitsune.artist_name
        }))
        const combinedData = [...waifuData, ...nekoData, ...kitsuneData];
        setResponse(combinedData);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [])

  function handleLike(index: number) {
    setResponse(prevResponse => {
      if (prevResponse === null) {
        return null
      }
      const updatedResponse: Response[] = [...prevResponse];
      updatedResponse[index] = {
        ...updatedResponse[index],
        liked: !updatedResponse[index].liked
      };
      return updatedResponse;
    });
  }

  return (
    <Art response={response} handleLike={handleLike} />
  )
}