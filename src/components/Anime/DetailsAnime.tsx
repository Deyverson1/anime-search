import React, { useEffect, useState } from "react";
import Poster from "../Poster";
import { useParams } from "react-router-dom";
import NavDetails from "../NavDetails";
import PrincipalCard from "../PrincipalCard";
import Details from "../Details";

interface AnimeDetailsProps {
  data: any,
}

export default function Anime({ data }: AnimeDetailsProps) {
  return (
    <Details data={data} type={'anime'}/>
  )
}
