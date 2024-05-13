/**
 * The App component sets up routes for different pages in a React application, passing data and
 * components accordingly.
 * @returns The `App` component is being returned, which includes a `Router` component from
 * react-router-dom with nested `Routes` and multiple `Route` components. Each `Route` component
 * specifies a different path and renders corresponding components such as `Top`, `AnimeResults`,
 * `Anime`, `Manga`, `HeaderContainer`, and `Footer`. The `App` component also uses `useState` to
 */
import React from "react"
import '@fontsource-variable/onest';
import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Top from "./dashboard/Top"
import Anime from "./components/Anime/DetailsAnime"
import AnimeResults from "./components/Results";
import Footer from "./dashboard/Footer";
import Manga from "./components/Manga/DetailsManga";
import HeaderContainer from "./Container/HeaderContainer";

export default function App() {
  const [data, setData] = useState([]);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><HeaderContainer setData={setData} /> <Top data={data}/> </>} />
        <Route path="/results" element={<><HeaderContainer setData={setData}/> <AnimeResults data={data}/> </>} />
        <Route path={`/anime/:id`} element={<><Anime data={data}/></>}/>
        <Route path={`/manga/:id`}  element={ <Manga data={data}/>} />
      </Routes>
      <Footer/>
    </Router>
  )
}