import AnimeResults from "./components/AnimeResults"
import Character from "./components/Character"
import Home from "./components/Home"
import Recommend from "./components/Recommend"
import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NekoPict from "./components/Neko"

export default function App() {
  const [data, setData] = useState([]);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Home setData={setData} /> <AnimeResults data={data} /> <Recommend /> <NekoPict /> <Character /></>} />
      </Routes>
    </Router>
  )
}