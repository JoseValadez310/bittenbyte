
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Footer from "./components/Footer"
import Article from "./components/Article";
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
            <Route path = "/Home" element = {[<Hero />,<Main handleDarkMode = {handleDarkMode} darkMode = {darkMode}/>] } />
            <Route path = "/Article"  element = {<Article />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;
