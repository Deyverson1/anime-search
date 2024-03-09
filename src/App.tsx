import React from "react"
import Character from './components/Character'
import Home from "./components/Home"
import AnimeDetails from "./components/AnimeDetails"
import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import '@fontsource-variable/onest';
import Top from "./components/Top"

export default function App() {
  const [data, setData] = useState([]);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Home setData={setData} /> <Top data={data}/> </>} />
        <Route path={`/anime/:id`} element={<><AnimeDetails data={data}/></>}/>
      </Routes>
    </Router>
  )
}