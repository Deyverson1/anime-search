/**
 * The `Manga` component in TypeScript React renders details for manga using the `Details` component.
 * @param {MangaProps}  - The code snippet you provided is a React functional component named `Manga`.
 * It takes a prop `data` of type `any` through the `MangaProps` interface. Inside the component, it
 * renders the `Details` component passing the `data` prop and a string `'manga'
 * @returns The `Manga` component is being returned. It takes a prop `data` and renders the `Details`
 * component passing the `data` prop and a string `'manga'` as the `type` prop.
 */
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
