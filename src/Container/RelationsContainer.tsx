/**
 * This React component fetches and displays relations data based on a specified type and ID using the
 * Jikan API.
 * @param {RelationsContainerProps}  - The code you provided is a React functional component called
 * `RelationsContainer` that fetches data from an API endpoint based on the `type` and `id` parameters.
 * It then maps the fetched data to extract the `relation` and `entry` properties before setting the
 * state with the extracted data.
 * @returns The RelationsContainer component is returning the Relations component with the relation
 * data passed as a prop.
 */
import React, { useEffect, useState } from "react";
import Relations from "../components/Relations";
import { useParams } from "react-router-dom";
interface RelationsContainerProps {
  type: string,
}
export default function RelationsContainer({ type }: RelationsContainerProps) {
  const [relation, setRelation] = useState([])
  const { id } = useParams()
  useEffect(() => {
    const idNumber = Number(id)
    const endPointRelations = `https://api.jikan.moe/v4/${type}/${idNumber}/relations`
    fetch(endPointRelations)
      .then(res => res.json())
      .then(res => {
        const dato = res.data
        const relationData = dato.map((dato: { relation: string, entry: any }) => ({
          relation: dato.relation,
          entry: dato.entry
        }))
        setRelation(relationData)
      })
  }, [])
  return (
    <Relations relation={relation} />
  )
}