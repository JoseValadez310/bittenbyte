
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Home from "./pages/Home";
import Footer from "./components/Footer"
import Article from "./pages/Article";

import { useState } from "react"
import { BrowserRouter , Routes, Route } from "react-router-dom"

const App = () => {

  const [darkMode, setDarkMode] = useState(() => (false))

  function handleDarkMode() {
    setDarkMode(!darkMode)
  }

  return (
    <>
      <BrowserRouter>
        <Nav />
          <Routes>
            <Route path = "/" element = {[<Hero />, <Home handleDarkMode = {handleDarkMode} darkMode = {darkMode}/>]} />
            <Route path = "/Article"  element = {<Article />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;
