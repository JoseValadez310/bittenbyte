
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Home from "./pages/Home";
import Footer from "./components/Footer"
import Article from "./pages/Article";
import ScrollToTopOnMount from './components/ScrolltoTop'

import { useState } from "react"
import { BrowserRouter , Routes, Route } from "react-router-dom"

const App = () => {

  const [darkMode, setDarkMode] = useState(() => (false))

  const [article, setArticle] = useState({ sectionTitle: "", sectionId: null})

  function handleDarkMode() {
    setDarkMode(!darkMode)
  }

  function passThroughDetails(section, id) {
    setArticle(prevState => ({
      ...prevState,
      sectionTitle : section,
      sectionId : id
    }))
  }

  console.log(`clicked section of ${article.sectionTitle} and article id of ${article.sectionId}`)

  return (
    <>
      <BrowserRouter>
        <Nav />
          <Routes>
            <Route path = "/" element = {[<Hero />, <Home handleDarkMode = {handleDarkMode} passThroughDetails = {passThroughDetails} darkMode = {darkMode}/>]} />
            <Route path = "/Article/"  element = {[<ScrollToTopOnMount />, <Article article = {article}/>]} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;
