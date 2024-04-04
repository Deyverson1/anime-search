import React from "react"
import '@fontsource-variable/onest';
import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Top from "./components/Top"
import AnimeDetails from "./components/AnimeDetails"
import AnimeResults from "./components/AnimeResults";
import Footer from "./dashboard/Footer";

export default function App() {
  const [data, setData] = useState([]);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Header setData={setData} /> <Top data={data}/> </>} />
        <Route path="/results" element={<><Header setData={setData}/> <AnimeResults data={data}/> </>} />
        <Route path={`/anime/:id`} element={<><AnimeDetails data={data}/></>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}