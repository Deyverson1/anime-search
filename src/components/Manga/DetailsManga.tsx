import React, { useEffect, useState } from "react";
import Details from "../Details";

interface MangaProps {
  data: any,
}

export default function Manga({ data }: MangaProps) {
  return (
    <Details data={data} type={'manga'}/>
  )
}
