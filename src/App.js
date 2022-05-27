
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Footer from "./components/Footer"
import { useState } from "react"

const App = () => {

  const [darkMode, setDarkMode] = useState(() => (false))

  function handleDarkMode() {
    setDarkMode(!darkMode)
  }
  console.log(darkMode === false? "Light mode on": "Dark mode on" )
  return (
    <>
      <Nav  />
      <Hero />
      <Main handleDarkMode = {handleDarkMode} darkMode = {darkMode}/>
      <Footer />
    </>
  )
}

export default App;
