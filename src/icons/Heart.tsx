/**
 * The function `Heart` returns an SVG icon of a heart with a specific design.
 * @returns A React functional component named Heart is being returned. It renders an SVG element
 * representing a heart icon with specific attributes such as width, height, viewBox, stroke width,
 * stroke color, and path data defining the shape of the heart icon.
 */
import React from "react"
export const Heart = () => {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /></svg>
  )
}
