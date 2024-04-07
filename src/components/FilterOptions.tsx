import React from "react";
import { Refresh } from "../icons/Refresh";
import { Filter } from "../icons/Filter";

interface FilterProps{
  data: any,
  selectGeneroRef: any,
  selectTypeRef: any
  setFilterData: any
}

export default function FilterOptions({selectGeneroRef, selectTypeRef, setFilterData, data}: FilterProps) {

  function handleFilter() {
    const valueType = selectTypeRef?.current?.value
    const valueGenre = selectGeneroRef?.current?.value
    const filtered = data?.filter(item => {
      const itemType = item.tipo && valueType !== undefined && valueType !== '' && item.tipo.includes(valueType);
      const itemGenre = item.genres && valueGenre !== '' && item.genres.some((genre: { name: any; }) => genre.name === valueGenre);;
      return (valueType === '' || itemType) && (valueGenre === '' || itemGenre);
      //si ValueType === ' ' Todos los itemType sera === true, y se interpreta como que todos los elementos cumplen los parámetros del filtro
    }); //se verifica que hay type
    if (filtered !== null && filtered !== undefined) {
      setFilterData(filtered);
    }
  }
  function handleRefreshResults() {
    setFilterData(data);
  }
  return (
    <section className="flex justify-between px-2 pb-8 md:justify-normal md:px-32 gap-x-2 md:gap-x-4">
      <select ref={selectGeneroRef} className="md:px-2 rounded-md bg-[#1d1e20] border border-gray-300 text-sm text-white p-2.5  ">
        <option value="">Genero: Todos</option>
        <option value="Action" className="hover:text-red-500">Action</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Award Winning">Award Winning</option>
        <option value="Aventure">Aventure</option>
        <option value="Drama">Drama</option>
        <option value="Sports">Sports</option>
        <option value="Comedy">Comedy</option>
      </select>
      <select ref={selectTypeRef} className="md:px-2 rounded-md bg-[#1d1e20] border border-gray-300 text-sm text-white p-2.5 ">
        <option value="">Tipo: Todos</option>
        <option value="TV">Anime</option>
        <option value="Manga">Manga</option>
        <option value="Movie">Movie</option>
        <option value="OVA">OVA</option>
        <option value="Light Novel">Light Novel</option>
        <option value="Special">Special</option>
        <option value="PV">PV</option>
        <option value="ONA">ONA</option>
      </select>
      <button onClick={handleFilter} className="flex items-center justify-center px-2 text-sm font-semibold text-gray-100 uppercase bg-orange-500 rounded-md md:px-4"> <Filter /> Filter</button>
      <button className="text-black w-fit hover:text-orange-500" onClick={handleRefreshResults}><Refresh /></button>
    </section>
  )
}