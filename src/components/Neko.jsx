import { useEffect, useState } from "react"

export default function NekoPict() {
  const [response, setResponse] = useState([])

  // useEffect(() => {
  //   fetch('https://nekos.best/api/v2/waifu?amount=20')
  //     .then(response => response.json())
  //     .then(res => {
  //       const data = res.results.map((dato) => ({
  //         image: dato.url,
  //         artist: dato.artist_href,
  //         artistName: dato.artist_name
  //       }))
  //       setResponse(data)
  //     })
  //     .catch(error => console.error('New error in fetch NekoPic', error))

  // }, [])
  console.log(response)
  return (
    <article className="flex flex-wrap">
      {response.map((data, index) => (
      <img key={index} src={data.image} className="h-56 w-56"/>
    ))}
    </article>
  )
}