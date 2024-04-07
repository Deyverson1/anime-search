import React from "react";
import Details from "../Details";
interface AnimeDetailsProps { data: any, }
export default function Anime({ data }: AnimeDetailsProps) {
  return (
    <Details data={data} type={'anime'} />
  )
}
