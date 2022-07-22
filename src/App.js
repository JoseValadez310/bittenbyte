
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Home from "./pages/Home";
import Footer from "./components/Footer"
import Article from "./pages/Article";
import Archive from "./pages/Archive";
import About from "./pages/About";
import ScrollToTopOnMount from './components/ScrolltoTop'

import { useState, useEffect} from "react"
import { BrowserRouter , Routes, Route } from "react-router-dom"

const App = () => {

  // Dark/Light mode handler
  const [darkMode, setDarkMode] = useState(() => (true))
  
    function handleDarkMode() {
      setDarkMode(!darkMode)
    }

  // Article Page content display 

    const [article, setArticle] = useState( sessionStorage.length === 0? {sectionTitle : "", sectionId : null} : JSON.parse(sessionStorage.article) )
   
    function PassThroughDetails(section, id) {
        setArticle(prevState => ({
          ...prevState,
          sectionTitle : section,
          sectionId : id
        }))
    }

    useEffect(()=>{
      sessionStorage.setItem('article', JSON.stringify(article)) 
    },[article])
    
  // passing data to correct tab search 

    const [currentTab, setCurrentTab] = useState(JSON.parse(sessionStorage.getItem('tab')))
    
    function tabSection(section) {
      if(section !== undefined){
        setCurrentTab(section)
      }
    }

    useEffect(() => {
      sessionStorage.setItem('tab', JSON.stringify(currentTab))
    },[currentTab])


  
  return (
    <>
      <BrowserRouter>
        <Nav tabSection = {tabSection}/>
          <Routes>
            <Route path = "/" element = {[<Hero />, <Home handleDarkMode = {handleDarkMode} PassThroughDetails = {PassThroughDetails} darkMode = {darkMode}/>]} />
            <Route path = "/Article/:title"  element = {[<ScrollToTopOnMount />, <Article article = {article} darkMode = {darkMode}/>]} />
            <Route path = "/Archive/:section" element = {[ <ScrollToTopOnMount />, <Archive darkMode = {darkMode} currentTab = {currentTab} PassThroughDetails = {PassThroughDetails}/>]} />
            <Route path = "/About" element = {<About darkMode = {darkMode}/>} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;