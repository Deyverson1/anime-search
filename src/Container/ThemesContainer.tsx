/**
 * The ThemesContainer component fetches and displays themes based on the type provided (anime) and the
 * id parameter.
 * @param {ThemesContainerProps}  - The code you provided is a React functional component called
 * `ThemesContainer` that fetches themes data based on the `type` prop (which can be either 'anime' or
 * something else). If the `type` is 'anime', it makes an API call to fetch themes data for a specific
 * anime
 * @returns The `ThemesContainer` component is returning the `Themes` component with the `themes` state
 * as a prop.
 */
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