
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Home from "./pages/Home";
import Footer from "./components/Footer"
import Article from "./pages/Article";
import ScrollToTopOnMount from './components/ScrolltoTop'

import { useState, useEffect} from "react"
import { BrowserRouter , Routes, Route } from "react-router-dom"

const App = () => {

  // Dark/Light mode handler
  const [darkMode, setDarkMode] = useState(() => (false))
  
    function handleDarkMode() {
      setDarkMode(!darkMode)
    }

  // Article Page content display 

    const [article, setArticle] = useState( localStorage.length === 0? {sectionTitle : "", sectionId : null} : JSON.parse(localStorage.article) )
   
    function PassThroughDetails(section, id) {
      setArticle(prevState => ({
        ...prevState,
        sectionTitle : section,
        sectionId : id
      }))
    }

  
      useEffect(()=>{
        localStorage.setItem('article', JSON.stringify(article)) 
        console.log(localStorage, 'has been saved')
      },[article])
    
   
  
  return (
    <>
      <BrowserRouter>
        <Nav />
          <Routes>
            <Route path = "/" element = {[<Hero />, <Home handleDarkMode = {handleDarkMode} PassThroughDetails = {PassThroughDetails} darkMode = {darkMode}/>]} />
            <Route path = "/Article/"  element = {[<ScrollToTopOnMount />, <Article article = {article} darkMode = {darkMode}/>]} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;
