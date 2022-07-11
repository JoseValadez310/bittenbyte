import foodHero from "../content/images/food-hero.jpg"
import techHero from "../content/images/technology-hero.jpg"
import hobbyHero from "../content/images/hobby-hero.jpg"
import homeHero from "../content/images/heroBackground.jpg"


const Hero = (props) => {

    console.log(props)
    return(
        <div className = 'hero-container'>
            <div className = 'background-hero'>
                <div className = 'background-hero-content'>
                    <h1>
                        Entertained by Curiosity 
                    </h1>  
                    <small> 
                        Technology - Community - Hobby - Food 
                    </small> 
                </div>
            </div>
        </div>
    )
}

export default Hero