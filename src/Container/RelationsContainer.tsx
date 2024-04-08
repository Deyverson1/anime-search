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