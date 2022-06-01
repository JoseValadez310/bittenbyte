import data from '../content/data'
import icon from '../content/images/card-images/icon-links/icons'
import "../styles/home-page.css"
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Home = (props) => {

const technology = data['technology']
const techLength = technology.length

const setUp = data['setUp']
const setUpLength = setUp.length

const hobby = data['hobby']
const hobbyLength = hobby.length

const food = data['food']
const foodLength = food.length

    const [looper, setLooper] = useState(() => (0)) 

    function handleLooperAdd() {
        looper === setUpLength-1? setLooper(0) : setLooper(prevState => prevState + 1) 
    }

    function handleLooperSubtract() {
        looper === 0? setLooper(setUpLength - 1) : setLooper(prevState => prevState - 1) 
    }

  

return(
    <main id = {props.darkMode === false? 'main-light':'main-dark'}>
        <div className = 'news-section'>
           
            <h1 className = 'section-title' id = {props.darkMode === false? 'section-title-light':'section-title-dark'}>Latest</h1>  
               
                <div className = 'switch-container'>  
                    <img className = 'lightModeSwitch' src = {icon.lightMode} alt = 'PNG of the Sun' />
                        <div className = 'switch-box' >
                            <label className = 'switch'>
                                <input type="checkbox" id = {props.darkMode === false? null : 'switch-checked'} onClick = {props.handleDarkMode}/>
                                <span className = 'slider round'></span>
                            </label>
                        </div>
                    <img className = 'darkModeSwitch' src = {icon.darkMode} alt = 'PNG of the Moon' /> 
                </div>

                <div className = 'news-banner'>
                    <div className = 'card-article' id = {props.darkMode === false ? 'card-light' : 'card-dark'}>
                        <div className = 'news-banner-content'>
                            {/* <p>
                                {data['news-hero'][0].new}
                            </p> */}
                        </div>
                    </div>
                </div>

                <div className = 'editor-choice'>
                    <div className = 'card-article' id = {props.darkMode === false ? 'card-light' : 'card-dark'}>
                        <div className = 'editor-choice-content'>
                            <p>
                                {/* Welcome to Bitten Bite. Our mission will follow that of creating meanful tales. To undertsand Bitten Bite is to know its a show ran by a single person with a ring to rule them all. Hello dear reader, I hope you find something you'll enjoy. I'm also wondering if i can run a site without wifi. Local site. */}
                            </p>
                        </div>
                    </div>
                </div>
        </div>
       
        <div className = 'technology-section' >
            <h1 className = 'section-title' id = {props.darkMode === false? 'section-title-light':'section-title-dark'}>Technology</h1>  

                
                <div className = 'tec-card-one' >
                    <Link className = 'card-article' id = {props.darkMode === false ? 'card-light' : 'card-dark'} onClick= { () => props.passThroughDetails('technology',technology[techLength-1].id)} to = "/Article">       
                        <small className = 'card-date' id = {props.darkMode === false? 'date-light' : 'date-dark'}> {technology[techLength-1].date} </small>
                            <img className = 'card-image' src = {technology[techLength-1].image} loading="lazy" alt = 'something' />
                            <div className = 'card-description'>
                                <h1 className = 'card-title'>
                                    {technology[techLength-1].title}
                                    </h1>
                                <h4 className = 'card-author'>
                                    {technology[techLength-1].author}
                                    </h4>
                                <p className = 'card-summary'>
                                    {technology[techLength-1].summary}
                                </p>
                            </div>
                    </Link>
                </div>

                
                
                
                <div className = 'tec-card-two'>
                    <Link className = 'card-article' id = {props.darkMode === false ? 'card-light' : 'card-dark'}  onClick= { () => props.passThroughDetails('technology', technology[techLength-2].id)} to = "/Article">       
                        <small className = 'card-date'  id = {props.darkMode === false? 'date-light' : 'date-dark'}> {technology[techLength-2].date} </small>
                        <img className = 'card-image' src = {technology[techLength-2].image} loading="lazy" alt = 'Coming Soon near you' />
                            <div className = 'card-description'>
                                <h1 className = 'card-title'>
                                    {technology[techLength-2].title}
                                    </h1>
                                <h4 className = 'card-author'>
                                    {technology[techLength-2].author}
                                    </h4>
                                <p className = 'card-summary'>
                                    {technology[techLength-2].summary}
                                </p>
                            </div>      
                    </Link>
                </div>

                
                
                
                <div className = 'tec-card-three'>
                    <Link className = 'card-article' id = {props.darkMode === false ? 'card-light' : 'card-dark'}  onClick= { () => props.passThroughDetails('technology',technology[techLength-3].id)} to = "/Article">       
                        <small className = 'card-date'  id = {props.darkMode === false? 'date-light' : 'date-dark'}> {technology[techLength-3].date} </small>
                            <img className = 'card-image' src = {technology[techLength-3].image} loading="lazy" alt = 'Coming Soon near you' />
                            <div className = 'card-description'>
                                <h1 className = 'card-title'>
                                    {technology[techLength-3].title}
                                    </h1>
                                <h4 className = 'card-author'>
                                    {technology[techLength-3].author}
                                    </h4>
                                <p className = 'card-summary'>
                                    {technology[techLength-3].summary}
                                </p>
                            </div>
                    </Link>
                </div>
            </div>
        
        <div className = 'set-up-section'>
            <h1 className = 'section-title' id = {props.darkMode === false? 'section-title-light':'section-title-dark'}>Community Set-Ups</h1>
                <div className = 'set-slide-one'>
                    <img className = 'setUp-slider' src = {looper === setUpLength-1? setUp[setUpLength-1].image : setUp[looper].image} alt = 'post from the community'/>
                </div> 
                <div className = 'arrowLeft-box'>
                    <img src = {icon.arrow} onClick = {handleLooperSubtract} className = "arrowLeft" alt = 'left arrow clicker'/> 
                </div>
                
                <div className = 'set-slide-two'>
                    <img className = 'setUp-slider' src = {looper === setUpLength-1? setUp[0].image : setUp[looper+1].image } alt = 'post from the community'/>
                </div>
                <div className = 'arrowRight-box'>
                    <img src = {icon.arrow} onClick = {handleLooperAdd} className = "arrowRight" alt = 'right arrow clicker'/>
                </div>
            </div>
        
        <div className = 'hobby-section'>
            <h1 className = 'section-title' id = {props.darkMode === false? 'section-title-light':'section-title-dark'} >Hobbies</h1>

                <div className = 'hobby-card-one'>
                    <Link className = 'card-article' id = {props.darkMode === false ? 'card-light' : 'card-dark'}  onClick= { () => props.passThroughDetails('hobby', hobby[hobbyLength-1].id)} to = "/Article">    
                        <small className = 'card-date' id = {props.darkMode === false? 'date-light' : 'date-dark'}> {hobby[hobbyLength-1].date} </small>
                            <img className = 'card-image' src = {hobby[hobbyLength-1].image} loading="lazy" alt = 'Coming Soon near you' />    
                        <div className = 'card-description'>
                            <h1 className = 'card-title'>
                                {hobby[hobbyLength-1].title}
                                </h1>
                            <h4 className = 'card-author'>
                                {hobby[hobbyLength-1].author}
                                </h4>
                            <p className = 'card-summary'>
                                {hobby[hobbyLength-1].summary}
                            </p>
                        </div>
                    </Link>
                </div>

                <div className = 'hobby-card-two'>
                    <Link className = 'card-article' id = {props.darkMode === false ? 'card-light' : 'card-dark'}  onClick= { () => props.passThroughDetails('hobby', hobby[hobbyLength-2].id)} to = "/Article">       
                        <small className = 'card-date' id = {props.darkMode === false? 'date-light' : 'date-dark'}> {hobby[hobbyLength-2].date} </small>
                            <img className = 'card-image' src = {hobby[hobbyLength-2].image} loading="lazy" alt = 'Coming Soon near you' />
                        <div className = 'card-description'>
                            <h1 className = 'card-title'>
                                {hobby[hobbyLength-2].title}
                                </h1>
                            <h4 className = 'card-author'>
                                {hobby[hobbyLength-2].author}
                                </h4>
                            <p className = 'card-summary'>
                                {hobby[hobbyLength-2].summary}
                            </p>
                        </div>       
                    </Link>
                </div>

                <div className = 'hobby-card-three'>
                    <Link className = 'card-article' id = {props.darkMode === false ? 'card-light' : 'card-dark'} onClick= { () => props.passThroughDetails('hobby', hobby[hobbyLength-3].id)} to = "/Article">     
                        <small className = 'card-date' id = {props.darkMode === false? 'date-light' : 'date-dark'}> {hobby[hobbyLength-3].date} </small>
                            <img className = 'card-image' src = {hobby[hobbyLength-3].image} loading="lazy" alt = 'Coming Soon near you' />
                        <div className = 'card-description'>
                            <h1 className = 'card-title'>
                                {hobby[hobbyLength-3].title}
                                </h1>
                            <h4 className = 'card-author'>
                                {hobby[hobbyLength-3].author}
                                </h4>
                            <p className = 'card-summary'>
                                {hobby[hobbyLength-3].summary}
                            </p>
                        </div>  
                    </Link>
                </div>
            </div>
        
        <div className = 'food-section'>
            <h1 className = 'section-title' id = {props.darkMode === false? 'section-title-light':'section-title-dark'}>Food</h1>           
                
                <div className = 'food-card-one'>
                    <Link className = 'side-card-article' id = {props.darkMode === false ? 'card-light' : 'card-dark'} onClick= { () => props.passThroughDetails('food', food[foodLength-1].id)} to = "/Article">       
                        <div className = 'card-description'>
                            <h1 className = 'card-title'>
                                {food[foodLength-1].title}
                                </h1>
                            <h4 className = 'card-author'>
                                {food[foodLength-1].author}
                                </h4>
                            <p className = 'card-summary'>
                                {food[foodLength-1].summary}
                                </p>
                        </div>
                        
                        <div className = 'image-container'>
                            <small className = 'card-date' id = {props.darkMode === false? 'date-light' : 'date-dark'}> {food[foodLength-1].date} </small>
                            <img className = 'card-image' src = {food[foodLength-1].image} loading="lazy" alt = 'Coming Soon near you' />
                        </div>
                        
                    </Link>
                </div>

                <div className = 'food-card-two'>
                    <Link className = 'side-card-article' id = {props.darkMode === false ? 'card-light' : 'card-dark'} onClick= { () => props.passThroughDetails('food', food[foodLength-2].id)} to = "/Article"> 
                        <div className = 'image-container'>
                        <small className = 'card-date' id = {props.darkMode === false? 'date-light' : 'date-dark'}> {food[foodLength-2].date} </small>
                            <img className = 'card-image' src = {food[foodLength-2].image} loading="lazy" alt = 'Coming Soon near you' />
                        </div>

                        <div className = 'card-description'>
                            <h1 className = 'card-title'>
                                {food[foodLength-2].title}
                                </h1>
                            <h4 className = 'card-author'>
                                {food[foodLength-2].author}
                                </h4>
                            <p className = 'card-summary'>
                                {food[foodLength-2].summary}
                            </p>
                        </div>
                    </Link>
                </div>

                <div className = 'food-card-three'>
                    <Link className = 'side-card-article' id = {props.darkMode === false ? 'card-light' : 'card-dark'} onClick= { () => props.passThroughDetails('food', food[foodLength-3].id)} to = "/Article">     
                        <div className = 'card-description'>
                            <h1 className = 'card-title'>
                                {food[foodLength-3].title}
                                </h1>
                            <h4 className = 'card-author'>
                                {food[foodLength-3].author}
                                </h4>
                            <p className = 'card-summary'>
                                {food[foodLength-3].summary}
                            </p>
                        </div>
                        
                        <div className = 'image-container'>
                        <small className = 'card-date' id = {props.darkMode === false? 'date-light' : 'date-dark'}> {food[foodLength-3].date} </small>
                            <img className = 'card-image' src = {food[foodLength-3].image} loading="lazy" alt = 'Coming Soon near you' />
                        </div>
                    </Link>
                </div>
            </div>
        </main>
    )
}

export default Home