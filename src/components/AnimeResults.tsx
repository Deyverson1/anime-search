import React, { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { Filter } from "../icons/Filter";
import { Refresh } from "../icons/Refresh";
interface AnimeData {
  imageUrl: string;
  title: string;
  id: number;
  tipo: string;
  genres: any
}

interface AnimeResultsProps {
  data: AnimeData[] | null;
}
export default function AnimeResults({ data }: AnimeResultsProps) {
  const [filteredData, setFilterData] = useState<AnimeData[] | null>(null)
  const [count, setCount] = useState(20)
  const selectTypeRef = useRef()
  const selectGeneroRef = useRef()

  useEffect(() => {
    if (data) {
      setFilterData(data);
    }
  }, [data]);
  useEffect(() => {
    if (data) {
      const mount = filteredData ? Object.keys(filteredData).length : 0;
      setCount(mount)
    }
  }, [filteredData])

  function handleFilter() {
    const valueType = selectTypeRef?.current?.value
    const valueGenre = selectGeneroRef?.current?.value

    const filtered = data?.filter(item => {
      const itemType = item.tipo && valueType !== '' && item.tipo.includes(valueType);
      const itemGenre = item.genres && valueGenre !== '' && item.genres.some((genre: { name: any; }) => genre.name === valueGenre);;
      return (valueType === '' || itemType) && (valueGenre === '' || itemGenre);
      //si ValueType === ' ' Todos los itemType sera === true, y se interpreta como que todos los elementos cumplen los parámetros del filtro
    }); //se verifica que hay type
    setFilterData(filtered);
  }
  function handleRefreshResults() {
    setFilterData(data);
  }

  return (
    <>
      <div className="flex items-center px-4 pb-6 md:px-32 pt-7 gap-x-4">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
          <linearGradient id="9LDYQz02nRtMJxX0S4_zJa_CrFauNzzVBcJ_gr1" x1="24" x2="24" y1="34.595" y2="8.937" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#2a373e"></stop><stop offset="1" stopColor="#636f75"></stop></linearGradient><path fill="url(#9LDYQz02nRtMJxX0S4_zJa_CrFauNzzVBcJ_gr1)" d="M17,37L0,32c0,0,5-3,9-3c-2-2-9-4-9-4s4-4,11-4c0,0-4-3-8-4c2-1,4-2,7-2c0,0-3-6-10-8	c6-3,17-2,22,4c0,0,1-7-3-11c8,1,14,7,13,14c4,0,6,4,6,4l10-3l-5,6l5,2l-9,7l8,2l-9,4l3,3c0,0-5,0-9,2S17,37,17,37z"></path><linearGradient id="9LDYQz02nRtMJxX0S4_zJb_CrFauNzzVBcJ_gr2" x1="24.5" x2="24.5" y1="29.553" y2="43.961" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#eeb597"></stop><stop offset="1" stopColor="#ffd0ad"></stop></linearGradient><path fill="url(#9LDYQz02nRtMJxX0S4_zJb_CrFauNzzVBcJ_gr2)" d="M37.027,29.217L34,33c0,0,0-2-1-6	c0,0-5,4-8,6c2-4,1-8,1-8s-5,3-6,7c-2-3-1-7-1-7s-3,4-3,9c-1.169-0.39-2.638-2.299-3.586-4.719C11.75,29.016,10.966,29.486,11,31	v3.892c0,0.687,0.361,1.325,0.95,1.678l3.327,1.996l0.547,2.599c0.113,0.537,0.423,1.011,0.87,1.33l5.881,4.201	C22.851,46.894,23.183,47,23.522,47h0.861h0.478H25v-0.022c0.289-0.025,0.57-0.112,0.808-0.282l5.881-4.201	c0.446-0.319,0.757-0.794,0.87-1.33l0.458-2.175l4.033-2.42c0.589-0.353,0.95-0.991,0.95-1.678V31	C38.026,29.817,37.552,29.275,37.027,29.217z"></path><polygon fill="#f5e9e8" points="18,32 17,33 18,37 22,37 22,35"></polygon><circle cx="21" cy="35" r="1" fill="#212121"></circle><polygon fill="#405056" points="23,35 22,35 17,32 15,33 16,30 18,31"></polygon><polygon fill="#f5e9e8" points="30,32 31,33 30,37 26,37 26,35"></polygon><circle cx="27" cy="35" r="1" fill="#212121"></circle><polygon fill="#405056" points="25,35 26,35 31,32 33,33 32,30 30,31"></polygon><polygon fill="#bc8771" points="12,32 13,36 14,37 15.021,36.926 14,34"></polygon><polygon fill="#bc8771" points="37,32 36,36 35,37 33.979,36.926 35,34"></polygon><path fill="#bc8771" d="M22.053,39h4c0,0-1,2-2,2S22.053,39,22.053,39z"></path><path fill="#bc8771" d="M26,37h6c0,0-1.5,2-3,2S26,37,26,37z"></path><path fill="#bc8771" d="M16.053,37H22c0,0-1.487,2-2.973,2S16.053,37,16.053,37z"></path><path fill="#bc8771" d="M21,42c0.536,1.179,1.673,2,3,2c1.327,0,2.464-0.821,3-2H21z"></path>
        </svg>
        <h1 className="text-xl font-light text-center text-gray-800 md:text-2xl">Complete list of animes</h1>
      </div>
      <section className="flex px-2 pb-8 md:px-32 gap-x-4">

        <select ref={selectGeneroRef} className="md:px-2 rounded-md bg-[#1d1e20] border border-gray-300 text-sm text-white p-2.5  ">
          <option value="">Genero: Todos</option>
          <option value="Action" className="hover:text-red-500">Action</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Award Winning">Award Winning</option>
        </select>

        <select ref={selectTypeRef} className="md:px-2 rounded-md bg-[#1d1e20] border border-gray-300 text-sm text-white p-2.5 ">
          <option value="">Tipo: Todos</option>
          <option value="TV">Anime</option>
          <option value="Movie">Movie</option>
          <option value="TV Special">TV Special</option>
        </select>
        <button onClick={handleFilter} className="flex items-center justify-center px-2 text-sm font-semibold text-gray-100 uppercase bg-orange-500 rounded-md md:px-4"> <Filter /> Filter</button>
        <button className="text-black w-fit hover:text-orange-500" onClick={handleRefreshResults}><Refresh /></button>
      </section>
      {count < 1 && ( //para validar ningún resultado 
        <div className="flex flex-col items-center justify-center px-2 py-10 text-gray-800">
          <main className="flex flex-col items-center justify-center py-10 border border-gray-500 shadow-2xl cursor-default w-fit rounded-xl">
            <h1 className="text-3xl font-bold md:text-5xl hover:text-orange-400">No Results Found</h1>
            <h2 className="w-7/12 text-center">The requested anime could not be found. Try adjusting the filter or perform a new search.</h2>
            <div className="duration-1000 cursor-pointer hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="200" height="200" viewBox="0 0 100 100">
                <path fill="#e9d5c6" d="M25.84,63.777c0,0,0.479,8.33,5.553,8.426c0,0,2.298,16.181,21.16,17.426 c0,0,16.564-2.011,20.681-18.862c0,0,7.372-2.202,4.596-13.787V39.745H25.362L25.84,63.777z"></path><path fill="#60bd91" d="M33.309,77.468l-6.798,4.5c0,0,2.564-5.819-4.511-4.968l-0.755-5.181c0,0-3.064,1.245-5.553-1.532 c0,0,4.309-2.245,4.309-5.287c0,0-9.436-0.936-13,5c0,0-0.596-7.372,7.351-12.734c0,0-7.277,3.734-9.287-9.287 c0,0,7.851,6.319,11.394,2.968c0,0-2.968-1.628-4.691-8.234c0,0-4.404-5.074-6.223-3.83c0,0,6.319-3.83,14.745-1.915 c0,0-6.223-7.851-4.787-15.415c0,0,5.553,8.234,8.617,8.043l-0.394-6.702l9.489,1.819c0,0-8.426-9.287-3.543-16.085 c0,0,2.011,8.043,15.989,9.191l-3.734-7.181c0,0,9.957-4.213,16.755,5.745l1.532-2.681l2.681,4.883c0,0-2.202-9.287,5.745-9.67 c0,0-1.915,6.415,5.553,13.404c0,0,16.468-8.043,18.67,20.777l-6.223-3.83l-0.096,4.979c0,0,6.085,5.213,9.457,3.755 c0,0-2.255,3.606-6,5c0,0,4.585,5.128,3.436,9.723c0,0-4.83-4.979-6.436-1.723s4.617,4.979,4.617,4.979S89.787,69.266,84,67l6,6 l-9-2l-1.255,4.649c0,0-2.968-3.255-5.074-3.926c0,0,6.862-7.713,2.33-14.723c0,0-1.564,6.394-7.117,7.926l2.011-9.287L66,60 c0,0,3.213-7.33-0.904-12.883l-0.957,6.606L59,45c0,0-0.128,8.628-6.638,12.553l-2.872-10.34l-1.628,7.277 c0,0-3.819-4.521-1.862-9.489c0,0-6.947,2.213-7.138,12.649l-3.926-3.351l-1.723,4.596l-2.585-1.532c0,0-0.766,6.798,1.819,7.372 c0,0-2.745,3.426-6.447-1.734c0,0-1.5,8.915,6.16,10.447L33.309,77.468z"></path><path fill="#444445" d="M27,81l5.926-3.34L31,73c0,0-5.936-2.872-4.968-8.936c0,0,5.053,3.745,6.511,1.34 C32.543,65.404,28,62,31,57l3,2l0.697-4.511l3.83,3.207C38.527,57.697,39,46,46,45c0,0-2,7,2,10l1-9c0,0,5,9,2,13 c0,0,8.606-7.309,8.303-13.654l4.356,8.809L65,47c0,0,3,5,1,13c0,0,3-1,6-6c0,0,0,10-3,12c0,0,8-5,8-9c0,0,6,5-3,15c0,0,4,0,6,3 l1.181-3.947l7.133,1.628L84,67c0,0,7,2,8-1c0,0-8-2-4-6c0,0,3,0,6,3c0,0,1.553-5.702-3.723-9.851c0,0,5.191,0.383,5.457-4.883 c0,0-9.511-0.926-9.622-4.596L87,39l-6.489-7.234l-1.723,3.574l2.633,10.867l-7.085,1.197l-4.596-6.894l6.559,0.814L70.5,36.5 l-7.926,1.904l-0.894-4.787l3.559-6.032L57.5,29.5l-2,9l-2-9l-7,1l-5.915-6.745l4.787,14.553l-9.67-4.787L24.5,32.5L27,36 l6.309,0.633l-9.383,4.069L18.5,41.5l6.191,2.84L32,42l-2,4l6.42-0.319L28,52l-1.489,5.027L24,51l-1.5,9.5h-5L12,65h8 c0,0-0.234,4.383-4.117,5.191C15.883,70.191,18,73,22,71c0,0-2.074,2.596-0.037,5.798C21.963,76.798,27,76,27,81z"></path><ellipse cx="40.936" cy="66.457" fill="#fff" rx="7.468" ry="6.862"></ellipse><ellipse cx="63.979" cy="65.5" fill="#fff" rx="7.468" ry="6.862"></ellipse><path d="M31,74c-0.104,0-0.211-0.017-0.316-0.052c-0.067-0.022-6.765-2.359-5.676-11.072c0.053-0.423,0.368-0.767,0.786-0.854 c0.416-0.09,0.845,0.099,1.064,0.464c0.011,0.019,1.283,2.081,3.065,2.426c0.365,0.069,0.727,0.062,1.092-0.022 c-0.596-0.525-1.22-1.271-1.604-2.279c-0.669-1.76-0.435-3.798,0.694-6.057c0.144-0.287,0.417-0.488,0.734-0.54 c0.315-0.052,0.64,0.053,0.867,0.28l1.076,1.075c0.102-1.158,0.463-2.54,1.385-3.923c0.166-0.249,0.436-0.411,0.733-0.44 c0.303-0.03,0.594,0.076,0.806,0.288l2.13,2.13c0.11-3.239,1.358-8.493,7.757-11.337c0.361-0.16,0.784-0.094,1.079,0.174 c0.293,0.267,0.402,0.681,0.276,1.057c-0.014,0.043-1.184,3.716,0.347,6.967l0.71-6.394c0.049-0.447,0.392-0.807,0.836-0.877 c0.445-0.068,0.881,0.165,1.067,0.573c0.865,1.903,2.953,6.859,3.041,10.508c2.42-2.303,5.639-6.314,5.057-10.97 c-0.061-0.483,0.236-0.94,0.703-1.081c0.465-0.142,0.967,0.074,1.184,0.51l3.485,6.972l0.626-5.635 c0.044-0.402,0.327-0.737,0.715-0.851c0.387-0.112,0.806,0.02,1.059,0.336c0.158,0.198,3.464,4.453,1.94,12.058 c1.686-1.445,3.27-3.198,3.279-4.421c0-0.007,0-0.011,0-0.012v-0.001C71,52.447,71.448,52,72,52c0.538,0,0.976,0.425,0.999,0.956 c0,0.001,0,0.001,0,0.001c0,0.004,0,0.005,0,0.005c0,0.004,0,0.008,0,0.013l0,0c0,0.001,0,0.003,0,0.005c0,0.002,0,0.005,0,0.008 c0,0.005,0,0.009,0,0.013c0,0.301-0.023,5.96-1.583,10.408c1.88-1.374,4.098-3.58,4.597-6.572 c0.059-0.354,0.302-0.648,0.638-0.773c0.335-0.126,0.712-0.061,0.988,0.169c0.084,0.07,2.062,1.754,2.296,5.026 c0.249,3.467-1.499,7.306-5.193,11.411c-0.369,0.41-1.002,0.443-1.412,0.074c-0.411-0.369-0.444-1.002-0.074-1.412 c3.247-3.608,4.869-7.021,4.688-9.872c-0.057-0.902-0.283-1.639-0.549-2.209c-2.044,5.062-7.731,7.553-8.002,7.669 c-0.417,0.179-0.9,0.056-1.18-0.301c-0.28-0.356-0.286-0.855-0.014-1.218c1.469-1.96,2.167-5.317,2.5-8.045 c-1.694,1.81-3.766,3.224-4.145,3.477c-0.355,0.238-0.822,0.224-1.162-0.037c-0.339-0.26-0.477-0.706-0.342-1.111 c1.478-4.433,1.171-7.814,0.548-10.024l-0.606,5.451c-0.049,0.44-0.382,0.796-0.818,0.874c-0.434,0.078-0.872-0.141-1.07-0.537 l-3.316-6.633c-1.455,6.424-7.909,10.801-8.234,11.018c-0.002,0.001-0.002,0.001-0.005,0.003c0,0.001-0.001,0.001-0.001,0.001 c-0.46,0.302-1.077,0.176-1.381-0.281c-0.306-0.459-0.183-1.079,0.276-1.386c0.001,0.001,0.003-0.001,0.012-0.009 c1.025-0.711,0.423-4.262-0.903-8.083l-0.56,5.033c-0.042,0.382-0.3,0.706-0.663,0.833c-0.362,0.128-0.766,0.036-1.038-0.236 c-2.841-2.841-2.98-6.513-2.701-8.82c-6.049,3.89-4.682,10.591-4.616,10.898c0.094,0.434-0.108,0.879-0.498,1.092 c-0.388,0.211-0.872,0.145-1.186-0.17l-3.053-3.053c-0.886,2.11-0.318,3.945-0.29,4.035c0.141,0.439-0.036,0.921-0.43,1.161 c-0.394,0.241-0.901,0.184-1.227-0.144l-1.945-1.944c-0.382,1.179-0.408,2.222-0.075,3.114c0.577,1.548,2.089,2.19,2.104,2.197 c0.332,0.138,0.567,0.443,0.612,0.8c0.044,0.356-0.102,0.711-0.389,0.926c-1.311,0.983-2.681,1.344-4.069,1.072 c-1.033-0.202-1.916-0.737-2.612-1.321c0.379,5.048,4.217,6.438,4.403,6.502c0.52,0.18,0.8,0.747,0.623,1.268 C31.803,73.737,31.416,74,31,74z"></path><path d="M26,83c-0.223,0-0.445-0.074-0.629-0.223c-0.365-0.295-0.476-0.805-0.266-1.225c0.659-1.318,0.815-2.331,0.439-2.852 c-0.591-0.821-2.549-0.835-3.403-0.711c-0.312,0.044-0.626-0.061-0.849-0.283c-1.308-1.308-1.315-3.17-1.017-4.669 c-2.366,0.447-4.781-1.129-5.983-2.331c-0.286-0.286-0.372-0.716-0.217-1.09S14.596,69,15,69c2.877,0,3.686-2.005,3.913-3.19 c-7.536-1.212-10.901,4.439-11.046,4.689c-0.227,0.393-0.688,0.584-1.125,0.465C6.304,70.847,6,70.452,6,70 c0-5.437,2.682-9.142,5.044-11.35c-0.732-0.115-1.425-0.368-2.075-0.759c-4.332-2.6-4.943-10.486-4.967-10.82 c-0.032-0.447,0.237-0.86,0.659-1.012c0.421-0.152,0.892-0.006,1.153,0.359c2.629,3.681,6.141,4.327,8.667,4.224 c-1.447-1.289-2.214-3.208-2.461-4.446c-1.729-6.909-6.653-6.243-6.862-6.209c-0.442,0.072-0.882-0.168-1.066-0.577 c-0.185-0.409-0.077-0.891,0.268-1.179c4.163-3.468,9.97-3.378,13.59-2.877C14.053,29.903,14,20.469,14,20 c0-0.483,0.346-0.897,0.822-0.984c0.473-0.081,0.945,0.181,1.115,0.633c1.956,5.218,5.197,7.71,7.026,8.756 c-0.169-3.474-0.853-4.949-0.861-4.966c-0.183-0.382-0.108-0.846,0.191-1.146c0.315-0.314,1.058-1.056,7.611,0.399 c-3.772-5.446-1.988-15.341-1.887-15.877c0.083-0.442,0.452-0.775,0.901-0.812c0.447-0.025,0.868,0.231,1.021,0.655 c3.02,8.305,11.442,9.941,14.735,10.263c-1.209-3.504-3.995-4.961-4.125-5.028c-0.366-0.187-0.583-0.579-0.543-0.988 s0.324-0.753,0.719-0.866c10.148-2.896,15.417,1.296,17.721,4.205l0.568-3.407c0.086-0.515,0.552-0.873,1.069-0.833 C60.601,10.046,61,10.479,61,11c0,1.216,0.315,2.448,0.733,3.55c0.18-1.933,0.806-3.474,1.878-4.606 c2.194-2.319,5.378-1.952,5.513-1.936c0.379,0.047,0.698,0.307,0.822,0.668s0.031,0.762-0.239,1.031 c-1.545,1.545,1.697,7.821,4.611,12.015c3.772-1.79,7.157-1.872,10.071-0.249c8.329,4.645,9.56,21.735,9.608,22.461 c0.028,0.416-0.205,0.805-0.584,0.977c-0.379,0.175-0.826,0.091-1.12-0.203c-1.214-1.214-3.222-2.834-4.551-3.874 c-0.197,1.01-0.463,2.145-0.634,2.848c4.38,4.093,8.522,3.37,8.701,3.338c0.292-0.055,0.597,0.023,0.826,0.212 C96.865,47.421,97,47.702,97,48c0,3.228-2.975,4.802-5.002,5.5c3.843,4.191,3.029,9.421,2.988,9.664 c-0.062,0.37-0.324,0.674-0.681,0.788c-0.356,0.115-0.747,0.021-1.013-0.245c-1.679-1.675-4.074-3.294-4.949-3.062 c-0.16,0.045-0.286,0.246-0.374,0.598c-0.162,0.649-0.084,1.205,0.239,1.7c0.844,1.291,3.142,1.933,3.957,2.071 C92.646,65.096,93,65.513,93,66c0,0.749-0.31,1.387-0.895,1.844c-1.388,1.083-4.263,0.872-6.289,0.546 c1.828,2.925,4.309,3.609,4.432,3.642c0.517,0.136,0.839,0.655,0.727,1.178s-0.607,0.877-1.14,0.777 c-4.017-0.669-6.697-1.336-8.07-1.717l-0.785,3.927c-0.092,0.459-0.489,0.792-0.957,0.804c-0.468,0.024-0.881-0.304-0.994-0.758 c-0.795-3.182-4.86-3.241-5.033-3.242c-0.551-0.003-0.997-0.451-0.996-1.003C73.003,71.446,73.449,71,74,71 c1.433,0,3.909,0.511,5.543,2.186l0.477-2.382c0.056-0.281,0.23-0.524,0.479-0.668c0.247-0.144,0.547-0.175,0.817-0.085 c0.02,0.007,1.379,0.453,4.044,1.041c-0.843-0.931-1.657-2.145-2.288-3.721c-0.139-0.349-0.071-0.745,0.175-1.028 c0.247-0.282,0.629-0.406,0.996-0.312c1.758,0.438,4.514,0.815,5.94,0.515c-1.208-0.419-2.78-1.188-3.643-2.503 c-0.63-0.961-0.806-2.097-0.509-3.284c0.343-1.374,1.158-1.868,1.781-2.04c1.618-0.455,3.754,0.905,5.244,2.1 c-0.152-1.91-0.89-4.806-3.679-7.036c-0.308-0.246-0.441-0.65-0.343-1.032c0.099-0.381,0.413-0.669,0.801-0.735 c0.045-0.008,3.943-0.696,4.938-2.931c-1.982-0.021-5.741-0.638-9.479-4.376c-0.249-0.248-0.348-0.608-0.263-0.949 C85.433,42.146,86,39.604,86,39c0-0.379,0.214-0.725,0.553-0.895c0.339-0.169,0.744-0.134,1.047,0.095 c0.12,0.09,2.206,1.657,4.117,3.284c-0.663-4.857-2.703-15.145-8.303-18.266c-2.486-1.386-5.496-1.162-8.946,0.665 c-0.44,0.23-0.984,0.106-1.276-0.296c-1.22-1.678-6.494-9.234-5.776-13.504c-0.75,0.147-1.652,0.487-2.364,1.248 c-1.331,1.42-1.7,4.01-1.067,7.489c0.083,0.456-0.159,0.909-0.584,1.095c-0.425,0.187-0.921,0.056-1.2-0.316 c-0.076-0.101-1.144-1.541-2.025-3.569l-0.189,1.134c-0.074,0.442-0.433,0.782-0.879,0.83c-0.448,0.048-0.87-0.206-1.036-0.623 c-0.143-0.349-3.473-8.151-14.724-5.914c1.345,1.197,3.012,3.242,3.633,6.347c0.059,0.294-0.017,0.599-0.207,0.83S46.3,19,46,19 c-0.123,0-11.127-0.107-16.398-8.493c-0.294,4.381,0.008,11.723,5.032,13.358c0.206,0.055,0.416,0.112,0.629,0.17 c0.524,0.143,0.838,0.678,0.708,1.205c-0.13,0.526-0.659,0.853-1.188,0.736c-0.255-0.057-0.501-0.123-0.739-0.198 c-3.734-0.991-7.897-1.882-9.722-1.985C24.633,24.949,25,26.956,25,30c0,0.321-0.154,0.623-0.416,0.812 c-0.261,0.188-0.597,0.239-0.901,0.137c-0.207-0.068-4.102-1.419-7.279-6.055c0.564,3.924,1.916,9.118,5.15,11.274 c0.412,0.274,0.561,0.809,0.35,1.257c-0.209,0.448-0.716,0.677-1.191,0.533c-0.083-0.025-7.282-2.117-12.777,0.381 c2.139,0.675,4.81,2.523,6.034,7.419C14.015,45.973,14.878,50,18,50c0.483,0,0.897,0.346,0.984,0.821s-0.18,0.945-0.633,1.115 c-0.075,0.026-6.586,2.388-11.827-1.849c0.528,2.199,1.55,4.937,3.476,6.091c1.257,0.751,2.759,0.722,4.593-0.093 c0.495-0.22,1.077-0.005,1.309,0.486c0.232,0.49,0.031,1.077-0.454,1.321c-0.263,0.133-5.651,2.925-7.095,9.022 c2.21-1.979,6.108-4.172,11.863-2.893C20.674,64.125,21,64.531,21,65c0,1.656-0.799,4.491-3.535,5.568 c1.136,0.596,2.619,0.935,3.828-0.275c0.346-0.347,0.892-0.39,1.29-0.104c0.398,0.286,0.53,0.818,0.312,1.257 c-0.015,0.031-1.404,2.938-0.454,4.508c1.142-0.075,3.575-0.02,4.727,1.578c0.394,0.547,0.587,1.191,0.58,1.932 C29.458,78.289,31.645,77,33,77c0.552,0,1,0.447,1,1s-0.448,1-1,1c-1.019,0-4.103,1.963-6.375,3.781 C26.442,82.927,26.221,83,26,83z"></path><path d="M52,91c-0.058,0-0.115-0.005-0.171-0.015C28.186,86.873,29.984,66.109,30.005,65.9c0.055-0.55,0.533-0.962,1.093-0.895 c0.549,0.054,0.95,0.543,0.897,1.092c-0.076,0.778-1.6,19.066,20.063,22.897C53.847,88.879,73,87.063,73,63c0-0.553,0.448-1,1-1 s1,0.447,1,1c0,26.647-22.725,27.988-22.955,27.999C52.03,91,52.015,91,52,91z"></path><path d="M41,74c-4.411,0-8-3.364-8-7.5s3.589-7.5,8-7.5s8,3.364,8,7.5S45.411,74,41,74z M41,60c-3.86,0-7,2.916-7,6.5 s3.14,6.5,7,6.5s7-2.916,7-6.5S44.86,60,41,60z"></path><path d="M64,73c-4.411,0-8-3.364-8-7.5s3.589-7.5,8-7.5s8,3.364,8,7.5S68.411,73,64,73z M64,59c-3.86,0-7,2.916-7,6.5 s3.14,6.5,7,6.5s7-2.916,7-6.5S67.86,59,64,59z"></path><path d="M42.5,62c-1.657,0-3,1.567-3,3.5c0,0.059,0.012,0.114,0.015,0.172C39.881,65.262,40.408,65,41,65c1.105,0,2,0.895,2,2 c0,0.852-0.535,1.575-1.286,1.863C41.966,68.943,42.226,69,42.5,69c1.657,0,3-1.567,3-3.5S44.157,62,42.5,62z"></path><path d="M62.5,61c-1.657,0-3,1.567-3,3.5c0,0.059,0.012,0.114,0.015,0.172C59.881,64.262,60.408,64,61,64c1.105,0,2,0.895,2,2 c0,0.852-0.535,1.575-1.286,1.863C61.966,67.943,62.226,68,62.5,68c1.657,0,3-1.567,3-3.5S64.157,61,62.5,61z"></path><path d="M46.5,59c-0.128,0-0.256-0.049-0.354-0.146c-2.878-2.878-7.261-4.364-7.305-4.379c-0.262-0.088-0.403-0.371-0.316-0.633 c0.087-0.261,0.367-0.403,0.632-0.316c0.188,0.063,4.647,1.572,7.695,4.621c0.195,0.195,0.195,0.512,0,0.707 C46.756,58.951,46.628,59,46.5,59z"></path><path d="M56.5,59c-0.095,0-0.191-0.027-0.277-0.084c-0.23-0.153-0.292-0.464-0.139-0.693C56.172,58.091,58.338,55,67.5,55 c0.276,0,0.5,0.224,0.5,0.5S67.776,56,67.5,56c-8.632,0-10.565,2.75-10.584,2.777C56.82,58.922,56.661,59,56.5,59z"></path><path d="M60,82.5c-0.015,0-0.03-0.001-0.046-0.002c-5.402-0.49-14.833-0.004-14.928,0.001c-0.276,0.038-0.511-0.197-0.526-0.473 c-0.014-0.275,0.197-0.511,0.473-0.525c0.096-0.006,9.599-0.497,15.072,0.001c0.275,0.025,0.478,0.269,0.453,0.543 C60.474,82.305,60.256,82.5,60,82.5z"></path><path d="M51,76.5c-0.233,0-0.442-0.164-0.49-0.402c-0.516-2.58,0.463-6.551,0.505-6.719c0.066-0.269,0.337-0.43,0.606-0.364 c0.268,0.067,0.431,0.339,0.364,0.606c-0.009,0.039-0.966,3.922-0.495,6.281c0.054,0.271-0.122,0.534-0.392,0.588 C51.065,76.497,51.032,76.5,51,76.5z"></path><circle cx="38.5" cy="76.5" r=".5"></circle><circle cx="65.5" cy="76.5" r=".5"></circle><circle cx="37.5" cy="78.5" r=".5"></circle><circle cx="40.5" cy="78.5" r=".5"></circle><circle cx="63.5" cy="78.5" r=".5"></circle><circle cx="66.5" cy="78.5" r=".5"></circle><path d="M74.5,48c-0.16,0-0.312-0.077-0.407-0.209l-3.214-4.5c-0.161-0.225-0.108-0.537,0.116-0.698 c0.224-0.159,0.537-0.108,0.697,0.116l3.038,4.253l6.139-0.877l-2.851-10.453c-0.032-0.119-0.02-0.245,0.035-0.355l2-4 c0.076-0.152,0.225-0.256,0.395-0.273c0.169-0.018,0.336,0.051,0.443,0.185l4,5c0.172,0.216,0.137,0.53-0.078,0.703 c-0.216,0.171-0.53,0.137-0.703-0.078l-3.512-4.39l-1.565,3.13l2.95,10.815c0.038,0.139,0.014,0.286-0.064,0.406 s-0.205,0.2-0.347,0.221l-7,1C74.547,47.998,74.523,48,74.5,48z"></path><path d="M76.5,42c-0.023,0-0.047-0.002-0.071-0.005l-7-1c-0.273-0.039-0.463-0.292-0.424-0.565s0.294-0.461,0.566-0.425 l5.255,0.751l-4.451-3.709l-7.754,1.938c-0.133,0.032-0.273,0.01-0.389-0.062c-0.115-0.073-0.196-0.19-0.223-0.325l-1-5 c-0.026-0.13,0-0.265,0.074-0.375l3.283-4.924l-6.446,1.611l-1.933,8.698C55.938,38.837,55.734,39,55.5,39 s-0.438-0.163-0.488-0.392l-1.899-8.548l-4.042,0.577c-0.276,0.034-0.527-0.151-0.566-0.425s0.151-0.526,0.424-0.565l4.5-0.643 c0.259-0.029,0.502,0.132,0.559,0.387l1.512,6.804l1.512-6.804c0.042-0.185,0.183-0.331,0.367-0.377l8-2 c0.2-0.049,0.411,0.028,0.53,0.197s0.122,0.394,0.007,0.565l-3.885,5.828l0.857,4.282l7.491-1.873 c0.154-0.038,0.318-0.002,0.441,0.102l6,5c0.171,0.143,0.228,0.383,0.137,0.587C76.876,41.886,76.695,42,76.5,42z"></path><path d="M45.5,39c-0.209,0-0.404-0.133-0.474-0.342l-5-15c-0.076-0.227,0.02-0.476,0.228-0.594c0.209-0.114,0.47-0.072,0.626,0.11 l6,7c0.18,0.209,0.156,0.525-0.054,0.705c-0.209,0.179-0.524,0.155-0.705-0.055l-4.339-5.062l4.192,12.578 c0.087,0.262-0.054,0.545-0.316,0.633C45.605,38.992,45.552,39,45.5,39z"></path><path d="M42,37.25c-0.075,0-0.151-0.017-0.223-0.053l-4-2c-0.247-0.124-0.347-0.424-0.224-0.671 c0.124-0.246,0.424-0.348,0.671-0.224l4,2c0.247,0.124,0.347,0.424,0.224,0.671C42.359,37.148,42.183,37.25,42,37.25z"></path><path d="M24.5,45c-0.077,0-0.153-0.018-0.224-0.053l-6-3c-0.194-0.097-0.303-0.308-0.271-0.521s0.199-0.384,0.413-0.419 l5.937-0.989l7.354-3.269l-5.279-0.754c-0.141-0.021-0.266-0.1-0.345-0.218l-2-3c-0.107-0.16-0.112-0.367-0.014-0.533 c0.098-0.166,0.279-0.264,0.475-0.242l11,1c0.275,0.025,0.478,0.269,0.453,0.543c-0.025,0.274-0.259,0.479-0.543,0.453 l-9.958-0.905l1.296,1.944l6.779,0.968c0.221,0.031,0.394,0.205,0.424,0.426c0.031,0.222-0.088,0.436-0.292,0.526l-9,4 c-0.039,0.017-0.079,0.029-0.121,0.036l-4.483,0.747l4.43,2.215l4.295-1.61c0.258-0.101,0.547,0.033,0.644,0.292 c0.097,0.259-0.034,0.547-0.292,0.644l-4.5,1.688C24.619,44.989,24.56,45,24.5,45z"></path><path d="M23,58.5c-0.032,0-0.065-0.003-0.099-0.01c-0.271-0.054-0.446-0.317-0.392-0.588l1.5-7.5 c0.045-0.227,0.239-0.393,0.47-0.402c0.228,0.016,0.438,0.141,0.501,0.362l1.556,5.446l1.489-4.467 c0.032-0.097,0.093-0.181,0.174-0.242l6.438-4.829l-5.068,0.725c-0.193,0.026-0.381-0.059-0.487-0.219 c-0.107-0.16-0.111-0.368-0.012-0.533l3-5c0.142-0.236,0.449-0.315,0.686-0.172c0.237,0.142,0.313,0.449,0.171,0.686l-2.459,4.1 l5.96-0.852c0.22-0.028,0.445,0.093,0.533,0.304s0.021,0.454-0.162,0.592l-7.875,5.906l-1.951,5.852 c-0.069,0.208-0.261,0.357-0.485,0.342c-0.219-0.005-0.41-0.151-0.47-0.362l-1.433-5.018l-1.096,5.478 C23.443,58.336,23.234,58.5,23,58.5z"></path><path d="M6.979,69.159c-0.149,0-0.297-0.066-0.396-0.193c-0.169-0.219-0.129-0.532,0.088-0.702l10.521-8.159 C17.281,60.037,17.389,60,17.5,60h5c0.276,0,0.5,0.224,0.5,0.5S22.776,61,22.5,61h-4.829L7.285,69.055 C7.194,69.125,7.086,69.159,6.979,69.159z"></path>
              </svg>
            </div>
          </main>
        </div>
      )}
      {data !== null && data !== undefined && data.length > 0 && (
        <section className="px-1 py-4">
          <main className="flex flex-wrap flex-1 w-full px-2 md:px-28 lg:justify-center gap-y-8 gap-x-4 lg:gap-y-4">
            {data !== null && filteredData !== null && filteredData.map((dato: { imageUrl: string, title: string, id: number, tipo: string }, index: number) => (
              <Link key={index} to={`/anime/${dato.id}`}>
                <article className="flex flex-col gap-y-2">
                  <section className="bg-gray-200 rounded-md">
                    <div className="flex items-end m-1 bg-cover rounded-md hover:scale-95 hover:duration-100 h-60 w-44" style={{ backgroundImage: `url(${dato.imageUrl})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                      {/* <img src={dato.imageUrl} alt="" className="p-1 duration-500 rounded-lg w-44 h-60 hover:scale-105" /> */}
                      {dato.tipo && dato.tipo.length > 0 && (
                        <p className={`text-white mb-2 w-fit ml-2 uppercase px-3 rounded-full bg-${dato.tipo === "OVA" ? "orange-500" : dato.tipo === 'Movie' ? 'red-600' : dato.tipo === 'To' ? "green-600" : dato.tipo === 'PV' ? 'green-600' : 'blue-500'} text-xs`}>{dato.tipo}</p>
                      )}
                    </div>
                  </section>
                  <div className="flex flex-wrap justify-center w-full">
                    {/* <p className="w-2/12 m-0 text-base tracking-tighter text-black dark:text-white lg:min-w-80 lg:w-auto text-md">{dato.title.length < 35 ? dato.title : dato.title.slice(0, 35) + '...'}</p> */}
                    <p className="text-center text-black max-w-44" style={{ lineHeight: '17px' }}>{dato.title}</p>
                  </div>
                </article>
              </Link>
            ))}
          </main>
        </section>
      )}
    </>
  )
} 
