import "../styles/about-page.css"
import aboutMe from "../content/images/aboutMe.PNG"
import techHero from "../content/images/technology-hero.jpg"
import hobbyHero from "../content/images/hobby-hero.jpg"
import foodHero from "../content/images/food-hero.jpg"

const About = () => {
   
    

    return (
        <main>  

            <div className = 'about-me-container'>
                <div className = 'about-me-image-wrapper'>
                    <img className = 'about-me-image' src = {aboutMe} alt = 'a self pic' />
                </div>
                <div className = 'about-me-description'>
                    <h3>
                        About Me
                        </h3>
                    <br/>
                    <p> 
                       Velit amet elit laborum eu adipisicing sit cillum ipsum occaecat non magna sunt. Qui consequat sunt elit ut voluptate occaecat fugiat enim laboris. Ex aliquip occaecat do voluptate laborum reprehenderit commodo exercitation nulla duis minim magna. Amet consequat tempor laborum id sunt id in eu enim aliqua nostrud. 
                        </p>
                </div>
                
            </div>

            <div className = 'mission-statement-container'>
                <h3 className = 'mission-title'>
                    Mission Statement
                    </h3>
                <p  className = 'mission-statement'>
                    Occaecat esse in ut nulla. Tempor labore in fugiat id excepteur esse. Sint quis aliqua Lorem non sit occaecat ad nisi commodo fugiat nulla id. Velit reprehenderit ipsum veniam aliquip nisi culpa non enim qui ipsum adipisicing duis. Officia exercitation pariatur voluptate fugiat excepteur ea veniam magna sit exercitation. Irure laborum cillum sit eiusmod et anim.
                    </p>
            </div>

            
            <div className = 'tab-info-container '>
                <div className = 'tab-info-card'>
                    <div className = 'tab-info-image-wrapper'>
                        <img className = 'tab-info-image' src = {techHero} alt = 'Technology hero' />
                    </div>
                    
                    <div className = 'tab-info-description'>
                        <p>
                            Consectetur voluptate ullamco sit occaecat voluptate magna id id ut cillum exercitation mollit nulla. Ex sint eiusmod fugiat consectetur adipisicing excepteur est.
                        </p>
                    </div>
                </div>

                <div className = 'tab-info-card'>
                    <div  className = 'tab-info-image-wrapper'>
                        <img className = 'tab-info-image' src = {hobbyHero} alt = 'Technology hero' />
                    </div>
                    
                    <div className = 'tab-info-description'>
                        <p>
                            Consectetur voluptate ullamco sit occaecat voluptate magna id id ut cillum exercitation mollit nulla. Ex sint eiusmod fugiat consectetur adipisicing excepteur est.
                        </p>
                    </div>
                </div>

                <div className = 'tab-info-card'>
                    <div className = 'tab-info-image-wrapper'>
                        <img className = 'tab-info-image' src = {foodHero} alt = 'Technology hero' />
                    </div>
                    
                    <div className = 'tab-info-description'>
                        <p>
                            Consectetur voluptate ullamco sit occaecat voluptate magna id id ut cillum exercitation mollit nulla. Ex sint eiusmod fugiat consectetur adipisicing excepteur est.
                        </p>
                    </div>
                </div>
            </div>

        </main>
    )
}

export default About