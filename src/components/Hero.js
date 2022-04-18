import hero from "./images/heroBackground.jpg"

const Hero = () => {
    return(
        <div className = 'hero-container'>
            <img className = 'hero' src = {hero} alt = 'hero background'/>
        </div>
    )
}

export default Hero