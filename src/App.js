
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Footer from "./components/Footer"
import { useState } from "react"





const App = () => {

  const [darkMode, setDarkMode] = useState(false)

  function handleDarkMode() {
    setDarkMode(!darkMode)
  }
  
  return (
    <>
      <Nav  />
      <Hero />
      <Main darkMode = {darkMode} handleDarkMode = {handleDarkMode} />
      <Footer />
    </>
  )
}

export default App;
