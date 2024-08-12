/**
 * The above code defines two React functional components, MenuHorizontal and MenuVertical, that render
 * SVG icons for horizontal and vertical menus respectively.
 * @returns Two React functional components, `MenuHorizontal` and `MenuVertical`, each returning an SVG
 * element with specific attributes and paths for displaying horizontal and vertical menu icons.
 */
import React from "react"
export const MenuHorizontal = () => {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></svg>
  )
}

export const MenuVertical = () => {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-tallymark-3" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 5l0 14" /><path d="M12 5l0 14" /><path d="M16 5l0 14" /></svg>
  )
}