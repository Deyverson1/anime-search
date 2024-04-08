import React, { useEffect, useState } from "react";
import Themes from "../components/Themes";
import { useParams } from "react-router-dom";
interface ThemesContainerProps {
  type: string
}
export default function ThemesContainer({ type }: ThemesContainerProps) {
  const [themes, setThemes] = useState([])
  const { id } = useParams()
  if (type === 'anime') {
    useEffect(() => {
      const numberId = Number(id)
      fetch(`https://api.jikan.moe/v4/anime/${numberId}/themes`)
        .then(res => res.json())
        .then(res => {
          setThemes(res.data)
        })
    }, [id])
  } else return
  
  return (
    <Themes themes={themes} />
  )
}