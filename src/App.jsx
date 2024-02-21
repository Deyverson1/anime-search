import AnimeResults from "./components/AnimeResults"
import Home from "./components/Home"
import NekoPict from "./components/Neko"
import Recommend from "./components/Recommend"
import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


export default function App() {
  const [data, setData] = useState([]);
  return (
   <Router>
    <Routes>
      <Route path="/" element={<><Home setData={setData}/> <NekoPict/> <AnimeResults data={data}/> <Recommend/></>}/>
    </Routes>
   </Router>
  )
}